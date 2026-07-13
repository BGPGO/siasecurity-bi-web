/* BIT/BGP Finance — Pages 1: Overview, Indicators, Receita, Despesa */
const { useState, useEffect } = React;

// Hook responsivo: detecta viewport mobile (<= 600px). Usado para ajustar SVGs com
// preserveAspectRatio="none" cujas coords sao plotadas em px absolutos.
const useIsMobile = (breakpoint = 600) => {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth <= breakpoint : false
  );
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= breakpoint);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [breakpoint]);
  return isMobile;
};

const RangePills = ({ value, onChange }) => {
  const opts = ["7D", "30D", "90D", "YTD", "12M"];
  return (
    <div className="range-pills">
      {opts.map(o => (
        <button key={o} className={value === o ? "active" : ""} onClick={() => onChange(o)}>{o}</button>
      ))}
    </div>
  );
};

// Section heading — kept as a thin alias so all card titles share the standardized style
const SectionHeading = ({ strong, soft }) => (
  <h2 className="card-title">{[strong, soft].filter(Boolean).join(" ")}</h2>
);

// Side-by-side monthly bars (Receita green / Despesa red / Impostos orange) with floating value chips
const OverviewBars = ({ data, height = 240, year = "2026", onBarClick, activeIdx }) => {
  const B = window.BIT;
  const max = Math.max(...data.map(d => Math.max(d.receita, d.despesa, d.impostos || 0)), 1);
  // Dynamic tick step: target ~4-5 ticks regardless of magnitude
  const rawStep = max / 4;
  const mag = Math.pow(10, Math.floor(Math.log10(rawStep)));
  const nice = [1, 2, 2.5, 5, 10].find(n => n * mag >= rawStep) * mag;
  const step = Math.max(nice, 100000);
  const niceMax = Math.max(Math.ceil(max / step) * step, step);
  const ticks = [];
  for (let v = 0; v <= niceMax; v += step) ticks.push(v);
  const cap = (s) => s.charAt(0).toUpperCase() + s.slice(1, 3);
  const hasActive = activeIdx != null && activeIdx >= 0;
  const fmtShort = (v) => v >= 1e6
    ? `R$${(v / 1e6).toLocaleString("pt-BR", { minimumFractionDigits: 1, maximumFractionDigits: 1 })} M`
    : `R$${Math.round(v / 1000)} K`;

  return (
    <div className="ov-bars">
      <div className="ov-bars-plot" style={{ height }}>
        <div className="ov-bars-axis">
          {ticks.map((t, i) => (
            <div key={i} className="ov-bars-tick" style={{ bottom: `${(t / niceMax) * 100}%` }}>
              <span>{fmtShort(t)}</span>
            </div>
          ))}
        </div>
        <div className="ov-bars-cols">
          {data.map((d, i) => {
            const rH = (d.receita / niceMax) * 100;
            const dH = (d.despesa / niceMax) * 100;
            const iH = ((d.impostos || 0) / niceMax) * 100;
            const cls = "ov-bar-col" + (onBarClick ? " clickable" : "") +
              (hasActive && i === activeIdx ? " active" : "") +
              (hasActive && i !== activeIdx ? " dimmed" : "");
            return (
              <div key={i} className={cls}
                onClick={onBarClick ? () => onBarClick(d, i) : undefined}
                style={onBarClick ? { cursor: "pointer" } : undefined}
              >
                <div className="ov-bar-stack">
                  <div className="ov-bar green" style={{ height: `${rH}%` }} title={`Receita: ${B.fmt(d.receita)}`}>
                    <span className="ov-bar-chip">{fmtShort(d.receita)}</span>
                  </div>
                  <div className="ov-bar red" style={{ height: `${dH}%` }} title={`Despesa: ${B.fmt(d.despesa)}`}>
                    <span className="ov-bar-chip">{fmtShort(d.despesa)}</span>
                  </div>
                  <div className="ov-bar orange" style={{ height: `${iH}%` }} title={`Impostos: ${B.fmt(d.impostos || 0)}`}>
                    <span className="ov-bar-chip">{fmtShort(d.impostos || 0)}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="ov-bars-x">
        {data.map((d, i) => <span key={i}>{cap(d.m)}</span>)}
      </div>
      <div className="ov-bars-year"><span>{year}</span></div>
    </div>
  );
};

// Diverging line chart — line + zero baseline + value labels above/below points
const IndicatorLine = ({ values, labels, height = 240, color = "var(--cyan)", format }) => {
  // No mobile reduzimos o viewBox horizontal (1100 -> 600) e a altura (240 -> 180).
  // Como preserveAspectRatio="none" estica o conteudo pra preencher a largura do container,
  // um viewBox mais estreito faz os pontos plotados em px absolutos ficarem espacados
  // de forma proporcional ao espaco disponivel no mobile (~326px), evitando o achatamento.
  const isMobile = useIsMobile();
  const w = isMobile ? 600 : 1100;
  const h = isMobile ? 180 : height;
  const padX = isMobile ? 28 : 50;
  const padTop = isMobile ? 28 : 36;
  const padBottom = isMobile ? 28 : 36;
  const min = Math.min(0, ...values);
  const max = Math.max(0, ...values);
  const range = max - min || 1;

  const stepX = (w - padX * 2) / (values.length - 1);
  const xOf = (i) => padX + i * stepX;
  const yOf = (v) => padTop + (1 - (v - min) / range) * (h - padTop - padBottom);

  const pts = values.map((v, i) => [xOf(i), yOf(v)]);
  const curve = (p) => {
    let d = `M ${p[0][0]} ${p[0][1]}`;
    for (let i = 1; i < p.length; i++) {
      const [x0, y0] = p[i - 1];
      const [x1, y1] = p[i];
      const cx = (x0 + x1) / 2;
      d += ` C ${cx} ${y0}, ${cx} ${y1}, ${x1} ${y1}`;
    }
    return d;
  };
  const path = curve(pts);
  const zeroY = yOf(0);
  const fmt = format || ((v) => window.BIT.fmt(v));

  // Em mobile, mostramos label de valor Y apenas nos pontos extremos
  // (primeiro, ultimo, max, min) pra evitar amassamento sobre a curva.
  const labelIdxSet = (() => {
    if (!isMobile || values.length <= 4) return null;
    let maxI = 0, minI = 0;
    for (let i = 1; i < values.length; i++) {
      if (values[i] > values[maxI]) maxI = i;
      if (values[i] < values[minI]) minI = i;
    }
    return new Set([0, values.length - 1, maxI, minI]);
  })();

  return (
    <svg className="ind-line" viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="none" style={{ width: "100%", height: h }}>
      <defs>
        <linearGradient id="ind-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.30"/>
          <stop offset="100%" stopColor={color} stopOpacity="0"/>
        </linearGradient>
      </defs>
      <line x1={padX} y1={zeroY} x2={w - padX} y2={zeroY} stroke="rgba(255,255,255,0.18)" strokeDasharray="6 5" strokeWidth="1"/>
      <path d={`${path} L ${pts[pts.length - 1][0]} ${zeroY} L ${pts[0][0]} ${zeroY} Z`} fill="url(#ind-grad)" />
      <path d={path} fill="none" stroke={color} strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round"/>
      {pts.map((p, i) => {
        const v = values[i];
        const above = v >= 0;
        const showLabel = labelIdxSet ? labelIdxSet.has(i) : true;
        return (
          <g key={i}>
            <circle cx={p[0]} cy={p[1]} r={isMobile ? 3.5 : 4.5} fill={color} stroke="#0a141a" strokeWidth="2.5"/>
            {showLabel && (
              <text x={p[0]} y={above ? p[1] - 12 : p[1] + 22} textAnchor="middle" fill={v >= 0 ? "#e8f6f9" : "#fca5a5"} fontFamily="var(--font-mono)" fontSize={isMobile ? "10" : "11.5"} fontWeight="600">
                {fmt(v)}
              </text>
            )}
          </g>
        );
      })}
      {labels.map((l, i) => (
        i % 2 === 0 ? (
          <text key={i} x={xOf(i)} y={h - 10} textAnchor="middle" fill="var(--mute)" fontSize="11" fontFamily="var(--font-ui)">{l}</text>
        ) : null
      ))}
    </svg>
  );
};

const PageOverview = ({ filters, setFilters, onOpenFilters, statusFilter, drilldown, setDrilldown, year, month, semInvestimento, extraFilters }) => {
  const B = useMemo(() => window.getBit(statusFilter, drilldown, year, month, semInvestimento, extraFilters), [statusFilter, drilldown, year, month, semInvestimento, extraFilters]);
  // Ponto de Equilibrio (break-even): recomputa sob o mesmo contexto de filtro que B.
  const PE = useMemo(() => window.computePE(statusFilter, drilldown, year, month, semInvestimento, extraFilters), [statusFilter, drilldown, year, month, semInvestimento, extraFilters]);
  const pctFmt = (v) => v == null ? "—" : (v * 100).toFixed(2).replace(".", ",") + "%";
  const [indicator, setIndicator] = useState("Valor líquido");
  const [fpVista, setFpVista] = useState('consolidado');
  const refYear = (B.META && B.META.ref_year) || new Date().getFullYear();
  // descobre o indice ativo se o drilldown for de mes (pra destacar a barra)
  const activeMonthIdx = (drilldown && drilldown.type === "mes")
    ? B.MONTHS_FULL.findIndex(mn => {
        // drilldown.value formato "YYYY-MM" e MONTHS_FULL e ["janeiro","fevereiro",...]
        const mm = String(parseInt(drilldown.value.slice(5, 7), 10)).padStart(2, "0");
        const idx = parseInt(mm, 10) - 1;
        return B.MONTHS_FULL.indexOf(mn) === idx;
      })
    : -1;
  const handleBarMes = (d, i) => {
    const mm = String(i + 1).padStart(2, "0");
    const ym = `${refYear}-${mm}`;
    const lbl = `${d.m.charAt(0).toUpperCase() + d.m.slice(1, 3)}/${refYear}`;
    setDrilldown({ type: "mes", value: ym, label: lbl });
  };

  // Indicator series for the toggle chart (derived da MONTH_DATA real)
  const margemSeries = B.MONTH_DATA.map(m => m.receita > 0 ? ((m.receita - m.despesa) / m.receita) * 100 : 0);
  const indicatorSeries = {
    "Valor líquido":          { values: B.VALOR_LIQ_SERIES, color: "var(--cyan)", fmt: (v) => B.fmt(v) },
    "Receita":                { values: B.MONTH_DATA.map(m => m.receita), color: "var(--green)", fmt: (v) => B.fmt(v) },
    "Despesa":                { values: B.MONTH_DATA.map(m => -m.despesa), color: "var(--red)", fmt: (v) => B.fmt(v) },
    "Margem Líquida":         { values: margemSeries, color: "var(--cyan)", fmt: (v) => `${v.toFixed(2).replace(".", ",")}%` },
  };
  const current = indicatorSeries[indicator];
  const monthLabels = B.MONTHS_FULL.map(m => `${m.charAt(0).toUpperCase() + m.slice(1, 3)} ${refYear}`);

  const indicadores = [
    { value: B.TOTAL_RECEITA, label: "Soma de receita",     kind: "receita" },
    { value: B.TOTAL_DESPESA, label: "Soma de despesa",     kind: "despesa" },
    { value: B.VALOR_LIQUIDO, label: "Valor líquido",       kind: B.VALOR_LIQUIDO >= 0 ? "receita" : "despesa" },
  ];

  const statusLabel = statusFilter === "realizado" ? "realizado (PAGO)" :
                      statusFilter === "a_pagar_receber" ? "pendente (A vencer/receber)" : "tudo (pago + pendente)";

  return (
    <div className="page">
      <div className="page-title">
        <div>
          <h1>Visão Geral</h1>
          <div className="status-line">Cliente · ano {refYear} · status <b>{statusLabel}</b></div>
        </div>
        <div className="actions">
        </div>
      </div>

      <DrilldownBadge drilldown={drilldown} onClear={() => setDrilldown(null)} />

      <div className="row" style={{ gridTemplateColumns: "minmax(280px, 3fr) minmax(0, 9fr)" }}>
        {/* LEFT: Indicadores Principais + Resultado Geral */}
        <div style={{ display: "grid", gap: 16, alignContent: "start" }}>
          <div className="card">
            <SectionHeading strong="INDICADORES" soft="PRINCIPAIS" />
            <div className="kpi-stack">
              {indicadores.map((it, i) => (
                <div key={i} className={`kpi-stack-item ${it.kind}`}>
                  <div className="kpi-stack-value">{B.fmt(it.value)}</div>
                  <div className="kpi-stack-label">{it.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="card resultado-card">
            <SectionHeading strong="RESULTADO" soft="GERAL" />
            <div className="kpi-stack-value resultado-val">{B.fmt(B.VALOR_LIQUIDO)}</div>
            <div className="kpi-stack-label">Valor líquido</div>
            <div className="kpi-stack-pct">{B.MARGEM_LIQUIDA.toFixed(2).replace(".", ",")}%</div>
            <div className="kpi-stack-label">Margem Líquida</div>
          </div>
        </div>

        {/* RIGHT: Receitas e Despesas + Visualização Indicadores */}
        <div style={{ display: "grid", gap: 16, minWidth: 0 }}>
          <div className="card">
            <div className="card-title-row" style={{ marginBottom: 10 }}>
              <h2 className="card-title">Receitas e despesas</h2>
            </div>
            <div className="legend-pills">
              <span className="legend-pill green">
                <span className="dot" />
                <span className="lbl">Receita</span>
                <span className="val">{B.fmtK(B.TOTAL_RECEITA)}</span>
              </span>
              <span className="legend-pill red">
                <span className="dot" />
                <span className="lbl">Despesa</span>
                <span className="val">{B.fmtK(B.TOTAL_DESPESA)}</span>
              </span>
              <span className="legend-pill orange">
                <span className="dot" />
                <span className="lbl">Impostos</span>
                <span className="val">{B.fmtK(B.MONTH_DATA.reduce((s, m) => s + (m.impostos || 0), 0))}</span>
              </span>
            </div>
            <OverviewBars data={B.MONTH_DATA} height={240} year={String(refYear)} onBarClick={handleBarMes} activeIdx={activeMonthIdx} />
          </div>

          <div className="card">
            <div className="card-title-row" style={{ marginBottom: 12 }}>
              <h2 className="card-title">Visualização indicadores</h2>
              <div className="ind-pills">
                {Object.keys(indicatorSeries).map(k => (
                  <button key={k} className={`ind-pill ${indicator === k ? "active" : ""}`} onClick={() => setIndicator(k)}>{k}</button>
                ))}
              </div>
            </div>
            <div className="legend-pills">
              <span className="legend-pill cyan">
                <span className="dot" />
                <span className="lbl">{indicator}</span>
                <span className="val">{indicator === "Margem Líquida"
                  ? `${(current.values.reduce((s, v) => s + v, 0) / current.values.length).toFixed(2).replace(".", ",")}%`
                  : B.fmtK(current.values.reduce((s, v) => s + v, 0))}</span>
              </span>
            </div>
            <IndicatorLine values={current.values} labels={monthLabels} height={240} color={current.color} format={current.fmt} />
          </div>
        </div>
      </div>

      {/* PONTO DE EQUILÍBRIO (break-even): Margem de Contribuição %, Ponto de Equilíbrio, Margem de Segurança % */}
      <div className="card" style={{ marginTop: 16 }}>
        <SectionHeading strong="PONTO DE" soft="EQUILÍBRIO" />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 12, marginTop: 12 }}>
          <div className="indicator-card">
            <div className="kpi-label">Margem de contribuição</div>
            <div style={{ fontFamily: "var(--font-mono)", fontWeight: 700, fontSize: 22, color: "var(--cyan)" }}>{pctFmt(PE.margemContrib)}</div>
            <div style={{ fontSize: 11, color: "var(--mute)", marginTop: 4 }}>(Receita − Custos Variáveis) ÷ Receita</div>
          </div>
          <div className="indicator-card">
            <div className="kpi-label">Ponto de equilíbrio</div>
            <div style={{ fontFamily: "var(--font-mono)", fontWeight: 700, fontSize: 22, color: "var(--text)" }}>{PE.pontoEquilibrio == null ? "—" : B.fmt(PE.pontoEquilibrio)}</div>
            <div style={{ fontSize: 11, color: "var(--mute)", marginTop: 4 }}>Custos Fixos ÷ Margem de contribuição</div>
          </div>
          <div className="indicator-card">
            <div className="kpi-label">Margem de segurança</div>
            <div style={{ fontFamily: "var(--font-mono)", fontWeight: 700, fontSize: 22, color: PE.margemSeguranca != null && PE.margemSeguranca >= 0 ? "var(--green)" : "var(--red)" }}>{pctFmt(PE.margemSeguranca)}</div>
            <div style={{ fontSize: 11, color: "var(--mute)", marginTop: 4 }}>(Receita − Ponto de equilíbrio) ÷ Receita</div>
          </div>
        </div>
      </div>

      {/* Fluxo de Caixa Projetado com toggle Consolidado / Sem Investimento */}
      {(function() {
        const fp    = window.FLUXO_PROJETADO || {};
        const total = fp.totais || [];
        const contas = fp.contas || [];
        if (!total.length) return null;

        const fmtV = (n) => {
          const sign = n < 0 ? '-' : '';
          return `${sign}R$ ${Math.abs(n).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
        };
        const fmtD = (iso) => { if (!iso) return ''; const [y,m,d] = iso.split('-'); return `${d}/${m}/${y}`; };

        const allMovs = contas.flatMap(c => c.movimentos || []);
        const invCount = allMovs.filter(m => m.isInvestimento).length;

        const calcSemInv = (rowsConsol, movs) => {
          const invByDay = {};
          for (const m of movs) {
            if (m.isInvestimento) invByDay[m.data] = (invByDay[m.data] || 0) + m.valor;
          }
          let cum = 0;
          return rowsConsol.map(r => {
            const dayInv = invByDay[r.data] || 0;
            const si = r.saldoInicial - cum;
            const sf = r.saldoFinal - (cum + dayInv);
            cum += dayInv;
            return { data: r.data, saldoInicial: si, valorLiquidoDia: r.valorLiquidoDia - dayInv, saldoFinal: sf };
          });
        };

        const rows = fpVista === 'sem_inv' ? calcSemInv(total, allMovs) : total;
        const ultimoSaldo   = rows[rows.length - 1].saldoFinal;
        const variacaoTotal = rows[rows.length - 1].saldoFinal - rows[0].saldoInicial;
        const minSaldo = Math.min(...rows.map(r => r.saldoFinal));
        const minRow   = rows.find(r => r.saldoFinal === minSaldo);

        const SparkFP = () => {
          const W = 400, H = 72, PAD = 4;
          const vals = rows.map(r => r.saldoFinal);
          const mn = Math.min(...vals), mx = Math.max(...vals);
          const rng = mx - mn || 1;
          const xs = vals.map((_, i) => PAD + (i / Math.max(vals.length - 1, 1)) * (W - PAD * 2));
          const ys = vals.map(v => H - PAD - ((v - mn) / rng) * (H - PAD * 2));
          const line = xs.map((x, i) => `${i === 0 ? 'M' : 'L'}${x.toFixed(1)},${ys[i].toFixed(1)}`).join(' ');
          const fill = `${line} L${xs[xs.length-1].toFixed(1)},${H} L${xs[0].toFixed(1)},${H} Z`;
          const zeroY = H - PAD - ((0 - mn) / rng) * (H - PAD * 2);
          return (
            <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none" style={{ width: '100%', height: 72, display: 'block' }}>
              <defs>
                <linearGradient id="fpOvGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.22" />
                  <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.02" />
                </linearGradient>
              </defs>
              {mn < 0 && mx > 0 && (
                <line x1={PAD} y1={zeroY.toFixed(1)} x2={W-PAD} y2={zeroY.toFixed(1)}
                  stroke="rgba(239,68,68,0.35)" strokeWidth="1" strokeDasharray="4,3" />
              )}
              <path d={fill} fill="url(#fpOvGrad)" />
              <path d={line} fill="none" stroke="#22d3ee" strokeWidth="1.8" />
            </svg>
          );
        };

        const BtnFP = ({ value, label }) => (
          <button onClick={() => setFpVista(value)} style={{
            padding: '4px 12px', fontSize: 12, cursor: 'pointer', border: 'none',
            background: fpVista === value ? 'var(--cyan)' : 'transparent',
            color: fpVista === value ? '#000' : 'var(--text)',
            fontWeight: fpVista === value ? 600 : 400,
          }}>{label}</button>
        );

        return (
          <div className="card" style={{ marginTop: 16 }}>
            <div className="card-title-row">
              <h2 className="card-title">Fluxo de Caixa Projetado</h2>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: 10, marginBottom: 14 }}>
              <div className="indicator-card" style={{ padding: 10 }}>
                <div className="kpi-label" style={{ fontSize: 10 }}>Saldo inicial</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 14, color: rows[0].saldoInicial >= 0 ? 'var(--cyan)' : 'var(--red)' }}>{fmtV(rows[0].saldoInicial)}</div>
                <div style={{ fontSize: 10, color: 'var(--mute)' }}>{fmtD(rows[0].data)}</div>
              </div>
              <div className="indicator-card" style={{ padding: 10 }}>
                <div className="kpi-label" style={{ fontSize: 10 }}>Saldo final projetado</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 14, color: ultimoSaldo >= 0 ? 'var(--green)' : 'var(--red)' }}>{fmtV(ultimoSaldo)}</div>
                <div style={{ fontSize: 10, color: 'var(--mute)' }}>{fmtD(rows[rows.length-1].data)}</div>
              </div>
              <div className="indicator-card" style={{ padding: 10 }}>
                <div className="kpi-label" style={{ fontSize: 10 }}>Variação total</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 14, color: variacaoTotal >= 0 ? 'var(--green)' : 'var(--red)' }}>{variacaoTotal >= 0 ? '+' : ''}{fmtV(variacaoTotal)}</div>
              </div>
              <div className="indicator-card" style={{ padding: 10, background: minSaldo < 0 ? 'rgba(239,68,68,0.07)' : undefined }}>
                <div className="kpi-label" style={{ fontSize: 10 }}>Mínimo projetado</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 14, color: minSaldo >= 0 ? 'var(--green)' : 'var(--red)' }}>{fmtV(minSaldo)}</div>
                {minRow && <div style={{ fontSize: 10, color: 'var(--mute)' }}>{fmtD(minRow.data)}</div>}
              </div>
            </div>
            <SparkFP />
          </div>
        );
      })()}
    </div>
  );
};

const PageIndicators = ({ statusFilter, drilldown, setDrilldown, year, month }) => {
  const B = useMemo(() => window.getBit(statusFilter, drilldown, year, month), [statusFilter, drilldown, year, month]);
  const totalReceita = B.TOTAL_RECEITA;
  const totalDespesa = B.TOTAL_DESPESA;
  const valorLiq = B.VALOR_LIQUIDO;
  const margemLiq = B.MARGEM_LIQUIDA;
  const refYear = (B.META && B.META.ref_year) || new Date().getFullYear();
  // sem segregacao de impostos no Omie sem mapeamento de categorias, deixamos 0 e mostramos "—" se nao houver dado
  const margemSeries = B.MONTH_DATA.map(m => m.receita > 0 ? ((m.receita - m.despesa) / m.receita) * 100 : 0);

  const handleBarMes = (d, i) => {
    const mm = String(i + 1).padStart(2, "0");
    const ym = `${refYear}-${mm}`;
    const lbl = `${(d.m || "").charAt(0).toUpperCase() + (d.m || "").slice(1, 3)}/${refYear}`;
    setDrilldown({ type: "mes", value: ym, label: lbl });
  };
  const activeMonthIdx = (drilldown && drilldown.type === "mes")
    ? parseInt(drilldown.value.slice(5, 7), 10) - 1 : -1;

  return (
    <div className="page">
      <div className="page-title">
        <div>
          <h1>Indicadores</h1>
          <div className="status-line">Receita, despesa, valor líquido e margem · {statusFilter === "realizado" ? "realizado" : statusFilter === "tudo" ? "tudo" : "pendente"}</div>
        </div>
        <div className="actions">
        </div>
      </div>

      <DrilldownBadge drilldown={drilldown} onClear={() => setDrilldown(null)} />

      <div className="metric-strip">
        <div className="metric">
          <div className="m-label">Receita total</div>
          <div className="m-value">{B.fmt(totalReceita)}</div>
          <div className="m-pct">100%</div>
          <div className="m-bar"><div style={{ width: `100%` }} /></div>
        </div>
        <div className="metric">
          <div className="m-label">Despesa total</div>
          <div className="m-value">{B.fmt(totalDespesa)}</div>
          <div className="m-pct">{totalReceita > 0 ? `${((totalDespesa / totalReceita) * 100).toFixed(2).replace(".",",")}%` : "—"}</div>
          <div className="m-bar red"><div style={{ width: `${totalReceita > 0 ? Math.min(100, (totalDespesa / totalReceita) * 100) : 0}%` }} /></div>
        </div>
        <div className="metric">
          <div className="m-label">Valor líquido</div>
          <div className="m-value" style={{ color: valorLiq >= 0 ? "var(--green)" : "var(--red)" }}>{B.fmt(valorLiq)}</div>
          <div className="m-pct">{margemLiq.toFixed(2).replace(".",",")}%</div>
          <div className="m-bar cyan"><div style={{ width: `${Math.min(100, Math.max(0, margemLiq))}%` }} /></div>
        </div>
        <div className="metric">
          <div className="m-label">Margem líquida</div>
          <div className="m-value">{margemLiq.toFixed(2).replace(".",",")}%</div>
          <div className="m-pct">média do período</div>
          <div className="m-bar"><div style={{ width: `${Math.min(100, Math.max(0, margemLiq))}%` }} /></div>
        </div>
      </div>

      <div className="row row-1-1">
        <div className="card">
          <h2 className="card-title">Margem líquida por mês</h2>
          <TrendChart
            values={margemSeries}
            labels={B.MONTHS}
            color="var(--cyan)"
            height={220}
            gradientId="ml-cyan"
          />
        </div>
        <div className="card">
          <h2 className="card-title">Receita vs Despesa por mês</h2>
          <MonthlyBars data={B.MONTH_DATA} height={240} onBarClick={handleBarMes} activeIdx={activeMonthIdx} />
        </div>
      </div>
    </div>
  );
};

const PageReceita = ({ filters, setFilters, onOpenFilters, statusFilter, drilldown, setDrilldown, year, month, extraFilters }) => {
  const B = useMemo(() => window.getBit(statusFilter, drilldown, year, month, undefined, extraFilters), [statusFilter, drilldown, year, month, extraFilters]);
  const mediaMes = B.TOTAL_RECEITA / 12;
  const numClientes = B.RECEITA_CLIENTES.length;
  const numLancRec = (B.EXTRATO_RECEITAS || B.EXTRATO.filter(e => e[4] > 0)).length;
  const ticket = numLancRec > 0 ? B.TOTAL_RECEITA / numLancRec : 0;
  const [range, setRange] = useState("12M");
  const refYear = (B.META && B.META.ref_year) || new Date().getFullYear();

  // Drilldown handlers
  const handleBarMes = (v, i) => {
    const mm = String(i + 1).padStart(2, "0");
    const ym = `${refYear}-${mm}`;
    const mn = B.MONTHS_FULL[i] || "";
    setDrilldown({ type: "mes", value: ym, label: `${mn.charAt(0).toUpperCase() + mn.slice(1, 3)}/${refYear}` });
  };
  const handleCategoria = (it) => setDrilldown({ type: "categoria", value: it.name, label: it.name });
  const handleCliente = (it) => setDrilldown({ type: "cliente", value: it.name, label: it.name });

  // Indices ativos para destaque
  const activeMonthIdx = (drilldown && drilldown.type === "mes")
    ? parseInt(drilldown.value.slice(5, 7), 10) - 1 : -1;
  const activeCategoria = (drilldown && drilldown.type === "categoria") ? drilldown.value : null;
  const activeCliente = (drilldown && drilldown.type === "cliente") ? drilldown.value : null;

  // Extrato filtrado de receitas (usa EXTRATO_RECEITAS pre-separado pelo build,
  // fallback pro filtro inline pra compat com BIT base)
  const extratoReceitas = B.EXTRATO_RECEITAS || B.EXTRATO.filter(e => e[4] > 0);
  const extratoFiltrado = window.applyDrilldown(extratoReceitas, drilldown);
  const totalFiltrado = drilldown
    ? extratoFiltrado.reduce((s, e) => s + e[4], 0)
    : B.TOTAL_RECEITA;

  return (
    <div className="page">
      <div className="page-title">
        <div>
          <h1>Receita</h1>
          <div className="status-line">Composição por categoria, cliente e mês</div>
        </div>
        <div className="actions">
        </div>
      </div>

      <DrilldownBadge drilldown={drilldown} onClear={() => setDrilldown(null)} />

      <div className="row row-4">
        <KpiTile label="Receita total" value={(B.TOTAL_RECEITA / 1e6).toFixed(2).replace(".", ",")} unit="M" sparkValues={B.MONTH_DATA.map(m => m.receita)} sparkColor="var(--green)" tone="green" />
        <KpiTile label="Média por mês" value={(mediaMes / 1e3).toFixed(0)} unit="K" sparkValues={B.MONTH_DATA.map(m => m.receita)} sparkColor="var(--cyan)" tone="cyan" />
        <KpiTile label="Clientes" value={String(numClientes)} sparkValues={B.MONTH_DATA.map(m => m.receita > 0 ? 1 : 0)} sparkColor="var(--cyan)" tone="cyan" nonMonetary />
        <KpiTile label="Ticket médio" value={ticket > 0 ? (ticket / 1e3).toFixed(2).replace(".", ",") : "0,00"} unit="K" sparkValues={B.MONTH_DATA.map(m => m.receita / 30)} sparkColor="var(--green)" tone="green" />
      </div>

      <div className="card">
        <h2 className="card-title">Receita por mês</h2>
        <SingleBars values={B.MONTH_DATA.map(m => m.receita)} labels={B.MONTHS_FULL} color="green" height={240}
          onBarClick={handleBarMes} activeIdx={activeMonthIdx} />
      </div>

      <div className="row" style={{ gridTemplateColumns: "minmax(0, 4fr) minmax(0, 5fr) minmax(0, 4fr)" }}>
        <div className="card">
          <h2 className="card-title">Receita por categoria</h2>
          <BarList items={B.RECEITA_CATEGORIAS} color="green" onItemClick={handleCategoria} activeName={activeCategoria} />
        </div>

        <div className="card">
          <div className="card-title-row">
            <h2 className="card-title">Extrato de receitas {drilldown ? `· ${drilldown.label}` : ""}</h2>
          </div>
          <div className="t-scroll">
            <table className="t">
              <thead>
                <tr><th>Data</th><th>Categoria</th><th>Cliente</th><th className="num">Receita</th></tr>
              </thead>
              <tbody>
                {extratoFiltrado.slice(0, month > 0 ? 200 : 30).map((e, i) => (
                  <tr key={i}>
                    <td style={{ fontFamily: "var(--font-mono)", fontSize: 11 }}>{e[0]}</td>
                    <td>{e[2]}</td>
                    <td>{e[3]}</td>
                    <td className="num green">{B.fmt(Math.abs(e[4]))}</td>
                  </tr>
                ))}
                {extratoFiltrado.length === 0 && (
                  <tr><td colSpan="4" style={{ color: "var(--mute)", textAlign: "center", padding: 18 }}>Sem receitas no filtro selecionado</td></tr>
                )}
                <tr className="total">
                  <td colSpan="3">Total{drilldown ? " (filtrado)" : ""}</td>
                  <td className="num green">{B.fmt(totalFiltrado)}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="card">
          <h2 className="card-title">Receita por cliente</h2>
          <BarList items={B.RECEITA_CLIENTES} color="green" onItemClick={handleCliente} activeName={activeCliente} />
        </div>
      </div>
    </div>
  );
};

const PageDespesa = ({ filters, setFilters, onOpenFilters, statusFilter, drilldown, setDrilldown, year, month, semInvestimento, extraFilters }) => {
  const B = useMemo(() => window.getBit(statusFilter, drilldown, year, month, semInvestimento, extraFilters), [statusFilter, drilldown, year, month, semInvestimento, extraFilters]);
  const totalDespesa = B.TOTAL_DESPESA;
  const mediaMes = totalDespesa / 12;
  const numFornec = B.DESPESA_FORNECEDORES.length;
  const numLancDesp = (B.EXTRATO_DESPESAS || B.EXTRATO.filter(e => e[4] < 0)).length;
  const ticketDesp = numLancDesp > 0 ? totalDespesa / numLancDesp : 0;
  const [range, setRange] = useState("12M");
  const refYear = (B.META && B.META.ref_year) || new Date().getFullYear();

  const handleBarMes = (v, i) => {
    const mm = String(i + 1).padStart(2, "0");
    const ym = `${refYear}-${mm}`;
    const mn = B.MONTHS_FULL[i] || "";
    setDrilldown({ type: "mes", value: ym, label: `${mn.charAt(0).toUpperCase() + mn.slice(1, 3)}/${refYear}` });
  };
  const handleCategoria = (it) => setDrilldown({ type: "categoria", value: it.name, label: it.name });
  const handleFornecedor = (it) => setDrilldown({ type: "fornecedor", value: it.name, label: it.name });

  const activeMonthIdx = (drilldown && drilldown.type === "mes")
    ? parseInt(drilldown.value.slice(5, 7), 10) - 1 : -1;
  const activeCategoria = (drilldown && drilldown.type === "categoria") ? drilldown.value : null;
  const activeFornecedor = (drilldown && drilldown.type === "fornecedor") ? drilldown.value : null;

  // Extrato filtrado de despesas (usa EXTRATO_DESPESAS pre-separado, fallback inline)
  const extratoDespesas = B.EXTRATO_DESPESAS || B.EXTRATO.filter(e => e[4] < 0);
  const extratoFiltrado = window.applyDrilldown(extratoDespesas, drilldown);
  const totalFiltrado = drilldown
    ? Math.abs(extratoFiltrado.reduce((s, e) => s + e[4], 0))
    : totalDespesa;

  return (
    <div className="page">
      <div className="page-title">
        <div>
          <h1>Despesa</h1>
          <div className="status-line">Composição por categoria, fornecedor e mês</div>
        </div>
        <div className="actions">
        </div>
      </div>

      <DrilldownBadge drilldown={drilldown} onClear={() => setDrilldown(null)} />

      <div className="row row-4">
        <KpiTile label="Despesas totais" value={(totalDespesa / 1e6).toFixed(2).replace(".", ",")} unit="M" sparkValues={B.MONTH_DATA.map(m => m.despesa)} sparkColor="var(--red)" tone="red" />
        <KpiTile label="Média por mês" value={(mediaMes / 1e3).toFixed(0)} unit="K" sparkValues={B.MONTH_DATA.map(m => m.despesa)} sparkColor="var(--red)" tone="red" />
        <KpiTile label="Fornecedores" value={String(numFornec)} sparkValues={B.MONTH_DATA.map(m => m.despesa > 0 ? 1 : 0)} sparkColor="var(--cyan)" tone="cyan" nonMonetary />
        <KpiTile label="Ticket médio" value={ticketDesp > 0 ? (ticketDesp / 1e3).toFixed(2).replace(".", ",") : "0,00"} unit="K" sparkValues={B.MONTH_DATA.map(m => m.despesa / 30)} sparkColor="var(--red)" tone="red" />
      </div>

      <div className="card">
        <h2 className="card-title">Despesa por mês</h2>
        <SingleBars values={B.MONTH_DATA.map(m => m.despesa)} labels={B.MONTHS_FULL} color="red" height={240}
          onBarClick={handleBarMes} activeIdx={activeMonthIdx} />
      </div>

      <div className="row" style={{ gridTemplateColumns: "minmax(0, 4fr) minmax(0, 5fr) minmax(0, 4fr)" }}>
        <div className="card">
          <h2 className="card-title">Despesas por categoria</h2>
          <BarList items={B.DESPESA_CATEGORIAS} color="red" onItemClick={handleCategoria} activeName={activeCategoria} />
        </div>

        <div className="card">
          <div className="card-title-row">
            <h2 className="card-title">Extrato de despesas {drilldown ? `· ${drilldown.label}` : ""}</h2>
          </div>
          <div className="t-scroll">
            <table className="t">
              <thead>
                <tr><th>Data</th><th>Categoria</th><th>Fornecedor</th><th className="num">Despesa</th></tr>
              </thead>
              <tbody>
                {extratoFiltrado.slice(0, month > 0 ? 200 : 30).map((e, i) => (
                  <tr key={i}>
                    <td style={{ fontFamily: "var(--font-mono)", fontSize: 11 }}>{e[0]}</td>
                    <td>{e[2]}</td>
                    <td>{e[3]}</td>
                    <td className="num red">{B.fmt(Math.abs(e[4]))}</td>
                  </tr>
                ))}
                {extratoFiltrado.length === 0 && (
                  <tr><td colSpan="4" style={{ color: "var(--mute)", textAlign: "center", padding: 18 }}>Sem despesas no filtro selecionado</td></tr>
                )}
                <tr className="total">
                  <td colSpan="3">Total{drilldown ? " (filtrado)" : ""}</td>
                  <td className="num red">{B.fmt(totalFiltrado)}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="card">
          <h2 className="card-title">Despesas por fornecedor</h2>
          <BarList items={B.DESPESA_FORNECEDORES} color="red" onItemClick={handleFornecedor} activeName={activeFornecedor} />
        </div>
      </div>
    </div>
  );
};

Object.assign(window, { PageOverview, PageIndicators, PageReceita, PageDespesa, RangePills });
