#!/usr/bin/env node
/**
 * fetch-saldos.cjs — Fluxo de Caixa Projetado por Conta Corrente (FB Pneus)
 *
 * Saída: data/saldos.json
 *   totais[]   — saldoFinal diário somado de todas as contas (para visão geral)
 *   contas[]   — por conta: rows[] (projeção diária) + movimentos[] (lançamentos futuros com categoria)
 *
 * Lógica por conta:
 *   1. ListarExtrato do início do mês atual até +2 meses
 *   2. Ancoragem: último SALDO histórico (< hoje) encontrado no extrato
 *   3. CREDCREA: recalcSaldo() exclui "Previsão de Pedido de Venda" (= List.Accumulate do M)
 *   4. Rows: SALDO rows >= hoje → saldoInicial / valorLiquidoDia / saldoFinal
 *   5. Movimentos: rows não-SALDO, não-SALDO ANTERIOR, >= hoje (excl. Previsão de PV no CREDCREA)
 */
'use strict';

const fs   = require('node:fs');
const path = require('node:path');

try { require('dotenv').config({ path: path.join(__dirname, '.env') }); } catch (e) {}

const APP_KEY    = process.env.OMIE_APP_KEY;
const APP_SECRET = process.env.OMIE_APP_SECRET;
if (!APP_KEY || !APP_SECRET) {
  console.error('ERRO: defina OMIE_APP_KEY e OMIE_APP_SECRET em .env');
  process.exit(1);
}

const BASE  = 'https://app.omie.com.br/api/v1';
const OUT   = path.join(__dirname, 'data');
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// Somente estas contas entram no fluxo projetado
const CONTAS_CONSIDERADAS = new Set(['CREDCREA', 'Cresol', 'Santander', 'Omie.CASH']);

fs.mkdirSync(OUT, { recursive: true });

async function call(endpoint, method, params, retries = 6) {
  const body = JSON.stringify({ call: method, app_key: APP_KEY, app_secret: APP_SECRET, param: [params] });
  let res;
  try {
    res = await fetch(`${BASE}${endpoint}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body,
    });
  } catch (e) {
    if (retries > 0) { await sleep(2000); return call(endpoint, method, params, retries - 1); }
    throw e;
  }
  const j = await res.json();
  if (j.faultstring) {
    const transient = /consumo|excedido|simult|busy|timeout|503|502|504/i.test(j.faultstring);
    if (transient && retries > 0) {
      const wait = Math.min(20000, 2000 * (7 - retries));
      console.warn(`  [retry] ${method} → ${j.faultstring.slice(0, 60)} (wait ${wait}ms)`);
      await sleep(wait);
      return call(endpoint, method, params, retries - 1);
    }
    throw new Error(`${method}: ${j.faultstring}`);
  }
  return j;
}

function toOmieDate(d) {
  const pad = (n) => String(n).padStart(2, '0');
  return `${pad(d.getDate())}/${pad(d.getMonth() + 1)}/${d.getFullYear()}`;
}

function fromOmieDate(s) {
  if (!s || typeof s !== 'string') return null;
  const m = s.match(/^(\d{2})\/(\d{2})\/(\d{4})$/);
  if (!m) return null;
  return new Date(Number(m[3]), Number(m[2]) - 1, Number(m[1]));
}

function isoDate(d) {
  if (!d) return null;
  const pad = (n) => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}

// Recalcula nSaldo excluindo "Previsão de Pedido de Venda" (equivale ao List.Accumulate do M).
function recalcSaldo(rows) {
  let saldoAnt = 0;
  const mapa = new Map();
  for (let i = 0; i < rows.length; i++) {
    const reg = rows[i];
    let novo;
    if (reg.cDesCliente === 'SALDO ANTERIOR') {
      novo = parseFloat(reg.nSaldo) || saldoAnt;
    } else if (reg.cOrigem === 'Previsão de Pedido de Venda') {
      novo = saldoAnt;
    } else {
      novo = saldoAnt + (parseFloat(reg.nValorDocumento) || 0);
    }
    mapa.set(i, novo);
    saldoAnt = novo;
  }
  return mapa;
}

(async () => {
  const hoje      = new Date();
  hoje.setHours(0, 0, 0, 0);
  const inicioMes = new Date(hoje.getFullYear(), hoje.getMonth(), 1);
  const fimProj   = new Date(hoje.getFullYear(), hoje.getMonth() + 12, 0);

  console.log(`\n=== fetch-saldos.cjs (FB Pneus) ===`);
  console.log(`  Período extrato: ${toOmieDate(inicioMes)} → ${toOmieDate(fimProj)}`);

  // 1. Contas correntes ativas
  console.log('\n--- Contas correntes ---');
  const ccResp = await call('/geral/contacorrente/', 'ListarContasCorrentes', {
    pagina: 1, registros_por_pagina: 100, apenas_importado_api: 'N',
  });
  const contasAtivas = (ccResp.ListarContasCorrentes || [])
    .filter((c) => c.inativo === 'N' && CONTAS_CONSIDERADAS.has(c.descricao));
  console.log(`  ${contasAtivas.length} contas consideradas (filtro: ${[...CONTAS_CONSIDERADAS].join(', ')})`);
  contasAtivas.forEach((c) => console.log(`    [${c.nCodCC}] ${c.descricao}`));

  // 2. Extrato por conta
  console.log('\n--- Extrato por conta ---');
  const extratosPorConta = [];

  for (const conta of contasAtivas) {
    console.log(`  Buscando ${conta.descricao} (${conta.nCodCC})...`);
    let extrato;
    try {
      extrato = await call('/financas/extrato/', 'ListarExtrato', {
        nCodCC: conta.nCodCC,
        cCodIntCC: '',
        dPeriodoInicial: toOmieDate(inicioMes),
        dPeriodoFinal:   toOmieDate(fimProj),
      });
      await sleep(300);
    } catch (e) {
      console.warn(`  SKIP ${conta.descricao}: ${e.message.slice(0, 80)}`);
      continue;
    }

    const movs = extrato.listaMovimentos || [];
    console.log(`    ${movs.length} movimentos`);

    const ehCREDCREA = conta.descricao === 'CREDCREA';
    const saldoMap   = ehCREDCREA ? recalcSaldo(movs) : null;

    extratosPorConta.push({ conta, movs, saldoMap, ehCREDCREA });
  }

  // 3. Processa cada conta: saldos diários futuros + movimentos futuros
  console.log('\n--- Processando por conta ---');
  const porDiaTotal  = new Map(); // isoDate → saldo total (soma de todas as contas)
  const contasOutput = [];

  for (const { conta, movs, saldoMap, ehCREDCREA } of extratosPorConta) {
    const saldosDia  = new Map();  // isoDate → saldo final desta conta naquele dia
    const movimentos = [];
    let   ultimoSaldoHist = 0;     // âncora: último SALDO antes de hoje
    let   postSaldoAccum  = 0;     // movimentos conciliados após o último SALDO (antes de hoje)

    movs.forEach((row, idx) => {
      const dt = fromOmieDate(row.dDataLancamento);
      if (!dt) return;

      const isSaldoRow     = row.cDesCliente === 'SALDO';
      const isSaldoAntRow  = row.cDesCliente === 'SALDO ANTERIOR';

      if (isSaldoRow || isSaldoAntRow) {
        if (dt < hoje) {
          // Histórico: nSaldo bruto já é o saldo real/conciliado do banco
          ultimoSaldoHist = parseFloat(row.nSaldo) || 0;
          postSaldoAccum  = 0; // novo SALDO absorve os movimentos anteriores
        } else if (isSaldoRow) {
          // Futuro: CREDCREA usa recalcSaldo (exclui Previsão de PV); demais usam bruto
          const saldoCorr = ehCREDCREA
            ? (saldoMap.get(idx) ?? 0)
            : (parseFloat(row.nSaldo) || 0);
          const iso = isoDate(dt);
          saldosDia.set(iso, saldoCorr);
          porDiaTotal.set(iso, (porDiaTotal.get(iso) || 0) + saldoCorr);
        }
        // SALDO ANTERIOR >= hoje: ignora (início de período futuro, não é projeção)
      } else {
        // Movimento individual
        if (dt < hoje) {
          // Acumula movimentos conciliados após o último SALDO histórico
          if (ehCREDCREA && row.cOrigem === 'Previsão de Pedido de Venda') return;
          postSaldoAccum += parseFloat(row.nValorDocumento) || 0;
          return;
        }
        if (ehCREDCREA && row.cOrigem === 'Previsão de Pedido de Venda') return;
        const valor = parseFloat(row.nValorDocumento) || 0;
        if (valor === 0) return;
        movimentos.push({
          data:            isoDate(dt),
          descricao:       row.cDesCliente || '',
          categoria:       row.cOrigem || '',
          codCateg:        row.cCodCategoria || '',
          desCateg:        row.cDesCategoria || '',
          isInvestimento:  String(row.cCodCategoria || '').startsWith('2.07'),
          valor,
        });
      }
    });

    // Aplica movimentos conciliados pós-último-SALDO ao anchor
    ultimoSaldoHist += postSaldoAccum;

    // Deriva rows diários para esta conta
    const sorted = Array.from(saldosDia.entries()).sort(([a], [b]) => a.localeCompare(b));
    const rows = sorted.map(([iso, saldoFinal], i) => {
      const si = i === 0 ? ultimoSaldoHist : sorted[i - 1][1];
      return { data: iso, saldoInicial: si, valorLiquidoDia: saldoFinal - si, saldoFinal };
    });

    movimentos.sort((a, b) => a.data.localeCompare(b.data));

    if (rows.length > 0 || movimentos.length > 0) {
      contasOutput.push({
        nCodCC:    conta.nCodCC,
        descricao: conta.descricao,
        rows,
        movimentos,
        _anchor:   ultimoSaldoHist,
      });
      console.log(`  ${conta.descricao}: ${rows.length} dias projetados, ${movimentos.length} movimentos`);
    } else {
      console.log(`  ${conta.descricao}: sem dados futuros — ignorando`);
    }
  }

  // 4. Totais: saldo diário somado de todas as contas
  const totalAnchor   = contasOutput.reduce((s, c) => s + (c._anchor || 0), 0);
  const diasOrdenados = Array.from(porDiaTotal.entries()).sort(([a], [b]) => a.localeCompare(b));
  const totais = diasOrdenados.map(([iso, saldoFinal], i) => {
    const si = i === 0 ? totalAnchor : diasOrdenados[i - 1][1];
    return { data: iso, saldoInicial: si, valorLiquidoDia: saldoFinal - si, saldoFinal };
  });

  // Remove campo interno
  contasOutput.forEach((c) => delete c._anchor);

  console.log(`\n  Totais: ${totais.length} dias (${totais[0]?.data} → ${totais[totais.length - 1]?.data})`);
  console.log(`  Contas com dados: ${contasOutput.length}`);

  const output = { totais, contas: contasOutput, updatedAt: new Date().toISOString() };
  fs.writeFileSync(path.join(OUT, 'saldos.json'), JSON.stringify(output, null, 2));
  console.log(`\n=== OK → data/saldos.json (${totais.length} dias, ${contasOutput.length} contas) ===`);
})().catch((e) => { console.error('FATAL:', e.message); process.exit(1); });
