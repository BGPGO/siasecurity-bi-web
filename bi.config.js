module.exports = {
  cliente: {
    nome: "SIA Security",
    subdomain: "siasecurity-bi",
    coolify_app_uuid: "j13tmx96m02wqyr5k0egyvl3",
    cor_primaria: "#3b82f6",
  },

  fontes: {
    adapters: ["omie"],
    omie: {
      bancos_ok: [],
      categorias_excluir: [
        "0.01", "0.01.01", "0.01.02",           // Transferência entre contas
      ],
    },
    drive: {
      base_path: "G:/Meu Drive/BGP/CLIENTES/BI/SIA Security",
    },
  },

  pages: {
    geral: {
      overview: "active",
      receita: "active",
      despesa: "active",
      fluxo: "active",
      tesouraria: "active",
      comparativo: "active",
      relatorio_ia: "active",
      valuation: "hidden",
    },
    outros: {
      fluxo_projetado: "hidden",
      indicators: "hidden",
      faturamento_produto: "hidden",
      cmv: "hidden",
      curva_abc: "hidden",
      marketing: "hidden",
      hierarquia: "hidden",
      detalhado: "hidden",
      profunda_cliente: "hidden",
      crm: "hidden",
    },
  },

  meta: {
    ano_corrente: 2026,
    metas_crm: { mes: 1_000_000, ano: 12_000_000 },
    valuation_premissas: { wacc: 25, growth_year2: 20, growth_year3: 20, ipca: 4.5, perpetuity_growth: 10 },
  },

  template: {
    version_when_created: "1.1.0",
    version_last_synced: "1.1.0",
  },
};
