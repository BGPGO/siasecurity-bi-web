#!/usr/bin/env node
/**
 * Busca impostos retidos (ISS, PIS, COFINS, CSLL, IR, INSS) de cada título
 * via ConsultarContaReceber / ConsultarContaPagar.
 * Salva: data/impostos_receber.json e data/impostos_pagar.json
 *
 * Rate limit: 3 chamadas paralelas com 200ms delay entre batches.
 */
'use strict';

const fs = require('node:fs');
const path = require('node:path');

try { require('dotenv').config({ path: path.join(__dirname, '.env') }); } catch (e) {}
const APP_KEY = process.env.OMIE_APP_KEY;
const APP_SECRET = process.env.OMIE_APP_SECRET;
if (!APP_KEY || !APP_SECRET) {
  console.error('ERRO: defina OMIE_APP_KEY e OMIE_APP_SECRET em .env');
  process.exit(1);
}

const BASE = 'https://app.omie.com.br/api/v1';
const OUT = path.join(__dirname, 'data');
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const CONCURRENCY = 5;
const DELAY_MS = 200;

async function callApi(endpoint, method, params, retries = 6) {
  const body = JSON.stringify({ call: method, app_key: APP_KEY, app_secret: APP_SECRET, param: [params] });
  let res;
  try {
    res = await fetch(`${BASE}${endpoint}`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body });
  } catch (netErr) {
    if (retries > 0) { await sleep(2000 * (7 - retries)); return callApi(endpoint, method, params, retries - 1); }
    throw netErr;
  }
  let j;
  try { j = await res.json(); } catch (e) {
    if (retries > 0) { await sleep(2000); return callApi(endpoint, method, params, retries - 1); }
    throw e;
  }
  if (j.faultstring && /consumo excedido|rate.?limit/i.test(j.faultstring)) {
    if (retries > 0) { await sleep(3000 * (7 - retries)); return callApi(endpoint, method, params, retries - 1); }
  }
  return j;
}

async function fetchImpostos(codigos, endpoint, method) {
  const results = [];
  let done = 0;
  const total = codigos.length;

  for (let i = 0; i < total; i += CONCURRENCY) {
    const batch = codigos.slice(i, i + CONCURRENCY);
    const promises = batch.map(cod =>
      callApi(endpoint, method, { codigo_lancamento_omie: cod })
        .then(d => ({
          codigo: cod,
          valor_iss: d.valor_iss || 0,
          valor_pis: d.valor_pis || 0,
          valor_inss: d.valor_inss || 0,
          valor_cofins: d.valor_cofins || 0,
          valor_csll: d.valor_csll || 0,
          valor_ir: d.valor_ir || 0,
        }))
        .catch(e => ({ codigo: cod, valor_iss: 0, valor_pis: 0, valor_inss: 0, valor_cofins: 0, valor_csll: 0, valor_ir: 0 }))
    );
    const batchResults = await Promise.all(promises);
    results.push(...batchResults);
    done += batch.length;
    if (done % 100 === 0 || done === total) {
      process.stdout.write(`  [${method}] ${done}/${total}\r`);
    }
    if (i + CONCURRENCY < total) await sleep(DELAY_MS);
  }
  console.log(`  [${method}] ${done}/${total} concluído`);
  return results;
}

(async () => {
  // Get unique titulo codes from movements
  const movimentos = JSON.parse(fs.readFileSync(path.join(OUT, 'movimentos.json'), 'utf8'));

  const recCodes = new Set();
  const pagCodes = new Set();
  for (const m of movimentos) {
    const d = m.detalhes || {};
    if (!d.nCodTitulo) continue;
    if (d.cNatureza === 'R') recCodes.add(d.nCodTitulo);
    else if (d.cNatureza === 'P') pagCodes.add(d.nCodTitulo);
  }

  console.log(`=== Buscando impostos ===`);
  console.log(`  Receitas únicas: ${recCodes.size}`);
  console.log(`  Despesas únicas: ${pagCodes.size}`);

  console.log('\n--- Contas a Receber ---');
  const impostosRec = await fetchImpostos([...recCodes], '/financas/contareceber/', 'ConsultarContaReceber');
  fs.writeFileSync(path.join(OUT, 'impostos_receber.json'), JSON.stringify(impostosRec, null, 2));

  console.log('\n--- Contas a Pagar ---');
  const impostosPag = await fetchImpostos([...pagCodes], '/financas/contapagar/', 'ConsultarContaPagar');
  fs.writeFileSync(path.join(OUT, 'impostos_pagar.json'), JSON.stringify(impostosPag, null, 2));

  // Summary
  const totalRec = impostosRec.reduce((s, r) => s + r.valor_iss + r.valor_pis + r.valor_inss + r.valor_cofins + r.valor_csll + r.valor_ir, 0);
  const totalPag = impostosPag.reduce((s, r) => s + r.valor_iss + r.valor_pis + r.valor_inss + r.valor_cofins + r.valor_csll + r.valor_ir, 0);
  console.log(`\n=== Resumo Impostos ===`);
  console.log(`  Impostos Receita: R$${totalRec.toFixed(2)}`);
  console.log(`  Impostos Despesa: R$${totalPag.toFixed(2)}`);
  console.log(`  Total: R$${(totalRec + totalPag).toFixed(2)}`);
})();
