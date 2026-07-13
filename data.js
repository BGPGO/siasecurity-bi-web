/* BGP BI — gerado por build-data.cjs em 2026-07-13T17:02:42.066Z */
/* Empresa: VIRTUAL SYSTEM TECNOLOGIA LTDA | Ano ref: 2026 */
const MONTHS = ["jan","fev","mar","abr","mai","jun","jul","ago","set","out","nov","dez"];
const MONTHS_FULL = ["janeiro","fevereiro","março","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"];

function fmt(n, opts = {}) {
  const { dec = 2, prefix = "R$", showSign = false } = opts;
  const sign = n < 0 ? "-" : (showSign ? "+" : "");
  const abs = Math.abs(n);
  const parts = abs.toFixed(dec).split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return `${sign}${prefix}${parts.join(",")}`;
}
function fmtK(n) {
  const abs = Math.abs(n);
  const sign = n < 0 ? "-" : "";
  if (abs >= 1e6) return `${sign}R$${(abs / 1e6).toFixed(2).replace(".", ",")} M`;
  if (abs >= 1e3) return `${sign}R$${(abs / 1e3).toFixed(2).replace(".", ",")} K`;
  return `${sign}R$${abs.toFixed(0)}`;
}
function fmtPct(n, dec = 2) {
  const sign = n > 0 ? "+" : (n < 0 ? "-" : "");
  return `${sign}${Math.abs(n).toFixed(dec).replace(".", ",")}%`;
}

const META = {
  "empresa": {
    "nome_fantasia": "VIRTUAL SYSTEM TECNOLOGIA LTDA",
    "razao_social": "VIRTUAL SYSTEM TECNOLOGIA LTDA",
    "cnpj": "26.746.101/0001-08",
    "cidade": "SAO JOSE DOS CAMPOS (SP)"
  },
  "fetched_at": "2026-07-13T16:59:45.409Z",
  "ref_year": 2026,
  "counts": {
    "contas_pagar": 0,
    "contas_receber": 0,
    "categorias": 433,
    "departamentos": 0,
    "clientes": 53
  }
};
const POSICAO_CAIXA = [
  {
    "name": "Saldo realizado YTD",
    "value": 25747.97
  },
  {
    "name": "A receber (futuro)",
    "value": 37576.69
  },
  {
    "name": "A pagar (futuro)",
    "value": 190998.25
  }
];
const COMPOSICAO_DESPESA = [
  {
    "name": "Salários PIX",
    "value": 18535.380000000005,
    "color": "#2dd4bf"
  },
  {
    "name": "Sistema de Gerenciamento",
    "value": 12848.249999999998,
    "color": "#22c55e"
  },
  {
    "name": "Máquinas e Equipamentos",
    "value": 10919.03,
    "color": "#a78bfa"
  },
  {
    "name": "Salários",
    "value": 6232.2,
    "color": "#f59e0b"
  },
  {
    "name": "Emprestimos",
    "value": 6000,
    "color": "#ef4444"
  },
  {
    "name": "Benefícios",
    "value": 5349.24,
    "color": "#6b7686"
  }
];

const SEGMENTS = {
  "realizado": {
    "MONTH_DATA": [
      {
        "m": "janeiro",
        "receita": 0,
        "despesa": 6.05,
        "receita_bruta": 0,
        "impostos": 0
      },
      {
        "m": "fevereiro",
        "receita": 20760,
        "despesa": 0.53,
        "receita_bruta": 20760,
        "impostos": 0
      },
      {
        "m": "março",
        "receita": 0,
        "despesa": 337.84,
        "receita_bruta": 0,
        "impostos": 0
      },
      {
        "m": "abril",
        "receita": 0,
        "despesa": 1.15,
        "receita_bruta": 0,
        "impostos": 0
      },
      {
        "m": "maio",
        "receita": 100,
        "despesa": 338.18,
        "receita_bruta": 100,
        "impostos": 0
      },
      {
        "m": "junho",
        "receita": 40869.689999999995,
        "despesa": 34041.09,
        "receita_bruta": 40869.689999999995,
        "impostos": 0
      },
      {
        "m": "julho",
        "receita": 35121.81,
        "despesa": 36378.69,
        "receita_bruta": 35121.81,
        "impostos": 0
      },
      {
        "m": "agosto",
        "receita": 0,
        "despesa": 0,
        "receita_bruta": 0,
        "impostos": 0
      },
      {
        "m": "setembro",
        "receita": 0,
        "despesa": 0,
        "receita_bruta": 0,
        "impostos": 0
      },
      {
        "m": "outubro",
        "receita": 0,
        "despesa": 0,
        "receita_bruta": 0,
        "impostos": 0
      },
      {
        "m": "novembro",
        "receita": 0,
        "despesa": 0,
        "receita_bruta": 0,
        "impostos": 0
      },
      {
        "m": "dezembro",
        "receita": 0,
        "despesa": 0,
        "receita_bruta": 0,
        "impostos": 0
      }
    ],
    "RECEITA_CATEGORIAS": [
      {
        "name": "Monitoramento Remoto",
        "value": 75991.5,
        "clientes": 12
      },
      {
        "name": "Empréstimo",
        "value": 20760,
        "clientes": 1
      },
      {
        "name": "Portaria/Limpeza",
        "value": 100,
        "clientes": 1
      }
    ],
    "DESPESA_CATEGORIAS": [
      {
        "name": "Salários PIX",
        "value": 18535.380000000005,
        "fornecedores": 12
      },
      {
        "name": "Sistema de Gerenciamento",
        "value": 12848.249999999998,
        "fornecedores": 11
      },
      {
        "name": "Máquinas e Equipamentos",
        "value": 10919.03,
        "fornecedores": 3
      },
      {
        "name": "Salários",
        "value": 6232.2,
        "fornecedores": 2
      },
      {
        "name": "Emprestimos",
        "value": 6000,
        "fornecedores": 1
      },
      {
        "name": "Benefícios",
        "value": 5349.24,
        "fornecedores": 1
      },
      {
        "name": "Central de monitoramento",
        "value": 3182.68,
        "fornecedores": 2
      },
      {
        "name": "Vale Transporte",
        "value": 2545.2,
        "fornecedores": 1
      },
      {
        "name": "VR e VT Dinheiro..",
        "value": 1297.8,
        "fornecedores": 4
      },
      {
        "name": "Férias",
        "value": 1000.5,
        "fornecedores": 2
      },
      {
        "name": "Contabilidade",
        "value": 1000.5,
        "fornecedores": 2
      },
      {
        "name": "Uniformes",
        "value": 774,
        "fornecedores": 1
      }
    ],
    "RECEITA_CLIENTES": [
      {
        "name": "Sem cliente",
        "value": 20760
      },
      {
        "name": "SIA FACILITIES",
        "value": 15271.02
      },
      {
        "name": "SEGPOL",
        "value": 14100
      },
      {
        "name": "CONDOMINIO EDIFICIO ITAPOLIS",
        "value": 13867.86
      },
      {
        "name": "RESIDENCIAL ANA LUCIA",
        "value": 7755.2
      },
      {
        "name": "EDIFICIO INNOVARE",
        "value": 6981.72
      },
      {
        "name": "ASSOCIACAO DOS PROPRIETARIOS E PROMITENTES COMPRADORES DAS UNIDADES AUTONOMAS DO EDIFICIO VILLAGIO S",
        "value": 6354.42
      },
      {
        "name": "CONDOMINIO EDIFICIO CAPRI",
        "value": 5982.56
      },
      {
        "name": "ANDRE LUIZ ISIDORO DA SILVA",
        "value": 2623.6
      },
      {
        "name": "MATEUS HENRIQUE DE FARIA",
        "value": 1148.4
      },
      {
        "name": "CONDOMINIO EDIFICIO PAUL CEZANNE",
        "value": 873.72
      },
      {
        "name": "CONDOMINIO DO EDIFICIO PONTA NEGRA",
        "value": 850
      }
    ],
    "DESPESA_FORNECEDORES": [
      {
        "name": "HERITAGE COMPANY LTDA",
        "value": 10000
      },
      {
        "name": "KATIA MARSON GOMES PEDREIRA VENEZIANI",
        "value": 6000
      },
      {
        "name": "SEGPOL",
        "value": 6000
      },
      {
        "name": "CDC ADMINISTRACAO DE CONVENIOS LTDA",
        "value": 5349.24
      },
      {
        "name": "MARIA ANGELICA DOS REIS",
        "value": 4070.83
      },
      {
        "name": "ANDRE LUIZ ISIDORO DA SILVA",
        "value": 3935.3999999999996
      },
      {
        "name": "LEONARDO MARTINS ALVES GALDEANO",
        "value": 3782.6899999999996
      },
      {
        "name": "MULTISEG",
        "value": 3500.92
      },
      {
        "name": "ROBSON LUIZ DOMINGOS DA SILVA",
        "value": 3498.0899999999997
      },
      {
        "name": "CONSORCIO 123",
        "value": 3238.2
      },
      {
        "name": "ECONDOS",
        "value": 3179.19
      },
      {
        "name": "MATEUS HENRIQUE DE FARIA",
        "value": 2296.8
      }
    ],
    "EXTRATO": [
      [
        "10/07/2026",
        "Receita Bruta de Vendas",
        "Monitoramento Remoto",
        "CONDOMINIO EDIFICIO PAUL CEZANNE",
        436.86,
        "RECEBIDO"
      ],
      [
        "10/07/2026",
        "Operações",
        "Sistema de Gerenciamento",
        "Sem cliente",
        -0.99,
        "PAGO"
      ],
      [
        "08/07/2026",
        "Operações",
        "Uber",
        "UBER DO BRASIL TECNOLOGIA LTDA.",
        -200,
        "PAGO"
      ],
      [
        "08/07/2026",
        "Operações",
        "Contribuição Sindical Odonto",
        "Sem cliente",
        -0.5,
        "PAGO"
      ],
      [
        "07/07/2026",
        "Receita Bruta de Vendas",
        "Monitoramento Remoto",
        "ANDRE LUIZ ISIDORO DA SILVA",
        1311.8,
        "RECEBIDO"
      ],
      [
        "07/07/2026",
        "Receita Bruta de Vendas",
        "Monitoramento Remoto",
        "CONDOMINIO DO EDIFICIO PONTA NEGRA",
        425,
        "RECEBIDO"
      ],
      [
        "07/07/2026",
        "Receita Bruta de Vendas",
        "Monitoramento Remoto",
        "MATEUS HENRIQUE DE FARIA",
        1148.4,
        "RECEBIDO"
      ],
      [
        "07/07/2026",
        "Receita Bruta de Vendas",
        "Monitoramento Remoto",
        "ANDRE LUIZ ISIDORO DA SILVA",
        1311.8,
        "RECEBIDO"
      ],
      [
        "07/07/2026",
        "Receita Bruta de Vendas",
        "Monitoramento Remoto",
        "SEGPOL",
        8000,
        "RECEBIDO"
      ],
      [
        "07/07/2026",
        "Receita Bruta de Vendas",
        "Monitoramento Remoto",
        "AIRBNB PLATAFORMA DIGITAL LTDA",
        283,
        "RECEBIDO"
      ],
      [
        "07/07/2026",
        "Despesas com Pessoal",
        "Salários",
        "ANDRE LUIZ ISIDORO DA SILVA",
        -1311.8,
        "PAGO"
      ],
      [
        "07/07/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "Sem cliente",
        -3.99,
        "PAGO"
      ],
      [
        "07/07/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "Sem cliente",
        -0.99,
        "PAGO"
      ],
      [
        "07/07/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "LEONARDO MARTINS ALVES GALDEANO",
        -3114.89,
        "PAGO"
      ],
      [
        "07/07/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "Sem cliente",
        -0.5,
        "PAGO"
      ],
      [
        "07/07/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "MARIA ANGELICA DOS REIS",
        -3541.63,
        "PAGO"
      ],
      [
        "07/07/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "Sem cliente",
        -0.5,
        "PAGO"
      ],
      [
        "07/07/2026",
        "Despesas com Pessoal",
        "Salários",
        "MATEUS HENRIQUE DE FARIA",
        -1148.4,
        "PAGO"
      ],
      [
        "07/07/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "MIGUEL ZINANI DE OLIVEIRA",
        -2029.09,
        "PAGO"
      ],
      [
        "07/07/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "Sem cliente",
        -0.5,
        "PAGO"
      ],
      [
        "07/07/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "Sem cliente",
        -3.99,
        "PAGO"
      ],
      [
        "07/07/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "ROBSON LUIZ DOMINGOS DA SILVA",
        -2855.49,
        "PAGO"
      ],
      [
        "07/07/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "Sem cliente",
        -0.5,
        "PAGO"
      ],
      [
        "07/07/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "SIDNEIA MORENA DE SOUZA",
        -1361.84,
        "PAGO"
      ],
      [
        "07/07/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "Sem cliente",
        -0.5,
        "PAGO"
      ],
      [
        "07/07/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "YAN OLIVEIRA PRADO DE ALMEIDA",
        -697.71,
        "PAGO"
      ],
      [
        "07/07/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "Sem cliente",
        -0.5,
        "PAGO"
      ],
      [
        "07/07/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "AMANDA MAYUMI KOBAYASHI",
        -2014.35,
        "PAGO"
      ],
      [
        "07/07/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "JOSIANA DA SILVA",
        -828.43,
        "PAGO"
      ],
      [
        "07/07/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "FABRICIO RAMOS DOS SANTOS",
        -1008.58,
        "PAGO"
      ],
      [
        "07/07/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "Sem cliente",
        -0.5,
        "PAGO"
      ],
      [
        "07/07/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "Sem cliente",
        -0.5,
        "PAGO"
      ],
      [
        "07/07/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "Sem cliente",
        -0.5,
        "PAGO"
      ],
      [
        "07/07/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "Sem cliente",
        -0.5,
        "PAGO"
      ],
      [
        "07/07/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "JONATHAN HENRIQUE DA SILVA SANTOS",
        -992.13,
        "PAGO"
      ],
      [
        "07/07/2026",
        "Despesas com Pessoal",
        "Salários",
        "ANDRE LUIZ ISIDORO DA SILVA",
        -1311.8,
        "PAGO"
      ],
      [
        "07/07/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "Sem cliente",
        -3.99,
        "PAGO"
      ],
      [
        "07/07/2026",
        "Despesas com Pessoal",
        "Salários",
        "MATEUS HENRIQUE DE FARIA",
        -1148.4,
        "PAGO"
      ],
      [
        "07/07/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "Sem cliente",
        -0.5,
        "PAGO"
      ],
      [
        "07/07/2026",
        "Despesas Administrativas",
        "Contabilidade",
        "AGYLIS CONTABILIDADE LTDA",
        -1000,
        "PAGO"
      ],
      [
        "07/07/2026",
        "Despesas Administrativas",
        "Contabilidade",
        "Sem cliente",
        -0.5,
        "PAGO"
      ],
      [
        "07/07/2026",
        "Despesas com Pessoal",
        "Salários",
        "ANDRE LUIZ ISIDORO DA SILVA",
        -1311.8,
        "PAGO"
      ],
      [
        "07/07/2026",
        "Despesas com Pessoal",
        "Pensão Alimentícia",
        "Sem cliente",
        -0.5,
        "PAGO"
      ],
      [
        "07/07/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "SIA FACILITIES",
        -71.79,
        "PAGO"
      ],
      [
        "07/07/2026",
        "Operações",
        "Exames Admissional/Demissional",
        "Sem cliente",
        -0.5,
        "PAGO"
      ],
      [
        "07/07/2026",
        "Operações",
        "Certificado Digital",
        "54.292.368 ROGERIO DE SOUSA DOS SANTOS",
        -250,
        "PAGO"
      ],
      [
        "07/07/2026",
        "Operações",
        "Exames Admissional/Demissional",
        "Sem cliente",
        -0.5,
        "PAGO"
      ],
      [
        "07/07/2026",
        "Despesas com Pessoal",
        "VR e VT Dinheiro..",
        "LEONARDO MARTINS ALVES GALDEANO",
        -340.2,
        "PAGO"
      ],
      [
        "07/07/2026",
        "Deduções de Receita",
        "Central de monitoramento",
        "Sem cliente",
        -0.5,
        "PAGO"
      ],
      [
        "07/07/2026",
        "Despesas com Pessoal",
        "VR e VT Dinheiro..",
        "LEANDRO RIBEIRO CAVALCANTE DE SOUZA LIMA",
        -340.2,
        "PAGO"
      ],
      [
        "07/07/2026",
        "Deduções de Receita",
        "Central de monitoramento",
        "Sem cliente",
        -0.5,
        "PAGO"
      ],
      [
        "07/07/2026",
        "Despesas com Pessoal",
        "VR e VT Dinheiro..",
        "ROBSON LUIZ DOMINGOS DA SILVA",
        -340.2,
        "PAGO"
      ],
      [
        "07/07/2026",
        "Deduções de Receita",
        "Central de monitoramento",
        "Sem cliente",
        -0.5,
        "PAGO"
      ],
      [
        "07/07/2026",
        "Deduções de Receita",
        "Central de monitoramento",
        "ECONDOS",
        -3179.19,
        "PAGO"
      ],
      [
        "07/07/2026",
        "Operações",
        "Hospedagem Hotel",
        "AIRBNB PLATAFORMA DIGITAL LTDA",
        -283,
        "PAGO"
      ],
      [
        "07/07/2026",
        "Deduções de Receita",
        "Central de monitoramento",
        "Sem cliente",
        -0.5,
        "PAGO"
      ],
      [
        "07/07/2026",
        "Deduções de Receita",
        "Central de monitoramento",
        "Sem cliente",
        -0.5,
        "PAGO"
      ],
      [
        "07/07/2026",
        "Despesas com Pessoal",
        "VR e VT Dinheiro..",
        "MARIA ANGELICA DOS REIS",
        -277.2,
        "PAGO"
      ],
      [
        "07/07/2026",
        "Operações",
        "Sistema de Gerenciamento",
        "MONI SOFTWARE LTDA",
        -188.29,
        "PAGO"
      ],
      [
        "06/07/2026",
        "Receita Bruta de Vendas",
        "Monitoramento Remoto",
        "CONDOMINIO EDIFICIO ITAPOLIS",
        6933.93,
        "RECEBIDO"
      ],
      [
        "06/07/2026",
        "Receita Bruta de Vendas",
        "Monitoramento Remoto",
        "SIA FACILITIES",
        15271.02,
        "RECEBIDO"
      ],
      [
        "06/07/2026",
        "Despesas com Pessoal",
        "Vale Transporte",
        "CONSORCIO 123",
        -2545.2,
        "PAGO"
      ],
      [
        "06/07/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "Sem cliente",
        -0.99,
        "PAGO"
      ],
      [
        "01/07/2026",
        "Deduções de Receita",
        "Uniformes",
        "CHARLEVILLE",
        -774,
        "PAGO"
      ],
      [
        "01/07/2026",
        "Operações",
        "Sistema de Gerenciamento",
        "Sem cliente",
        -0.5,
        "PAGO"
      ],
      [
        "01/07/2026",
        "Operações",
        "Sistema de Gerenciamento",
        "TEKNOLINK SJC",
        -1886.64,
        "PAGO"
      ],
      [
        "01/07/2026",
        "Operações",
        "Sistema de Gerenciamento",
        "Sem cliente",
        -0.5,
        "PAGO"
      ],
      [
        "29/06/2026",
        "Despesas Administrativas",
        "Emprestimos",
        "SEGPOL",
        -4000,
        "PAGO"
      ],
      [
        "29/06/2026",
        "Deduções de Receita",
        "Máquinas e Equipamentos",
        "Sem cliente",
        -0.5,
        "PAGO"
      ],
      [
        "26/06/2026",
        "Despesas Administrativas",
        "Emprestimos",
        "SEGPOL",
        -2000,
        "PAGO"
      ],
      [
        "26/06/2026",
        "Operações",
        "Sistema de Gerenciamento",
        "Sem cliente",
        -0.5,
        "PAGO"
      ],
      [
        "19/06/2026",
        "Deduções de Receita",
        "Máquinas e Equipamentos",
        "MULTISEG",
        -917.53,
        "PAGO"
      ],
      [
        "19/06/2026",
        "Operações",
        "Benefícios",
        "CDC ADMINISTRACAO DE CONVENIOS LTDA",
        -5349.24,
        "PAGO"
      ],
      [
        "19/06/2026",
        "Operações",
        "Sistema de Gerenciamento",
        "MONI SOFTWARE LTDA",
        -189.07,
        "PAGO"
      ],
      [
        "19/06/2026",
        "Deduções de Receita",
        "Máquinas e Equipamentos",
        "Sem cliente",
        -0.5,
        "PAGO"
      ],
      [
        "19/06/2026",
        "Despesas com Pessoal",
        "Férias",
        "LIDIANE CRISTINA DA SILVA",
        -1000,
        "PAGO"
      ],
      [
        "19/06/2026",
        "Despesas com Pessoal",
        "Férias",
        "Sem cliente",
        -0.5,
        "PAGO"
      ],
      [
        "18/06/2026",
        "Receita Bruta de Vendas",
        "Monitoramento Remoto",
        "RESIDENCIAL ANA LUCIA",
        7755.2,
        "RECEBIDO"
      ],
      [
        "18/06/2026",
        "Deduções de Receita",
        "Central de monitoramento",
        "Sem cliente",
        -0.99,
        "PAGO"
      ],
      [
        "18/06/2026",
        "Deduções de Receita",
        "Máquinas e Equipamentos",
        "HERITAGE COMPANY LTDA",
        -10000,
        "PAGO"
      ],
      [
        "18/06/2026",
        "Deduções de Receita",
        "Máquinas e Equipamentos",
        "Sem cliente",
        -0.5,
        "PAGO"
      ],
      [
        "16/06/2026",
        "Receita Bruta de Vendas",
        "Monitoramento Remoto",
        "EDIFICIO INNOVARE",
        6981.72,
        "RECEBIDO"
      ],
      [
        "16/06/2026",
        "Receita Bruta de Vendas",
        "Monitoramento Remoto",
        "CONDOMINIO EDIFICIO CAPRI",
        5982.56,
        "RECEBIDO"
      ],
      [
        "16/06/2026",
        "Operações",
        "Sistema de Gerenciamento",
        "Sem cliente",
        -0.99,
        "PAGO"
      ],
      [
        "16/06/2026",
        "Operações",
        "Sistema de Gerenciamento",
        "Sem cliente",
        -0.99,
        "PAGO"
      ],
      [
        "15/06/2026",
        "Receita Bruta de Vendas",
        "Monitoramento Remoto",
        "ASSOCIACAO DOS PROPRIETARIOS E PROMITENTES COMPRADORES DAS UNIDADES AUTONOMAS DO EDIFICIO VILLAGIO S",
        6354.42,
        "RECEBIDO"
      ],
      [
        "15/06/2026",
        "Operações",
        "Sistema de Gerenciamento",
        "CONSORCIO 123",
        -693,
        "PAGO"
      ],
      [
        "15/06/2026",
        "Operações",
        "Sistema de Gerenciamento",
        "Sem cliente",
        -0.99,
        "PAGO"
      ],
      [
        "12/06/2026",
        "Operações",
        "Sistema de Gerenciamento",
        "MARIA ANGELICA DOS REIS",
        -252,
        "PAGO"
      ],
      [
        "12/06/2026",
        "Operações",
        "Sistema de Gerenciamento",
        "ROBSON LUIZ DOMINGOS DA SILVA",
        -302.4,
        "PAGO"
      ],
      [
        "12/06/2026",
        "Operações",
        "Sistema de Gerenciamento",
        "LEONARDO MARTINS ALVES GALDEANO",
        -327.6,
        "PAGO"
      ],
      [
        "12/06/2026",
        "Operações",
        "Sistema de Gerenciamento",
        "Sem cliente",
        -0.5,
        "PAGO"
      ],
      [
        "12/06/2026",
        "Operações",
        "Sistema de Gerenciamento",
        "Sem cliente",
        -0.5,
        "PAGO"
      ],
      [
        "12/06/2026",
        "Operações",
        "Sistema de Gerenciamento",
        "Sem cliente",
        -0.5,
        "PAGO"
      ],
      [
        "12/06/2026",
        "Operações",
        "Sistema de Gerenciamento",
        "MULTISEG",
        -1182.59,
        "PAGO"
      ],
      [
        "12/06/2026",
        "Operações",
        "Sistema de Gerenciamento",
        "MULTISEG",
        -1400.8,
        "PAGO"
      ],
      [
        "12/06/2026",
        "Operações",
        "Sistema de Gerenciamento",
        "Sem cliente",
        -0.5,
        "PAGO"
      ],
      [
        "12/06/2026",
        "Operações",
        "Sistema de Gerenciamento",
        "Sem cliente",
        -0.5,
        "PAGO"
      ],
      [
        "10/06/2026",
        "Receita Bruta de Vendas",
        "Monitoramento Remoto",
        "CONDOMINIO EDIFICIO PAUL CEZANNE",
        436.86,
        "RECEBIDO"
      ],
      [
        "10/06/2026",
        "Receita Bruta de Vendas",
        "Monitoramento Remoto",
        "SEGPOL",
        6000,
        "RECEBIDO"
      ],
      [
        "10/06/2026",
        "Operações",
        "Sistema de Gerenciamento",
        "IFOOD.COM AGENCIA DE RESTAURANTES ONLINE S.A.",
        -78.78,
        "PAGO"
      ],
      [
        "10/06/2026",
        "Operações",
        "Sistema de Gerenciamento",
        "Sem cliente",
        -0.5,
        "PAGO"
      ],
      [
        "10/06/2026",
        "Operações",
        "Sistema de Gerenciamento",
        "Sem cliente",
        -0.99,
        "PAGO"
      ],
      [
        "10/06/2026",
        "Operações",
        "Sistema de Gerenciamento",
        "SINDEEPRES",
        -198.17,
        "PAGO"
      ],
      [
        "10/06/2026",
        "Operações",
        "Sistema de Gerenciamento",
        "SINDEEPRES",
        -136.48,
        "PAGO"
      ],
      [
        "10/06/2026",
        "Operações",
        "Sistema de Gerenciamento",
        "KATIA MARSON GOMES PEDREIRA VENEZIANI",
        -6000,
        "PAGO"
      ],
      [
        "10/06/2026",
        "Operações",
        "Sistema de Gerenciamento",
        "Sem cliente",
        -0.5,
        "PAGO"
      ],
      [
        "08/06/2026",
        "Receita Bruta de Vendas",
        "Monitoramento Remoto",
        "CONDOMINIO DO EDIFICIO PONTA NEGRA",
        425,
        "RECEBIDO"
      ],
      [
        "08/06/2026",
        "Operações",
        "Sistema de Gerenciamento",
        "Sem cliente",
        -0.99,
        "PAGO"
      ],
      [
        "05/06/2026",
        "Receita Bruta de Vendas",
        "Monitoramento Remoto",
        "CONDOMINIO EDIFICIO ITAPOLIS",
        6933.93,
        "RECEBIDO"
      ],
      [
        "05/06/2026",
        "Operações",
        "Sistema de Gerenciamento",
        "Sem cliente",
        -0.99,
        "PAGO"
      ],
      [
        "05/06/2026",
        "Operações",
        "Sistema de Gerenciamento",
        "Sem cliente",
        -0.5,
        "PAGO"
      ],
      [
        "26/05/2026",
        "Despesas Financeiras",
        "Tarifas Bancárias",
        "Sem cliente",
        -168.5,
        "PAGO"
      ],
      [
        "26/05/2026",
        "Despesas Financeiras",
        "Tarifas Bancárias",
        "Sem cliente",
        -168.5,
        "PAGO"
      ],
      [
        "25/05/2026",
        "Receita Bruta de Vendas",
        "Portaria/Limpeza",
        "SEGPOL",
        100,
        "RECEBIDO"
      ],
      [
        "06/05/2026",
        "Operações",
        "Conta Garantida",
        "Sem cliente",
        -1.18,
        "PAGO"
      ],
      [
        "06/04/2026",
        "Operações",
        "Conta Garantida",
        "Sem cliente",
        -1.15,
        "PAGO"
      ],
      [
        "20/03/2026",
        "Despesas Financeiras",
        "Tarifas Bancárias",
        "Sem cliente",
        -168.5,
        "PAGO"
      ],
      [
        "20/03/2026",
        "Despesas Financeiras",
        "Tarifas Bancárias",
        "Sem cliente",
        -168.5,
        "PAGO"
      ],
      [
        "04/03/2026",
        "Operações",
        "Conta Garantida",
        "Sem cliente",
        -0.84,
        "PAGO"
      ],
      [
        "09/02/2026",
        "Operações",
        "Empréstimo",
        "Sem cliente",
        20760,
        "RECEBIDO"
      ],
      [
        "04/02/2026",
        "Operações",
        "Conta Garantida",
        "Sem cliente",
        -0.53,
        "PAGO"
      ],
      [
        "15/01/2026",
        "Despesas Financeiras",
        "Tarifas Bancárias",
        "Sem cliente",
        -6,
        "PAGO"
      ],
      [
        "06/01/2026",
        "Operações",
        "Conta Garantida",
        "Sem cliente",
        -0.05,
        "PAGO"
      ],
      [
        "30/10/2025",
        "Operações",
        "Empréstimos Bancários",
        "Sem cliente",
        1060,
        "RECEBIDO"
      ],
      [
        "30/10/2025",
        "Operações",
        "Empréstimos Bancários",
        "Sem cliente",
        6092.43,
        "RECEBIDO"
      ],
      [
        "30/10/2025",
        "Despesas com Pessoal",
        "Salários",
        "Sem cliente",
        -266.7,
        "PAGO"
      ],
      [
        "30/10/2025",
        "Despesas com Pessoal",
        "Salários",
        "Sem cliente",
        -483.3,
        "PAGO"
      ],
      [
        "30/10/2025",
        "Operações",
        "VR VA VT Monitoramento",
        "MIGUEL ZINANI DE OLIVEIRA",
        -170,
        "PAGO"
      ],
      [
        "30/10/2025",
        "Despesas com Pessoal",
        "Salários",
        "SIDNEIA MORENA DE SOUZA",
        -140,
        "PAGO"
      ],
      [
        "30/10/2025",
        "Operações",
        "Simples Nascional DAS",
        "Sem cliente",
        -2514.59,
        "PAGO"
      ],
      [
        "30/10/2025",
        "Operações",
        "FGTS",
        "Sem cliente",
        -1719.29,
        "PAGO"
      ],
      [
        "30/10/2025",
        "Operações",
        "Simples Nascional DAS",
        "Sem cliente",
        -1853.55,
        "PAGO"
      ],
      [
        "27/10/2025",
        "Operações",
        "Empréstimos Bancários",
        "Sem cliente",
        2318.33,
        "RECEBIDO"
      ],
      [
        "27/10/2025",
        "Despesas Financeiras",
        "Tarifas Bancárias",
        "Sem cliente",
        -4.47,
        "PAGO"
      ],
      [
        "27/10/2025",
        "Operações",
        "Prestação de Serviços",
        "Sem cliente",
        -1400.8,
        "PAGO"
      ],
      [
        "27/10/2025",
        "Operações",
        "Prestação de Serviços",
        "Sem cliente",
        -917.53,
        "PAGO"
      ],
      [
        "24/10/2025",
        "Despesas com Pessoal",
        "Retirada CL",
        "Sem cliente",
        -15311.64,
        "PAGO"
      ],
      [
        "23/10/2025",
        "Operações",
        "Portaria 24 Hs....",
        "Sem cliente",
        7076.4,
        "RECEBIDO"
      ],
      [
        "23/10/2025",
        "Despesas Administrativas",
        "Emprestimos",
        "Sem cliente",
        -900,
        "PAGO"
      ],
      [
        "22/10/2025",
        "Operações",
        "Portaria 24 Hs....",
        "Sem cliente",
        5623.1,
        "RECEBIDO"
      ],
      [
        "22/10/2025",
        "Operações",
        "Prestação de Serviços",
        "Sem cliente",
        -1000,
        "PAGO"
      ],
      [
        "22/10/2025",
        "Operações",
        "Prestação de Serviços",
        "Sem cliente",
        -76.5,
        "PAGO"
      ],
      [
        "22/10/2025",
        "Operações",
        "Prestação de Serviços",
        "Sem cliente",
        -2878.35,
        "PAGO"
      ],
      [
        "22/10/2025",
        "Despesas com Pessoal",
        "Salários",
        "ROBSON LUIZ DOMINGOS DA SILVA",
        -516.66,
        "PAGO"
      ],
      [
        "22/10/2025",
        "Operações",
        "VR VA VT Monitoramento",
        "MIGUEL ZINANI DE OLIVEIRA",
        -335,
        "PAGO"
      ],
      [
        "21/10/2025",
        "Operações",
        "Portaria 24 Hs....",
        "Sem cliente",
        6370.62,
        "RECEBIDO"
      ],
      [
        "21/10/2025",
        "Deduções de Receita",
        "Material de limpeza",
        "Sem cliente",
        -415.76,
        "PAGO"
      ],
      [
        "21/10/2025",
        "Operações",
        "VR VA VT Monitoramento",
        "MIGUEL ZINANI DE OLIVEIRA",
        -280,
        "PAGO"
      ],
      [
        "21/10/2025",
        "Despesas com Pessoal",
        "Salários",
        "ROBSON LUIZ DOMINGOS DA SILVA",
        -100,
        "PAGO"
      ],
      [
        "21/10/2025",
        "Despesas com Pessoal",
        "Salários",
        "JONATHAN HENRIQUE DA SILVA SANTOS",
        -320,
        "PAGO"
      ],
      [
        "21/10/2025",
        "Despesas com Pessoal",
        "Salários",
        "LEONARDO MARTINS ALVES GALDEANO",
        -1400,
        "PAGO"
      ],
      [
        "21/10/2025",
        "Operações",
        "VR VA VT Monitoramento",
        "FABRICIO RAMOS DOS SANTOS",
        -920,
        "PAGO"
      ],
      [
        "17/10/2025",
        "Operações",
        "Portaria 24 Hs....",
        "Sem cliente",
        411.16,
        "RECEBIDO"
      ],
      [
        "16/10/2025",
        "Operações",
        "Portaria 24 Hs....",
        "Sem cliente",
        5972.63,
        "RECEBIDO"
      ],
      [
        "16/10/2025",
        "Operações",
        "Prest Serv Extra",
        "Sem cliente",
        -1000,
        "PAGO"
      ],
      [
        "15/10/2025",
        "Operações",
        "Empréstimos Bancários",
        "Sem cliente",
        7477.86,
        "RECEBIDO"
      ],
      [
        "15/10/2025",
        "Despesas com Pessoal",
        "Salários",
        "Sem cliente",
        -3234.11,
        "PAGO"
      ],
      [
        "15/10/2025",
        "Operações",
        "Prestação de Serviços",
        "Sem cliente",
        -3545.5,
        "PAGO"
      ],
      [
        "15/10/2025",
        "Operações",
        "VR VA VT Monitoramento",
        "Sem cliente",
        -150,
        "PAGO"
      ],
      [
        "15/10/2025",
        "Operações",
        "VR VA VT Monitoramento",
        "Sem cliente",
        -150,
        "PAGO"
      ],
      [
        "15/10/2025",
        "Despesas com Pessoal",
        "Salários",
        "JONATHAN HENRIQUE DA SILVA SANTOS",
        -150,
        "PAGO"
      ],
      [
        "15/10/2025",
        "Operações",
        "VR VA VT Monitoramento",
        "Sem cliente",
        -150,
        "PAGO"
      ],
      [
        "15/10/2025",
        "Despesas com Pessoal",
        "Salários",
        "Sem cliente",
        -433.2,
        "PAGO"
      ],
      [
        "15/10/2025",
        "Despesas com Pessoal",
        "Salários",
        "ROBSON LUIZ DOMINGOS DA SILVA",
        -183.3,
        "PAGO"
      ],
      [
        "14/10/2025",
        "Operações",
        "Portaria 24 Hs....",
        "Sem cliente",
        400,
        "RECEBIDO"
      ],
      [
        "13/10/2025",
        "Receita Bruta de Vendas",
        "MOV TIT COB DISP 13/10S",
        "Sem cliente",
        558.12,
        "RECEBIDO"
      ],
      [
        "13/10/2025",
        "Despesas Financeiras",
        "Tarifas Bancárias",
        "Sem cliente",
        -1.99,
        "PAGO"
      ],
      [
        "10/10/2025",
        "Operações",
        "Empréstimos Bancários",
        "Sem cliente",
        177.59,
        "RECEBIDO"
      ],
      [
        "10/10/2025",
        "Operações",
        "Empréstimos Bancários",
        "Sem cliente",
        177.59,
        "RECEBIDO"
      ],
      [
        "10/10/2025",
        "Operações",
        "Prestação de Serviços",
        "Sem cliente",
        -254.79,
        "PAGO"
      ],
      [
        "10/10/2025",
        "Operações",
        "Prestação de Serviços",
        "Sem cliente",
        -69.17,
        "PAGO"
      ],
      [
        "10/10/2025",
        "Despesas Administrativas",
        "Emprestimos",
        "Sem cliente",
        -177.59,
        "PAGO"
      ],
      [
        "10/10/2025",
        "Despesas Administrativas",
        "Emprestimos",
        "Sem cliente",
        -177.59,
        "PAGO"
      ],
      [
        "09/10/2025",
        "Operações",
        "Portaria 24 Hs....",
        "Sem cliente",
        1305.86,
        "RECEBIDO"
      ],
      [
        "09/10/2025",
        "Receita Bruta de Vendas",
        "Portaria Remota",
        "Sem cliente",
        100,
        "RECEBIDO"
      ],
      [
        "09/10/2025",
        "Operações",
        "Prestação de Serviços",
        "Sem cliente",
        -1000.33,
        "PAGO"
      ],
      [
        "08/10/2025",
        "Receita Bruta de Vendas",
        "Portaria/Limpeza",
        "Sem cliente",
        20,
        "RECEBIDO"
      ],
      [
        "07/10/2025",
        "Despesas com Pessoal",
        "Salários",
        "Sem cliente",
        -7478.27,
        "PAGO"
      ],
      [
        "07/10/2025",
        "Operações",
        "Prestação de Serviços",
        "Sem cliente",
        -548.01,
        "PAGO"
      ],
      [
        "07/10/2025",
        "Operações",
        "Prestação de Serviços",
        "Sem cliente",
        -474.09,
        "PAGO"
      ],
      [
        "07/10/2025",
        "Operações",
        "Prestação de Serviços",
        "Sem cliente",
        -1635,
        "PAGO"
      ],
      [
        "07/10/2025",
        "Operações",
        "Prestação de Serviços",
        "Sem cliente",
        -217.73,
        "PAGO"
      ],
      [
        "07/10/2025",
        "Despesas com Pessoal",
        "Salários",
        "MARIA ANGELICA DOS REIS",
        -1784.55,
        "PAGO"
      ],
      [
        "07/10/2025",
        "Despesas com Pessoal",
        "Salários",
        "Sem cliente",
        -2046.31,
        "PAGO"
      ],
      [
        "07/10/2025",
        "Despesas com Pessoal",
        "Salários",
        "LEONARDO MARTINS ALVES GALDEANO",
        -1702.67,
        "PAGO"
      ],
      [
        "07/10/2025",
        "Despesas com Pessoal",
        "Salários",
        "ROBSON LUIZ DOMINGOS DA SILVA",
        -1733.3,
        "PAGO"
      ],
      [
        "07/10/2025",
        "Despesas com Pessoal",
        "Salários",
        "ROBSON LUIZ DOMINGOS DA SILVA",
        -1183.3,
        "PAGO"
      ],
      [
        "07/10/2025",
        "Despesas com Pessoal",
        "Salários",
        "Sem cliente",
        -716.6,
        "PAGO"
      ],
      [
        "07/10/2025",
        "Operações",
        "Prest Serv Extra",
        "Sem cliente",
        -518.87,
        "PAGO"
      ],
      [
        "07/10/2025",
        "Operações",
        "Serviço Esporádicos",
        "Sem cliente",
        -557.28,
        "PAGO"
      ],
      [
        "02/10/2025",
        "Operações",
        "Conta Garantida",
        "Sem cliente",
        -0.19,
        "PAGO"
      ],
      [
        "02/10/2025",
        "Operações",
        "IOF",
        "Sem cliente",
        -0.1,
        "PAGO"
      ],
      [
        "02/10/2025",
        "Despesas Financeiras",
        "Tarifas Bancárias",
        "Sem cliente",
        -19.2,
        "PAGO"
      ],
      [
        "02/10/2025",
        "Despesas Financeiras",
        "Tarifas Bancárias",
        "Sem cliente",
        -37.4,
        "PAGO"
      ],
      [
        "01/10/2025",
        "Operações",
        "Caixinha",
        "Sem cliente",
        -375.65,
        "PAGO"
      ],
      [
        "30/09/2025",
        "Despesas Financeiras",
        "Tarifas Bancárias",
        "Sem cliente",
        -2.98,
        "PAGO"
      ],
      [
        "30/09/2025",
        "Despesas Financeiras",
        "Tarifas Bancárias",
        "Sem cliente",
        -6,
        "PAGO"
      ],
      [
        "30/09/2025",
        "Despesas Financeiras",
        "Tarifas Bancárias",
        "Sem cliente",
        -6.8,
        "PAGO"
      ],
      [
        "29/09/2025",
        "Operações",
        "Tarifas PIX",
        "Sem cliente",
        -4.47,
        "PAGO"
      ]
    ],
    "EXTRATO_RECEITAS": [
      [
        "10/07/2026",
        "Receita Bruta de Vendas",
        "Monitoramento Remoto",
        "CONDOMINIO EDIFICIO PAUL CEZANNE",
        436.86,
        "RECEBIDO"
      ],
      [
        "07/07/2026",
        "Receita Bruta de Vendas",
        "Monitoramento Remoto",
        "ANDRE LUIZ ISIDORO DA SILVA",
        1311.8,
        "RECEBIDO"
      ],
      [
        "07/07/2026",
        "Receita Bruta de Vendas",
        "Monitoramento Remoto",
        "CONDOMINIO DO EDIFICIO PONTA NEGRA",
        425,
        "RECEBIDO"
      ],
      [
        "07/07/2026",
        "Receita Bruta de Vendas",
        "Monitoramento Remoto",
        "MATEUS HENRIQUE DE FARIA",
        1148.4,
        "RECEBIDO"
      ],
      [
        "07/07/2026",
        "Receita Bruta de Vendas",
        "Monitoramento Remoto",
        "ANDRE LUIZ ISIDORO DA SILVA",
        1311.8,
        "RECEBIDO"
      ],
      [
        "07/07/2026",
        "Receita Bruta de Vendas",
        "Monitoramento Remoto",
        "SEGPOL",
        8000,
        "RECEBIDO"
      ],
      [
        "07/07/2026",
        "Receita Bruta de Vendas",
        "Monitoramento Remoto",
        "AIRBNB PLATAFORMA DIGITAL LTDA",
        283,
        "RECEBIDO"
      ],
      [
        "06/07/2026",
        "Receita Bruta de Vendas",
        "Monitoramento Remoto",
        "CONDOMINIO EDIFICIO ITAPOLIS",
        6933.93,
        "RECEBIDO"
      ],
      [
        "06/07/2026",
        "Receita Bruta de Vendas",
        "Monitoramento Remoto",
        "SIA FACILITIES",
        15271.02,
        "RECEBIDO"
      ],
      [
        "18/06/2026",
        "Receita Bruta de Vendas",
        "Monitoramento Remoto",
        "RESIDENCIAL ANA LUCIA",
        7755.2,
        "RECEBIDO"
      ],
      [
        "16/06/2026",
        "Receita Bruta de Vendas",
        "Monitoramento Remoto",
        "EDIFICIO INNOVARE",
        6981.72,
        "RECEBIDO"
      ],
      [
        "16/06/2026",
        "Receita Bruta de Vendas",
        "Monitoramento Remoto",
        "CONDOMINIO EDIFICIO CAPRI",
        5982.56,
        "RECEBIDO"
      ],
      [
        "15/06/2026",
        "Receita Bruta de Vendas",
        "Monitoramento Remoto",
        "ASSOCIACAO DOS PROPRIETARIOS E PROMITENTES COMPRADORES DAS UNIDADES AUTONOMAS DO EDIFICIO VILLAGIO S",
        6354.42,
        "RECEBIDO"
      ],
      [
        "10/06/2026",
        "Receita Bruta de Vendas",
        "Monitoramento Remoto",
        "CONDOMINIO EDIFICIO PAUL CEZANNE",
        436.86,
        "RECEBIDO"
      ],
      [
        "10/06/2026",
        "Receita Bruta de Vendas",
        "Monitoramento Remoto",
        "SEGPOL",
        6000,
        "RECEBIDO"
      ],
      [
        "08/06/2026",
        "Receita Bruta de Vendas",
        "Monitoramento Remoto",
        "CONDOMINIO DO EDIFICIO PONTA NEGRA",
        425,
        "RECEBIDO"
      ],
      [
        "05/06/2026",
        "Receita Bruta de Vendas",
        "Monitoramento Remoto",
        "CONDOMINIO EDIFICIO ITAPOLIS",
        6933.93,
        "RECEBIDO"
      ],
      [
        "25/05/2026",
        "Receita Bruta de Vendas",
        "Portaria/Limpeza",
        "SEGPOL",
        100,
        "RECEBIDO"
      ],
      [
        "09/02/2026",
        "Operações",
        "Empréstimo",
        "Sem cliente",
        20760,
        "RECEBIDO"
      ],
      [
        "30/10/2025",
        "Operações",
        "Empréstimos Bancários",
        "Sem cliente",
        1060,
        "RECEBIDO"
      ],
      [
        "30/10/2025",
        "Operações",
        "Empréstimos Bancários",
        "Sem cliente",
        6092.43,
        "RECEBIDO"
      ],
      [
        "27/10/2025",
        "Operações",
        "Empréstimos Bancários",
        "Sem cliente",
        2318.33,
        "RECEBIDO"
      ],
      [
        "23/10/2025",
        "Operações",
        "Portaria 24 Hs....",
        "Sem cliente",
        7076.4,
        "RECEBIDO"
      ],
      [
        "22/10/2025",
        "Operações",
        "Portaria 24 Hs....",
        "Sem cliente",
        5623.1,
        "RECEBIDO"
      ],
      [
        "21/10/2025",
        "Operações",
        "Portaria 24 Hs....",
        "Sem cliente",
        6370.62,
        "RECEBIDO"
      ],
      [
        "17/10/2025",
        "Operações",
        "Portaria 24 Hs....",
        "Sem cliente",
        411.16,
        "RECEBIDO"
      ],
      [
        "16/10/2025",
        "Operações",
        "Portaria 24 Hs....",
        "Sem cliente",
        5972.63,
        "RECEBIDO"
      ],
      [
        "15/10/2025",
        "Operações",
        "Empréstimos Bancários",
        "Sem cliente",
        7477.86,
        "RECEBIDO"
      ],
      [
        "14/10/2025",
        "Operações",
        "Portaria 24 Hs....",
        "Sem cliente",
        400,
        "RECEBIDO"
      ],
      [
        "13/10/2025",
        "Receita Bruta de Vendas",
        "MOV TIT COB DISP 13/10S",
        "Sem cliente",
        558.12,
        "RECEBIDO"
      ],
      [
        "10/10/2025",
        "Operações",
        "Empréstimos Bancários",
        "Sem cliente",
        177.59,
        "RECEBIDO"
      ],
      [
        "10/10/2025",
        "Operações",
        "Empréstimos Bancários",
        "Sem cliente",
        177.59,
        "RECEBIDO"
      ],
      [
        "09/10/2025",
        "Operações",
        "Portaria 24 Hs....",
        "Sem cliente",
        1305.86,
        "RECEBIDO"
      ],
      [
        "09/10/2025",
        "Receita Bruta de Vendas",
        "Portaria Remota",
        "Sem cliente",
        100,
        "RECEBIDO"
      ],
      [
        "08/10/2025",
        "Receita Bruta de Vendas",
        "Portaria/Limpeza",
        "Sem cliente",
        20,
        "RECEBIDO"
      ]
    ],
    "EXTRATO_DESPESAS": [
      [
        "10/07/2026",
        "Operações",
        "Sistema de Gerenciamento",
        "Sem cliente",
        -0.99,
        "PAGO"
      ],
      [
        "08/07/2026",
        "Operações",
        "Uber",
        "UBER DO BRASIL TECNOLOGIA LTDA.",
        -200,
        "PAGO"
      ],
      [
        "08/07/2026",
        "Operações",
        "Contribuição Sindical Odonto",
        "Sem cliente",
        -0.5,
        "PAGO"
      ],
      [
        "07/07/2026",
        "Despesas com Pessoal",
        "Salários",
        "ANDRE LUIZ ISIDORO DA SILVA",
        -1311.8,
        "PAGO"
      ],
      [
        "07/07/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "Sem cliente",
        -3.99,
        "PAGO"
      ],
      [
        "07/07/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "Sem cliente",
        -0.99,
        "PAGO"
      ],
      [
        "07/07/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "LEONARDO MARTINS ALVES GALDEANO",
        -3114.89,
        "PAGO"
      ],
      [
        "07/07/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "Sem cliente",
        -0.5,
        "PAGO"
      ],
      [
        "07/07/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "MARIA ANGELICA DOS REIS",
        -3541.63,
        "PAGO"
      ],
      [
        "07/07/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "Sem cliente",
        -0.5,
        "PAGO"
      ],
      [
        "07/07/2026",
        "Despesas com Pessoal",
        "Salários",
        "MATEUS HENRIQUE DE FARIA",
        -1148.4,
        "PAGO"
      ],
      [
        "07/07/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "MIGUEL ZINANI DE OLIVEIRA",
        -2029.09,
        "PAGO"
      ],
      [
        "07/07/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "Sem cliente",
        -0.5,
        "PAGO"
      ],
      [
        "07/07/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "Sem cliente",
        -3.99,
        "PAGO"
      ],
      [
        "07/07/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "ROBSON LUIZ DOMINGOS DA SILVA",
        -2855.49,
        "PAGO"
      ],
      [
        "07/07/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "Sem cliente",
        -0.5,
        "PAGO"
      ],
      [
        "07/07/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "SIDNEIA MORENA DE SOUZA",
        -1361.84,
        "PAGO"
      ],
      [
        "07/07/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "Sem cliente",
        -0.5,
        "PAGO"
      ],
      [
        "07/07/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "YAN OLIVEIRA PRADO DE ALMEIDA",
        -697.71,
        "PAGO"
      ],
      [
        "07/07/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "Sem cliente",
        -0.5,
        "PAGO"
      ],
      [
        "07/07/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "AMANDA MAYUMI KOBAYASHI",
        -2014.35,
        "PAGO"
      ],
      [
        "07/07/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "JOSIANA DA SILVA",
        -828.43,
        "PAGO"
      ],
      [
        "07/07/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "FABRICIO RAMOS DOS SANTOS",
        -1008.58,
        "PAGO"
      ],
      [
        "07/07/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "Sem cliente",
        -0.5,
        "PAGO"
      ],
      [
        "07/07/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "Sem cliente",
        -0.5,
        "PAGO"
      ],
      [
        "07/07/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "Sem cliente",
        -0.5,
        "PAGO"
      ],
      [
        "07/07/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "Sem cliente",
        -0.5,
        "PAGO"
      ],
      [
        "07/07/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "JONATHAN HENRIQUE DA SILVA SANTOS",
        -992.13,
        "PAGO"
      ],
      [
        "07/07/2026",
        "Despesas com Pessoal",
        "Salários",
        "ANDRE LUIZ ISIDORO DA SILVA",
        -1311.8,
        "PAGO"
      ],
      [
        "07/07/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "Sem cliente",
        -3.99,
        "PAGO"
      ],
      [
        "07/07/2026",
        "Despesas com Pessoal",
        "Salários",
        "MATEUS HENRIQUE DE FARIA",
        -1148.4,
        "PAGO"
      ],
      [
        "07/07/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "Sem cliente",
        -0.5,
        "PAGO"
      ],
      [
        "07/07/2026",
        "Despesas Administrativas",
        "Contabilidade",
        "AGYLIS CONTABILIDADE LTDA",
        -1000,
        "PAGO"
      ],
      [
        "07/07/2026",
        "Despesas Administrativas",
        "Contabilidade",
        "Sem cliente",
        -0.5,
        "PAGO"
      ],
      [
        "07/07/2026",
        "Despesas com Pessoal",
        "Salários",
        "ANDRE LUIZ ISIDORO DA SILVA",
        -1311.8,
        "PAGO"
      ],
      [
        "07/07/2026",
        "Despesas com Pessoal",
        "Pensão Alimentícia",
        "Sem cliente",
        -0.5,
        "PAGO"
      ],
      [
        "07/07/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "SIA FACILITIES",
        -71.79,
        "PAGO"
      ],
      [
        "07/07/2026",
        "Operações",
        "Exames Admissional/Demissional",
        "Sem cliente",
        -0.5,
        "PAGO"
      ],
      [
        "07/07/2026",
        "Operações",
        "Certificado Digital",
        "54.292.368 ROGERIO DE SOUSA DOS SANTOS",
        -250,
        "PAGO"
      ],
      [
        "07/07/2026",
        "Operações",
        "Exames Admissional/Demissional",
        "Sem cliente",
        -0.5,
        "PAGO"
      ],
      [
        "07/07/2026",
        "Despesas com Pessoal",
        "VR e VT Dinheiro..",
        "LEONARDO MARTINS ALVES GALDEANO",
        -340.2,
        "PAGO"
      ],
      [
        "07/07/2026",
        "Deduções de Receita",
        "Central de monitoramento",
        "Sem cliente",
        -0.5,
        "PAGO"
      ],
      [
        "07/07/2026",
        "Despesas com Pessoal",
        "VR e VT Dinheiro..",
        "LEANDRO RIBEIRO CAVALCANTE DE SOUZA LIMA",
        -340.2,
        "PAGO"
      ],
      [
        "07/07/2026",
        "Deduções de Receita",
        "Central de monitoramento",
        "Sem cliente",
        -0.5,
        "PAGO"
      ],
      [
        "07/07/2026",
        "Despesas com Pessoal",
        "VR e VT Dinheiro..",
        "ROBSON LUIZ DOMINGOS DA SILVA",
        -340.2,
        "PAGO"
      ],
      [
        "07/07/2026",
        "Deduções de Receita",
        "Central de monitoramento",
        "Sem cliente",
        -0.5,
        "PAGO"
      ],
      [
        "07/07/2026",
        "Deduções de Receita",
        "Central de monitoramento",
        "ECONDOS",
        -3179.19,
        "PAGO"
      ],
      [
        "07/07/2026",
        "Operações",
        "Hospedagem Hotel",
        "AIRBNB PLATAFORMA DIGITAL LTDA",
        -283,
        "PAGO"
      ],
      [
        "07/07/2026",
        "Deduções de Receita",
        "Central de monitoramento",
        "Sem cliente",
        -0.5,
        "PAGO"
      ],
      [
        "07/07/2026",
        "Deduções de Receita",
        "Central de monitoramento",
        "Sem cliente",
        -0.5,
        "PAGO"
      ],
      [
        "07/07/2026",
        "Despesas com Pessoal",
        "VR e VT Dinheiro..",
        "MARIA ANGELICA DOS REIS",
        -277.2,
        "PAGO"
      ],
      [
        "07/07/2026",
        "Operações",
        "Sistema de Gerenciamento",
        "MONI SOFTWARE LTDA",
        -188.29,
        "PAGO"
      ],
      [
        "06/07/2026",
        "Despesas com Pessoal",
        "Vale Transporte",
        "CONSORCIO 123",
        -2545.2,
        "PAGO"
      ],
      [
        "06/07/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "Sem cliente",
        -0.99,
        "PAGO"
      ],
      [
        "01/07/2026",
        "Deduções de Receita",
        "Uniformes",
        "CHARLEVILLE",
        -774,
        "PAGO"
      ],
      [
        "01/07/2026",
        "Operações",
        "Sistema de Gerenciamento",
        "Sem cliente",
        -0.5,
        "PAGO"
      ],
      [
        "01/07/2026",
        "Operações",
        "Sistema de Gerenciamento",
        "TEKNOLINK SJC",
        -1886.64,
        "PAGO"
      ],
      [
        "01/07/2026",
        "Operações",
        "Sistema de Gerenciamento",
        "Sem cliente",
        -0.5,
        "PAGO"
      ],
      [
        "29/06/2026",
        "Despesas Administrativas",
        "Emprestimos",
        "SEGPOL",
        -4000,
        "PAGO"
      ],
      [
        "29/06/2026",
        "Deduções de Receita",
        "Máquinas e Equipamentos",
        "Sem cliente",
        -0.5,
        "PAGO"
      ],
      [
        "26/06/2026",
        "Despesas Administrativas",
        "Emprestimos",
        "SEGPOL",
        -2000,
        "PAGO"
      ],
      [
        "26/06/2026",
        "Operações",
        "Sistema de Gerenciamento",
        "Sem cliente",
        -0.5,
        "PAGO"
      ],
      [
        "19/06/2026",
        "Deduções de Receita",
        "Máquinas e Equipamentos",
        "MULTISEG",
        -917.53,
        "PAGO"
      ],
      [
        "19/06/2026",
        "Operações",
        "Benefícios",
        "CDC ADMINISTRACAO DE CONVENIOS LTDA",
        -5349.24,
        "PAGO"
      ],
      [
        "19/06/2026",
        "Operações",
        "Sistema de Gerenciamento",
        "MONI SOFTWARE LTDA",
        -189.07,
        "PAGO"
      ],
      [
        "19/06/2026",
        "Deduções de Receita",
        "Máquinas e Equipamentos",
        "Sem cliente",
        -0.5,
        "PAGO"
      ],
      [
        "19/06/2026",
        "Despesas com Pessoal",
        "Férias",
        "LIDIANE CRISTINA DA SILVA",
        -1000,
        "PAGO"
      ],
      [
        "19/06/2026",
        "Despesas com Pessoal",
        "Férias",
        "Sem cliente",
        -0.5,
        "PAGO"
      ],
      [
        "18/06/2026",
        "Deduções de Receita",
        "Central de monitoramento",
        "Sem cliente",
        -0.99,
        "PAGO"
      ],
      [
        "18/06/2026",
        "Deduções de Receita",
        "Máquinas e Equipamentos",
        "HERITAGE COMPANY LTDA",
        -10000,
        "PAGO"
      ],
      [
        "18/06/2026",
        "Deduções de Receita",
        "Máquinas e Equipamentos",
        "Sem cliente",
        -0.5,
        "PAGO"
      ],
      [
        "16/06/2026",
        "Operações",
        "Sistema de Gerenciamento",
        "Sem cliente",
        -0.99,
        "PAGO"
      ],
      [
        "16/06/2026",
        "Operações",
        "Sistema de Gerenciamento",
        "Sem cliente",
        -0.99,
        "PAGO"
      ],
      [
        "15/06/2026",
        "Operações",
        "Sistema de Gerenciamento",
        "CONSORCIO 123",
        -693,
        "PAGO"
      ],
      [
        "15/06/2026",
        "Operações",
        "Sistema de Gerenciamento",
        "Sem cliente",
        -0.99,
        "PAGO"
      ],
      [
        "12/06/2026",
        "Operações",
        "Sistema de Gerenciamento",
        "MARIA ANGELICA DOS REIS",
        -252,
        "PAGO"
      ],
      [
        "12/06/2026",
        "Operações",
        "Sistema de Gerenciamento",
        "ROBSON LUIZ DOMINGOS DA SILVA",
        -302.4,
        "PAGO"
      ],
      [
        "12/06/2026",
        "Operações",
        "Sistema de Gerenciamento",
        "LEONARDO MARTINS ALVES GALDEANO",
        -327.6,
        "PAGO"
      ],
      [
        "12/06/2026",
        "Operações",
        "Sistema de Gerenciamento",
        "Sem cliente",
        -0.5,
        "PAGO"
      ],
      [
        "12/06/2026",
        "Operações",
        "Sistema de Gerenciamento",
        "Sem cliente",
        -0.5,
        "PAGO"
      ],
      [
        "12/06/2026",
        "Operações",
        "Sistema de Gerenciamento",
        "Sem cliente",
        -0.5,
        "PAGO"
      ],
      [
        "12/06/2026",
        "Operações",
        "Sistema de Gerenciamento",
        "MULTISEG",
        -1182.59,
        "PAGO"
      ],
      [
        "12/06/2026",
        "Operações",
        "Sistema de Gerenciamento",
        "MULTISEG",
        -1400.8,
        "PAGO"
      ],
      [
        "12/06/2026",
        "Operações",
        "Sistema de Gerenciamento",
        "Sem cliente",
        -0.5,
        "PAGO"
      ],
      [
        "12/06/2026",
        "Operações",
        "Sistema de Gerenciamento",
        "Sem cliente",
        -0.5,
        "PAGO"
      ],
      [
        "10/06/2026",
        "Operações",
        "Sistema de Gerenciamento",
        "IFOOD.COM AGENCIA DE RESTAURANTES ONLINE S.A.",
        -78.78,
        "PAGO"
      ],
      [
        "10/06/2026",
        "Operações",
        "Sistema de Gerenciamento",
        "Sem cliente",
        -0.5,
        "PAGO"
      ],
      [
        "10/06/2026",
        "Operações",
        "Sistema de Gerenciamento",
        "Sem cliente",
        -0.99,
        "PAGO"
      ],
      [
        "10/06/2026",
        "Operações",
        "Sistema de Gerenciamento",
        "SINDEEPRES",
        -198.17,
        "PAGO"
      ],
      [
        "10/06/2026",
        "Operações",
        "Sistema de Gerenciamento",
        "SINDEEPRES",
        -136.48,
        "PAGO"
      ],
      [
        "10/06/2026",
        "Operações",
        "Sistema de Gerenciamento",
        "KATIA MARSON GOMES PEDREIRA VENEZIANI",
        -6000,
        "PAGO"
      ],
      [
        "10/06/2026",
        "Operações",
        "Sistema de Gerenciamento",
        "Sem cliente",
        -0.5,
        "PAGO"
      ],
      [
        "08/06/2026",
        "Operações",
        "Sistema de Gerenciamento",
        "Sem cliente",
        -0.99,
        "PAGO"
      ],
      [
        "05/06/2026",
        "Operações",
        "Sistema de Gerenciamento",
        "Sem cliente",
        -0.99,
        "PAGO"
      ],
      [
        "05/06/2026",
        "Operações",
        "Sistema de Gerenciamento",
        "Sem cliente",
        -0.5,
        "PAGO"
      ],
      [
        "26/05/2026",
        "Despesas Financeiras",
        "Tarifas Bancárias",
        "Sem cliente",
        -168.5,
        "PAGO"
      ],
      [
        "26/05/2026",
        "Despesas Financeiras",
        "Tarifas Bancárias",
        "Sem cliente",
        -168.5,
        "PAGO"
      ],
      [
        "06/05/2026",
        "Operações",
        "Conta Garantida",
        "Sem cliente",
        -1.18,
        "PAGO"
      ],
      [
        "06/04/2026",
        "Operações",
        "Conta Garantida",
        "Sem cliente",
        -1.15,
        "PAGO"
      ],
      [
        "20/03/2026",
        "Despesas Financeiras",
        "Tarifas Bancárias",
        "Sem cliente",
        -168.5,
        "PAGO"
      ],
      [
        "20/03/2026",
        "Despesas Financeiras",
        "Tarifas Bancárias",
        "Sem cliente",
        -168.5,
        "PAGO"
      ],
      [
        "04/03/2026",
        "Operações",
        "Conta Garantida",
        "Sem cliente",
        -0.84,
        "PAGO"
      ],
      [
        "04/02/2026",
        "Operações",
        "Conta Garantida",
        "Sem cliente",
        -0.53,
        "PAGO"
      ],
      [
        "15/01/2026",
        "Despesas Financeiras",
        "Tarifas Bancárias",
        "Sem cliente",
        -6,
        "PAGO"
      ],
      [
        "06/01/2026",
        "Operações",
        "Conta Garantida",
        "Sem cliente",
        -0.05,
        "PAGO"
      ],
      [
        "30/10/2025",
        "Despesas com Pessoal",
        "Salários",
        "Sem cliente",
        -266.7,
        "PAGO"
      ],
      [
        "30/10/2025",
        "Despesas com Pessoal",
        "Salários",
        "Sem cliente",
        -483.3,
        "PAGO"
      ],
      [
        "30/10/2025",
        "Operações",
        "VR VA VT Monitoramento",
        "MIGUEL ZINANI DE OLIVEIRA",
        -170,
        "PAGO"
      ],
      [
        "30/10/2025",
        "Despesas com Pessoal",
        "Salários",
        "SIDNEIA MORENA DE SOUZA",
        -140,
        "PAGO"
      ],
      [
        "30/10/2025",
        "Operações",
        "Simples Nascional DAS",
        "Sem cliente",
        -2514.59,
        "PAGO"
      ],
      [
        "30/10/2025",
        "Operações",
        "FGTS",
        "Sem cliente",
        -1719.29,
        "PAGO"
      ],
      [
        "30/10/2025",
        "Operações",
        "Simples Nascional DAS",
        "Sem cliente",
        -1853.55,
        "PAGO"
      ],
      [
        "27/10/2025",
        "Despesas Financeiras",
        "Tarifas Bancárias",
        "Sem cliente",
        -4.47,
        "PAGO"
      ],
      [
        "27/10/2025",
        "Operações",
        "Prestação de Serviços",
        "Sem cliente",
        -1400.8,
        "PAGO"
      ],
      [
        "27/10/2025",
        "Operações",
        "Prestação de Serviços",
        "Sem cliente",
        -917.53,
        "PAGO"
      ],
      [
        "24/10/2025",
        "Despesas com Pessoal",
        "Retirada CL",
        "Sem cliente",
        -15311.64,
        "PAGO"
      ],
      [
        "23/10/2025",
        "Despesas Administrativas",
        "Emprestimos",
        "Sem cliente",
        -900,
        "PAGO"
      ],
      [
        "22/10/2025",
        "Operações",
        "Prestação de Serviços",
        "Sem cliente",
        -1000,
        "PAGO"
      ],
      [
        "22/10/2025",
        "Operações",
        "Prestação de Serviços",
        "Sem cliente",
        -76.5,
        "PAGO"
      ],
      [
        "22/10/2025",
        "Operações",
        "Prestação de Serviços",
        "Sem cliente",
        -2878.35,
        "PAGO"
      ],
      [
        "22/10/2025",
        "Despesas com Pessoal",
        "Salários",
        "ROBSON LUIZ DOMINGOS DA SILVA",
        -516.66,
        "PAGO"
      ],
      [
        "22/10/2025",
        "Operações",
        "VR VA VT Monitoramento",
        "MIGUEL ZINANI DE OLIVEIRA",
        -335,
        "PAGO"
      ],
      [
        "21/10/2025",
        "Deduções de Receita",
        "Material de limpeza",
        "Sem cliente",
        -415.76,
        "PAGO"
      ],
      [
        "21/10/2025",
        "Operações",
        "VR VA VT Monitoramento",
        "MIGUEL ZINANI DE OLIVEIRA",
        -280,
        "PAGO"
      ],
      [
        "21/10/2025",
        "Despesas com Pessoal",
        "Salários",
        "ROBSON LUIZ DOMINGOS DA SILVA",
        -100,
        "PAGO"
      ],
      [
        "21/10/2025",
        "Despesas com Pessoal",
        "Salários",
        "JONATHAN HENRIQUE DA SILVA SANTOS",
        -320,
        "PAGO"
      ],
      [
        "21/10/2025",
        "Despesas com Pessoal",
        "Salários",
        "LEONARDO MARTINS ALVES GALDEANO",
        -1400,
        "PAGO"
      ],
      [
        "21/10/2025",
        "Operações",
        "VR VA VT Monitoramento",
        "FABRICIO RAMOS DOS SANTOS",
        -920,
        "PAGO"
      ],
      [
        "16/10/2025",
        "Operações",
        "Prest Serv Extra",
        "Sem cliente",
        -1000,
        "PAGO"
      ],
      [
        "15/10/2025",
        "Despesas com Pessoal",
        "Salários",
        "Sem cliente",
        -3234.11,
        "PAGO"
      ],
      [
        "15/10/2025",
        "Operações",
        "Prestação de Serviços",
        "Sem cliente",
        -3545.5,
        "PAGO"
      ],
      [
        "15/10/2025",
        "Operações",
        "VR VA VT Monitoramento",
        "Sem cliente",
        -150,
        "PAGO"
      ],
      [
        "15/10/2025",
        "Operações",
        "VR VA VT Monitoramento",
        "Sem cliente",
        -150,
        "PAGO"
      ],
      [
        "15/10/2025",
        "Despesas com Pessoal",
        "Salários",
        "JONATHAN HENRIQUE DA SILVA SANTOS",
        -150,
        "PAGO"
      ],
      [
        "15/10/2025",
        "Operações",
        "VR VA VT Monitoramento",
        "Sem cliente",
        -150,
        "PAGO"
      ],
      [
        "15/10/2025",
        "Despesas com Pessoal",
        "Salários",
        "Sem cliente",
        -433.2,
        "PAGO"
      ],
      [
        "15/10/2025",
        "Despesas com Pessoal",
        "Salários",
        "ROBSON LUIZ DOMINGOS DA SILVA",
        -183.3,
        "PAGO"
      ],
      [
        "13/10/2025",
        "Despesas Financeiras",
        "Tarifas Bancárias",
        "Sem cliente",
        -1.99,
        "PAGO"
      ],
      [
        "10/10/2025",
        "Operações",
        "Prestação de Serviços",
        "Sem cliente",
        -254.79,
        "PAGO"
      ],
      [
        "10/10/2025",
        "Operações",
        "Prestação de Serviços",
        "Sem cliente",
        -69.17,
        "PAGO"
      ],
      [
        "10/10/2025",
        "Despesas Administrativas",
        "Emprestimos",
        "Sem cliente",
        -177.59,
        "PAGO"
      ],
      [
        "10/10/2025",
        "Despesas Administrativas",
        "Emprestimos",
        "Sem cliente",
        -177.59,
        "PAGO"
      ],
      [
        "09/10/2025",
        "Operações",
        "Prestação de Serviços",
        "Sem cliente",
        -1000.33,
        "PAGO"
      ],
      [
        "07/10/2025",
        "Despesas com Pessoal",
        "Salários",
        "Sem cliente",
        -7478.27,
        "PAGO"
      ],
      [
        "07/10/2025",
        "Operações",
        "Prestação de Serviços",
        "Sem cliente",
        -548.01,
        "PAGO"
      ],
      [
        "07/10/2025",
        "Operações",
        "Prestação de Serviços",
        "Sem cliente",
        -474.09,
        "PAGO"
      ],
      [
        "07/10/2025",
        "Operações",
        "Prestação de Serviços",
        "Sem cliente",
        -1635,
        "PAGO"
      ],
      [
        "07/10/2025",
        "Operações",
        "Prestação de Serviços",
        "Sem cliente",
        -217.73,
        "PAGO"
      ],
      [
        "07/10/2025",
        "Despesas com Pessoal",
        "Salários",
        "MARIA ANGELICA DOS REIS",
        -1784.55,
        "PAGO"
      ],
      [
        "07/10/2025",
        "Despesas com Pessoal",
        "Salários",
        "Sem cliente",
        -2046.31,
        "PAGO"
      ],
      [
        "07/10/2025",
        "Despesas com Pessoal",
        "Salários",
        "LEONARDO MARTINS ALVES GALDEANO",
        -1702.67,
        "PAGO"
      ],
      [
        "07/10/2025",
        "Despesas com Pessoal",
        "Salários",
        "ROBSON LUIZ DOMINGOS DA SILVA",
        -1733.3,
        "PAGO"
      ],
      [
        "07/10/2025",
        "Despesas com Pessoal",
        "Salários",
        "ROBSON LUIZ DOMINGOS DA SILVA",
        -1183.3,
        "PAGO"
      ],
      [
        "07/10/2025",
        "Despesas com Pessoal",
        "Salários",
        "Sem cliente",
        -716.6,
        "PAGO"
      ],
      [
        "07/10/2025",
        "Operações",
        "Prest Serv Extra",
        "Sem cliente",
        -518.87,
        "PAGO"
      ],
      [
        "07/10/2025",
        "Operações",
        "Serviço Esporádicos",
        "Sem cliente",
        -557.28,
        "PAGO"
      ],
      [
        "02/10/2025",
        "Operações",
        "Conta Garantida",
        "Sem cliente",
        -0.19,
        "PAGO"
      ],
      [
        "02/10/2025",
        "Operações",
        "IOF",
        "Sem cliente",
        -0.1,
        "PAGO"
      ],
      [
        "02/10/2025",
        "Despesas Financeiras",
        "Tarifas Bancárias",
        "Sem cliente",
        -19.2,
        "PAGO"
      ],
      [
        "02/10/2025",
        "Despesas Financeiras",
        "Tarifas Bancárias",
        "Sem cliente",
        -37.4,
        "PAGO"
      ],
      [
        "01/10/2025",
        "Operações",
        "Caixinha",
        "Sem cliente",
        -375.65,
        "PAGO"
      ],
      [
        "30/09/2025",
        "Despesas Financeiras",
        "Tarifas Bancárias",
        "Sem cliente",
        -2.98,
        "PAGO"
      ],
      [
        "30/09/2025",
        "Despesas Financeiras",
        "Tarifas Bancárias",
        "Sem cliente",
        -6,
        "PAGO"
      ],
      [
        "30/09/2025",
        "Despesas Financeiras",
        "Tarifas Bancárias",
        "Sem cliente",
        -6.8,
        "PAGO"
      ],
      [
        "29/09/2025",
        "Operações",
        "Tarifas PIX",
        "Sem cliente",
        -4.47,
        "PAGO"
      ],
      [
        "29/09/2025",
        "Despesas Financeiras",
        "Tarifas Bancárias",
        "Sem cliente",
        -4.47,
        "PAGO"
      ],
      [
        "29/09/2025",
        "Despesas Financeiras",
        "Tarifas Bancárias",
        "Sem cliente",
        -6.8,
        "PAGO"
      ]
    ],
    "KPIS": {
      "TOTAL_RECEITA": 96851.5,
      "TOTAL_DESPESA": 71103.53,
      "VALOR_LIQUIDO": 25747.97,
      "MARGEM_LIQUIDA": 26.584998683551625,
      "VALOR_LIQ_SERIES": [
        -6.05,
        20759.47,
        -337.84,
        -1.15,
        -238.18,
        6828.5999999999985,
        -1256.8800000000047,
        0,
        0,
        0,
        0,
        0
      ]
    },
    "RECEITA_DIA": [
      0,
      0,
      0,
      0,
      6933.93,
      22204.95,
      12480,
      425,
      20760,
      6873.719999999999,
      0,
      0,
      0,
      0,
      6354.42,
      12964.28,
      0,
      7755.2,
      0,
      0,
      0,
      0,
      0,
      0,
      100,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    "DESPESA_DIA": [
      2661.6400000000003,
      0,
      0,
      1.37,
      1.49,
      2548.5699999999997,
      30969.370000000006,
      201.49,
      0,
      6416.41,
      0,
      3467.8900000000003,
      0,
      0,
      699.99,
      1.98,
      0,
      10001.49,
      7456.839999999999,
      337,
      0,
      0,
      0,
      0,
      0,
      2337.5,
      0,
      0,
      4000.5,
      0,
      0
    ],
    "SALDOS_MES": [
      -6.05,
      20753.420000000002,
      20415.58,
      20414.43,
      20176.25,
      27004.85,
      25747.969999999994,
      25747.969999999994,
      25747.969999999994,
      25747.969999999994,
      25747.969999999994,
      25747.969999999994
    ],
    "FLUXO_RECEITA": [
      {
        "cat": "Monitoramento Remoto",
        "values": [
          0,
          0,
          0,
          0,
          0,
          40869.689999999995,
          35121.81,
          0,
          0,
          0,
          0,
          0
        ]
      },
      {
        "cat": "Empréstimo",
        "values": [
          0,
          20760,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      {
        "cat": "Portaria/Limpeza",
        "values": [
          0,
          0,
          0,
          0,
          100,
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      }
    ],
    "FLUXO_DESPESA": [
      {
        "cat": "Salários PIX",
        "values": [
          0,
          0,
          0,
          0,
          0,
          0,
          -18535.380000000005,
          0,
          0,
          0,
          0,
          0
        ]
      },
      {
        "cat": "Sistema de Gerenciamento",
        "values": [
          0,
          0,
          0,
          0,
          0,
          -10771.329999999998,
          -2076.92,
          0,
          0,
          0,
          0,
          0
        ]
      },
      {
        "cat": "Máquinas e Equipamentos",
        "values": [
          0,
          0,
          0,
          0,
          0,
          -10919.03,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      {
        "cat": "Salários",
        "values": [
          0,
          0,
          0,
          0,
          0,
          0,
          -6232.2,
          0,
          0,
          0,
          0,
          0
        ]
      },
      {
        "cat": "Emprestimos",
        "values": [
          0,
          0,
          0,
          0,
          0,
          -6000,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      }
    ],
    "COMP_DATA": [
      {
        "tipo": "Receita",
        "isHeader": true,
        "d1": 20760,
        "d2": 40969.689999999995
      },
      {
        "tipo": "Empréstimo",
        "parent": "Receita",
        "d1": 20760,
        "d2": 0
      },
      {
        "tipo": "Portaria/Limpeza",
        "parent": "Receita",
        "d1": 0,
        "d2": 100
      },
      {
        "tipo": "Monitoramento Remoto",
        "parent": "Receita",
        "d1": 0,
        "d2": 40869.689999999995
      },
      {
        "tipo": "Despesa",
        "isHeader": true,
        "d1": -344.42,
        "d2": -34380.42
      },
      {
        "tipo": "Conta Garantida",
        "parent": "Despesa",
        "d1": -1.42,
        "d2": -2.33
      },
      {
        "tipo": "Tarifas Bancárias",
        "parent": "Despesa",
        "d1": -343,
        "d2": -337
      },
      {
        "tipo": "Sistema de Gerenciamento",
        "parent": "Despesa",
        "d1": 0,
        "d2": -10771.329999999998
      },
      {
        "tipo": "Central de monitoramento",
        "parent": "Despesa",
        "d1": 0,
        "d2": -0.99
      },
      {
        "tipo": "Máquinas e Equipamentos",
        "parent": "Despesa",
        "d1": 0,
        "d2": -10919.03
      },
      {
        "tipo": "Benefícios",
        "parent": "Despesa",
        "d1": 0,
        "d2": -5349.24
      },
      {
        "tipo": "Férias",
        "parent": "Despesa",
        "d1": 0,
        "d2": -1000.5
      },
      {
        "tipo": "Emprestimos",
        "parent": "Despesa",
        "d1": 0,
        "d2": -6000
      }
    ]
  },
  "a_pagar_receber": {
    "MONTH_DATA": [
      {
        "m": "janeiro",
        "receita": 0,
        "despesa": 0,
        "receita_bruta": 0,
        "impostos": 0
      },
      {
        "m": "fevereiro",
        "receita": 0,
        "despesa": 0,
        "receita_bruta": 0,
        "impostos": 0
      },
      {
        "m": "março",
        "receita": 0,
        "despesa": 0,
        "receita_bruta": 0,
        "impostos": 0
      },
      {
        "m": "abril",
        "receita": 0,
        "despesa": 3102.6099999999997,
        "receita_bruta": 0,
        "impostos": 0
      },
      {
        "m": "maio",
        "receita": 0,
        "despesa": 1835.06,
        "receita_bruta": 0,
        "impostos": 0
      },
      {
        "m": "junho",
        "receita": 0,
        "despesa": 0,
        "receita_bruta": 0,
        "impostos": 0
      },
      {
        "m": "julho",
        "receita": 37576.69,
        "despesa": 21239.429999999993,
        "receita_bruta": 37944.97,
        "impostos": 0
      },
      {
        "m": "agosto",
        "receita": 0,
        "despesa": 41302.36,
        "receita_bruta": 0,
        "impostos": 0
      },
      {
        "m": "setembro",
        "receita": 0,
        "despesa": 32866.59,
        "receita_bruta": 0,
        "impostos": 0
      },
      {
        "m": "outubro",
        "receita": 0,
        "despesa": 31851.879999999997,
        "receita_bruta": 0,
        "impostos": 0
      },
      {
        "m": "novembro",
        "receita": 0,
        "despesa": 29400.160000000003,
        "receita_bruta": 0,
        "impostos": 0
      },
      {
        "m": "dezembro",
        "receita": 0,
        "despesa": 29400.160000000003,
        "receita_bruta": 0,
        "impostos": 0
      }
    ],
    "RECEITA_CATEGORIAS": [
      {
        "name": "Monitoramento Remoto",
        "value": 37576.69,
        "clientes": 5
      }
    ],
    "DESPESA_CATEGORIAS": [
      {
        "name": "Salários PIX",
        "value": 99434.15000000002,
        "fornecedores": 11
      },
      {
        "name": "FGTS",
        "value": 23853.480000000003,
        "fornecedores": 1
      },
      {
        "name": "Máquinas e Equipamentos",
        "value": 17081.149999999994,
        "fornecedores": 3
      },
      {
        "name": "Salários",
        "value": 12300.999999999998,
        "fornecedores": 2
      },
      {
        "name": "Sistema de Gerenciamento",
        "value": 10070.42,
        "fornecedores": 4
      },
      {
        "name": "VT",
        "value": 6960.77,
        "fornecedores": 1
      },
      {
        "name": "Contabilidade",
        "value": 6000,
        "fornecedores": 1
      },
      {
        "name": "Benefícios",
        "value": 5627.36,
        "fornecedores": 1
      },
      {
        "name": "Central de monitoramento",
        "value": 4153.72,
        "fornecedores": 1
      },
      {
        "name": "Pensão Alimentícia",
        "value": 2729.7000000000003,
        "fornecedores": 1
      },
      {
        "name": "Manutenção",
        "value": 1475,
        "fornecedores": 1
      },
      {
        "name": "Seguro de vida",
        "value": 485.2300000000001,
        "fornecedores": 1
      }
    ],
    "RECEITA_CLIENTES": [
      {
        "name": "SEGPOL",
        "value": 10500
      },
      {
        "name": "RESIDENCIAL ANA LUCIA",
        "value": 7755.2
      },
      {
        "name": "EDIFICIO INNOVARE",
        "value": 6981.72
      },
      {
        "name": "ASSOCIACAO DOS PROPRIETARIOS E PROMITENTES COMPRADORES DAS UNIDADES AUTONOMAS DO EDIFICIO VILLAGIO S",
        "value": 6355.86
      },
      {
        "name": "CONDOMINIO EDIFICIO CAPRI",
        "value": 5983.91
      }
    ],
    "DESPESA_FORNECEDORES": [
      {
        "name": "CAIXA ECONOMICA FEDERAL",
        "value": 23853.480000000003
      },
      {
        "name": "MARIA ANGELICA DOS REIS",
        "value": 17708.15
      },
      {
        "name": "LEONARDO MARTINS ALVES GALDEANO",
        "value": 15574.449999999999
      },
      {
        "name": "ROBSON LUIZ DOMINGOS DA SILVA",
        "value": 14277.449999999999
      },
      {
        "name": "ISSEL SOROCABA",
        "value": 12851.009999999998
      },
      {
        "name": "CDC ADMINISTRACAO DE CONVENIOS LTDA",
        "value": 12588.130000000001
      },
      {
        "name": "STRIKE TI",
        "value": 10325
      },
      {
        "name": "MIGUEL ZINANI DE OLIVEIRA",
        "value": 10145.449999999999
      },
      {
        "name": "AMANDA MAYUMI KOBAYASHI",
        "value": 10071.75
      },
      {
        "name": "JONATHAN HENRIQUE DA SILVA SANTOS",
        "value": 7690.350000000002
      },
      {
        "name": "CLARA DE OLIVEIRA LIMA",
        "value": 7213.450000000001
      },
      {
        "name": "SIDNEIA MORENA DE SOUZA",
        "value": 6809.2
      }
    ],
    "EXTRATO": [
      [
        "20/06/2029",
        "Despesas Administrativas",
        "Contabilidade",
        "AGYLIS CONTABILIDADE LTDA",
        -1000,
        "A VENCER"
      ],
      [
        "20/05/2029",
        "Despesas Administrativas",
        "Contabilidade",
        "AGYLIS CONTABILIDADE LTDA",
        -1000,
        "A VENCER"
      ],
      [
        "09/05/2029",
        "Operações",
        "Sistema de Gerenciamento",
        "STRIKE TI",
        -1475,
        "A VENCER"
      ],
      [
        "20/04/2029",
        "Despesas Administrativas",
        "Contabilidade",
        "AGYLIS CONTABILIDADE LTDA",
        -1000,
        "A VENCER"
      ],
      [
        "09/04/2029",
        "Operações",
        "Sistema de Gerenciamento",
        "STRIKE TI",
        -1475,
        "A VENCER"
      ],
      [
        "20/03/2029",
        "Despesas Administrativas",
        "Contabilidade",
        "AGYLIS CONTABILIDADE LTDA",
        -1000,
        "A VENCER"
      ],
      [
        "09/03/2029",
        "Operações",
        "Sistema de Gerenciamento",
        "STRIKE TI",
        -1475,
        "A VENCER"
      ],
      [
        "20/02/2029",
        "Despesas Administrativas",
        "Contabilidade",
        "AGYLIS CONTABILIDADE LTDA",
        -1000,
        "A VENCER"
      ],
      [
        "09/02/2029",
        "Operações",
        "Sistema de Gerenciamento",
        "STRIKE TI",
        -1475,
        "A VENCER"
      ],
      [
        "20/01/2029",
        "Despesas Administrativas",
        "Contabilidade",
        "AGYLIS CONTABILIDADE LTDA",
        -1000,
        "A VENCER"
      ],
      [
        "09/01/2029",
        "Operações",
        "Sistema de Gerenciamento",
        "STRIKE TI",
        -1475,
        "A VENCER"
      ],
      [
        "20/12/2028",
        "Despesas Administrativas",
        "Contabilidade",
        "AGYLIS CONTABILIDADE LTDA",
        -1000,
        "A VENCER"
      ],
      [
        "09/12/2028",
        "Operações",
        "Sistema de Gerenciamento",
        "STRIKE TI",
        -1475,
        "A VENCER"
      ],
      [
        "20/11/2028",
        "Despesas Administrativas",
        "Contabilidade",
        "AGYLIS CONTABILIDADE LTDA",
        -1000,
        "A VENCER"
      ],
      [
        "09/11/2028",
        "Operações",
        "Sistema de Gerenciamento",
        "STRIKE TI",
        -1475,
        "A VENCER"
      ],
      [
        "20/10/2028",
        "Despesas Administrativas",
        "Contabilidade",
        "AGYLIS CONTABILIDADE LTDA",
        -1000,
        "A VENCER"
      ],
      [
        "09/10/2028",
        "Operações",
        "Sistema de Gerenciamento",
        "STRIKE TI",
        -1475,
        "A VENCER"
      ],
      [
        "20/09/2028",
        "Despesas Administrativas",
        "Contabilidade",
        "AGYLIS CONTABILIDADE LTDA",
        -1000,
        "A VENCER"
      ],
      [
        "09/09/2028",
        "Operações",
        "Sistema de Gerenciamento",
        "STRIKE TI",
        -1475,
        "A VENCER"
      ],
      [
        "20/08/2028",
        "Despesas Administrativas",
        "Contabilidade",
        "AGYLIS CONTABILIDADE LTDA",
        -1000,
        "A VENCER"
      ],
      [
        "09/08/2028",
        "Operações",
        "Sistema de Gerenciamento",
        "STRIKE TI",
        -1475,
        "A VENCER"
      ],
      [
        "20/07/2028",
        "Despesas Administrativas",
        "Contabilidade",
        "AGYLIS CONTABILIDADE LTDA",
        -1000,
        "A VENCER"
      ],
      [
        "09/07/2028",
        "Operações",
        "Sistema de Gerenciamento",
        "STRIKE TI",
        -1475,
        "A VENCER"
      ],
      [
        "20/06/2028",
        "Despesas Administrativas",
        "Contabilidade",
        "AGYLIS CONTABILIDADE LTDA",
        -1000,
        "A VENCER"
      ],
      [
        "09/06/2028",
        "Operações",
        "Sistema de Gerenciamento",
        "STRIKE TI",
        -1475,
        "A VENCER"
      ],
      [
        "20/05/2028",
        "Despesas Administrativas",
        "Contabilidade",
        "AGYLIS CONTABILIDADE LTDA",
        -1000,
        "A VENCER"
      ],
      [
        "09/05/2028",
        "Operações",
        "Sistema de Gerenciamento",
        "STRIKE TI",
        -1475,
        "A VENCER"
      ],
      [
        "20/04/2028",
        "Despesas Administrativas",
        "Contabilidade",
        "AGYLIS CONTABILIDADE LTDA",
        -1000,
        "A VENCER"
      ],
      [
        "09/04/2028",
        "Operações",
        "Sistema de Gerenciamento",
        "STRIKE TI",
        -1475,
        "A VENCER"
      ],
      [
        "20/03/2028",
        "Despesas Administrativas",
        "Contabilidade",
        "AGYLIS CONTABILIDADE LTDA",
        -1000,
        "A VENCER"
      ],
      [
        "09/03/2028",
        "Operações",
        "Sistema de Gerenciamento",
        "STRIKE TI",
        -1475,
        "A VENCER"
      ],
      [
        "20/02/2028",
        "Despesas Administrativas",
        "Contabilidade",
        "AGYLIS CONTABILIDADE LTDA",
        -1000,
        "A VENCER"
      ],
      [
        "09/02/2028",
        "Operações",
        "Sistema de Gerenciamento",
        "STRIKE TI",
        -1475,
        "A VENCER"
      ],
      [
        "20/01/2028",
        "Despesas Administrativas",
        "Contabilidade",
        "AGYLIS CONTABILIDADE LTDA",
        -1000,
        "A VENCER"
      ],
      [
        "09/01/2028",
        "Operações",
        "Sistema de Gerenciamento",
        "STRIKE TI",
        -1475,
        "A VENCER"
      ],
      [
        "20/12/2027",
        "Despesas Administrativas",
        "Contabilidade",
        "AGYLIS CONTABILIDADE LTDA",
        -1000,
        "A VENCER"
      ],
      [
        "09/12/2027",
        "Operações",
        "Sistema de Gerenciamento",
        "STRIKE TI",
        -1475,
        "A VENCER"
      ],
      [
        "20/11/2027",
        "Despesas Administrativas",
        "Contabilidade",
        "AGYLIS CONTABILIDADE LTDA",
        -1000,
        "A VENCER"
      ],
      [
        "09/11/2027",
        "Operações",
        "Sistema de Gerenciamento",
        "STRIKE TI",
        -1475,
        "A VENCER"
      ],
      [
        "20/10/2027",
        "Despesas Administrativas",
        "Contabilidade",
        "AGYLIS CONTABILIDADE LTDA",
        -1000,
        "A VENCER"
      ],
      [
        "09/10/2027",
        "Operações",
        "Sistema de Gerenciamento",
        "STRIKE TI",
        -1475,
        "A VENCER"
      ],
      [
        "20/09/2027",
        "Despesas Administrativas",
        "Contabilidade",
        "AGYLIS CONTABILIDADE LTDA",
        -1000,
        "A VENCER"
      ],
      [
        "09/09/2027",
        "Operações",
        "Sistema de Gerenciamento",
        "STRIKE TI",
        -1475,
        "A VENCER"
      ],
      [
        "20/08/2027",
        "Despesas Administrativas",
        "Contabilidade",
        "AGYLIS CONTABILIDADE LTDA",
        -1000,
        "A VENCER"
      ],
      [
        "09/08/2027",
        "Operações",
        "Sistema de Gerenciamento",
        "STRIKE TI",
        -1475,
        "A VENCER"
      ],
      [
        "20/07/2027",
        "Despesas Administrativas",
        "Contabilidade",
        "AGYLIS CONTABILIDADE LTDA",
        -1000,
        "A VENCER"
      ],
      [
        "09/07/2027",
        "Operações",
        "Sistema de Gerenciamento",
        "STRIKE TI",
        -1475,
        "A VENCER"
      ],
      [
        "20/06/2027",
        "Despesas Administrativas",
        "Contabilidade",
        "AGYLIS CONTABILIDADE LTDA",
        -1000,
        "A VENCER"
      ],
      [
        "09/06/2027",
        "Operações",
        "Sistema de Gerenciamento",
        "STRIKE TI",
        -1475,
        "A VENCER"
      ],
      [
        "20/05/2027",
        "Despesas Administrativas",
        "Contabilidade",
        "AGYLIS CONTABILIDADE LTDA",
        -1000,
        "A VENCER"
      ],
      [
        "10/05/2027",
        "Despesas com Pessoal",
        "Seguro de vida",
        "METLIFE SEGUROS E PREVIDENCIA",
        -56.61,
        "A VENCER"
      ],
      [
        "09/05/2027",
        "Operações",
        "Sistema de Gerenciamento",
        "STRIKE TI",
        -1475,
        "A VENCER"
      ],
      [
        "20/04/2027",
        "Despesas Administrativas",
        "Contabilidade",
        "AGYLIS CONTABILIDADE LTDA",
        -1000,
        "A VENCER"
      ],
      [
        "10/04/2027",
        "Despesas com Pessoal",
        "Seguro de vida",
        "METLIFE SEGUROS E PREVIDENCIA",
        -56.61,
        "A VENCER"
      ],
      [
        "09/04/2027",
        "Operações",
        "Sistema de Gerenciamento",
        "STRIKE TI",
        -1475,
        "A VENCER"
      ],
      [
        "20/03/2027",
        "Despesas Administrativas",
        "Contabilidade",
        "AGYLIS CONTABILIDADE LTDA",
        -1000,
        "A VENCER"
      ],
      [
        "10/03/2027",
        "Despesas com Pessoal",
        "Seguro de vida",
        "METLIFE SEGUROS E PREVIDENCIA",
        -56.61,
        "A VENCER"
      ],
      [
        "09/03/2027",
        "Operações",
        "Sistema de Gerenciamento",
        "STRIKE TI",
        -1475,
        "A VENCER"
      ],
      [
        "20/02/2027",
        "Despesas Administrativas",
        "Contabilidade",
        "AGYLIS CONTABILIDADE LTDA",
        -1000,
        "A VENCER"
      ],
      [
        "10/02/2027",
        "Despesas com Pessoal",
        "Seguro de vida",
        "METLIFE SEGUROS E PREVIDENCIA",
        -56.61,
        "A VENCER"
      ],
      [
        "09/02/2027",
        "Operações",
        "Sistema de Gerenciamento",
        "STRIKE TI",
        -1475,
        "A VENCER"
      ],
      [
        "20/01/2027",
        "Despesas Administrativas",
        "Contabilidade",
        "AGYLIS CONTABILIDADE LTDA",
        -1000,
        "A VENCER"
      ],
      [
        "10/01/2027",
        "Despesas com Pessoal",
        "Seguro de vida",
        "METLIFE SEGUROS E PREVIDENCIA",
        -56.61,
        "A VENCER"
      ],
      [
        "09/01/2027",
        "Operações",
        "Sistema de Gerenciamento",
        "STRIKE TI",
        -1475,
        "A VENCER"
      ],
      [
        "05/01/2027",
        "Despesas com Pessoal",
        "Salários PIX",
        "CLARA DE OLIVEIRA LIMA",
        -1442.69,
        "A VENCER"
      ],
      [
        "20/12/2026",
        "Despesas Administrativas",
        "Contabilidade",
        "AGYLIS CONTABILIDADE LTDA",
        -1000,
        "A VENCER"
      ],
      [
        "20/12/2026",
        "Operações",
        "FGTS",
        "CAIXA ECONOMICA FEDERAL",
        -3975.58,
        "A VENCER"
      ],
      [
        "10/12/2026",
        "Despesas com Pessoal",
        "Seguro de vida",
        "METLIFE SEGUROS E PREVIDENCIA",
        -56.61,
        "A VENCER"
      ],
      [
        "09/12/2026",
        "Operações",
        "Sistema de Gerenciamento",
        "STRIKE TI",
        -1475,
        "A VENCER"
      ],
      [
        "06/12/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "AMANDA MAYUMI KOBAYASHI",
        -2014.35,
        "A VENCER"
      ],
      [
        "05/12/2026",
        "Despesas com Pessoal",
        "Salários",
        "ANDRE LUIZ ISIDORO DA SILVA",
        -1311.8,
        "A VENCER"
      ],
      [
        "05/12/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "FABRICIO RAMOS DOS SANTOS",
        -1008.58,
        "A VENCER"
      ],
      [
        "05/12/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "JONATHAN HENRIQUE DA SILVA SANTOS",
        -992.13,
        "A VENCER"
      ],
      [
        "05/12/2026",
        "Despesas com Pessoal",
        "Pensão Alimentícia",
        "JONATHAN HENRIQUE DA SILVA SANTOS",
        -545.94,
        "A VENCER"
      ],
      [
        "05/12/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "JOSIANA DA SILVA",
        -828.43,
        "A VENCER"
      ],
      [
        "05/12/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "LEONARDO MARTINS ALVES GALDEANO",
        -3114.89,
        "A VENCER"
      ],
      [
        "05/12/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "MARIA ANGELICA DOS REIS",
        -3541.63,
        "A VENCER"
      ],
      [
        "05/12/2026",
        "Despesas com Pessoal",
        "Salários",
        "MATEUS HENRIQUE DE FARIA",
        -1148.4,
        "A VENCER"
      ],
      [
        "05/12/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "MIGUEL ZINANI DE OLIVEIRA",
        -2029.09,
        "A VENCER"
      ],
      [
        "05/12/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "ROBSON LUIZ DOMINGOS DA SILVA",
        -2855.49,
        "A VENCER"
      ],
      [
        "05/12/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "SIDNEIA MORENA DE SOUZA",
        -1361.84,
        "A VENCER"
      ],
      [
        "05/12/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "YAN OLIVEIRA PRADO DE ALMEIDA",
        -697.71,
        "A VENCER"
      ],
      [
        "05/12/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "CLARA DE OLIVEIRA LIMA",
        -1442.69,
        "A VENCER"
      ],
      [
        "20/11/2026",
        "Despesas Administrativas",
        "Contabilidade",
        "AGYLIS CONTABILIDADE LTDA",
        -1000,
        "A VENCER"
      ],
      [
        "20/11/2026",
        "Operações",
        "FGTS",
        "CAIXA ECONOMICA FEDERAL",
        -3975.58,
        "A VENCER"
      ],
      [
        "10/11/2026",
        "Despesas com Pessoal",
        "Seguro de vida",
        "METLIFE SEGUROS E PREVIDENCIA",
        -56.61,
        "A VENCER"
      ],
      [
        "09/11/2026",
        "Operações",
        "Sistema de Gerenciamento",
        "STRIKE TI",
        -1475,
        "A VENCER"
      ],
      [
        "06/11/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "AMANDA MAYUMI KOBAYASHI",
        -2014.35,
        "A VENCER"
      ],
      [
        "05/11/2026",
        "Despesas com Pessoal",
        "Salários",
        "ANDRE LUIZ ISIDORO DA SILVA",
        -1311.8,
        "A VENCER"
      ],
      [
        "05/11/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "FABRICIO RAMOS DOS SANTOS",
        -1008.58,
        "A VENCER"
      ],
      [
        "05/11/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "JONATHAN HENRIQUE DA SILVA SANTOS",
        -992.13,
        "A VENCER"
      ],
      [
        "05/11/2026",
        "Despesas com Pessoal",
        "Pensão Alimentícia",
        "JONATHAN HENRIQUE DA SILVA SANTOS",
        -545.94,
        "A VENCER"
      ],
      [
        "05/11/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "JOSIANA DA SILVA",
        -828.43,
        "A VENCER"
      ],
      [
        "05/11/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "LEONARDO MARTINS ALVES GALDEANO",
        -3114.89,
        "A VENCER"
      ],
      [
        "05/11/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "MARIA ANGELICA DOS REIS",
        -3541.63,
        "A VENCER"
      ],
      [
        "05/11/2026",
        "Despesas com Pessoal",
        "Salários",
        "MATEUS HENRIQUE DE FARIA",
        -1148.4,
        "A VENCER"
      ],
      [
        "05/11/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "MIGUEL ZINANI DE OLIVEIRA",
        -2029.09,
        "A VENCER"
      ],
      [
        "05/11/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "ROBSON LUIZ DOMINGOS DA SILVA",
        -2855.49,
        "A VENCER"
      ],
      [
        "05/11/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "SIDNEIA MORENA DE SOUZA",
        -1361.84,
        "A VENCER"
      ],
      [
        "05/11/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "YAN OLIVEIRA PRADO DE ALMEIDA",
        -697.71,
        "A VENCER"
      ],
      [
        "05/11/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "CLARA DE OLIVEIRA LIMA",
        -1442.69,
        "A VENCER"
      ],
      [
        "20/10/2026",
        "Deduções de Receita",
        "Máquinas e Equipamentos",
        "ISSEL SOROCABA",
        -2451.72,
        "A VENCER"
      ],
      [
        "20/10/2026",
        "Despesas Administrativas",
        "Contabilidade",
        "AGYLIS CONTABILIDADE LTDA",
        -1000,
        "A VENCER"
      ],
      [
        "20/10/2026",
        "Operações",
        "FGTS",
        "CAIXA ECONOMICA FEDERAL",
        -3975.58,
        "A VENCER"
      ],
      [
        "10/10/2026",
        "Despesas com Pessoal",
        "Seguro de vida",
        "METLIFE SEGUROS E PREVIDENCIA",
        -56.61,
        "A VENCER"
      ],
      [
        "09/10/2026",
        "Operações",
        "Sistema de Gerenciamento",
        "STRIKE TI",
        -1475,
        "A VENCER"
      ],
      [
        "06/10/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "AMANDA MAYUMI KOBAYASHI",
        -2014.35,
        "A VENCER"
      ],
      [
        "05/10/2026",
        "Despesas com Pessoal",
        "Salários",
        "ANDRE LUIZ ISIDORO DA SILVA",
        -1311.8,
        "A VENCER"
      ],
      [
        "05/10/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "FABRICIO RAMOS DOS SANTOS",
        -1008.58,
        "A VENCER"
      ],
      [
        "05/10/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "JONATHAN HENRIQUE DA SILVA SANTOS",
        -992.13,
        "A VENCER"
      ],
      [
        "05/10/2026",
        "Despesas com Pessoal",
        "Pensão Alimentícia",
        "JONATHAN HENRIQUE DA SILVA SANTOS",
        -545.94,
        "A VENCER"
      ],
      [
        "05/10/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "JOSIANA DA SILVA",
        -828.43,
        "A VENCER"
      ],
      [
        "05/10/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "LEONARDO MARTINS ALVES GALDEANO",
        -3114.89,
        "A VENCER"
      ],
      [
        "05/10/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "MARIA ANGELICA DOS REIS",
        -3541.63,
        "A VENCER"
      ],
      [
        "05/10/2026",
        "Despesas com Pessoal",
        "Salários",
        "MATEUS HENRIQUE DE FARIA",
        -1148.4,
        "A VENCER"
      ],
      [
        "05/10/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "MIGUEL ZINANI DE OLIVEIRA",
        -2029.09,
        "A VENCER"
      ],
      [
        "05/10/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "ROBSON LUIZ DOMINGOS DA SILVA",
        -2855.49,
        "A VENCER"
      ],
      [
        "05/10/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "SIDNEIA MORENA DE SOUZA",
        -1361.84,
        "A VENCER"
      ],
      [
        "05/10/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "YAN OLIVEIRA PRADO DE ALMEIDA",
        -697.71,
        "A VENCER"
      ],
      [
        "05/10/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "CLARA DE OLIVEIRA LIMA",
        -1442.69,
        "A VENCER"
      ],
      [
        "26/09/2026",
        "Deduções de Receita",
        "Máquinas e Equipamentos",
        "ISSEL SOROCABA",
        -1014.71,
        "A VENCER"
      ],
      [
        "20/09/2026",
        "Deduções de Receita",
        "Máquinas e Equipamentos",
        "ISSEL SOROCABA",
        -2451.72,
        "A VENCER"
      ],
      [
        "20/09/2026",
        "Despesas Administrativas",
        "Contabilidade",
        "AGYLIS CONTABILIDADE LTDA",
        -1000,
        "A VENCER"
      ],
      [
        "20/09/2026",
        "Operações",
        "FGTS",
        "CAIXA ECONOMICA FEDERAL",
        -3975.58,
        "A VENCER"
      ],
      [
        "10/09/2026",
        "Despesas com Pessoal",
        "Seguro de vida",
        "METLIFE SEGUROS E PREVIDENCIA",
        -56.61,
        "A VENCER"
      ],
      [
        "09/09/2026",
        "Operações",
        "Sistema de Gerenciamento",
        "STRIKE TI",
        -1475,
        "A VENCER"
      ],
      [
        "06/09/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "AMANDA MAYUMI KOBAYASHI",
        -2014.35,
        "A VENCER"
      ],
      [
        "05/09/2026",
        "Despesas com Pessoal",
        "Salários",
        "ANDRE LUIZ ISIDORO DA SILVA",
        -1311.8,
        "A VENCER"
      ],
      [
        "05/09/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "FABRICIO RAMOS DOS SANTOS",
        -1008.58,
        "A VENCER"
      ],
      [
        "05/09/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "JONATHAN HENRIQUE DA SILVA SANTOS",
        -992.13,
        "A VENCER"
      ],
      [
        "05/09/2026",
        "Despesas com Pessoal",
        "Pensão Alimentícia",
        "JONATHAN HENRIQUE DA SILVA SANTOS",
        -545.94,
        "A VENCER"
      ],
      [
        "05/09/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "JOSIANA DA SILVA",
        -828.43,
        "A VENCER"
      ],
      [
        "05/09/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "LEONARDO MARTINS ALVES GALDEANO",
        -3114.89,
        "A VENCER"
      ],
      [
        "05/09/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "MARIA ANGELICA DOS REIS",
        -3541.63,
        "A VENCER"
      ],
      [
        "05/09/2026",
        "Despesas com Pessoal",
        "Salários",
        "MATEUS HENRIQUE DE FARIA",
        -1148.4,
        "A VENCER"
      ],
      [
        "05/09/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "MIGUEL ZINANI DE OLIVEIRA",
        -2029.09,
        "A VENCER"
      ],
      [
        "05/09/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "ROBSON LUIZ DOMINGOS DA SILVA",
        -2855.49,
        "A VENCER"
      ],
      [
        "05/09/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "SIDNEIA MORENA DE SOUZA",
        -1361.84,
        "A VENCER"
      ],
      [
        "05/09/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "YAN OLIVEIRA PRADO DE ALMEIDA",
        -697.71,
        "A VENCER"
      ],
      [
        "05/09/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "CLARA DE OLIVEIRA LIMA",
        -1442.69,
        "A VENCER"
      ],
      [
        "26/08/2026",
        "Deduções de Receita",
        "Máquinas e Equipamentos",
        "ISSEL SOROCABA",
        -1014.71,
        "A VENCER"
      ],
      [
        "21/08/2026",
        "Despesas com Pessoal",
        "VT",
        "CDC ADMINISTRACAO DE CONVENIOS LTDA",
        -6960.77,
        "A VENCER"
      ],
      [
        "20/08/2026",
        "Deduções de Receita",
        "Máquinas e Equipamentos",
        "ISSEL SOROCABA",
        -2451.72,
        "A VENCER"
      ],
      [
        "20/08/2026",
        "Despesas Administrativas",
        "Contabilidade",
        "AGYLIS CONTABILIDADE LTDA",
        -1000,
        "A VENCER"
      ],
      [
        "20/08/2026",
        "Operações",
        "FGTS",
        "CAIXA ECONOMICA FEDERAL",
        -3975.58,
        "A VENCER"
      ],
      [
        "10/08/2026",
        "Despesas com Pessoal",
        "Seguro de vida",
        "METLIFE SEGUROS E PREVIDENCIA",
        -56.61,
        "A VENCER"
      ],
      [
        "09/08/2026",
        "Operações",
        "Sistema de Gerenciamento",
        "STRIKE TI",
        -1475,
        "A VENCER"
      ],
      [
        "09/08/2026",
        "Operações",
        "Manutenção",
        "STRIKE TI",
        -1475,
        "A VENCER"
      ],
      [
        "06/08/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "AMANDA MAYUMI KOBAYASHI",
        -2014.35,
        "A VENCER"
      ],
      [
        "05/08/2026",
        "Despesas com Pessoal",
        "Salários",
        "ANDRE LUIZ ISIDORO DA SILVA",
        -1311.8,
        "A VENCER"
      ],
      [
        "05/08/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "FABRICIO RAMOS DOS SANTOS",
        -1008.58,
        "A VENCER"
      ],
      [
        "05/08/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "JONATHAN HENRIQUE DA SILVA SANTOS",
        -992.13,
        "A VENCER"
      ],
      [
        "05/08/2026",
        "Despesas com Pessoal",
        "Pensão Alimentícia",
        "JONATHAN HENRIQUE DA SILVA SANTOS",
        -545.94,
        "A VENCER"
      ],
      [
        "05/08/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "JOSIANA DA SILVA",
        -828.43,
        "A VENCER"
      ],
      [
        "05/08/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "LEONARDO MARTINS ALVES GALDEANO",
        -3114.89,
        "A VENCER"
      ],
      [
        "05/08/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "MARIA ANGELICA DOS REIS",
        -3541.63,
        "A VENCER"
      ],
      [
        "05/08/2026",
        "Despesas com Pessoal",
        "Salários",
        "MATEUS HENRIQUE DE FARIA",
        -1148.4,
        "A VENCER"
      ],
      [
        "05/08/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "MIGUEL ZINANI DE OLIVEIRA",
        -2029.09,
        "A VENCER"
      ],
      [
        "05/08/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "ROBSON LUIZ DOMINGOS DA SILVA",
        -2855.49,
        "A VENCER"
      ],
      [
        "05/08/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "SIDNEIA MORENA DE SOUZA",
        -1361.84,
        "A VENCER"
      ],
      [
        "05/08/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "YAN OLIVEIRA PRADO DE ALMEIDA",
        -697.71,
        "A VENCER"
      ],
      [
        "05/08/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "CLARA DE OLIVEIRA LIMA",
        -1442.69,
        "A VENCER"
      ],
      [
        "27/07/2026",
        "Operações",
        "Sistema de Gerenciamento",
        "MONI SOFTWARE LTDA",
        -183.89,
        "A VENCER"
      ],
      [
        "26/07/2026",
        "Deduções de Receita",
        "Máquinas e Equipamentos",
        "ISSEL SOROCABA",
        -1014.71,
        "A VENCER"
      ],
      [
        "20/07/2026",
        "Deduções de Receita",
        "Máquinas e Equipamentos",
        "ISSEL SOROCABA",
        -2451.72,
        "A VENCER"
      ],
      [
        "20/07/2026",
        "Despesas Administrativas",
        "Contabilidade",
        "AGYLIS CONTABILIDADE LTDA",
        -1000,
        "A VENCER"
      ],
      [
        "20/07/2026",
        "Operações",
        "Exames Admissional/Demissional",
        "MEXTRA",
        -348,
        "A VENCER"
      ],
      [
        "20/07/2026",
        "Deduções de Receita",
        "Central de monitoramento",
        "ECONDOS",
        -4153.72,
        "A VENCER"
      ],
      [
        "20/07/2026",
        "Operações",
        "FGTS",
        "CAIXA ECONOMICA FEDERAL",
        -3975.58,
        "A VENCER"
      ],
      [
        "20/07/2026",
        "Operações",
        "Sistema de Gerenciamento",
        "Omiexperience",
        -119,
        "A VENCER"
      ],
      [
        "18/07/2026",
        "Receita Bruta de Vendas",
        "Monitoramento Remoto",
        "RESIDENCIAL ANA LUCIA",
        7755.2,
        "A VENCER"
      ],
      [
        "17/07/2026",
        "Deduções de Receita",
        "Máquinas e Equipamentos",
        "MEXTRA",
        -210,
        "A VENCER"
      ],
      [
        "15/07/2026",
        "Receita Bruta de Vendas",
        "Monitoramento Remoto",
        "EDIFICIO INNOVARE",
        6981.72,
        "A VENCER"
      ],
      [
        "15/07/2026",
        "Receita Bruta de Vendas",
        "Monitoramento Remoto",
        "ASSOCIACAO DOS PROPRIETARIOS E PROMITENTES COMPRADORES DAS UNIDADES AUTONOMAS DO EDIFICIO VILLAGIO S",
        6355.86,
        "A VENCER"
      ],
      [
        "15/07/2026",
        "Receita Bruta de Vendas",
        "Monitoramento Remoto",
        "CONDOMINIO EDIFICIO CAPRI",
        5983.91,
        "A VENCER"
      ],
      [
        "15/07/2026",
        "Operações",
        "Benefícios",
        "CDC ADMINISTRACAO DE CONVENIOS LTDA",
        -5627.36,
        "A VENCER"
      ],
      [
        "10/07/2026",
        "Receita Bruta de Vendas",
        "Monitoramento Remoto",
        "SEGPOL",
        10500,
        "ATRASADO"
      ],
      [
        "10/07/2026",
        "Despesas com Pessoal",
        "Seguro de vida",
        "METLIFE SEGUROS E PREVIDENCIA",
        -64.7,
        "ATRASADO"
      ],
      [
        "10/07/2026",
        "Despesas com Pessoal",
        "Seguro de vida",
        "METLIFE SEGUROS E PREVIDENCIA",
        -56.61,
        "ATRASADO"
      ],
      [
        "10/07/2026",
        "Despesas com Pessoal",
        "Seguro de vida",
        "METLIFE SEGUROS E PREVIDENCIA",
        -80.87,
        "ATRASADO"
      ],
      [
        "10/07/2026",
        "Operações",
        "Contribuição Sindical",
        "SINDEEPRES",
        -195.17,
        "ATRASADO"
      ],
      [
        "10/07/2026",
        "Operações",
        "Contribuição Sindical Odonto",
        "SINDEEPRES",
        -283.1,
        "ATRASADO"
      ],
      [
        "09/07/2026",
        "Operações",
        "Sistema de Gerenciamento",
        "STRIKE TI",
        -1475,
        "ATRASADO"
      ],
      [
        "25/05/2026",
        "Deduções de Receita",
        "Máquinas e Equipamentos",
        "MULTISEG",
        -917.53,
        "ATRASADO"
      ],
      [
        "24/05/2026",
        "Operações",
        "Sistema de Gerenciamento",
        "MULTISEG",
        -917.53,
        "ATRASADO"
      ],
      [
        "25/04/2026",
        "Deduções de Receita",
        "Máquinas e Equipamentos",
        "MULTISEG",
        -1400.8,
        "ATRASADO"
      ],
      [
        "25/04/2026",
        "Deduções de Receita",
        "Máquinas e Equipamentos",
        "MULTISEG",
        -1182.59,
        "ATRASADO"
      ],
      [
        "10/04/2026",
        "Deduções de Receita",
        "Máquinas e Equipamentos",
        "MULTISEG",
        -519.22,
        "ATRASADO"
      ]
    ],
    "EXTRATO_RECEITAS": [
      [
        "18/07/2026",
        "Receita Bruta de Vendas",
        "Monitoramento Remoto",
        "RESIDENCIAL ANA LUCIA",
        7755.2,
        "A VENCER"
      ],
      [
        "15/07/2026",
        "Receita Bruta de Vendas",
        "Monitoramento Remoto",
        "EDIFICIO INNOVARE",
        6981.72,
        "A VENCER"
      ],
      [
        "15/07/2026",
        "Receita Bruta de Vendas",
        "Monitoramento Remoto",
        "ASSOCIACAO DOS PROPRIETARIOS E PROMITENTES COMPRADORES DAS UNIDADES AUTONOMAS DO EDIFICIO VILLAGIO S",
        6355.86,
        "A VENCER"
      ],
      [
        "15/07/2026",
        "Receita Bruta de Vendas",
        "Monitoramento Remoto",
        "CONDOMINIO EDIFICIO CAPRI",
        5983.91,
        "A VENCER"
      ],
      [
        "10/07/2026",
        "Receita Bruta de Vendas",
        "Monitoramento Remoto",
        "SEGPOL",
        10500,
        "ATRASADO"
      ]
    ],
    "EXTRATO_DESPESAS": [
      [
        "20/06/2029",
        "Despesas Administrativas",
        "Contabilidade",
        "AGYLIS CONTABILIDADE LTDA",
        -1000,
        "A VENCER"
      ],
      [
        "20/05/2029",
        "Despesas Administrativas",
        "Contabilidade",
        "AGYLIS CONTABILIDADE LTDA",
        -1000,
        "A VENCER"
      ],
      [
        "09/05/2029",
        "Operações",
        "Sistema de Gerenciamento",
        "STRIKE TI",
        -1475,
        "A VENCER"
      ],
      [
        "20/04/2029",
        "Despesas Administrativas",
        "Contabilidade",
        "AGYLIS CONTABILIDADE LTDA",
        -1000,
        "A VENCER"
      ],
      [
        "09/04/2029",
        "Operações",
        "Sistema de Gerenciamento",
        "STRIKE TI",
        -1475,
        "A VENCER"
      ],
      [
        "20/03/2029",
        "Despesas Administrativas",
        "Contabilidade",
        "AGYLIS CONTABILIDADE LTDA",
        -1000,
        "A VENCER"
      ],
      [
        "09/03/2029",
        "Operações",
        "Sistema de Gerenciamento",
        "STRIKE TI",
        -1475,
        "A VENCER"
      ],
      [
        "20/02/2029",
        "Despesas Administrativas",
        "Contabilidade",
        "AGYLIS CONTABILIDADE LTDA",
        -1000,
        "A VENCER"
      ],
      [
        "09/02/2029",
        "Operações",
        "Sistema de Gerenciamento",
        "STRIKE TI",
        -1475,
        "A VENCER"
      ],
      [
        "20/01/2029",
        "Despesas Administrativas",
        "Contabilidade",
        "AGYLIS CONTABILIDADE LTDA",
        -1000,
        "A VENCER"
      ],
      [
        "09/01/2029",
        "Operações",
        "Sistema de Gerenciamento",
        "STRIKE TI",
        -1475,
        "A VENCER"
      ],
      [
        "20/12/2028",
        "Despesas Administrativas",
        "Contabilidade",
        "AGYLIS CONTABILIDADE LTDA",
        -1000,
        "A VENCER"
      ],
      [
        "09/12/2028",
        "Operações",
        "Sistema de Gerenciamento",
        "STRIKE TI",
        -1475,
        "A VENCER"
      ],
      [
        "20/11/2028",
        "Despesas Administrativas",
        "Contabilidade",
        "AGYLIS CONTABILIDADE LTDA",
        -1000,
        "A VENCER"
      ],
      [
        "09/11/2028",
        "Operações",
        "Sistema de Gerenciamento",
        "STRIKE TI",
        -1475,
        "A VENCER"
      ],
      [
        "20/10/2028",
        "Despesas Administrativas",
        "Contabilidade",
        "AGYLIS CONTABILIDADE LTDA",
        -1000,
        "A VENCER"
      ],
      [
        "09/10/2028",
        "Operações",
        "Sistema de Gerenciamento",
        "STRIKE TI",
        -1475,
        "A VENCER"
      ],
      [
        "20/09/2028",
        "Despesas Administrativas",
        "Contabilidade",
        "AGYLIS CONTABILIDADE LTDA",
        -1000,
        "A VENCER"
      ],
      [
        "09/09/2028",
        "Operações",
        "Sistema de Gerenciamento",
        "STRIKE TI",
        -1475,
        "A VENCER"
      ],
      [
        "20/08/2028",
        "Despesas Administrativas",
        "Contabilidade",
        "AGYLIS CONTABILIDADE LTDA",
        -1000,
        "A VENCER"
      ],
      [
        "09/08/2028",
        "Operações",
        "Sistema de Gerenciamento",
        "STRIKE TI",
        -1475,
        "A VENCER"
      ],
      [
        "20/07/2028",
        "Despesas Administrativas",
        "Contabilidade",
        "AGYLIS CONTABILIDADE LTDA",
        -1000,
        "A VENCER"
      ],
      [
        "09/07/2028",
        "Operações",
        "Sistema de Gerenciamento",
        "STRIKE TI",
        -1475,
        "A VENCER"
      ],
      [
        "20/06/2028",
        "Despesas Administrativas",
        "Contabilidade",
        "AGYLIS CONTABILIDADE LTDA",
        -1000,
        "A VENCER"
      ],
      [
        "09/06/2028",
        "Operações",
        "Sistema de Gerenciamento",
        "STRIKE TI",
        -1475,
        "A VENCER"
      ],
      [
        "20/05/2028",
        "Despesas Administrativas",
        "Contabilidade",
        "AGYLIS CONTABILIDADE LTDA",
        -1000,
        "A VENCER"
      ],
      [
        "09/05/2028",
        "Operações",
        "Sistema de Gerenciamento",
        "STRIKE TI",
        -1475,
        "A VENCER"
      ],
      [
        "20/04/2028",
        "Despesas Administrativas",
        "Contabilidade",
        "AGYLIS CONTABILIDADE LTDA",
        -1000,
        "A VENCER"
      ],
      [
        "09/04/2028",
        "Operações",
        "Sistema de Gerenciamento",
        "STRIKE TI",
        -1475,
        "A VENCER"
      ],
      [
        "20/03/2028",
        "Despesas Administrativas",
        "Contabilidade",
        "AGYLIS CONTABILIDADE LTDA",
        -1000,
        "A VENCER"
      ],
      [
        "09/03/2028",
        "Operações",
        "Sistema de Gerenciamento",
        "STRIKE TI",
        -1475,
        "A VENCER"
      ],
      [
        "20/02/2028",
        "Despesas Administrativas",
        "Contabilidade",
        "AGYLIS CONTABILIDADE LTDA",
        -1000,
        "A VENCER"
      ],
      [
        "09/02/2028",
        "Operações",
        "Sistema de Gerenciamento",
        "STRIKE TI",
        -1475,
        "A VENCER"
      ],
      [
        "20/01/2028",
        "Despesas Administrativas",
        "Contabilidade",
        "AGYLIS CONTABILIDADE LTDA",
        -1000,
        "A VENCER"
      ],
      [
        "09/01/2028",
        "Operações",
        "Sistema de Gerenciamento",
        "STRIKE TI",
        -1475,
        "A VENCER"
      ],
      [
        "20/12/2027",
        "Despesas Administrativas",
        "Contabilidade",
        "AGYLIS CONTABILIDADE LTDA",
        -1000,
        "A VENCER"
      ],
      [
        "09/12/2027",
        "Operações",
        "Sistema de Gerenciamento",
        "STRIKE TI",
        -1475,
        "A VENCER"
      ],
      [
        "20/11/2027",
        "Despesas Administrativas",
        "Contabilidade",
        "AGYLIS CONTABILIDADE LTDA",
        -1000,
        "A VENCER"
      ],
      [
        "09/11/2027",
        "Operações",
        "Sistema de Gerenciamento",
        "STRIKE TI",
        -1475,
        "A VENCER"
      ],
      [
        "20/10/2027",
        "Despesas Administrativas",
        "Contabilidade",
        "AGYLIS CONTABILIDADE LTDA",
        -1000,
        "A VENCER"
      ],
      [
        "09/10/2027",
        "Operações",
        "Sistema de Gerenciamento",
        "STRIKE TI",
        -1475,
        "A VENCER"
      ],
      [
        "20/09/2027",
        "Despesas Administrativas",
        "Contabilidade",
        "AGYLIS CONTABILIDADE LTDA",
        -1000,
        "A VENCER"
      ],
      [
        "09/09/2027",
        "Operações",
        "Sistema de Gerenciamento",
        "STRIKE TI",
        -1475,
        "A VENCER"
      ],
      [
        "20/08/2027",
        "Despesas Administrativas",
        "Contabilidade",
        "AGYLIS CONTABILIDADE LTDA",
        -1000,
        "A VENCER"
      ],
      [
        "09/08/2027",
        "Operações",
        "Sistema de Gerenciamento",
        "STRIKE TI",
        -1475,
        "A VENCER"
      ],
      [
        "20/07/2027",
        "Despesas Administrativas",
        "Contabilidade",
        "AGYLIS CONTABILIDADE LTDA",
        -1000,
        "A VENCER"
      ],
      [
        "09/07/2027",
        "Operações",
        "Sistema de Gerenciamento",
        "STRIKE TI",
        -1475,
        "A VENCER"
      ],
      [
        "20/06/2027",
        "Despesas Administrativas",
        "Contabilidade",
        "AGYLIS CONTABILIDADE LTDA",
        -1000,
        "A VENCER"
      ],
      [
        "09/06/2027",
        "Operações",
        "Sistema de Gerenciamento",
        "STRIKE TI",
        -1475,
        "A VENCER"
      ],
      [
        "20/05/2027",
        "Despesas Administrativas",
        "Contabilidade",
        "AGYLIS CONTABILIDADE LTDA",
        -1000,
        "A VENCER"
      ],
      [
        "10/05/2027",
        "Despesas com Pessoal",
        "Seguro de vida",
        "METLIFE SEGUROS E PREVIDENCIA",
        -56.61,
        "A VENCER"
      ],
      [
        "09/05/2027",
        "Operações",
        "Sistema de Gerenciamento",
        "STRIKE TI",
        -1475,
        "A VENCER"
      ],
      [
        "20/04/2027",
        "Despesas Administrativas",
        "Contabilidade",
        "AGYLIS CONTABILIDADE LTDA",
        -1000,
        "A VENCER"
      ],
      [
        "10/04/2027",
        "Despesas com Pessoal",
        "Seguro de vida",
        "METLIFE SEGUROS E PREVIDENCIA",
        -56.61,
        "A VENCER"
      ],
      [
        "09/04/2027",
        "Operações",
        "Sistema de Gerenciamento",
        "STRIKE TI",
        -1475,
        "A VENCER"
      ],
      [
        "20/03/2027",
        "Despesas Administrativas",
        "Contabilidade",
        "AGYLIS CONTABILIDADE LTDA",
        -1000,
        "A VENCER"
      ],
      [
        "10/03/2027",
        "Despesas com Pessoal",
        "Seguro de vida",
        "METLIFE SEGUROS E PREVIDENCIA",
        -56.61,
        "A VENCER"
      ],
      [
        "09/03/2027",
        "Operações",
        "Sistema de Gerenciamento",
        "STRIKE TI",
        -1475,
        "A VENCER"
      ],
      [
        "20/02/2027",
        "Despesas Administrativas",
        "Contabilidade",
        "AGYLIS CONTABILIDADE LTDA",
        -1000,
        "A VENCER"
      ],
      [
        "10/02/2027",
        "Despesas com Pessoal",
        "Seguro de vida",
        "METLIFE SEGUROS E PREVIDENCIA",
        -56.61,
        "A VENCER"
      ],
      [
        "09/02/2027",
        "Operações",
        "Sistema de Gerenciamento",
        "STRIKE TI",
        -1475,
        "A VENCER"
      ],
      [
        "20/01/2027",
        "Despesas Administrativas",
        "Contabilidade",
        "AGYLIS CONTABILIDADE LTDA",
        -1000,
        "A VENCER"
      ],
      [
        "10/01/2027",
        "Despesas com Pessoal",
        "Seguro de vida",
        "METLIFE SEGUROS E PREVIDENCIA",
        -56.61,
        "A VENCER"
      ],
      [
        "09/01/2027",
        "Operações",
        "Sistema de Gerenciamento",
        "STRIKE TI",
        -1475,
        "A VENCER"
      ],
      [
        "05/01/2027",
        "Despesas com Pessoal",
        "Salários PIX",
        "CLARA DE OLIVEIRA LIMA",
        -1442.69,
        "A VENCER"
      ],
      [
        "20/12/2026",
        "Despesas Administrativas",
        "Contabilidade",
        "AGYLIS CONTABILIDADE LTDA",
        -1000,
        "A VENCER"
      ],
      [
        "20/12/2026",
        "Operações",
        "FGTS",
        "CAIXA ECONOMICA FEDERAL",
        -3975.58,
        "A VENCER"
      ],
      [
        "10/12/2026",
        "Despesas com Pessoal",
        "Seguro de vida",
        "METLIFE SEGUROS E PREVIDENCIA",
        -56.61,
        "A VENCER"
      ],
      [
        "09/12/2026",
        "Operações",
        "Sistema de Gerenciamento",
        "STRIKE TI",
        -1475,
        "A VENCER"
      ],
      [
        "06/12/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "AMANDA MAYUMI KOBAYASHI",
        -2014.35,
        "A VENCER"
      ],
      [
        "05/12/2026",
        "Despesas com Pessoal",
        "Salários",
        "ANDRE LUIZ ISIDORO DA SILVA",
        -1311.8,
        "A VENCER"
      ],
      [
        "05/12/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "FABRICIO RAMOS DOS SANTOS",
        -1008.58,
        "A VENCER"
      ],
      [
        "05/12/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "JONATHAN HENRIQUE DA SILVA SANTOS",
        -992.13,
        "A VENCER"
      ],
      [
        "05/12/2026",
        "Despesas com Pessoal",
        "Pensão Alimentícia",
        "JONATHAN HENRIQUE DA SILVA SANTOS",
        -545.94,
        "A VENCER"
      ],
      [
        "05/12/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "JOSIANA DA SILVA",
        -828.43,
        "A VENCER"
      ],
      [
        "05/12/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "LEONARDO MARTINS ALVES GALDEANO",
        -3114.89,
        "A VENCER"
      ],
      [
        "05/12/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "MARIA ANGELICA DOS REIS",
        -3541.63,
        "A VENCER"
      ],
      [
        "05/12/2026",
        "Despesas com Pessoal",
        "Salários",
        "MATEUS HENRIQUE DE FARIA",
        -1148.4,
        "A VENCER"
      ],
      [
        "05/12/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "MIGUEL ZINANI DE OLIVEIRA",
        -2029.09,
        "A VENCER"
      ],
      [
        "05/12/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "ROBSON LUIZ DOMINGOS DA SILVA",
        -2855.49,
        "A VENCER"
      ],
      [
        "05/12/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "SIDNEIA MORENA DE SOUZA",
        -1361.84,
        "A VENCER"
      ],
      [
        "05/12/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "YAN OLIVEIRA PRADO DE ALMEIDA",
        -697.71,
        "A VENCER"
      ],
      [
        "05/12/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "CLARA DE OLIVEIRA LIMA",
        -1442.69,
        "A VENCER"
      ],
      [
        "20/11/2026",
        "Despesas Administrativas",
        "Contabilidade",
        "AGYLIS CONTABILIDADE LTDA",
        -1000,
        "A VENCER"
      ],
      [
        "20/11/2026",
        "Operações",
        "FGTS",
        "CAIXA ECONOMICA FEDERAL",
        -3975.58,
        "A VENCER"
      ],
      [
        "10/11/2026",
        "Despesas com Pessoal",
        "Seguro de vida",
        "METLIFE SEGUROS E PREVIDENCIA",
        -56.61,
        "A VENCER"
      ],
      [
        "09/11/2026",
        "Operações",
        "Sistema de Gerenciamento",
        "STRIKE TI",
        -1475,
        "A VENCER"
      ],
      [
        "06/11/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "AMANDA MAYUMI KOBAYASHI",
        -2014.35,
        "A VENCER"
      ],
      [
        "05/11/2026",
        "Despesas com Pessoal",
        "Salários",
        "ANDRE LUIZ ISIDORO DA SILVA",
        -1311.8,
        "A VENCER"
      ],
      [
        "05/11/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "FABRICIO RAMOS DOS SANTOS",
        -1008.58,
        "A VENCER"
      ],
      [
        "05/11/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "JONATHAN HENRIQUE DA SILVA SANTOS",
        -992.13,
        "A VENCER"
      ],
      [
        "05/11/2026",
        "Despesas com Pessoal",
        "Pensão Alimentícia",
        "JONATHAN HENRIQUE DA SILVA SANTOS",
        -545.94,
        "A VENCER"
      ],
      [
        "05/11/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "JOSIANA DA SILVA",
        -828.43,
        "A VENCER"
      ],
      [
        "05/11/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "LEONARDO MARTINS ALVES GALDEANO",
        -3114.89,
        "A VENCER"
      ],
      [
        "05/11/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "MARIA ANGELICA DOS REIS",
        -3541.63,
        "A VENCER"
      ],
      [
        "05/11/2026",
        "Despesas com Pessoal",
        "Salários",
        "MATEUS HENRIQUE DE FARIA",
        -1148.4,
        "A VENCER"
      ],
      [
        "05/11/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "MIGUEL ZINANI DE OLIVEIRA",
        -2029.09,
        "A VENCER"
      ],
      [
        "05/11/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "ROBSON LUIZ DOMINGOS DA SILVA",
        -2855.49,
        "A VENCER"
      ],
      [
        "05/11/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "SIDNEIA MORENA DE SOUZA",
        -1361.84,
        "A VENCER"
      ],
      [
        "05/11/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "YAN OLIVEIRA PRADO DE ALMEIDA",
        -697.71,
        "A VENCER"
      ],
      [
        "05/11/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "CLARA DE OLIVEIRA LIMA",
        -1442.69,
        "A VENCER"
      ],
      [
        "20/10/2026",
        "Deduções de Receita",
        "Máquinas e Equipamentos",
        "ISSEL SOROCABA",
        -2451.72,
        "A VENCER"
      ],
      [
        "20/10/2026",
        "Despesas Administrativas",
        "Contabilidade",
        "AGYLIS CONTABILIDADE LTDA",
        -1000,
        "A VENCER"
      ],
      [
        "20/10/2026",
        "Operações",
        "FGTS",
        "CAIXA ECONOMICA FEDERAL",
        -3975.58,
        "A VENCER"
      ],
      [
        "10/10/2026",
        "Despesas com Pessoal",
        "Seguro de vida",
        "METLIFE SEGUROS E PREVIDENCIA",
        -56.61,
        "A VENCER"
      ],
      [
        "09/10/2026",
        "Operações",
        "Sistema de Gerenciamento",
        "STRIKE TI",
        -1475,
        "A VENCER"
      ],
      [
        "06/10/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "AMANDA MAYUMI KOBAYASHI",
        -2014.35,
        "A VENCER"
      ],
      [
        "05/10/2026",
        "Despesas com Pessoal",
        "Salários",
        "ANDRE LUIZ ISIDORO DA SILVA",
        -1311.8,
        "A VENCER"
      ],
      [
        "05/10/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "FABRICIO RAMOS DOS SANTOS",
        -1008.58,
        "A VENCER"
      ],
      [
        "05/10/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "JONATHAN HENRIQUE DA SILVA SANTOS",
        -992.13,
        "A VENCER"
      ],
      [
        "05/10/2026",
        "Despesas com Pessoal",
        "Pensão Alimentícia",
        "JONATHAN HENRIQUE DA SILVA SANTOS",
        -545.94,
        "A VENCER"
      ],
      [
        "05/10/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "JOSIANA DA SILVA",
        -828.43,
        "A VENCER"
      ],
      [
        "05/10/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "LEONARDO MARTINS ALVES GALDEANO",
        -3114.89,
        "A VENCER"
      ],
      [
        "05/10/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "MARIA ANGELICA DOS REIS",
        -3541.63,
        "A VENCER"
      ],
      [
        "05/10/2026",
        "Despesas com Pessoal",
        "Salários",
        "MATEUS HENRIQUE DE FARIA",
        -1148.4,
        "A VENCER"
      ],
      [
        "05/10/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "MIGUEL ZINANI DE OLIVEIRA",
        -2029.09,
        "A VENCER"
      ],
      [
        "05/10/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "ROBSON LUIZ DOMINGOS DA SILVA",
        -2855.49,
        "A VENCER"
      ],
      [
        "05/10/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "SIDNEIA MORENA DE SOUZA",
        -1361.84,
        "A VENCER"
      ],
      [
        "05/10/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "YAN OLIVEIRA PRADO DE ALMEIDA",
        -697.71,
        "A VENCER"
      ],
      [
        "05/10/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "CLARA DE OLIVEIRA LIMA",
        -1442.69,
        "A VENCER"
      ],
      [
        "26/09/2026",
        "Deduções de Receita",
        "Máquinas e Equipamentos",
        "ISSEL SOROCABA",
        -1014.71,
        "A VENCER"
      ],
      [
        "20/09/2026",
        "Deduções de Receita",
        "Máquinas e Equipamentos",
        "ISSEL SOROCABA",
        -2451.72,
        "A VENCER"
      ],
      [
        "20/09/2026",
        "Despesas Administrativas",
        "Contabilidade",
        "AGYLIS CONTABILIDADE LTDA",
        -1000,
        "A VENCER"
      ],
      [
        "20/09/2026",
        "Operações",
        "FGTS",
        "CAIXA ECONOMICA FEDERAL",
        -3975.58,
        "A VENCER"
      ],
      [
        "10/09/2026",
        "Despesas com Pessoal",
        "Seguro de vida",
        "METLIFE SEGUROS E PREVIDENCIA",
        -56.61,
        "A VENCER"
      ],
      [
        "09/09/2026",
        "Operações",
        "Sistema de Gerenciamento",
        "STRIKE TI",
        -1475,
        "A VENCER"
      ],
      [
        "06/09/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "AMANDA MAYUMI KOBAYASHI",
        -2014.35,
        "A VENCER"
      ],
      [
        "05/09/2026",
        "Despesas com Pessoal",
        "Salários",
        "ANDRE LUIZ ISIDORO DA SILVA",
        -1311.8,
        "A VENCER"
      ],
      [
        "05/09/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "FABRICIO RAMOS DOS SANTOS",
        -1008.58,
        "A VENCER"
      ],
      [
        "05/09/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "JONATHAN HENRIQUE DA SILVA SANTOS",
        -992.13,
        "A VENCER"
      ],
      [
        "05/09/2026",
        "Despesas com Pessoal",
        "Pensão Alimentícia",
        "JONATHAN HENRIQUE DA SILVA SANTOS",
        -545.94,
        "A VENCER"
      ],
      [
        "05/09/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "JOSIANA DA SILVA",
        -828.43,
        "A VENCER"
      ],
      [
        "05/09/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "LEONARDO MARTINS ALVES GALDEANO",
        -3114.89,
        "A VENCER"
      ],
      [
        "05/09/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "MARIA ANGELICA DOS REIS",
        -3541.63,
        "A VENCER"
      ],
      [
        "05/09/2026",
        "Despesas com Pessoal",
        "Salários",
        "MATEUS HENRIQUE DE FARIA",
        -1148.4,
        "A VENCER"
      ],
      [
        "05/09/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "MIGUEL ZINANI DE OLIVEIRA",
        -2029.09,
        "A VENCER"
      ],
      [
        "05/09/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "ROBSON LUIZ DOMINGOS DA SILVA",
        -2855.49,
        "A VENCER"
      ],
      [
        "05/09/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "SIDNEIA MORENA DE SOUZA",
        -1361.84,
        "A VENCER"
      ],
      [
        "05/09/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "YAN OLIVEIRA PRADO DE ALMEIDA",
        -697.71,
        "A VENCER"
      ],
      [
        "05/09/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "CLARA DE OLIVEIRA LIMA",
        -1442.69,
        "A VENCER"
      ],
      [
        "26/08/2026",
        "Deduções de Receita",
        "Máquinas e Equipamentos",
        "ISSEL SOROCABA",
        -1014.71,
        "A VENCER"
      ],
      [
        "21/08/2026",
        "Despesas com Pessoal",
        "VT",
        "CDC ADMINISTRACAO DE CONVENIOS LTDA",
        -6960.77,
        "A VENCER"
      ],
      [
        "20/08/2026",
        "Deduções de Receita",
        "Máquinas e Equipamentos",
        "ISSEL SOROCABA",
        -2451.72,
        "A VENCER"
      ],
      [
        "20/08/2026",
        "Despesas Administrativas",
        "Contabilidade",
        "AGYLIS CONTABILIDADE LTDA",
        -1000,
        "A VENCER"
      ],
      [
        "20/08/2026",
        "Operações",
        "FGTS",
        "CAIXA ECONOMICA FEDERAL",
        -3975.58,
        "A VENCER"
      ],
      [
        "10/08/2026",
        "Despesas com Pessoal",
        "Seguro de vida",
        "METLIFE SEGUROS E PREVIDENCIA",
        -56.61,
        "A VENCER"
      ],
      [
        "09/08/2026",
        "Operações",
        "Sistema de Gerenciamento",
        "STRIKE TI",
        -1475,
        "A VENCER"
      ],
      [
        "09/08/2026",
        "Operações",
        "Manutenção",
        "STRIKE TI",
        -1475,
        "A VENCER"
      ],
      [
        "06/08/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "AMANDA MAYUMI KOBAYASHI",
        -2014.35,
        "A VENCER"
      ],
      [
        "05/08/2026",
        "Despesas com Pessoal",
        "Salários",
        "ANDRE LUIZ ISIDORO DA SILVA",
        -1311.8,
        "A VENCER"
      ],
      [
        "05/08/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "FABRICIO RAMOS DOS SANTOS",
        -1008.58,
        "A VENCER"
      ],
      [
        "05/08/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "JONATHAN HENRIQUE DA SILVA SANTOS",
        -992.13,
        "A VENCER"
      ],
      [
        "05/08/2026",
        "Despesas com Pessoal",
        "Pensão Alimentícia",
        "JONATHAN HENRIQUE DA SILVA SANTOS",
        -545.94,
        "A VENCER"
      ],
      [
        "05/08/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "JOSIANA DA SILVA",
        -828.43,
        "A VENCER"
      ],
      [
        "05/08/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "LEONARDO MARTINS ALVES GALDEANO",
        -3114.89,
        "A VENCER"
      ],
      [
        "05/08/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "MARIA ANGELICA DOS REIS",
        -3541.63,
        "A VENCER"
      ],
      [
        "05/08/2026",
        "Despesas com Pessoal",
        "Salários",
        "MATEUS HENRIQUE DE FARIA",
        -1148.4,
        "A VENCER"
      ],
      [
        "05/08/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "MIGUEL ZINANI DE OLIVEIRA",
        -2029.09,
        "A VENCER"
      ],
      [
        "05/08/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "ROBSON LUIZ DOMINGOS DA SILVA",
        -2855.49,
        "A VENCER"
      ],
      [
        "05/08/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "SIDNEIA MORENA DE SOUZA",
        -1361.84,
        "A VENCER"
      ],
      [
        "05/08/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "YAN OLIVEIRA PRADO DE ALMEIDA",
        -697.71,
        "A VENCER"
      ],
      [
        "05/08/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "CLARA DE OLIVEIRA LIMA",
        -1442.69,
        "A VENCER"
      ],
      [
        "27/07/2026",
        "Operações",
        "Sistema de Gerenciamento",
        "MONI SOFTWARE LTDA",
        -183.89,
        "A VENCER"
      ],
      [
        "26/07/2026",
        "Deduções de Receita",
        "Máquinas e Equipamentos",
        "ISSEL SOROCABA",
        -1014.71,
        "A VENCER"
      ],
      [
        "20/07/2026",
        "Deduções de Receita",
        "Máquinas e Equipamentos",
        "ISSEL SOROCABA",
        -2451.72,
        "A VENCER"
      ],
      [
        "20/07/2026",
        "Despesas Administrativas",
        "Contabilidade",
        "AGYLIS CONTABILIDADE LTDA",
        -1000,
        "A VENCER"
      ],
      [
        "20/07/2026",
        "Operações",
        "Exames Admissional/Demissional",
        "MEXTRA",
        -348,
        "A VENCER"
      ],
      [
        "20/07/2026",
        "Deduções de Receita",
        "Central de monitoramento",
        "ECONDOS",
        -4153.72,
        "A VENCER"
      ],
      [
        "20/07/2026",
        "Operações",
        "FGTS",
        "CAIXA ECONOMICA FEDERAL",
        -3975.58,
        "A VENCER"
      ],
      [
        "20/07/2026",
        "Operações",
        "Sistema de Gerenciamento",
        "Omiexperience",
        -119,
        "A VENCER"
      ],
      [
        "17/07/2026",
        "Deduções de Receita",
        "Máquinas e Equipamentos",
        "MEXTRA",
        -210,
        "A VENCER"
      ],
      [
        "15/07/2026",
        "Operações",
        "Benefícios",
        "CDC ADMINISTRACAO DE CONVENIOS LTDA",
        -5627.36,
        "A VENCER"
      ],
      [
        "10/07/2026",
        "Despesas com Pessoal",
        "Seguro de vida",
        "METLIFE SEGUROS E PREVIDENCIA",
        -64.7,
        "ATRASADO"
      ],
      [
        "10/07/2026",
        "Despesas com Pessoal",
        "Seguro de vida",
        "METLIFE SEGUROS E PREVIDENCIA",
        -56.61,
        "ATRASADO"
      ],
      [
        "10/07/2026",
        "Despesas com Pessoal",
        "Seguro de vida",
        "METLIFE SEGUROS E PREVIDENCIA",
        -80.87,
        "ATRASADO"
      ],
      [
        "10/07/2026",
        "Operações",
        "Contribuição Sindical",
        "SINDEEPRES",
        -195.17,
        "ATRASADO"
      ],
      [
        "10/07/2026",
        "Operações",
        "Contribuição Sindical Odonto",
        "SINDEEPRES",
        -283.1,
        "ATRASADO"
      ],
      [
        "09/07/2026",
        "Operações",
        "Sistema de Gerenciamento",
        "STRIKE TI",
        -1475,
        "ATRASADO"
      ],
      [
        "25/05/2026",
        "Deduções de Receita",
        "Máquinas e Equipamentos",
        "MULTISEG",
        -917.53,
        "ATRASADO"
      ],
      [
        "24/05/2026",
        "Operações",
        "Sistema de Gerenciamento",
        "MULTISEG",
        -917.53,
        "ATRASADO"
      ],
      [
        "25/04/2026",
        "Deduções de Receita",
        "Máquinas e Equipamentos",
        "MULTISEG",
        -1400.8,
        "ATRASADO"
      ],
      [
        "25/04/2026",
        "Deduções de Receita",
        "Máquinas e Equipamentos",
        "MULTISEG",
        -1182.59,
        "ATRASADO"
      ],
      [
        "10/04/2026",
        "Deduções de Receita",
        "Máquinas e Equipamentos",
        "MULTISEG",
        -519.22,
        "ATRASADO"
      ]
    ],
    "KPIS": {
      "TOTAL_RECEITA": 37576.69,
      "TOTAL_DESPESA": 190998.25,
      "VALOR_LIQUIDO": -153421.56,
      "MARGEM_LIQUIDA": -408.28918140474843,
      "VALOR_LIQ_SERIES": [
        0,
        0,
        0,
        -3102.6099999999997,
        -1835.06,
        0,
        16337.26000000001,
        -41302.36,
        -32866.59,
        -31851.879999999997,
        -29400.160000000003,
        -29400.160000000003
      ]
    },
    "RECEITA_DIA": [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      10500,
      0,
      0,
      0,
      0,
      19321.489999999998,
      0,
      0,
      7755.2,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    "DESPESA_DIA": [
      0,
      0,
      0,
      0,
      104393.10000000002,
      10071.75,
      0,
      0,
      10325,
      1482.7200000000003,
      0,
      0,
      0,
      0,
      5627.36,
      0,
      210,
      0,
      0,
      44281.08000000001,
      6960.77,
      0,
      0,
      917.53,
      3500.92,
      3044.13,
      183.89,
      0,
      0,
      0,
      0
    ],
    "SALDOS_MES": [
      0,
      0,
      0,
      -3102.6099999999997,
      -4937.67,
      -4937.67,
      11399.59000000001,
      -29902.76999999999,
      -62769.359999999986,
      -94621.23999999999,
      -124021.4,
      -153421.56
    ],
    "FLUXO_RECEITA": [
      {
        "cat": "Monitoramento Remoto",
        "values": [
          0,
          0,
          0,
          0,
          0,
          0,
          37576.69,
          0,
          0,
          0,
          0,
          0
        ]
      }
    ],
    "FLUXO_DESPESA": [
      {
        "cat": "Salários PIX",
        "values": [
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          -19886.829999999994,
          -19886.829999999994,
          -19886.829999999994,
          -19886.829999999994,
          -19886.829999999994
        ]
      },
      {
        "cat": "FGTS",
        "values": [
          0,
          0,
          0,
          0,
          0,
          0,
          -3975.58,
          -3975.58,
          -3975.58,
          -3975.58,
          -3975.58,
          -3975.58
        ]
      },
      {
        "cat": "Máquinas e Equipamentos",
        "values": [
          0,
          0,
          0,
          -3102.6099999999997,
          -917.53,
          0,
          -3676.43,
          -3466.43,
          -3466.43,
          -2451.72,
          0,
          0
        ]
      },
      {
        "cat": "Salários",
        "values": [
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          -2460.2,
          -2460.2,
          -2460.2,
          -2460.2,
          -2460.2
        ]
      },
      {
        "cat": "Sistema de Gerenciamento",
        "values": [
          0,
          0,
          0,
          0,
          -917.53,
          0,
          -1777.8899999999999,
          -1475,
          -1475,
          -1475,
          -1475,
          -1475
        ]
      }
    ],
    "COMP_DATA": [
      {
        "tipo": "Receita",
        "isHeader": true,
        "d1": 0,
        "d2": 0
      },
      {
        "tipo": "Despesa",
        "isHeader": true,
        "d1": 0,
        "d2": -4937.67
      },
      {
        "tipo": "Sistema de Gerenciamento",
        "parent": "Despesa",
        "d1": 0,
        "d2": -917.53
      },
      {
        "tipo": "Máquinas e Equipamentos",
        "parent": "Despesa",
        "d1": 0,
        "d2": -4020.1399999999994
      }
    ]
  },
  "tudo": {
    "MONTH_DATA": [
      {
        "m": "janeiro",
        "receita": 0,
        "despesa": 6.05,
        "receita_bruta": 0,
        "impostos": 0
      },
      {
        "m": "fevereiro",
        "receita": 20760,
        "despesa": 0.53,
        "receita_bruta": 20760,
        "impostos": 0
      },
      {
        "m": "março",
        "receita": 0,
        "despesa": 337.84,
        "receita_bruta": 0,
        "impostos": 0
      },
      {
        "m": "abril",
        "receita": 0,
        "despesa": 3103.7599999999998,
        "receita_bruta": 0,
        "impostos": 0
      },
      {
        "m": "maio",
        "receita": 100,
        "despesa": 2173.24,
        "receita_bruta": 100,
        "impostos": 0
      },
      {
        "m": "junho",
        "receita": 40869.689999999995,
        "despesa": 34041.09,
        "receita_bruta": 40869.689999999995,
        "impostos": 0
      },
      {
        "m": "julho",
        "receita": 72698.50000000001,
        "despesa": 57618.11999999998,
        "receita_bruta": 73066.78000000001,
        "impostos": 0
      },
      {
        "m": "agosto",
        "receita": 0,
        "despesa": 41302.36,
        "receita_bruta": 0,
        "impostos": 0
      },
      {
        "m": "setembro",
        "receita": 0,
        "despesa": 32866.59,
        "receita_bruta": 0,
        "impostos": 0
      },
      {
        "m": "outubro",
        "receita": 0,
        "despesa": 31851.879999999997,
        "receita_bruta": 0,
        "impostos": 0
      },
      {
        "m": "novembro",
        "receita": 0,
        "despesa": 29400.160000000003,
        "receita_bruta": 0,
        "impostos": 0
      },
      {
        "m": "dezembro",
        "receita": 0,
        "despesa": 29400.160000000003,
        "receita_bruta": 0,
        "impostos": 0
      }
    ],
    "RECEITA_CATEGORIAS": [
      {
        "name": "Monitoramento Remoto",
        "value": 113568.19,
        "clientes": 12
      },
      {
        "name": "Empréstimo",
        "value": 20760,
        "clientes": 1
      },
      {
        "name": "Portaria/Limpeza",
        "value": 100,
        "clientes": 1
      }
    ],
    "DESPESA_CATEGORIAS": [
      {
        "name": "Salários PIX",
        "value": 117969.53000000006,
        "fornecedores": 13
      },
      {
        "name": "Máquinas e Equipamentos",
        "value": 28000.179999999993,
        "fornecedores": 5
      },
      {
        "name": "FGTS",
        "value": 23853.480000000003,
        "fornecedores": 1
      },
      {
        "name": "Sistema de Gerenciamento",
        "value": 22918.670000000006,
        "fornecedores": 13
      },
      {
        "name": "Salários",
        "value": 18533.199999999997,
        "fornecedores": 2
      },
      {
        "name": "Benefícios",
        "value": 10976.599999999999,
        "fornecedores": 1
      },
      {
        "name": "Central de monitoramento",
        "value": 7336.4,
        "fornecedores": 2
      },
      {
        "name": "Contabilidade",
        "value": 7000.5,
        "fornecedores": 2
      },
      {
        "name": "VT",
        "value": 6960.77,
        "fornecedores": 1
      },
      {
        "name": "Emprestimos",
        "value": 6000,
        "fornecedores": 1
      },
      {
        "name": "Pensão Alimentícia",
        "value": 2730.2000000000003,
        "fornecedores": 2
      },
      {
        "name": "Vale Transporte",
        "value": 2545.2,
        "fornecedores": 1
      }
    ],
    "RECEITA_CLIENTES": [
      {
        "name": "SEGPOL",
        "value": 24600
      },
      {
        "name": "Sem cliente",
        "value": 20760
      },
      {
        "name": "RESIDENCIAL ANA LUCIA",
        "value": 15510.4
      },
      {
        "name": "SIA FACILITIES",
        "value": 15271.02
      },
      {
        "name": "EDIFICIO INNOVARE",
        "value": 13963.44
      },
      {
        "name": "CONDOMINIO EDIFICIO ITAPOLIS",
        "value": 13867.86
      },
      {
        "name": "ASSOCIACAO DOS PROPRIETARIOS E PROMITENTES COMPRADORES DAS UNIDADES AUTONOMAS DO EDIFICIO VILLAGIO S",
        "value": 12710.279999999999
      },
      {
        "name": "CONDOMINIO EDIFICIO CAPRI",
        "value": 11966.470000000001
      },
      {
        "name": "ANDRE LUIZ ISIDORO DA SILVA",
        "value": 2623.6
      },
      {
        "name": "MATEUS HENRIQUE DE FARIA",
        "value": 1148.4
      },
      {
        "name": "CONDOMINIO EDIFICIO PAUL CEZANNE",
        "value": 873.72
      },
      {
        "name": "CONDOMINIO DO EDIFICIO PONTA NEGRA",
        "value": 850
      }
    ],
    "DESPESA_FORNECEDORES": [
      {
        "name": "CAIXA ECONOMICA FEDERAL",
        "value": 23853.480000000003
      },
      {
        "name": "MARIA ANGELICA DOS REIS",
        "value": 21778.980000000003
      },
      {
        "name": "LEONARDO MARTINS ALVES GALDEANO",
        "value": 19357.14
      },
      {
        "name": "CDC ADMINISTRACAO DE CONVENIOS LTDA",
        "value": 17937.370000000003
      },
      {
        "name": "ROBSON LUIZ DOMINGOS DA SILVA",
        "value": 17775.539999999997
      },
      {
        "name": "ISSEL SOROCABA",
        "value": 12851.009999999998
      },
      {
        "name": "MIGUEL ZINANI DE OLIVEIRA",
        "value": 12174.539999999999
      },
      {
        "name": "AMANDA MAYUMI KOBAYASHI",
        "value": 12086.1
      },
      {
        "name": "ANDRE LUIZ ISIDORO DA SILVA",
        "value": 10494.4
      },
      {
        "name": "STRIKE TI",
        "value": 10325
      },
      {
        "name": "HERITAGE COMPANY LTDA",
        "value": 10000
      },
      {
        "name": "JONATHAN HENRIQUE DA SILVA SANTOS",
        "value": 8682.480000000001
      }
    ],
    "EXTRATO": [
      [
        "20/06/2029",
        "Despesas Administrativas",
        "Contabilidade",
        "AGYLIS CONTABILIDADE LTDA",
        -1000,
        "A VENCER"
      ],
      [
        "20/05/2029",
        "Despesas Administrativas",
        "Contabilidade",
        "AGYLIS CONTABILIDADE LTDA",
        -1000,
        "A VENCER"
      ],
      [
        "09/05/2029",
        "Operações",
        "Sistema de Gerenciamento",
        "STRIKE TI",
        -1475,
        "A VENCER"
      ],
      [
        "20/04/2029",
        "Despesas Administrativas",
        "Contabilidade",
        "AGYLIS CONTABILIDADE LTDA",
        -1000,
        "A VENCER"
      ],
      [
        "09/04/2029",
        "Operações",
        "Sistema de Gerenciamento",
        "STRIKE TI",
        -1475,
        "A VENCER"
      ],
      [
        "20/03/2029",
        "Despesas Administrativas",
        "Contabilidade",
        "AGYLIS CONTABILIDADE LTDA",
        -1000,
        "A VENCER"
      ],
      [
        "09/03/2029",
        "Operações",
        "Sistema de Gerenciamento",
        "STRIKE TI",
        -1475,
        "A VENCER"
      ],
      [
        "20/02/2029",
        "Despesas Administrativas",
        "Contabilidade",
        "AGYLIS CONTABILIDADE LTDA",
        -1000,
        "A VENCER"
      ],
      [
        "09/02/2029",
        "Operações",
        "Sistema de Gerenciamento",
        "STRIKE TI",
        -1475,
        "A VENCER"
      ],
      [
        "20/01/2029",
        "Despesas Administrativas",
        "Contabilidade",
        "AGYLIS CONTABILIDADE LTDA",
        -1000,
        "A VENCER"
      ],
      [
        "09/01/2029",
        "Operações",
        "Sistema de Gerenciamento",
        "STRIKE TI",
        -1475,
        "A VENCER"
      ],
      [
        "20/12/2028",
        "Despesas Administrativas",
        "Contabilidade",
        "AGYLIS CONTABILIDADE LTDA",
        -1000,
        "A VENCER"
      ],
      [
        "09/12/2028",
        "Operações",
        "Sistema de Gerenciamento",
        "STRIKE TI",
        -1475,
        "A VENCER"
      ],
      [
        "20/11/2028",
        "Despesas Administrativas",
        "Contabilidade",
        "AGYLIS CONTABILIDADE LTDA",
        -1000,
        "A VENCER"
      ],
      [
        "09/11/2028",
        "Operações",
        "Sistema de Gerenciamento",
        "STRIKE TI",
        -1475,
        "A VENCER"
      ],
      [
        "20/10/2028",
        "Despesas Administrativas",
        "Contabilidade",
        "AGYLIS CONTABILIDADE LTDA",
        -1000,
        "A VENCER"
      ],
      [
        "09/10/2028",
        "Operações",
        "Sistema de Gerenciamento",
        "STRIKE TI",
        -1475,
        "A VENCER"
      ],
      [
        "20/09/2028",
        "Despesas Administrativas",
        "Contabilidade",
        "AGYLIS CONTABILIDADE LTDA",
        -1000,
        "A VENCER"
      ],
      [
        "09/09/2028",
        "Operações",
        "Sistema de Gerenciamento",
        "STRIKE TI",
        -1475,
        "A VENCER"
      ],
      [
        "20/08/2028",
        "Despesas Administrativas",
        "Contabilidade",
        "AGYLIS CONTABILIDADE LTDA",
        -1000,
        "A VENCER"
      ],
      [
        "09/08/2028",
        "Operações",
        "Sistema de Gerenciamento",
        "STRIKE TI",
        -1475,
        "A VENCER"
      ],
      [
        "20/07/2028",
        "Despesas Administrativas",
        "Contabilidade",
        "AGYLIS CONTABILIDADE LTDA",
        -1000,
        "A VENCER"
      ],
      [
        "09/07/2028",
        "Operações",
        "Sistema de Gerenciamento",
        "STRIKE TI",
        -1475,
        "A VENCER"
      ],
      [
        "20/06/2028",
        "Despesas Administrativas",
        "Contabilidade",
        "AGYLIS CONTABILIDADE LTDA",
        -1000,
        "A VENCER"
      ],
      [
        "09/06/2028",
        "Operações",
        "Sistema de Gerenciamento",
        "STRIKE TI",
        -1475,
        "A VENCER"
      ],
      [
        "20/05/2028",
        "Despesas Administrativas",
        "Contabilidade",
        "AGYLIS CONTABILIDADE LTDA",
        -1000,
        "A VENCER"
      ],
      [
        "09/05/2028",
        "Operações",
        "Sistema de Gerenciamento",
        "STRIKE TI",
        -1475,
        "A VENCER"
      ],
      [
        "20/04/2028",
        "Despesas Administrativas",
        "Contabilidade",
        "AGYLIS CONTABILIDADE LTDA",
        -1000,
        "A VENCER"
      ],
      [
        "09/04/2028",
        "Operações",
        "Sistema de Gerenciamento",
        "STRIKE TI",
        -1475,
        "A VENCER"
      ],
      [
        "20/03/2028",
        "Despesas Administrativas",
        "Contabilidade",
        "AGYLIS CONTABILIDADE LTDA",
        -1000,
        "A VENCER"
      ],
      [
        "09/03/2028",
        "Operações",
        "Sistema de Gerenciamento",
        "STRIKE TI",
        -1475,
        "A VENCER"
      ],
      [
        "20/02/2028",
        "Despesas Administrativas",
        "Contabilidade",
        "AGYLIS CONTABILIDADE LTDA",
        -1000,
        "A VENCER"
      ],
      [
        "09/02/2028",
        "Operações",
        "Sistema de Gerenciamento",
        "STRIKE TI",
        -1475,
        "A VENCER"
      ],
      [
        "20/01/2028",
        "Despesas Administrativas",
        "Contabilidade",
        "AGYLIS CONTABILIDADE LTDA",
        -1000,
        "A VENCER"
      ],
      [
        "09/01/2028",
        "Operações",
        "Sistema de Gerenciamento",
        "STRIKE TI",
        -1475,
        "A VENCER"
      ],
      [
        "20/12/2027",
        "Despesas Administrativas",
        "Contabilidade",
        "AGYLIS CONTABILIDADE LTDA",
        -1000,
        "A VENCER"
      ],
      [
        "09/12/2027",
        "Operações",
        "Sistema de Gerenciamento",
        "STRIKE TI",
        -1475,
        "A VENCER"
      ],
      [
        "20/11/2027",
        "Despesas Administrativas",
        "Contabilidade",
        "AGYLIS CONTABILIDADE LTDA",
        -1000,
        "A VENCER"
      ],
      [
        "09/11/2027",
        "Operações",
        "Sistema de Gerenciamento",
        "STRIKE TI",
        -1475,
        "A VENCER"
      ],
      [
        "20/10/2027",
        "Despesas Administrativas",
        "Contabilidade",
        "AGYLIS CONTABILIDADE LTDA",
        -1000,
        "A VENCER"
      ],
      [
        "09/10/2027",
        "Operações",
        "Sistema de Gerenciamento",
        "STRIKE TI",
        -1475,
        "A VENCER"
      ],
      [
        "20/09/2027",
        "Despesas Administrativas",
        "Contabilidade",
        "AGYLIS CONTABILIDADE LTDA",
        -1000,
        "A VENCER"
      ],
      [
        "09/09/2027",
        "Operações",
        "Sistema de Gerenciamento",
        "STRIKE TI",
        -1475,
        "A VENCER"
      ],
      [
        "20/08/2027",
        "Despesas Administrativas",
        "Contabilidade",
        "AGYLIS CONTABILIDADE LTDA",
        -1000,
        "A VENCER"
      ],
      [
        "09/08/2027",
        "Operações",
        "Sistema de Gerenciamento",
        "STRIKE TI",
        -1475,
        "A VENCER"
      ],
      [
        "20/07/2027",
        "Despesas Administrativas",
        "Contabilidade",
        "AGYLIS CONTABILIDADE LTDA",
        -1000,
        "A VENCER"
      ],
      [
        "09/07/2027",
        "Operações",
        "Sistema de Gerenciamento",
        "STRIKE TI",
        -1475,
        "A VENCER"
      ],
      [
        "20/06/2027",
        "Despesas Administrativas",
        "Contabilidade",
        "AGYLIS CONTABILIDADE LTDA",
        -1000,
        "A VENCER"
      ],
      [
        "09/06/2027",
        "Operações",
        "Sistema de Gerenciamento",
        "STRIKE TI",
        -1475,
        "A VENCER"
      ],
      [
        "20/05/2027",
        "Despesas Administrativas",
        "Contabilidade",
        "AGYLIS CONTABILIDADE LTDA",
        -1000,
        "A VENCER"
      ],
      [
        "10/05/2027",
        "Despesas com Pessoal",
        "Seguro de vida",
        "METLIFE SEGUROS E PREVIDENCIA",
        -56.61,
        "A VENCER"
      ],
      [
        "09/05/2027",
        "Operações",
        "Sistema de Gerenciamento",
        "STRIKE TI",
        -1475,
        "A VENCER"
      ],
      [
        "20/04/2027",
        "Despesas Administrativas",
        "Contabilidade",
        "AGYLIS CONTABILIDADE LTDA",
        -1000,
        "A VENCER"
      ],
      [
        "10/04/2027",
        "Despesas com Pessoal",
        "Seguro de vida",
        "METLIFE SEGUROS E PREVIDENCIA",
        -56.61,
        "A VENCER"
      ],
      [
        "09/04/2027",
        "Operações",
        "Sistema de Gerenciamento",
        "STRIKE TI",
        -1475,
        "A VENCER"
      ],
      [
        "20/03/2027",
        "Despesas Administrativas",
        "Contabilidade",
        "AGYLIS CONTABILIDADE LTDA",
        -1000,
        "A VENCER"
      ],
      [
        "10/03/2027",
        "Despesas com Pessoal",
        "Seguro de vida",
        "METLIFE SEGUROS E PREVIDENCIA",
        -56.61,
        "A VENCER"
      ],
      [
        "09/03/2027",
        "Operações",
        "Sistema de Gerenciamento",
        "STRIKE TI",
        -1475,
        "A VENCER"
      ],
      [
        "20/02/2027",
        "Despesas Administrativas",
        "Contabilidade",
        "AGYLIS CONTABILIDADE LTDA",
        -1000,
        "A VENCER"
      ],
      [
        "10/02/2027",
        "Despesas com Pessoal",
        "Seguro de vida",
        "METLIFE SEGUROS E PREVIDENCIA",
        -56.61,
        "A VENCER"
      ],
      [
        "09/02/2027",
        "Operações",
        "Sistema de Gerenciamento",
        "STRIKE TI",
        -1475,
        "A VENCER"
      ],
      [
        "20/01/2027",
        "Despesas Administrativas",
        "Contabilidade",
        "AGYLIS CONTABILIDADE LTDA",
        -1000,
        "A VENCER"
      ],
      [
        "10/01/2027",
        "Despesas com Pessoal",
        "Seguro de vida",
        "METLIFE SEGUROS E PREVIDENCIA",
        -56.61,
        "A VENCER"
      ],
      [
        "09/01/2027",
        "Operações",
        "Sistema de Gerenciamento",
        "STRIKE TI",
        -1475,
        "A VENCER"
      ],
      [
        "05/01/2027",
        "Despesas com Pessoal",
        "Salários PIX",
        "CLARA DE OLIVEIRA LIMA",
        -1442.69,
        "A VENCER"
      ],
      [
        "20/12/2026",
        "Despesas Administrativas",
        "Contabilidade",
        "AGYLIS CONTABILIDADE LTDA",
        -1000,
        "A VENCER"
      ],
      [
        "20/12/2026",
        "Operações",
        "FGTS",
        "CAIXA ECONOMICA FEDERAL",
        -3975.58,
        "A VENCER"
      ],
      [
        "10/12/2026",
        "Despesas com Pessoal",
        "Seguro de vida",
        "METLIFE SEGUROS E PREVIDENCIA",
        -56.61,
        "A VENCER"
      ],
      [
        "09/12/2026",
        "Operações",
        "Sistema de Gerenciamento",
        "STRIKE TI",
        -1475,
        "A VENCER"
      ],
      [
        "06/12/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "AMANDA MAYUMI KOBAYASHI",
        -2014.35,
        "A VENCER"
      ],
      [
        "05/12/2026",
        "Despesas com Pessoal",
        "Salários",
        "ANDRE LUIZ ISIDORO DA SILVA",
        -1311.8,
        "A VENCER"
      ],
      [
        "05/12/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "FABRICIO RAMOS DOS SANTOS",
        -1008.58,
        "A VENCER"
      ],
      [
        "05/12/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "JONATHAN HENRIQUE DA SILVA SANTOS",
        -992.13,
        "A VENCER"
      ],
      [
        "05/12/2026",
        "Despesas com Pessoal",
        "Pensão Alimentícia",
        "JONATHAN HENRIQUE DA SILVA SANTOS",
        -545.94,
        "A VENCER"
      ],
      [
        "05/12/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "JOSIANA DA SILVA",
        -828.43,
        "A VENCER"
      ],
      [
        "05/12/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "LEONARDO MARTINS ALVES GALDEANO",
        -3114.89,
        "A VENCER"
      ],
      [
        "05/12/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "MARIA ANGELICA DOS REIS",
        -3541.63,
        "A VENCER"
      ],
      [
        "05/12/2026",
        "Despesas com Pessoal",
        "Salários",
        "MATEUS HENRIQUE DE FARIA",
        -1148.4,
        "A VENCER"
      ],
      [
        "05/12/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "MIGUEL ZINANI DE OLIVEIRA",
        -2029.09,
        "A VENCER"
      ],
      [
        "05/12/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "ROBSON LUIZ DOMINGOS DA SILVA",
        -2855.49,
        "A VENCER"
      ],
      [
        "05/12/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "SIDNEIA MORENA DE SOUZA",
        -1361.84,
        "A VENCER"
      ],
      [
        "05/12/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "YAN OLIVEIRA PRADO DE ALMEIDA",
        -697.71,
        "A VENCER"
      ],
      [
        "05/12/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "CLARA DE OLIVEIRA LIMA",
        -1442.69,
        "A VENCER"
      ],
      [
        "20/11/2026",
        "Despesas Administrativas",
        "Contabilidade",
        "AGYLIS CONTABILIDADE LTDA",
        -1000,
        "A VENCER"
      ],
      [
        "20/11/2026",
        "Operações",
        "FGTS",
        "CAIXA ECONOMICA FEDERAL",
        -3975.58,
        "A VENCER"
      ],
      [
        "10/11/2026",
        "Despesas com Pessoal",
        "Seguro de vida",
        "METLIFE SEGUROS E PREVIDENCIA",
        -56.61,
        "A VENCER"
      ],
      [
        "09/11/2026",
        "Operações",
        "Sistema de Gerenciamento",
        "STRIKE TI",
        -1475,
        "A VENCER"
      ],
      [
        "06/11/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "AMANDA MAYUMI KOBAYASHI",
        -2014.35,
        "A VENCER"
      ],
      [
        "05/11/2026",
        "Despesas com Pessoal",
        "Salários",
        "ANDRE LUIZ ISIDORO DA SILVA",
        -1311.8,
        "A VENCER"
      ],
      [
        "05/11/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "FABRICIO RAMOS DOS SANTOS",
        -1008.58,
        "A VENCER"
      ],
      [
        "05/11/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "JONATHAN HENRIQUE DA SILVA SANTOS",
        -992.13,
        "A VENCER"
      ],
      [
        "05/11/2026",
        "Despesas com Pessoal",
        "Pensão Alimentícia",
        "JONATHAN HENRIQUE DA SILVA SANTOS",
        -545.94,
        "A VENCER"
      ],
      [
        "05/11/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "JOSIANA DA SILVA",
        -828.43,
        "A VENCER"
      ],
      [
        "05/11/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "LEONARDO MARTINS ALVES GALDEANO",
        -3114.89,
        "A VENCER"
      ],
      [
        "05/11/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "MARIA ANGELICA DOS REIS",
        -3541.63,
        "A VENCER"
      ],
      [
        "05/11/2026",
        "Despesas com Pessoal",
        "Salários",
        "MATEUS HENRIQUE DE FARIA",
        -1148.4,
        "A VENCER"
      ],
      [
        "05/11/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "MIGUEL ZINANI DE OLIVEIRA",
        -2029.09,
        "A VENCER"
      ],
      [
        "05/11/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "ROBSON LUIZ DOMINGOS DA SILVA",
        -2855.49,
        "A VENCER"
      ],
      [
        "05/11/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "SIDNEIA MORENA DE SOUZA",
        -1361.84,
        "A VENCER"
      ],
      [
        "05/11/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "YAN OLIVEIRA PRADO DE ALMEIDA",
        -697.71,
        "A VENCER"
      ],
      [
        "05/11/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "CLARA DE OLIVEIRA LIMA",
        -1442.69,
        "A VENCER"
      ],
      [
        "20/10/2026",
        "Deduções de Receita",
        "Máquinas e Equipamentos",
        "ISSEL SOROCABA",
        -2451.72,
        "A VENCER"
      ],
      [
        "20/10/2026",
        "Despesas Administrativas",
        "Contabilidade",
        "AGYLIS CONTABILIDADE LTDA",
        -1000,
        "A VENCER"
      ],
      [
        "20/10/2026",
        "Operações",
        "FGTS",
        "CAIXA ECONOMICA FEDERAL",
        -3975.58,
        "A VENCER"
      ],
      [
        "10/10/2026",
        "Despesas com Pessoal",
        "Seguro de vida",
        "METLIFE SEGUROS E PREVIDENCIA",
        -56.61,
        "A VENCER"
      ],
      [
        "09/10/2026",
        "Operações",
        "Sistema de Gerenciamento",
        "STRIKE TI",
        -1475,
        "A VENCER"
      ],
      [
        "06/10/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "AMANDA MAYUMI KOBAYASHI",
        -2014.35,
        "A VENCER"
      ],
      [
        "05/10/2026",
        "Despesas com Pessoal",
        "Salários",
        "ANDRE LUIZ ISIDORO DA SILVA",
        -1311.8,
        "A VENCER"
      ],
      [
        "05/10/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "FABRICIO RAMOS DOS SANTOS",
        -1008.58,
        "A VENCER"
      ],
      [
        "05/10/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "JONATHAN HENRIQUE DA SILVA SANTOS",
        -992.13,
        "A VENCER"
      ],
      [
        "05/10/2026",
        "Despesas com Pessoal",
        "Pensão Alimentícia",
        "JONATHAN HENRIQUE DA SILVA SANTOS",
        -545.94,
        "A VENCER"
      ],
      [
        "05/10/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "JOSIANA DA SILVA",
        -828.43,
        "A VENCER"
      ],
      [
        "05/10/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "LEONARDO MARTINS ALVES GALDEANO",
        -3114.89,
        "A VENCER"
      ],
      [
        "05/10/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "MARIA ANGELICA DOS REIS",
        -3541.63,
        "A VENCER"
      ],
      [
        "05/10/2026",
        "Despesas com Pessoal",
        "Salários",
        "MATEUS HENRIQUE DE FARIA",
        -1148.4,
        "A VENCER"
      ],
      [
        "05/10/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "MIGUEL ZINANI DE OLIVEIRA",
        -2029.09,
        "A VENCER"
      ],
      [
        "05/10/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "ROBSON LUIZ DOMINGOS DA SILVA",
        -2855.49,
        "A VENCER"
      ],
      [
        "05/10/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "SIDNEIA MORENA DE SOUZA",
        -1361.84,
        "A VENCER"
      ],
      [
        "05/10/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "YAN OLIVEIRA PRADO DE ALMEIDA",
        -697.71,
        "A VENCER"
      ],
      [
        "05/10/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "CLARA DE OLIVEIRA LIMA",
        -1442.69,
        "A VENCER"
      ],
      [
        "26/09/2026",
        "Deduções de Receita",
        "Máquinas e Equipamentos",
        "ISSEL SOROCABA",
        -1014.71,
        "A VENCER"
      ],
      [
        "20/09/2026",
        "Deduções de Receita",
        "Máquinas e Equipamentos",
        "ISSEL SOROCABA",
        -2451.72,
        "A VENCER"
      ],
      [
        "20/09/2026",
        "Despesas Administrativas",
        "Contabilidade",
        "AGYLIS CONTABILIDADE LTDA",
        -1000,
        "A VENCER"
      ],
      [
        "20/09/2026",
        "Operações",
        "FGTS",
        "CAIXA ECONOMICA FEDERAL",
        -3975.58,
        "A VENCER"
      ],
      [
        "10/09/2026",
        "Despesas com Pessoal",
        "Seguro de vida",
        "METLIFE SEGUROS E PREVIDENCIA",
        -56.61,
        "A VENCER"
      ],
      [
        "09/09/2026",
        "Operações",
        "Sistema de Gerenciamento",
        "STRIKE TI",
        -1475,
        "A VENCER"
      ],
      [
        "06/09/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "AMANDA MAYUMI KOBAYASHI",
        -2014.35,
        "A VENCER"
      ],
      [
        "05/09/2026",
        "Despesas com Pessoal",
        "Salários",
        "ANDRE LUIZ ISIDORO DA SILVA",
        -1311.8,
        "A VENCER"
      ],
      [
        "05/09/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "FABRICIO RAMOS DOS SANTOS",
        -1008.58,
        "A VENCER"
      ],
      [
        "05/09/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "JONATHAN HENRIQUE DA SILVA SANTOS",
        -992.13,
        "A VENCER"
      ],
      [
        "05/09/2026",
        "Despesas com Pessoal",
        "Pensão Alimentícia",
        "JONATHAN HENRIQUE DA SILVA SANTOS",
        -545.94,
        "A VENCER"
      ],
      [
        "05/09/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "JOSIANA DA SILVA",
        -828.43,
        "A VENCER"
      ],
      [
        "05/09/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "LEONARDO MARTINS ALVES GALDEANO",
        -3114.89,
        "A VENCER"
      ],
      [
        "05/09/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "MARIA ANGELICA DOS REIS",
        -3541.63,
        "A VENCER"
      ],
      [
        "05/09/2026",
        "Despesas com Pessoal",
        "Salários",
        "MATEUS HENRIQUE DE FARIA",
        -1148.4,
        "A VENCER"
      ],
      [
        "05/09/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "MIGUEL ZINANI DE OLIVEIRA",
        -2029.09,
        "A VENCER"
      ],
      [
        "05/09/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "ROBSON LUIZ DOMINGOS DA SILVA",
        -2855.49,
        "A VENCER"
      ],
      [
        "05/09/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "SIDNEIA MORENA DE SOUZA",
        -1361.84,
        "A VENCER"
      ],
      [
        "05/09/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "YAN OLIVEIRA PRADO DE ALMEIDA",
        -697.71,
        "A VENCER"
      ],
      [
        "05/09/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "CLARA DE OLIVEIRA LIMA",
        -1442.69,
        "A VENCER"
      ],
      [
        "26/08/2026",
        "Deduções de Receita",
        "Máquinas e Equipamentos",
        "ISSEL SOROCABA",
        -1014.71,
        "A VENCER"
      ],
      [
        "21/08/2026",
        "Despesas com Pessoal",
        "VT",
        "CDC ADMINISTRACAO DE CONVENIOS LTDA",
        -6960.77,
        "A VENCER"
      ],
      [
        "20/08/2026",
        "Deduções de Receita",
        "Máquinas e Equipamentos",
        "ISSEL SOROCABA",
        -2451.72,
        "A VENCER"
      ],
      [
        "20/08/2026",
        "Despesas Administrativas",
        "Contabilidade",
        "AGYLIS CONTABILIDADE LTDA",
        -1000,
        "A VENCER"
      ],
      [
        "20/08/2026",
        "Operações",
        "FGTS",
        "CAIXA ECONOMICA FEDERAL",
        -3975.58,
        "A VENCER"
      ],
      [
        "10/08/2026",
        "Despesas com Pessoal",
        "Seguro de vida",
        "METLIFE SEGUROS E PREVIDENCIA",
        -56.61,
        "A VENCER"
      ],
      [
        "09/08/2026",
        "Operações",
        "Sistema de Gerenciamento",
        "STRIKE TI",
        -1475,
        "A VENCER"
      ],
      [
        "09/08/2026",
        "Operações",
        "Manutenção",
        "STRIKE TI",
        -1475,
        "A VENCER"
      ],
      [
        "06/08/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "AMANDA MAYUMI KOBAYASHI",
        -2014.35,
        "A VENCER"
      ],
      [
        "05/08/2026",
        "Despesas com Pessoal",
        "Salários",
        "ANDRE LUIZ ISIDORO DA SILVA",
        -1311.8,
        "A VENCER"
      ],
      [
        "05/08/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "FABRICIO RAMOS DOS SANTOS",
        -1008.58,
        "A VENCER"
      ],
      [
        "05/08/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "JONATHAN HENRIQUE DA SILVA SANTOS",
        -992.13,
        "A VENCER"
      ],
      [
        "05/08/2026",
        "Despesas com Pessoal",
        "Pensão Alimentícia",
        "JONATHAN HENRIQUE DA SILVA SANTOS",
        -545.94,
        "A VENCER"
      ],
      [
        "05/08/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "JOSIANA DA SILVA",
        -828.43,
        "A VENCER"
      ],
      [
        "05/08/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "LEONARDO MARTINS ALVES GALDEANO",
        -3114.89,
        "A VENCER"
      ],
      [
        "05/08/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "MARIA ANGELICA DOS REIS",
        -3541.63,
        "A VENCER"
      ],
      [
        "05/08/2026",
        "Despesas com Pessoal",
        "Salários",
        "MATEUS HENRIQUE DE FARIA",
        -1148.4,
        "A VENCER"
      ],
      [
        "05/08/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "MIGUEL ZINANI DE OLIVEIRA",
        -2029.09,
        "A VENCER"
      ],
      [
        "05/08/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "ROBSON LUIZ DOMINGOS DA SILVA",
        -2855.49,
        "A VENCER"
      ],
      [
        "05/08/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "SIDNEIA MORENA DE SOUZA",
        -1361.84,
        "A VENCER"
      ],
      [
        "05/08/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "YAN OLIVEIRA PRADO DE ALMEIDA",
        -697.71,
        "A VENCER"
      ],
      [
        "05/08/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "CLARA DE OLIVEIRA LIMA",
        -1442.69,
        "A VENCER"
      ],
      [
        "27/07/2026",
        "Operações",
        "Sistema de Gerenciamento",
        "MONI SOFTWARE LTDA",
        -183.89,
        "A VENCER"
      ],
      [
        "26/07/2026",
        "Deduções de Receita",
        "Máquinas e Equipamentos",
        "ISSEL SOROCABA",
        -1014.71,
        "A VENCER"
      ],
      [
        "20/07/2026",
        "Deduções de Receita",
        "Máquinas e Equipamentos",
        "ISSEL SOROCABA",
        -2451.72,
        "A VENCER"
      ],
      [
        "20/07/2026",
        "Despesas Administrativas",
        "Contabilidade",
        "AGYLIS CONTABILIDADE LTDA",
        -1000,
        "A VENCER"
      ],
      [
        "20/07/2026",
        "Operações",
        "Exames Admissional/Demissional",
        "MEXTRA",
        -348,
        "A VENCER"
      ],
      [
        "20/07/2026",
        "Deduções de Receita",
        "Central de monitoramento",
        "ECONDOS",
        -4153.72,
        "A VENCER"
      ],
      [
        "20/07/2026",
        "Operações",
        "FGTS",
        "CAIXA ECONOMICA FEDERAL",
        -3975.58,
        "A VENCER"
      ],
      [
        "20/07/2026",
        "Operações",
        "Sistema de Gerenciamento",
        "Omiexperience",
        -119,
        "A VENCER"
      ],
      [
        "18/07/2026",
        "Receita Bruta de Vendas",
        "Monitoramento Remoto",
        "RESIDENCIAL ANA LUCIA",
        7755.2,
        "A VENCER"
      ],
      [
        "17/07/2026",
        "Deduções de Receita",
        "Máquinas e Equipamentos",
        "MEXTRA",
        -210,
        "A VENCER"
      ],
      [
        "15/07/2026",
        "Receita Bruta de Vendas",
        "Monitoramento Remoto",
        "EDIFICIO INNOVARE",
        6981.72,
        "A VENCER"
      ],
      [
        "15/07/2026",
        "Receita Bruta de Vendas",
        "Monitoramento Remoto",
        "ASSOCIACAO DOS PROPRIETARIOS E PROMITENTES COMPRADORES DAS UNIDADES AUTONOMAS DO EDIFICIO VILLAGIO S",
        6355.86,
        "A VENCER"
      ],
      [
        "15/07/2026",
        "Receita Bruta de Vendas",
        "Monitoramento Remoto",
        "CONDOMINIO EDIFICIO CAPRI",
        5983.91,
        "A VENCER"
      ],
      [
        "15/07/2026",
        "Operações",
        "Benefícios",
        "CDC ADMINISTRACAO DE CONVENIOS LTDA",
        -5627.36,
        "A VENCER"
      ],
      [
        "10/07/2026",
        "Receita Bruta de Vendas",
        "Monitoramento Remoto",
        "SEGPOL",
        10500,
        "ATRASADO"
      ],
      [
        "10/07/2026",
        "Receita Bruta de Vendas",
        "Monitoramento Remoto",
        "CONDOMINIO EDIFICIO PAUL CEZANNE",
        436.86,
        "RECEBIDO"
      ],
      [
        "10/07/2026",
        "Despesas com Pessoal",
        "Seguro de vida",
        "METLIFE SEGUROS E PREVIDENCIA",
        -64.7,
        "ATRASADO"
      ],
      [
        "10/07/2026",
        "Despesas com Pessoal",
        "Seguro de vida",
        "METLIFE SEGUROS E PREVIDENCIA",
        -56.61,
        "ATRASADO"
      ],
      [
        "10/07/2026",
        "Despesas com Pessoal",
        "Seguro de vida",
        "METLIFE SEGUROS E PREVIDENCIA",
        -80.87,
        "ATRASADO"
      ],
      [
        "10/07/2026",
        "Operações",
        "Contribuição Sindical",
        "SINDEEPRES",
        -195.17,
        "ATRASADO"
      ],
      [
        "10/07/2026",
        "Operações",
        "Contribuição Sindical Odonto",
        "SINDEEPRES",
        -283.1,
        "ATRASADO"
      ],
      [
        "10/07/2026",
        "Operações",
        "Sistema de Gerenciamento",
        "Sem cliente",
        -0.99,
        "PAGO"
      ],
      [
        "09/07/2026",
        "Operações",
        "Sistema de Gerenciamento",
        "STRIKE TI",
        -1475,
        "ATRASADO"
      ],
      [
        "08/07/2026",
        "Operações",
        "Uber",
        "UBER DO BRASIL TECNOLOGIA LTDA.",
        -200,
        "PAGO"
      ],
      [
        "08/07/2026",
        "Operações",
        "Contribuição Sindical Odonto",
        "Sem cliente",
        -0.5,
        "PAGO"
      ],
      [
        "07/07/2026",
        "Receita Bruta de Vendas",
        "Monitoramento Remoto",
        "ANDRE LUIZ ISIDORO DA SILVA",
        1311.8,
        "RECEBIDO"
      ],
      [
        "07/07/2026",
        "Receita Bruta de Vendas",
        "Monitoramento Remoto",
        "CONDOMINIO DO EDIFICIO PONTA NEGRA",
        425,
        "RECEBIDO"
      ],
      [
        "07/07/2026",
        "Receita Bruta de Vendas",
        "Monitoramento Remoto",
        "MATEUS HENRIQUE DE FARIA",
        1148.4,
        "RECEBIDO"
      ],
      [
        "07/07/2026",
        "Receita Bruta de Vendas",
        "Monitoramento Remoto",
        "ANDRE LUIZ ISIDORO DA SILVA",
        1311.8,
        "RECEBIDO"
      ],
      [
        "07/07/2026",
        "Receita Bruta de Vendas",
        "Monitoramento Remoto",
        "SEGPOL",
        8000,
        "RECEBIDO"
      ],
      [
        "07/07/2026",
        "Receita Bruta de Vendas",
        "Monitoramento Remoto",
        "AIRBNB PLATAFORMA DIGITAL LTDA",
        283,
        "RECEBIDO"
      ],
      [
        "07/07/2026",
        "Despesas com Pessoal",
        "Salários",
        "ANDRE LUIZ ISIDORO DA SILVA",
        -1311.8,
        "PAGO"
      ],
      [
        "07/07/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "Sem cliente",
        -3.99,
        "PAGO"
      ],
      [
        "07/07/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "Sem cliente",
        -0.99,
        "PAGO"
      ],
      [
        "07/07/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "LEONARDO MARTINS ALVES GALDEANO",
        -3114.89,
        "PAGO"
      ],
      [
        "07/07/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "Sem cliente",
        -0.5,
        "PAGO"
      ],
      [
        "07/07/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "MARIA ANGELICA DOS REIS",
        -3541.63,
        "PAGO"
      ],
      [
        "07/07/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "Sem cliente",
        -0.5,
        "PAGO"
      ]
    ],
    "EXTRATO_RECEITAS": [
      [
        "18/07/2026",
        "Receita Bruta de Vendas",
        "Monitoramento Remoto",
        "RESIDENCIAL ANA LUCIA",
        7755.2,
        "A VENCER"
      ],
      [
        "15/07/2026",
        "Receita Bruta de Vendas",
        "Monitoramento Remoto",
        "EDIFICIO INNOVARE",
        6981.72,
        "A VENCER"
      ],
      [
        "15/07/2026",
        "Receita Bruta de Vendas",
        "Monitoramento Remoto",
        "ASSOCIACAO DOS PROPRIETARIOS E PROMITENTES COMPRADORES DAS UNIDADES AUTONOMAS DO EDIFICIO VILLAGIO S",
        6355.86,
        "A VENCER"
      ],
      [
        "15/07/2026",
        "Receita Bruta de Vendas",
        "Monitoramento Remoto",
        "CONDOMINIO EDIFICIO CAPRI",
        5983.91,
        "A VENCER"
      ],
      [
        "10/07/2026",
        "Receita Bruta de Vendas",
        "Monitoramento Remoto",
        "SEGPOL",
        10500,
        "ATRASADO"
      ],
      [
        "10/07/2026",
        "Receita Bruta de Vendas",
        "Monitoramento Remoto",
        "CONDOMINIO EDIFICIO PAUL CEZANNE",
        436.86,
        "RECEBIDO"
      ],
      [
        "07/07/2026",
        "Receita Bruta de Vendas",
        "Monitoramento Remoto",
        "ANDRE LUIZ ISIDORO DA SILVA",
        1311.8,
        "RECEBIDO"
      ],
      [
        "07/07/2026",
        "Receita Bruta de Vendas",
        "Monitoramento Remoto",
        "CONDOMINIO DO EDIFICIO PONTA NEGRA",
        425,
        "RECEBIDO"
      ],
      [
        "07/07/2026",
        "Receita Bruta de Vendas",
        "Monitoramento Remoto",
        "MATEUS HENRIQUE DE FARIA",
        1148.4,
        "RECEBIDO"
      ],
      [
        "07/07/2026",
        "Receita Bruta de Vendas",
        "Monitoramento Remoto",
        "ANDRE LUIZ ISIDORO DA SILVA",
        1311.8,
        "RECEBIDO"
      ],
      [
        "07/07/2026",
        "Receita Bruta de Vendas",
        "Monitoramento Remoto",
        "SEGPOL",
        8000,
        "RECEBIDO"
      ],
      [
        "07/07/2026",
        "Receita Bruta de Vendas",
        "Monitoramento Remoto",
        "AIRBNB PLATAFORMA DIGITAL LTDA",
        283,
        "RECEBIDO"
      ],
      [
        "06/07/2026",
        "Receita Bruta de Vendas",
        "Monitoramento Remoto",
        "CONDOMINIO EDIFICIO ITAPOLIS",
        6933.93,
        "RECEBIDO"
      ],
      [
        "06/07/2026",
        "Receita Bruta de Vendas",
        "Monitoramento Remoto",
        "SIA FACILITIES",
        15271.02,
        "RECEBIDO"
      ],
      [
        "18/06/2026",
        "Receita Bruta de Vendas",
        "Monitoramento Remoto",
        "RESIDENCIAL ANA LUCIA",
        7755.2,
        "RECEBIDO"
      ],
      [
        "16/06/2026",
        "Receita Bruta de Vendas",
        "Monitoramento Remoto",
        "EDIFICIO INNOVARE",
        6981.72,
        "RECEBIDO"
      ],
      [
        "16/06/2026",
        "Receita Bruta de Vendas",
        "Monitoramento Remoto",
        "CONDOMINIO EDIFICIO CAPRI",
        5982.56,
        "RECEBIDO"
      ],
      [
        "15/06/2026",
        "Receita Bruta de Vendas",
        "Monitoramento Remoto",
        "ASSOCIACAO DOS PROPRIETARIOS E PROMITENTES COMPRADORES DAS UNIDADES AUTONOMAS DO EDIFICIO VILLAGIO S",
        6354.42,
        "RECEBIDO"
      ],
      [
        "10/06/2026",
        "Receita Bruta de Vendas",
        "Monitoramento Remoto",
        "CONDOMINIO EDIFICIO PAUL CEZANNE",
        436.86,
        "RECEBIDO"
      ],
      [
        "10/06/2026",
        "Receita Bruta de Vendas",
        "Monitoramento Remoto",
        "SEGPOL",
        6000,
        "RECEBIDO"
      ],
      [
        "08/06/2026",
        "Receita Bruta de Vendas",
        "Monitoramento Remoto",
        "CONDOMINIO DO EDIFICIO PONTA NEGRA",
        425,
        "RECEBIDO"
      ],
      [
        "05/06/2026",
        "Receita Bruta de Vendas",
        "Monitoramento Remoto",
        "CONDOMINIO EDIFICIO ITAPOLIS",
        6933.93,
        "RECEBIDO"
      ],
      [
        "25/05/2026",
        "Receita Bruta de Vendas",
        "Portaria/Limpeza",
        "SEGPOL",
        100,
        "RECEBIDO"
      ],
      [
        "09/02/2026",
        "Operações",
        "Empréstimo",
        "Sem cliente",
        20760,
        "RECEBIDO"
      ],
      [
        "30/10/2025",
        "Operações",
        "Empréstimos Bancários",
        "Sem cliente",
        1060,
        "RECEBIDO"
      ],
      [
        "30/10/2025",
        "Operações",
        "Empréstimos Bancários",
        "Sem cliente",
        6092.43,
        "RECEBIDO"
      ],
      [
        "27/10/2025",
        "Operações",
        "Empréstimos Bancários",
        "Sem cliente",
        2318.33,
        "RECEBIDO"
      ],
      [
        "23/10/2025",
        "Operações",
        "Portaria 24 Hs....",
        "Sem cliente",
        7076.4,
        "RECEBIDO"
      ],
      [
        "22/10/2025",
        "Operações",
        "Portaria 24 Hs....",
        "Sem cliente",
        5623.1,
        "RECEBIDO"
      ],
      [
        "21/10/2025",
        "Operações",
        "Portaria 24 Hs....",
        "Sem cliente",
        6370.62,
        "RECEBIDO"
      ],
      [
        "17/10/2025",
        "Operações",
        "Portaria 24 Hs....",
        "Sem cliente",
        411.16,
        "RECEBIDO"
      ],
      [
        "16/10/2025",
        "Operações",
        "Portaria 24 Hs....",
        "Sem cliente",
        5972.63,
        "RECEBIDO"
      ],
      [
        "15/10/2025",
        "Operações",
        "Empréstimos Bancários",
        "Sem cliente",
        7477.86,
        "RECEBIDO"
      ],
      [
        "14/10/2025",
        "Operações",
        "Portaria 24 Hs....",
        "Sem cliente",
        400,
        "RECEBIDO"
      ],
      [
        "13/10/2025",
        "Receita Bruta de Vendas",
        "MOV TIT COB DISP 13/10S",
        "Sem cliente",
        558.12,
        "RECEBIDO"
      ],
      [
        "10/10/2025",
        "Operações",
        "Empréstimos Bancários",
        "Sem cliente",
        177.59,
        "RECEBIDO"
      ],
      [
        "10/10/2025",
        "Operações",
        "Empréstimos Bancários",
        "Sem cliente",
        177.59,
        "RECEBIDO"
      ],
      [
        "09/10/2025",
        "Operações",
        "Portaria 24 Hs....",
        "Sem cliente",
        1305.86,
        "RECEBIDO"
      ],
      [
        "09/10/2025",
        "Receita Bruta de Vendas",
        "Portaria Remota",
        "Sem cliente",
        100,
        "RECEBIDO"
      ],
      [
        "08/10/2025",
        "Receita Bruta de Vendas",
        "Portaria/Limpeza",
        "Sem cliente",
        20,
        "RECEBIDO"
      ]
    ],
    "EXTRATO_DESPESAS": [
      [
        "20/06/2029",
        "Despesas Administrativas",
        "Contabilidade",
        "AGYLIS CONTABILIDADE LTDA",
        -1000,
        "A VENCER"
      ],
      [
        "20/05/2029",
        "Despesas Administrativas",
        "Contabilidade",
        "AGYLIS CONTABILIDADE LTDA",
        -1000,
        "A VENCER"
      ],
      [
        "09/05/2029",
        "Operações",
        "Sistema de Gerenciamento",
        "STRIKE TI",
        -1475,
        "A VENCER"
      ],
      [
        "20/04/2029",
        "Despesas Administrativas",
        "Contabilidade",
        "AGYLIS CONTABILIDADE LTDA",
        -1000,
        "A VENCER"
      ],
      [
        "09/04/2029",
        "Operações",
        "Sistema de Gerenciamento",
        "STRIKE TI",
        -1475,
        "A VENCER"
      ],
      [
        "20/03/2029",
        "Despesas Administrativas",
        "Contabilidade",
        "AGYLIS CONTABILIDADE LTDA",
        -1000,
        "A VENCER"
      ],
      [
        "09/03/2029",
        "Operações",
        "Sistema de Gerenciamento",
        "STRIKE TI",
        -1475,
        "A VENCER"
      ],
      [
        "20/02/2029",
        "Despesas Administrativas",
        "Contabilidade",
        "AGYLIS CONTABILIDADE LTDA",
        -1000,
        "A VENCER"
      ],
      [
        "09/02/2029",
        "Operações",
        "Sistema de Gerenciamento",
        "STRIKE TI",
        -1475,
        "A VENCER"
      ],
      [
        "20/01/2029",
        "Despesas Administrativas",
        "Contabilidade",
        "AGYLIS CONTABILIDADE LTDA",
        -1000,
        "A VENCER"
      ],
      [
        "09/01/2029",
        "Operações",
        "Sistema de Gerenciamento",
        "STRIKE TI",
        -1475,
        "A VENCER"
      ],
      [
        "20/12/2028",
        "Despesas Administrativas",
        "Contabilidade",
        "AGYLIS CONTABILIDADE LTDA",
        -1000,
        "A VENCER"
      ],
      [
        "09/12/2028",
        "Operações",
        "Sistema de Gerenciamento",
        "STRIKE TI",
        -1475,
        "A VENCER"
      ],
      [
        "20/11/2028",
        "Despesas Administrativas",
        "Contabilidade",
        "AGYLIS CONTABILIDADE LTDA",
        -1000,
        "A VENCER"
      ],
      [
        "09/11/2028",
        "Operações",
        "Sistema de Gerenciamento",
        "STRIKE TI",
        -1475,
        "A VENCER"
      ],
      [
        "20/10/2028",
        "Despesas Administrativas",
        "Contabilidade",
        "AGYLIS CONTABILIDADE LTDA",
        -1000,
        "A VENCER"
      ],
      [
        "09/10/2028",
        "Operações",
        "Sistema de Gerenciamento",
        "STRIKE TI",
        -1475,
        "A VENCER"
      ],
      [
        "20/09/2028",
        "Despesas Administrativas",
        "Contabilidade",
        "AGYLIS CONTABILIDADE LTDA",
        -1000,
        "A VENCER"
      ],
      [
        "09/09/2028",
        "Operações",
        "Sistema de Gerenciamento",
        "STRIKE TI",
        -1475,
        "A VENCER"
      ],
      [
        "20/08/2028",
        "Despesas Administrativas",
        "Contabilidade",
        "AGYLIS CONTABILIDADE LTDA",
        -1000,
        "A VENCER"
      ],
      [
        "09/08/2028",
        "Operações",
        "Sistema de Gerenciamento",
        "STRIKE TI",
        -1475,
        "A VENCER"
      ],
      [
        "20/07/2028",
        "Despesas Administrativas",
        "Contabilidade",
        "AGYLIS CONTABILIDADE LTDA",
        -1000,
        "A VENCER"
      ],
      [
        "09/07/2028",
        "Operações",
        "Sistema de Gerenciamento",
        "STRIKE TI",
        -1475,
        "A VENCER"
      ],
      [
        "20/06/2028",
        "Despesas Administrativas",
        "Contabilidade",
        "AGYLIS CONTABILIDADE LTDA",
        -1000,
        "A VENCER"
      ],
      [
        "09/06/2028",
        "Operações",
        "Sistema de Gerenciamento",
        "STRIKE TI",
        -1475,
        "A VENCER"
      ],
      [
        "20/05/2028",
        "Despesas Administrativas",
        "Contabilidade",
        "AGYLIS CONTABILIDADE LTDA",
        -1000,
        "A VENCER"
      ],
      [
        "09/05/2028",
        "Operações",
        "Sistema de Gerenciamento",
        "STRIKE TI",
        -1475,
        "A VENCER"
      ],
      [
        "20/04/2028",
        "Despesas Administrativas",
        "Contabilidade",
        "AGYLIS CONTABILIDADE LTDA",
        -1000,
        "A VENCER"
      ],
      [
        "09/04/2028",
        "Operações",
        "Sistema de Gerenciamento",
        "STRIKE TI",
        -1475,
        "A VENCER"
      ],
      [
        "20/03/2028",
        "Despesas Administrativas",
        "Contabilidade",
        "AGYLIS CONTABILIDADE LTDA",
        -1000,
        "A VENCER"
      ],
      [
        "09/03/2028",
        "Operações",
        "Sistema de Gerenciamento",
        "STRIKE TI",
        -1475,
        "A VENCER"
      ],
      [
        "20/02/2028",
        "Despesas Administrativas",
        "Contabilidade",
        "AGYLIS CONTABILIDADE LTDA",
        -1000,
        "A VENCER"
      ],
      [
        "09/02/2028",
        "Operações",
        "Sistema de Gerenciamento",
        "STRIKE TI",
        -1475,
        "A VENCER"
      ],
      [
        "20/01/2028",
        "Despesas Administrativas",
        "Contabilidade",
        "AGYLIS CONTABILIDADE LTDA",
        -1000,
        "A VENCER"
      ],
      [
        "09/01/2028",
        "Operações",
        "Sistema de Gerenciamento",
        "STRIKE TI",
        -1475,
        "A VENCER"
      ],
      [
        "20/12/2027",
        "Despesas Administrativas",
        "Contabilidade",
        "AGYLIS CONTABILIDADE LTDA",
        -1000,
        "A VENCER"
      ],
      [
        "09/12/2027",
        "Operações",
        "Sistema de Gerenciamento",
        "STRIKE TI",
        -1475,
        "A VENCER"
      ],
      [
        "20/11/2027",
        "Despesas Administrativas",
        "Contabilidade",
        "AGYLIS CONTABILIDADE LTDA",
        -1000,
        "A VENCER"
      ],
      [
        "09/11/2027",
        "Operações",
        "Sistema de Gerenciamento",
        "STRIKE TI",
        -1475,
        "A VENCER"
      ],
      [
        "20/10/2027",
        "Despesas Administrativas",
        "Contabilidade",
        "AGYLIS CONTABILIDADE LTDA",
        -1000,
        "A VENCER"
      ],
      [
        "09/10/2027",
        "Operações",
        "Sistema de Gerenciamento",
        "STRIKE TI",
        -1475,
        "A VENCER"
      ],
      [
        "20/09/2027",
        "Despesas Administrativas",
        "Contabilidade",
        "AGYLIS CONTABILIDADE LTDA",
        -1000,
        "A VENCER"
      ],
      [
        "09/09/2027",
        "Operações",
        "Sistema de Gerenciamento",
        "STRIKE TI",
        -1475,
        "A VENCER"
      ],
      [
        "20/08/2027",
        "Despesas Administrativas",
        "Contabilidade",
        "AGYLIS CONTABILIDADE LTDA",
        -1000,
        "A VENCER"
      ],
      [
        "09/08/2027",
        "Operações",
        "Sistema de Gerenciamento",
        "STRIKE TI",
        -1475,
        "A VENCER"
      ],
      [
        "20/07/2027",
        "Despesas Administrativas",
        "Contabilidade",
        "AGYLIS CONTABILIDADE LTDA",
        -1000,
        "A VENCER"
      ],
      [
        "09/07/2027",
        "Operações",
        "Sistema de Gerenciamento",
        "STRIKE TI",
        -1475,
        "A VENCER"
      ],
      [
        "20/06/2027",
        "Despesas Administrativas",
        "Contabilidade",
        "AGYLIS CONTABILIDADE LTDA",
        -1000,
        "A VENCER"
      ],
      [
        "09/06/2027",
        "Operações",
        "Sistema de Gerenciamento",
        "STRIKE TI",
        -1475,
        "A VENCER"
      ],
      [
        "20/05/2027",
        "Despesas Administrativas",
        "Contabilidade",
        "AGYLIS CONTABILIDADE LTDA",
        -1000,
        "A VENCER"
      ],
      [
        "10/05/2027",
        "Despesas com Pessoal",
        "Seguro de vida",
        "METLIFE SEGUROS E PREVIDENCIA",
        -56.61,
        "A VENCER"
      ],
      [
        "09/05/2027",
        "Operações",
        "Sistema de Gerenciamento",
        "STRIKE TI",
        -1475,
        "A VENCER"
      ],
      [
        "20/04/2027",
        "Despesas Administrativas",
        "Contabilidade",
        "AGYLIS CONTABILIDADE LTDA",
        -1000,
        "A VENCER"
      ],
      [
        "10/04/2027",
        "Despesas com Pessoal",
        "Seguro de vida",
        "METLIFE SEGUROS E PREVIDENCIA",
        -56.61,
        "A VENCER"
      ],
      [
        "09/04/2027",
        "Operações",
        "Sistema de Gerenciamento",
        "STRIKE TI",
        -1475,
        "A VENCER"
      ],
      [
        "20/03/2027",
        "Despesas Administrativas",
        "Contabilidade",
        "AGYLIS CONTABILIDADE LTDA",
        -1000,
        "A VENCER"
      ],
      [
        "10/03/2027",
        "Despesas com Pessoal",
        "Seguro de vida",
        "METLIFE SEGUROS E PREVIDENCIA",
        -56.61,
        "A VENCER"
      ],
      [
        "09/03/2027",
        "Operações",
        "Sistema de Gerenciamento",
        "STRIKE TI",
        -1475,
        "A VENCER"
      ],
      [
        "20/02/2027",
        "Despesas Administrativas",
        "Contabilidade",
        "AGYLIS CONTABILIDADE LTDA",
        -1000,
        "A VENCER"
      ],
      [
        "10/02/2027",
        "Despesas com Pessoal",
        "Seguro de vida",
        "METLIFE SEGUROS E PREVIDENCIA",
        -56.61,
        "A VENCER"
      ],
      [
        "09/02/2027",
        "Operações",
        "Sistema de Gerenciamento",
        "STRIKE TI",
        -1475,
        "A VENCER"
      ],
      [
        "20/01/2027",
        "Despesas Administrativas",
        "Contabilidade",
        "AGYLIS CONTABILIDADE LTDA",
        -1000,
        "A VENCER"
      ],
      [
        "10/01/2027",
        "Despesas com Pessoal",
        "Seguro de vida",
        "METLIFE SEGUROS E PREVIDENCIA",
        -56.61,
        "A VENCER"
      ],
      [
        "09/01/2027",
        "Operações",
        "Sistema de Gerenciamento",
        "STRIKE TI",
        -1475,
        "A VENCER"
      ],
      [
        "05/01/2027",
        "Despesas com Pessoal",
        "Salários PIX",
        "CLARA DE OLIVEIRA LIMA",
        -1442.69,
        "A VENCER"
      ],
      [
        "20/12/2026",
        "Despesas Administrativas",
        "Contabilidade",
        "AGYLIS CONTABILIDADE LTDA",
        -1000,
        "A VENCER"
      ],
      [
        "20/12/2026",
        "Operações",
        "FGTS",
        "CAIXA ECONOMICA FEDERAL",
        -3975.58,
        "A VENCER"
      ],
      [
        "10/12/2026",
        "Despesas com Pessoal",
        "Seguro de vida",
        "METLIFE SEGUROS E PREVIDENCIA",
        -56.61,
        "A VENCER"
      ],
      [
        "09/12/2026",
        "Operações",
        "Sistema de Gerenciamento",
        "STRIKE TI",
        -1475,
        "A VENCER"
      ],
      [
        "06/12/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "AMANDA MAYUMI KOBAYASHI",
        -2014.35,
        "A VENCER"
      ],
      [
        "05/12/2026",
        "Despesas com Pessoal",
        "Salários",
        "ANDRE LUIZ ISIDORO DA SILVA",
        -1311.8,
        "A VENCER"
      ],
      [
        "05/12/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "FABRICIO RAMOS DOS SANTOS",
        -1008.58,
        "A VENCER"
      ],
      [
        "05/12/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "JONATHAN HENRIQUE DA SILVA SANTOS",
        -992.13,
        "A VENCER"
      ],
      [
        "05/12/2026",
        "Despesas com Pessoal",
        "Pensão Alimentícia",
        "JONATHAN HENRIQUE DA SILVA SANTOS",
        -545.94,
        "A VENCER"
      ],
      [
        "05/12/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "JOSIANA DA SILVA",
        -828.43,
        "A VENCER"
      ],
      [
        "05/12/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "LEONARDO MARTINS ALVES GALDEANO",
        -3114.89,
        "A VENCER"
      ],
      [
        "05/12/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "MARIA ANGELICA DOS REIS",
        -3541.63,
        "A VENCER"
      ],
      [
        "05/12/2026",
        "Despesas com Pessoal",
        "Salários",
        "MATEUS HENRIQUE DE FARIA",
        -1148.4,
        "A VENCER"
      ],
      [
        "05/12/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "MIGUEL ZINANI DE OLIVEIRA",
        -2029.09,
        "A VENCER"
      ],
      [
        "05/12/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "ROBSON LUIZ DOMINGOS DA SILVA",
        -2855.49,
        "A VENCER"
      ],
      [
        "05/12/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "SIDNEIA MORENA DE SOUZA",
        -1361.84,
        "A VENCER"
      ],
      [
        "05/12/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "YAN OLIVEIRA PRADO DE ALMEIDA",
        -697.71,
        "A VENCER"
      ],
      [
        "05/12/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "CLARA DE OLIVEIRA LIMA",
        -1442.69,
        "A VENCER"
      ],
      [
        "20/11/2026",
        "Despesas Administrativas",
        "Contabilidade",
        "AGYLIS CONTABILIDADE LTDA",
        -1000,
        "A VENCER"
      ],
      [
        "20/11/2026",
        "Operações",
        "FGTS",
        "CAIXA ECONOMICA FEDERAL",
        -3975.58,
        "A VENCER"
      ],
      [
        "10/11/2026",
        "Despesas com Pessoal",
        "Seguro de vida",
        "METLIFE SEGUROS E PREVIDENCIA",
        -56.61,
        "A VENCER"
      ],
      [
        "09/11/2026",
        "Operações",
        "Sistema de Gerenciamento",
        "STRIKE TI",
        -1475,
        "A VENCER"
      ],
      [
        "06/11/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "AMANDA MAYUMI KOBAYASHI",
        -2014.35,
        "A VENCER"
      ],
      [
        "05/11/2026",
        "Despesas com Pessoal",
        "Salários",
        "ANDRE LUIZ ISIDORO DA SILVA",
        -1311.8,
        "A VENCER"
      ],
      [
        "05/11/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "FABRICIO RAMOS DOS SANTOS",
        -1008.58,
        "A VENCER"
      ],
      [
        "05/11/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "JONATHAN HENRIQUE DA SILVA SANTOS",
        -992.13,
        "A VENCER"
      ],
      [
        "05/11/2026",
        "Despesas com Pessoal",
        "Pensão Alimentícia",
        "JONATHAN HENRIQUE DA SILVA SANTOS",
        -545.94,
        "A VENCER"
      ],
      [
        "05/11/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "JOSIANA DA SILVA",
        -828.43,
        "A VENCER"
      ],
      [
        "05/11/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "LEONARDO MARTINS ALVES GALDEANO",
        -3114.89,
        "A VENCER"
      ],
      [
        "05/11/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "MARIA ANGELICA DOS REIS",
        -3541.63,
        "A VENCER"
      ],
      [
        "05/11/2026",
        "Despesas com Pessoal",
        "Salários",
        "MATEUS HENRIQUE DE FARIA",
        -1148.4,
        "A VENCER"
      ],
      [
        "05/11/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "MIGUEL ZINANI DE OLIVEIRA",
        -2029.09,
        "A VENCER"
      ],
      [
        "05/11/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "ROBSON LUIZ DOMINGOS DA SILVA",
        -2855.49,
        "A VENCER"
      ],
      [
        "05/11/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "SIDNEIA MORENA DE SOUZA",
        -1361.84,
        "A VENCER"
      ],
      [
        "05/11/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "YAN OLIVEIRA PRADO DE ALMEIDA",
        -697.71,
        "A VENCER"
      ],
      [
        "05/11/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "CLARA DE OLIVEIRA LIMA",
        -1442.69,
        "A VENCER"
      ],
      [
        "20/10/2026",
        "Deduções de Receita",
        "Máquinas e Equipamentos",
        "ISSEL SOROCABA",
        -2451.72,
        "A VENCER"
      ],
      [
        "20/10/2026",
        "Despesas Administrativas",
        "Contabilidade",
        "AGYLIS CONTABILIDADE LTDA",
        -1000,
        "A VENCER"
      ],
      [
        "20/10/2026",
        "Operações",
        "FGTS",
        "CAIXA ECONOMICA FEDERAL",
        -3975.58,
        "A VENCER"
      ],
      [
        "10/10/2026",
        "Despesas com Pessoal",
        "Seguro de vida",
        "METLIFE SEGUROS E PREVIDENCIA",
        -56.61,
        "A VENCER"
      ],
      [
        "09/10/2026",
        "Operações",
        "Sistema de Gerenciamento",
        "STRIKE TI",
        -1475,
        "A VENCER"
      ],
      [
        "06/10/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "AMANDA MAYUMI KOBAYASHI",
        -2014.35,
        "A VENCER"
      ],
      [
        "05/10/2026",
        "Despesas com Pessoal",
        "Salários",
        "ANDRE LUIZ ISIDORO DA SILVA",
        -1311.8,
        "A VENCER"
      ],
      [
        "05/10/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "FABRICIO RAMOS DOS SANTOS",
        -1008.58,
        "A VENCER"
      ],
      [
        "05/10/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "JONATHAN HENRIQUE DA SILVA SANTOS",
        -992.13,
        "A VENCER"
      ],
      [
        "05/10/2026",
        "Despesas com Pessoal",
        "Pensão Alimentícia",
        "JONATHAN HENRIQUE DA SILVA SANTOS",
        -545.94,
        "A VENCER"
      ],
      [
        "05/10/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "JOSIANA DA SILVA",
        -828.43,
        "A VENCER"
      ],
      [
        "05/10/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "LEONARDO MARTINS ALVES GALDEANO",
        -3114.89,
        "A VENCER"
      ],
      [
        "05/10/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "MARIA ANGELICA DOS REIS",
        -3541.63,
        "A VENCER"
      ],
      [
        "05/10/2026",
        "Despesas com Pessoal",
        "Salários",
        "MATEUS HENRIQUE DE FARIA",
        -1148.4,
        "A VENCER"
      ],
      [
        "05/10/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "MIGUEL ZINANI DE OLIVEIRA",
        -2029.09,
        "A VENCER"
      ],
      [
        "05/10/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "ROBSON LUIZ DOMINGOS DA SILVA",
        -2855.49,
        "A VENCER"
      ],
      [
        "05/10/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "SIDNEIA MORENA DE SOUZA",
        -1361.84,
        "A VENCER"
      ],
      [
        "05/10/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "YAN OLIVEIRA PRADO DE ALMEIDA",
        -697.71,
        "A VENCER"
      ],
      [
        "05/10/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "CLARA DE OLIVEIRA LIMA",
        -1442.69,
        "A VENCER"
      ],
      [
        "26/09/2026",
        "Deduções de Receita",
        "Máquinas e Equipamentos",
        "ISSEL SOROCABA",
        -1014.71,
        "A VENCER"
      ],
      [
        "20/09/2026",
        "Deduções de Receita",
        "Máquinas e Equipamentos",
        "ISSEL SOROCABA",
        -2451.72,
        "A VENCER"
      ],
      [
        "20/09/2026",
        "Despesas Administrativas",
        "Contabilidade",
        "AGYLIS CONTABILIDADE LTDA",
        -1000,
        "A VENCER"
      ],
      [
        "20/09/2026",
        "Operações",
        "FGTS",
        "CAIXA ECONOMICA FEDERAL",
        -3975.58,
        "A VENCER"
      ],
      [
        "10/09/2026",
        "Despesas com Pessoal",
        "Seguro de vida",
        "METLIFE SEGUROS E PREVIDENCIA",
        -56.61,
        "A VENCER"
      ],
      [
        "09/09/2026",
        "Operações",
        "Sistema de Gerenciamento",
        "STRIKE TI",
        -1475,
        "A VENCER"
      ],
      [
        "06/09/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "AMANDA MAYUMI KOBAYASHI",
        -2014.35,
        "A VENCER"
      ],
      [
        "05/09/2026",
        "Despesas com Pessoal",
        "Salários",
        "ANDRE LUIZ ISIDORO DA SILVA",
        -1311.8,
        "A VENCER"
      ],
      [
        "05/09/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "FABRICIO RAMOS DOS SANTOS",
        -1008.58,
        "A VENCER"
      ],
      [
        "05/09/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "JONATHAN HENRIQUE DA SILVA SANTOS",
        -992.13,
        "A VENCER"
      ],
      [
        "05/09/2026",
        "Despesas com Pessoal",
        "Pensão Alimentícia",
        "JONATHAN HENRIQUE DA SILVA SANTOS",
        -545.94,
        "A VENCER"
      ],
      [
        "05/09/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "JOSIANA DA SILVA",
        -828.43,
        "A VENCER"
      ],
      [
        "05/09/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "LEONARDO MARTINS ALVES GALDEANO",
        -3114.89,
        "A VENCER"
      ],
      [
        "05/09/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "MARIA ANGELICA DOS REIS",
        -3541.63,
        "A VENCER"
      ],
      [
        "05/09/2026",
        "Despesas com Pessoal",
        "Salários",
        "MATEUS HENRIQUE DE FARIA",
        -1148.4,
        "A VENCER"
      ],
      [
        "05/09/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "MIGUEL ZINANI DE OLIVEIRA",
        -2029.09,
        "A VENCER"
      ],
      [
        "05/09/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "ROBSON LUIZ DOMINGOS DA SILVA",
        -2855.49,
        "A VENCER"
      ],
      [
        "05/09/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "SIDNEIA MORENA DE SOUZA",
        -1361.84,
        "A VENCER"
      ],
      [
        "05/09/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "YAN OLIVEIRA PRADO DE ALMEIDA",
        -697.71,
        "A VENCER"
      ],
      [
        "05/09/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "CLARA DE OLIVEIRA LIMA",
        -1442.69,
        "A VENCER"
      ],
      [
        "26/08/2026",
        "Deduções de Receita",
        "Máquinas e Equipamentos",
        "ISSEL SOROCABA",
        -1014.71,
        "A VENCER"
      ],
      [
        "21/08/2026",
        "Despesas com Pessoal",
        "VT",
        "CDC ADMINISTRACAO DE CONVENIOS LTDA",
        -6960.77,
        "A VENCER"
      ],
      [
        "20/08/2026",
        "Deduções de Receita",
        "Máquinas e Equipamentos",
        "ISSEL SOROCABA",
        -2451.72,
        "A VENCER"
      ],
      [
        "20/08/2026",
        "Despesas Administrativas",
        "Contabilidade",
        "AGYLIS CONTABILIDADE LTDA",
        -1000,
        "A VENCER"
      ],
      [
        "20/08/2026",
        "Operações",
        "FGTS",
        "CAIXA ECONOMICA FEDERAL",
        -3975.58,
        "A VENCER"
      ],
      [
        "10/08/2026",
        "Despesas com Pessoal",
        "Seguro de vida",
        "METLIFE SEGUROS E PREVIDENCIA",
        -56.61,
        "A VENCER"
      ],
      [
        "09/08/2026",
        "Operações",
        "Sistema de Gerenciamento",
        "STRIKE TI",
        -1475,
        "A VENCER"
      ],
      [
        "09/08/2026",
        "Operações",
        "Manutenção",
        "STRIKE TI",
        -1475,
        "A VENCER"
      ],
      [
        "06/08/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "AMANDA MAYUMI KOBAYASHI",
        -2014.35,
        "A VENCER"
      ],
      [
        "05/08/2026",
        "Despesas com Pessoal",
        "Salários",
        "ANDRE LUIZ ISIDORO DA SILVA",
        -1311.8,
        "A VENCER"
      ],
      [
        "05/08/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "FABRICIO RAMOS DOS SANTOS",
        -1008.58,
        "A VENCER"
      ],
      [
        "05/08/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "JONATHAN HENRIQUE DA SILVA SANTOS",
        -992.13,
        "A VENCER"
      ],
      [
        "05/08/2026",
        "Despesas com Pessoal",
        "Pensão Alimentícia",
        "JONATHAN HENRIQUE DA SILVA SANTOS",
        -545.94,
        "A VENCER"
      ],
      [
        "05/08/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "JOSIANA DA SILVA",
        -828.43,
        "A VENCER"
      ],
      [
        "05/08/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "LEONARDO MARTINS ALVES GALDEANO",
        -3114.89,
        "A VENCER"
      ],
      [
        "05/08/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "MARIA ANGELICA DOS REIS",
        -3541.63,
        "A VENCER"
      ],
      [
        "05/08/2026",
        "Despesas com Pessoal",
        "Salários",
        "MATEUS HENRIQUE DE FARIA",
        -1148.4,
        "A VENCER"
      ],
      [
        "05/08/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "MIGUEL ZINANI DE OLIVEIRA",
        -2029.09,
        "A VENCER"
      ],
      [
        "05/08/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "ROBSON LUIZ DOMINGOS DA SILVA",
        -2855.49,
        "A VENCER"
      ],
      [
        "05/08/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "SIDNEIA MORENA DE SOUZA",
        -1361.84,
        "A VENCER"
      ],
      [
        "05/08/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "YAN OLIVEIRA PRADO DE ALMEIDA",
        -697.71,
        "A VENCER"
      ],
      [
        "05/08/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "CLARA DE OLIVEIRA LIMA",
        -1442.69,
        "A VENCER"
      ],
      [
        "27/07/2026",
        "Operações",
        "Sistema de Gerenciamento",
        "MONI SOFTWARE LTDA",
        -183.89,
        "A VENCER"
      ],
      [
        "26/07/2026",
        "Deduções de Receita",
        "Máquinas e Equipamentos",
        "ISSEL SOROCABA",
        -1014.71,
        "A VENCER"
      ],
      [
        "20/07/2026",
        "Deduções de Receita",
        "Máquinas e Equipamentos",
        "ISSEL SOROCABA",
        -2451.72,
        "A VENCER"
      ],
      [
        "20/07/2026",
        "Despesas Administrativas",
        "Contabilidade",
        "AGYLIS CONTABILIDADE LTDA",
        -1000,
        "A VENCER"
      ],
      [
        "20/07/2026",
        "Operações",
        "Exames Admissional/Demissional",
        "MEXTRA",
        -348,
        "A VENCER"
      ],
      [
        "20/07/2026",
        "Deduções de Receita",
        "Central de monitoramento",
        "ECONDOS",
        -4153.72,
        "A VENCER"
      ],
      [
        "20/07/2026",
        "Operações",
        "FGTS",
        "CAIXA ECONOMICA FEDERAL",
        -3975.58,
        "A VENCER"
      ],
      [
        "20/07/2026",
        "Operações",
        "Sistema de Gerenciamento",
        "Omiexperience",
        -119,
        "A VENCER"
      ],
      [
        "17/07/2026",
        "Deduções de Receita",
        "Máquinas e Equipamentos",
        "MEXTRA",
        -210,
        "A VENCER"
      ],
      [
        "15/07/2026",
        "Operações",
        "Benefícios",
        "CDC ADMINISTRACAO DE CONVENIOS LTDA",
        -5627.36,
        "A VENCER"
      ],
      [
        "10/07/2026",
        "Despesas com Pessoal",
        "Seguro de vida",
        "METLIFE SEGUROS E PREVIDENCIA",
        -64.7,
        "ATRASADO"
      ],
      [
        "10/07/2026",
        "Despesas com Pessoal",
        "Seguro de vida",
        "METLIFE SEGUROS E PREVIDENCIA",
        -56.61,
        "ATRASADO"
      ],
      [
        "10/07/2026",
        "Despesas com Pessoal",
        "Seguro de vida",
        "METLIFE SEGUROS E PREVIDENCIA",
        -80.87,
        "ATRASADO"
      ],
      [
        "10/07/2026",
        "Operações",
        "Contribuição Sindical",
        "SINDEEPRES",
        -195.17,
        "ATRASADO"
      ],
      [
        "10/07/2026",
        "Operações",
        "Contribuição Sindical Odonto",
        "SINDEEPRES",
        -283.1,
        "ATRASADO"
      ],
      [
        "10/07/2026",
        "Operações",
        "Sistema de Gerenciamento",
        "Sem cliente",
        -0.99,
        "PAGO"
      ],
      [
        "09/07/2026",
        "Operações",
        "Sistema de Gerenciamento",
        "STRIKE TI",
        -1475,
        "ATRASADO"
      ],
      [
        "08/07/2026",
        "Operações",
        "Uber",
        "UBER DO BRASIL TECNOLOGIA LTDA.",
        -200,
        "PAGO"
      ],
      [
        "08/07/2026",
        "Operações",
        "Contribuição Sindical Odonto",
        "Sem cliente",
        -0.5,
        "PAGO"
      ],
      [
        "07/07/2026",
        "Despesas com Pessoal",
        "Salários",
        "ANDRE LUIZ ISIDORO DA SILVA",
        -1311.8,
        "PAGO"
      ],
      [
        "07/07/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "Sem cliente",
        -3.99,
        "PAGO"
      ],
      [
        "07/07/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "Sem cliente",
        -0.99,
        "PAGO"
      ],
      [
        "07/07/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "LEONARDO MARTINS ALVES GALDEANO",
        -3114.89,
        "PAGO"
      ],
      [
        "07/07/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "Sem cliente",
        -0.5,
        "PAGO"
      ],
      [
        "07/07/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "MARIA ANGELICA DOS REIS",
        -3541.63,
        "PAGO"
      ],
      [
        "07/07/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "Sem cliente",
        -0.5,
        "PAGO"
      ],
      [
        "07/07/2026",
        "Despesas com Pessoal",
        "Salários",
        "MATEUS HENRIQUE DE FARIA",
        -1148.4,
        "PAGO"
      ],
      [
        "07/07/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "MIGUEL ZINANI DE OLIVEIRA",
        -2029.09,
        "PAGO"
      ],
      [
        "07/07/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "Sem cliente",
        -0.5,
        "PAGO"
      ],
      [
        "07/07/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "Sem cliente",
        -3.99,
        "PAGO"
      ],
      [
        "07/07/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "ROBSON LUIZ DOMINGOS DA SILVA",
        -2855.49,
        "PAGO"
      ],
      [
        "07/07/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "Sem cliente",
        -0.5,
        "PAGO"
      ],
      [
        "07/07/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "SIDNEIA MORENA DE SOUZA",
        -1361.84,
        "PAGO"
      ],
      [
        "07/07/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "Sem cliente",
        -0.5,
        "PAGO"
      ],
      [
        "07/07/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "YAN OLIVEIRA PRADO DE ALMEIDA",
        -697.71,
        "PAGO"
      ],
      [
        "07/07/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "Sem cliente",
        -0.5,
        "PAGO"
      ],
      [
        "07/07/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "AMANDA MAYUMI KOBAYASHI",
        -2014.35,
        "PAGO"
      ],
      [
        "07/07/2026",
        "Despesas com Pessoal",
        "Salários PIX",
        "JOSIANA DA SILVA",
        -828.43,
        "PAGO"
      ]
    ],
    "KPIS": {
      "TOTAL_RECEITA": 134428.19,
      "TOTAL_DESPESA": 262101.78,
      "VALOR_LIQUIDO": -127673.59,
      "MARGEM_LIQUIDA": -94.97530986618207,
      "VALOR_LIQ_SERIES": [
        -6.05,
        20759.47,
        -337.84,
        -3103.7599999999998,
        -2073.24,
        6828.5999999999985,
        15080.380000000034,
        -41302.36,
        -32866.59,
        -31851.879999999997,
        -29400.160000000003,
        -29400.160000000003
      ]
    },
    "RECEITA_DIA": [
      0,
      0,
      0,
      0,
      6933.93,
      22204.95,
      12480,
      425,
      20760,
      17373.72,
      0,
      0,
      0,
      0,
      25675.909999999996,
      12964.28,
      0,
      15510.4,
      0,
      0,
      0,
      0,
      0,
      0,
      100,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    "DESPESA_DIA": [
      2661.6400000000003,
      0,
      0,
      1.37,
      104394.59000000003,
      12620.319999999998,
      30969.370000000006,
      201.49,
      10325,
      7899.13,
      0,
      3467.8900000000003,
      0,
      0,
      6327.349999999999,
      1.98,
      210,
      10001.49,
      7456.839999999999,
      44618.08000000001,
      6960.77,
      0,
      0,
      917.53,
      3500.92,
      5381.63,
      183.89,
      0,
      4000.5,
      0,
      0
    ],
    "SALDOS_MES": [
      -6.05,
      20753.420000000002,
      20415.58,
      17311.820000000003,
      15238.580000000004,
      22067.18,
      37147.560000000034,
      -4154.7999999999665,
      -37021.38999999996,
      -68873.26999999996,
      -98273.42999999996,
      -127673.58999999997
    ],
    "FLUXO_RECEITA": [
      {
        "cat": "Monitoramento Remoto",
        "values": [
          0,
          0,
          0,
          0,
          0,
          40869.689999999995,
          72698.50000000001,
          0,
          0,
          0,
          0,
          0
        ]
      },
      {
        "cat": "Empréstimo",
        "values": [
          0,
          20760,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      {
        "cat": "Portaria/Limpeza",
        "values": [
          0,
          0,
          0,
          0,
          100,
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      }
    ],
    "FLUXO_DESPESA": [
      {
        "cat": "Salários PIX",
        "values": [
          0,
          0,
          0,
          0,
          0,
          0,
          -18535.380000000005,
          -19886.829999999994,
          -19886.829999999994,
          -19886.829999999994,
          -19886.829999999994,
          -19886.829999999994
        ]
      },
      {
        "cat": "Máquinas e Equipamentos",
        "values": [
          0,
          0,
          0,
          -3102.6099999999997,
          -917.53,
          -10919.03,
          -3676.43,
          -3466.43,
          -3466.43,
          -2451.72,
          0,
          0
        ]
      },
      {
        "cat": "FGTS",
        "values": [
          0,
          0,
          0,
          0,
          0,
          0,
          -3975.58,
          -3975.58,
          -3975.58,
          -3975.58,
          -3975.58,
          -3975.58
        ]
      },
      {
        "cat": "Sistema de Gerenciamento",
        "values": [
          0,
          0,
          0,
          0,
          -917.53,
          -10771.329999999998,
          -3854.8099999999995,
          -1475,
          -1475,
          -1475,
          -1475,
          -1475
        ]
      },
      {
        "cat": "Salários",
        "values": [
          0,
          0,
          0,
          0,
          0,
          0,
          -6232.2,
          -2460.2,
          -2460.2,
          -2460.2,
          -2460.2,
          -2460.2
        ]
      }
    ],
    "COMP_DATA": [
      {
        "tipo": "Receita",
        "isHeader": true,
        "d1": 20760,
        "d2": 40969.689999999995
      },
      {
        "tipo": "Empréstimo",
        "parent": "Receita",
        "d1": 20760,
        "d2": 0
      },
      {
        "tipo": "Portaria/Limpeza",
        "parent": "Receita",
        "d1": 0,
        "d2": 100
      },
      {
        "tipo": "Monitoramento Remoto",
        "parent": "Receita",
        "d1": 0,
        "d2": 40869.689999999995
      },
      {
        "tipo": "Despesa",
        "isHeader": true,
        "d1": -344.42,
        "d2": -39318.09
      },
      {
        "tipo": "Conta Garantida",
        "parent": "Despesa",
        "d1": -1.42,
        "d2": -2.33
      },
      {
        "tipo": "Tarifas Bancárias",
        "parent": "Despesa",
        "d1": -343,
        "d2": -337
      },
      {
        "tipo": "Sistema de Gerenciamento",
        "parent": "Despesa",
        "d1": 0,
        "d2": -11688.859999999999
      },
      {
        "tipo": "Máquinas e Equipamentos",
        "parent": "Despesa",
        "d1": 0,
        "d2": -14939.17
      },
      {
        "tipo": "Central de monitoramento",
        "parent": "Despesa",
        "d1": 0,
        "d2": -0.99
      },
      {
        "tipo": "Benefícios",
        "parent": "Despesa",
        "d1": 0,
        "d2": -5349.24
      },
      {
        "tipo": "Férias",
        "parent": "Despesa",
        "d1": 0,
        "d2": -1000.5
      },
      {
        "tipo": "Emprestimos",
        "parent": "Despesa",
        "d1": 0,
        "d2": -6000
      }
    ]
  }
};

// ALL_TX: lista flat de TODAS as transacoes normalizadas (despesa + receita,
// realizadas + a pagar + canceladas excluidas). Usada pra cross-filter real
// — pagina recalcula KPIs/charts/tabelas em runtime via aggregateTx().
// Cada row eh tupla compacta pra reduzir tamanho do bundle:
// [kind, mes, dia, categoria, cliente, valor, realizado, fornecedor, centroCusto, semInvFlag, peClass]
// peClass: 'F'=custo fixo, 'V'=custo variavel, ''=neutro (receita ou grupo 2.10) — usado por computePE.
const ALL_TX = [["r","2026-07",18,"Monitoramento Remoto","RESIDENCIAL ANA LUCIA",7755.2,0,"","Receita Bruta de Vendas",0,"",7755.2,0],["r","2026-07",15,"Monitoramento Remoto","EDIFICIO INNOVARE",6981.72,0,"","Receita Bruta de Vendas",0,"",6981.72,0],["r","2026-07",15,"Monitoramento Remoto","ASSOCIACAO DOS PROPRIETARIOS E PROMITENTES COMPRADORES DAS UNIDADES AUTONOMAS DO EDIFICIO VILLAGIO S",6355.86,0,"","Receita Bruta de Vendas",0,"",6545.55,0],["r","2026-07",15,"Monitoramento Remoto","CONDOMINIO EDIFICIO CAPRI",5983.91,0,"","Receita Bruta de Vendas",0,"",6162.5,0],["r","2026-07",10,"Monitoramento Remoto","SEGPOL",10500,0,"","Receita Bruta de Vendas",0,"",10500,0],["r","2025-10",9,"Portaria 24 Hs....","Sem cliente",1305.86,1,"","",0,"",1305.86,0],["r","2025-10",10,"Empréstimos Bancários","Sem cliente",177.59,1,"","",0,"",177.59,0],["r","2025-10",10,"Empréstimos Bancários","Sem cliente",177.59,1,"","",0,"",177.59,0],["r","2025-10",14,"Portaria 24 Hs....","Sem cliente",400,1,"","",0,"",400,0],["r","2025-10",15,"Empréstimos Bancários","Sem cliente",7477.86,1,"","",0,"",7477.86,0],["r","2025-10",16,"Portaria 24 Hs....","Sem cliente",5972.63,1,"","",0,"",5972.63,0],["r","2025-10",17,"Portaria 24 Hs....","Sem cliente",411.16,1,"","",0,"",411.16,0],["r","2025-10",21,"Portaria 24 Hs....","Sem cliente",6370.62,1,"","",0,"",6370.62,0],["r","2025-10",22,"Portaria 24 Hs....","Sem cliente",5623.1,1,"","",0,"",5623.1,0],["r","2025-10",23,"Portaria 24 Hs....","Sem cliente",7076.4,1,"","",0,"",7076.4,0],["r","2025-10",27,"Empréstimos Bancários","Sem cliente",2318.33,1,"","",0,"",2318.33,0],["r","2025-10",30,"Empréstimos Bancários","Sem cliente",1060,1,"","",0,"",1060,0],["r","2025-10",30,"Empréstimos Bancários","Sem cliente",6092.43,1,"","",0,"",6092.43,0],["r","2026-02",9,"Empréstimo","Sem cliente",20760,1,"","",0,"",20760,0],["r","2026-05",25,"Portaria/Limpeza","SEGPOL",100,1,"","Receita Bruta de Vendas",0,"",100,0],["r","2025-10",13,"MOV TIT COB DISP 13/10S","Sem cliente",558.12,1,"","Receita Bruta de Vendas",0,"",558.12,0],["r","2025-10",9,"Portaria Remota","Sem cliente",100,1,"","Receita Bruta de Vendas",0,"",100,0],["r","2025-10",8,"Portaria/Limpeza","Sem cliente",20,1,"","Receita Bruta de Vendas",0,"",20,0],["r","2026-06",5,"Monitoramento Remoto","CONDOMINIO EDIFICIO ITAPOLIS",6933.93,1,"","Receita Bruta de Vendas",0,"",6933.93,0],["r","2026-06",8,"Monitoramento Remoto","CONDOMINIO DO EDIFICIO PONTA NEGRA",425,1,"","Receita Bruta de Vendas",0,"",425,0],["r","2026-06",10,"Monitoramento Remoto","CONDOMINIO EDIFICIO PAUL CEZANNE",436.86,1,"","Receita Bruta de Vendas",0,"",436.86,0],["r","2026-06",10,"Monitoramento Remoto","SEGPOL",6000,1,"","Receita Bruta de Vendas",0,"",6000,0],["r","2026-06",15,"Monitoramento Remoto","ASSOCIACAO DOS PROPRIETARIOS E PROMITENTES COMPRADORES DAS UNIDADES AUTONOMAS DO EDIFICIO VILLAGIO S",6354.42,1,"","Receita Bruta de Vendas",0,"",6354.42,0],["r","2026-06",16,"Monitoramento Remoto","EDIFICIO INNOVARE",6981.72,1,"","Receita Bruta de Vendas",0,"",6981.72,0],["r","2026-06",16,"Monitoramento Remoto","CONDOMINIO EDIFICIO CAPRI",5982.56,1,"","Receita Bruta de Vendas",0,"",5982.56,0],["r","2026-06",18,"Monitoramento Remoto","RESIDENCIAL ANA LUCIA",7755.2,1,"","Receita Bruta de Vendas",0,"",7755.2,0],["r","2026-07",6,"Monitoramento Remoto","CONDOMINIO EDIFICIO ITAPOLIS",6933.93,1,"","Receita Bruta de Vendas",0,"",6933.93,0],["r","2026-07",6,"Monitoramento Remoto","SIA FACILITIES",15271.02,1,"","Receita Bruta de Vendas",0,"",15271.02,0],["r","2026-07",7,"Monitoramento Remoto","ANDRE LUIZ ISIDORO DA SILVA",1311.8,1,"","Receita Bruta de Vendas",0,"",1311.8,0],["r","2026-07",7,"Monitoramento Remoto","CONDOMINIO DO EDIFICIO PONTA NEGRA",425,1,"","Receita Bruta de Vendas",0,"",425,0],["r","2026-07",7,"Monitoramento Remoto","MATEUS HENRIQUE DE FARIA",1148.4,1,"","Receita Bruta de Vendas",0,"",1148.4,0],["r","2026-07",7,"Monitoramento Remoto","ANDRE LUIZ ISIDORO DA SILVA",1311.8,1,"","Receita Bruta de Vendas",0,"",1311.8,0],["r","2026-07",7,"Monitoramento Remoto","SEGPOL",8000,1,"","Receita Bruta de Vendas",0,"",8000,0],["r","2026-07",7,"Monitoramento Remoto","AIRBNB PLATAFORMA DIGITAL LTDA",283,1,"","Receita Bruta de Vendas",0,"",283,0],["r","2026-07",10,"Monitoramento Remoto","CONDOMINIO EDIFICIO PAUL CEZANNE",436.86,1,"","Receita Bruta de Vendas",0,"",436.86,0],["d","2026-08",9,"Sistema de Gerenciamento","",1475,0,"STRIKE TI","",0,"V",0,0],["d","2026-09",9,"Sistema de Gerenciamento","",1475,0,"STRIKE TI","",0,"V",0,0],["d","2026-10",9,"Sistema de Gerenciamento","",1475,0,"STRIKE TI","",0,"V",0,0],["d","2026-11",9,"Sistema de Gerenciamento","",1475,0,"STRIKE TI","",0,"V",0,0],["d","2026-12",9,"Sistema de Gerenciamento","",1475,0,"STRIKE TI","",0,"V",0,0],["d","2027-01",9,"Sistema de Gerenciamento","",1475,0,"STRIKE TI","",0,"V",0,0],["d","2027-02",9,"Sistema de Gerenciamento","",1475,0,"STRIKE TI","",0,"V",0,0],["d","2027-03",9,"Sistema de Gerenciamento","",1475,0,"STRIKE TI","",0,"V",0,0],["d","2027-04",9,"Sistema de Gerenciamento","",1475,0,"STRIKE TI","",0,"V",0,0],["d","2027-05",9,"Sistema de Gerenciamento","",1475,0,"STRIKE TI","",0,"V",0,0],["d","2027-06",9,"Sistema de Gerenciamento","",1475,0,"STRIKE TI","",0,"V",0,0],["d","2027-07",9,"Sistema de Gerenciamento","",1475,0,"STRIKE TI","",0,"V",0,0],["d","2027-08",9,"Sistema de Gerenciamento","",1475,0,"STRIKE TI","",0,"V",0,0],["d","2027-09",9,"Sistema de Gerenciamento","",1475,0,"STRIKE TI","",0,"V",0,0],["d","2027-10",9,"Sistema de Gerenciamento","",1475,0,"STRIKE TI","",0,"V",0,0],["d","2027-11",9,"Sistema de Gerenciamento","",1475,0,"STRIKE TI","",0,"V",0,0],["d","2027-12",9,"Sistema de Gerenciamento","",1475,0,"STRIKE TI","",0,"V",0,0],["d","2028-01",9,"Sistema de Gerenciamento","",1475,0,"STRIKE TI","",0,"V",0,0],["d","2028-02",9,"Sistema de Gerenciamento","",1475,0,"STRIKE TI","",0,"V",0,0],["d","2028-03",9,"Sistema de Gerenciamento","",1475,0,"STRIKE TI","",0,"V",0,0],["d","2028-04",9,"Sistema de Gerenciamento","",1475,0,"STRIKE TI","",0,"V",0,0],["d","2028-05",9,"Sistema de Gerenciamento","",1475,0,"STRIKE TI","",0,"V",0,0],["d","2028-06",9,"Sistema de Gerenciamento","",1475,0,"STRIKE TI","",0,"V",0,0],["d","2028-07",9,"Sistema de Gerenciamento","",1475,0,"STRIKE TI","",0,"V",0,0],["d","2028-08",9,"Sistema de Gerenciamento","",1475,0,"STRIKE TI","",0,"V",0,0],["d","2028-09",9,"Sistema de Gerenciamento","",1475,0,"STRIKE TI","",0,"V",0,0],["d","2028-10",9,"Sistema de Gerenciamento","",1475,0,"STRIKE TI","",0,"V",0,0],["d","2028-11",9,"Sistema de Gerenciamento","",1475,0,"STRIKE TI","",0,"V",0,0],["d","2028-12",9,"Sistema de Gerenciamento","",1475,0,"STRIKE TI","",0,"V",0,0],["d","2029-01",9,"Sistema de Gerenciamento","",1475,0,"STRIKE TI","",0,"V",0,0],["d","2029-02",9,"Sistema de Gerenciamento","",1475,0,"STRIKE TI","",0,"V",0,0],["d","2029-03",9,"Sistema de Gerenciamento","",1475,0,"STRIKE TI","",0,"V",0,0],["d","2029-04",9,"Sistema de Gerenciamento","",1475,0,"STRIKE TI","",0,"V",0,0],["d","2029-05",9,"Sistema de Gerenciamento","",1475,0,"STRIKE TI","",0,"V",0,0],["d","2026-07",15,"Benefícios","",5627.36,0,"CDC ADMINISTRACAO DE CONVENIOS LTDA","",0,"F",0,0],["d","2026-05",24,"Sistema de Gerenciamento","",917.53,0,"MULTISEG","",0,"V",0,0],["d","2026-04",10,"Máquinas e Equipamentos","",519.22,0,"MULTISEG","Deduções de Receita",0,"V",0,0],["d","2026-04",25,"Máquinas e Equipamentos","",1400.8,0,"MULTISEG","Deduções de Receita",0,"V",0,0],["d","2026-07",10,"Seguro de vida","",64.7,0,"METLIFE SEGUROS E PREVIDENCIA","Despesas com Pessoal",0,"F",0,0],["d","2026-07",10,"Seguro de vida","",56.61,0,"METLIFE SEGUROS E PREVIDENCIA","Despesas com Pessoal",0,"F",0,0],["d","2026-08",10,"Seguro de vida","",56.61,0,"METLIFE SEGUROS E PREVIDENCIA","Despesas com Pessoal",0,"F",0,0],["d","2026-09",10,"Seguro de vida","",56.61,0,"METLIFE SEGUROS E PREVIDENCIA","Despesas com Pessoal",0,"F",0,0],["d","2026-10",10,"Seguro de vida","",56.61,0,"METLIFE SEGUROS E PREVIDENCIA","Despesas com Pessoal",0,"F",0,0],["d","2026-11",10,"Seguro de vida","",56.61,0,"METLIFE SEGUROS E PREVIDENCIA","Despesas com Pessoal",0,"F",0,0],["d","2026-12",10,"Seguro de vida","",56.61,0,"METLIFE SEGUROS E PREVIDENCIA","Despesas com Pessoal",0,"F",0,0],["d","2027-01",10,"Seguro de vida","",56.61,0,"METLIFE SEGUROS E PREVIDENCIA","Despesas com Pessoal",0,"F",0,0],["d","2027-02",10,"Seguro de vida","",56.61,0,"METLIFE SEGUROS E PREVIDENCIA","Despesas com Pessoal",0,"F",0,0],["d","2027-03",10,"Seguro de vida","",56.61,0,"METLIFE SEGUROS E PREVIDENCIA","Despesas com Pessoal",0,"F",0,0],["d","2027-04",10,"Seguro de vida","",56.61,0,"METLIFE SEGUROS E PREVIDENCIA","Despesas com Pessoal",0,"F",0,0],["d","2027-05",10,"Seguro de vida","",56.61,0,"METLIFE SEGUROS E PREVIDENCIA","Despesas com Pessoal",0,"F",0,0],["d","2026-04",25,"Máquinas e Equipamentos","",1182.59,0,"MULTISEG","Deduções de Receita",0,"V",0,0],["d","2026-05",25,"Máquinas e Equipamentos","",917.53,0,"MULTISEG","Deduções de Receita",0,"V",0,0],["d","2026-07",9,"Sistema de Gerenciamento","",1475,0,"STRIKE TI","",0,"V",0,0],["d","2026-07",10,"Seguro de vida","",80.87,0,"METLIFE SEGUROS E PREVIDENCIA","Despesas com Pessoal",0,"F",0,0],["d","2026-07",20,"Máquinas e Equipamentos","",2451.72,0,"ISSEL SOROCABA","Deduções de Receita",0,"V",0,0],["d","2026-08",20,"Máquinas e Equipamentos","",2451.72,0,"ISSEL SOROCABA","Deduções de Receita",0,"V",0,0],["d","2026-09",20,"Máquinas e Equipamentos","",2451.72,0,"ISSEL SOROCABA","Deduções de Receita",0,"V",0,0],["d","2026-10",20,"Máquinas e Equipamentos","",2451.72,0,"ISSEL SOROCABA","Deduções de Receita",0,"V",0,0],["d","2026-07",17,"Máquinas e Equipamentos","",210,0,"MEXTRA","Deduções de Receita",0,"V",0,0],["d","2026-07",26,"Máquinas e Equipamentos","",1014.71,0,"ISSEL SOROCABA","Deduções de Receita",0,"V",0,0],["d","2026-08",26,"Máquinas e Equipamentos","",1014.71,0,"ISSEL SOROCABA","Deduções de Receita",0,"V",0,0],["d","2026-09",26,"Máquinas e Equipamentos","",1014.71,0,"ISSEL SOROCABA","Deduções de Receita",0,"V",0,0],["d","2026-08",9,"Manutenção","",1475,0,"STRIKE TI","",0,"V",0,0],["d","2026-07",20,"Contabilidade","",1000,0,"AGYLIS CONTABILIDADE LTDA","Despesas Administrativas",0,"F",0,0],["d","2026-08",20,"Contabilidade","",1000,0,"AGYLIS CONTABILIDADE LTDA","Despesas Administrativas",0,"F",0,0],["d","2026-09",20,"Contabilidade","",1000,0,"AGYLIS CONTABILIDADE LTDA","Despesas Administrativas",0,"F",0,0],["d","2026-10",20,"Contabilidade","",1000,0,"AGYLIS CONTABILIDADE LTDA","Despesas Administrativas",0,"F",0,0],["d","2026-11",20,"Contabilidade","",1000,0,"AGYLIS CONTABILIDADE LTDA","Despesas Administrativas",0,"F",0,0],["d","2026-12",20,"Contabilidade","",1000,0,"AGYLIS CONTABILIDADE LTDA","Despesas Administrativas",0,"F",0,0],["d","2027-01",20,"Contabilidade","",1000,0,"AGYLIS CONTABILIDADE LTDA","Despesas Administrativas",0,"F",0,0],["d","2027-02",20,"Contabilidade","",1000,0,"AGYLIS CONTABILIDADE LTDA","Despesas Administrativas",0,"F",0,0],["d","2027-03",20,"Contabilidade","",1000,0,"AGYLIS CONTABILIDADE LTDA","Despesas Administrativas",0,"F",0,0],["d","2027-04",20,"Contabilidade","",1000,0,"AGYLIS CONTABILIDADE LTDA","Despesas Administrativas",0,"F",0,0],["d","2027-05",20,"Contabilidade","",1000,0,"AGYLIS CONTABILIDADE LTDA","Despesas Administrativas",0,"F",0,0],["d","2027-06",20,"Contabilidade","",1000,0,"AGYLIS CONTABILIDADE LTDA","Despesas Administrativas",0,"F",0,0],["d","2027-07",20,"Contabilidade","",1000,0,"AGYLIS CONTABILIDADE LTDA","Despesas Administrativas",0,"F",0,0],["d","2027-08",20,"Contabilidade","",1000,0,"AGYLIS CONTABILIDADE LTDA","Despesas Administrativas",0,"F",0,0],["d","2027-09",20,"Contabilidade","",1000,0,"AGYLIS CONTABILIDADE LTDA","Despesas Administrativas",0,"F",0,0],["d","2027-10",20,"Contabilidade","",1000,0,"AGYLIS CONTABILIDADE LTDA","Despesas Administrativas",0,"F",0,0],["d","2027-11",20,"Contabilidade","",1000,0,"AGYLIS CONTABILIDADE LTDA","Despesas Administrativas",0,"F",0,0],["d","2027-12",20,"Contabilidade","",1000,0,"AGYLIS CONTABILIDADE LTDA","Despesas Administrativas",0,"F",0,0],["d","2028-01",20,"Contabilidade","",1000,0,"AGYLIS CONTABILIDADE LTDA","Despesas Administrativas",0,"F",0,0],["d","2028-02",20,"Contabilidade","",1000,0,"AGYLIS CONTABILIDADE LTDA","Despesas Administrativas",0,"F",0,0],["d","2028-03",20,"Contabilidade","",1000,0,"AGYLIS CONTABILIDADE LTDA","Despesas Administrativas",0,"F",0,0],["d","2028-04",20,"Contabilidade","",1000,0,"AGYLIS CONTABILIDADE LTDA","Despesas Administrativas",0,"F",0,0],["d","2028-05",20,"Contabilidade","",1000,0,"AGYLIS CONTABILIDADE LTDA","Despesas Administrativas",0,"F",0,0],["d","2028-06",20,"Contabilidade","",1000,0,"AGYLIS CONTABILIDADE LTDA","Despesas Administrativas",0,"F",0,0],["d","2028-07",20,"Contabilidade","",1000,0,"AGYLIS CONTABILIDADE LTDA","Despesas Administrativas",0,"F",0,0],["d","2028-08",20,"Contabilidade","",1000,0,"AGYLIS CONTABILIDADE LTDA","Despesas Administrativas",0,"F",0,0],["d","2028-09",20,"Contabilidade","",1000,0,"AGYLIS CONTABILIDADE LTDA","Despesas Administrativas",0,"F",0,0],["d","2028-10",20,"Contabilidade","",1000,0,"AGYLIS CONTABILIDADE LTDA","Despesas Administrativas",0,"F",0,0],["d","2028-11",20,"Contabilidade","",1000,0,"AGYLIS CONTABILIDADE LTDA","Despesas Administrativas",0,"F",0,0],["d","2028-12",20,"Contabilidade","",1000,0,"AGYLIS CONTABILIDADE LTDA","Despesas Administrativas",0,"F",0,0],["d","2029-01",20,"Contabilidade","",1000,0,"AGYLIS CONTABILIDADE LTDA","Despesas Administrativas",0,"F",0,0],["d","2029-02",20,"Contabilidade","",1000,0,"AGYLIS CONTABILIDADE LTDA","Despesas Administrativas",0,"F",0,0],["d","2029-03",20,"Contabilidade","",1000,0,"AGYLIS CONTABILIDADE LTDA","Despesas Administrativas",0,"F",0,0],["d","2029-04",20,"Contabilidade","",1000,0,"AGYLIS CONTABILIDADE LTDA","Despesas Administrativas",0,"F",0,0],["d","2029-05",20,"Contabilidade","",1000,0,"AGYLIS CONTABILIDADE LTDA","Despesas Administrativas",0,"F",0,0],["d","2029-06",20,"Contabilidade","",1000,0,"AGYLIS CONTABILIDADE LTDA","Despesas Administrativas",0,"F",0,0],["d","2026-08",6,"Salários PIX","",2014.35,0,"AMANDA MAYUMI KOBAYASHI","Despesas com Pessoal",0,"F",0,0],["d","2026-09",6,"Salários PIX","",2014.35,0,"AMANDA MAYUMI KOBAYASHI","Despesas com Pessoal",0,"F",0,0],["d","2026-10",6,"Salários PIX","",2014.35,0,"AMANDA MAYUMI KOBAYASHI","Despesas com Pessoal",0,"F",0,0],["d","2026-11",6,"Salários PIX","",2014.35,0,"AMANDA MAYUMI KOBAYASHI","Despesas com Pessoal",0,"F",0,0],["d","2026-12",6,"Salários PIX","",2014.35,0,"AMANDA MAYUMI KOBAYASHI","Despesas com Pessoal",0,"F",0,0],["d","2026-08",5,"Salários","",1311.8,0,"ANDRE LUIZ ISIDORO DA SILVA","Despesas com Pessoal",0,"F",0,0],["d","2026-09",5,"Salários","",1311.8,0,"ANDRE LUIZ ISIDORO DA SILVA","Despesas com Pessoal",0,"F",0,0],["d","2026-10",5,"Salários","",1311.8,0,"ANDRE LUIZ ISIDORO DA SILVA","Despesas com Pessoal",0,"F",0,0],["d","2026-11",5,"Salários","",1311.8,0,"ANDRE LUIZ ISIDORO DA SILVA","Despesas com Pessoal",0,"F",0,0],["d","2026-12",5,"Salários","",1311.8,0,"ANDRE LUIZ ISIDORO DA SILVA","Despesas com Pessoal",0,"F",0,0],["d","2026-08",5,"Salários PIX","",1008.58,0,"FABRICIO RAMOS DOS SANTOS","Despesas com Pessoal",0,"F",0,0],["d","2026-09",5,"Salários PIX","",1008.58,0,"FABRICIO RAMOS DOS SANTOS","Despesas com Pessoal",0,"F",0,0],["d","2026-10",5,"Salários PIX","",1008.58,0,"FABRICIO RAMOS DOS SANTOS","Despesas com Pessoal",0,"F",0,0],["d","2026-11",5,"Salários PIX","",1008.58,0,"FABRICIO RAMOS DOS SANTOS","Despesas com Pessoal",0,"F",0,0],["d","2026-12",5,"Salários PIX","",1008.58,0,"FABRICIO RAMOS DOS SANTOS","Despesas com Pessoal",0,"F",0,0],["d","2026-08",5,"Salários PIX","",992.13,0,"JONATHAN HENRIQUE DA SILVA SANTOS","Despesas com Pessoal",0,"F",0,0],["d","2026-09",5,"Salários PIX","",992.13,0,"JONATHAN HENRIQUE DA SILVA SANTOS","Despesas com Pessoal",0,"F",0,0],["d","2026-10",5,"Salários PIX","",992.13,0,"JONATHAN HENRIQUE DA SILVA SANTOS","Despesas com Pessoal",0,"F",0,0],["d","2026-11",5,"Salários PIX","",992.13,0,"JONATHAN HENRIQUE DA SILVA SANTOS","Despesas com Pessoal",0,"F",0,0],["d","2026-12",5,"Salários PIX","",992.13,0,"JONATHAN HENRIQUE DA SILVA SANTOS","Despesas com Pessoal",0,"F",0,0],["d","2026-08",5,"Pensão Alimentícia","",545.94,0,"JONATHAN HENRIQUE DA SILVA SANTOS","Despesas com Pessoal",0,"F",0,0],["d","2026-09",5,"Pensão Alimentícia","",545.94,0,"JONATHAN HENRIQUE DA SILVA SANTOS","Despesas com Pessoal",0,"F",0,0],["d","2026-10",5,"Pensão Alimentícia","",545.94,0,"JONATHAN HENRIQUE DA SILVA SANTOS","Despesas com Pessoal",0,"F",0,0],["d","2026-11",5,"Pensão Alimentícia","",545.94,0,"JONATHAN HENRIQUE DA SILVA SANTOS","Despesas com Pessoal",0,"F",0,0],["d","2026-12",5,"Pensão Alimentícia","",545.94,0,"JONATHAN HENRIQUE DA SILVA SANTOS","Despesas com Pessoal",0,"F",0,0],["d","2026-08",5,"Salários PIX","",828.43,0,"JOSIANA DA SILVA","Despesas com Pessoal",0,"F",0,0],["d","2026-09",5,"Salários PIX","",828.43,0,"JOSIANA DA SILVA","Despesas com Pessoal",0,"F",0,0],["d","2026-10",5,"Salários PIX","",828.43,0,"JOSIANA DA SILVA","Despesas com Pessoal",0,"F",0,0],["d","2026-11",5,"Salários PIX","",828.43,0,"JOSIANA DA SILVA","Despesas com Pessoal",0,"F",0,0],["d","2026-12",5,"Salários PIX","",828.43,0,"JOSIANA DA SILVA","Despesas com Pessoal",0,"F",0,0],["d","2026-07",20,"Exames Admissional/Demissional","",348,0,"MEXTRA","",0,"F",0,0],["d","2026-08",5,"Salários PIX","",3114.89,0,"LEONARDO MARTINS ALVES GALDEANO","Despesas com Pessoal",0,"F",0,0],["d","2026-09",5,"Salários PIX","",3114.89,0,"LEONARDO MARTINS ALVES GALDEANO","Despesas com Pessoal",0,"F",0,0],["d","2026-10",5,"Salários PIX","",3114.89,0,"LEONARDO MARTINS ALVES GALDEANO","Despesas com Pessoal",0,"F",0,0],["d","2026-11",5,"Salários PIX","",3114.89,0,"LEONARDO MARTINS ALVES GALDEANO","Despesas com Pessoal",0,"F",0,0],["d","2026-12",5,"Salários PIX","",3114.89,0,"LEONARDO MARTINS ALVES GALDEANO","Despesas com Pessoal",0,"F",0,0],["d","2026-08",5,"Salários PIX","",3541.63,0,"MARIA ANGELICA DOS REIS","Despesas com Pessoal",0,"F",0,0],["d","2026-09",5,"Salários PIX","",3541.63,0,"MARIA ANGELICA DOS REIS","Despesas com Pessoal",0,"F",0,0],["d","2026-10",5,"Salários PIX","",3541.63,0,"MARIA ANGELICA DOS REIS","Despesas com Pessoal",0,"F",0,0],["d","2026-11",5,"Salários PIX","",3541.63,0,"MARIA ANGELICA DOS REIS","Despesas com Pessoal",0,"F",0,0],["d","2026-12",5,"Salários PIX","",3541.63,0,"MARIA ANGELICA DOS REIS","Despesas com Pessoal",0,"F",0,0],["d","2026-08",5,"Salários","",1148.4,0,"MATEUS HENRIQUE DE FARIA","Despesas com Pessoal",0,"F",0,0],["d","2026-09",5,"Salários","",1148.4,0,"MATEUS HENRIQUE DE FARIA","Despesas com Pessoal",0,"F",0,0],["d","2026-10",5,"Salários","",1148.4,0,"MATEUS HENRIQUE DE FARIA","Despesas com Pessoal",0,"F",0,0],["d","2026-11",5,"Salários","",1148.4,0,"MATEUS HENRIQUE DE FARIA","Despesas com Pessoal",0,"F",0,0],["d","2026-12",5,"Salários","",1148.4,0,"MATEUS HENRIQUE DE FARIA","Despesas com Pessoal",0,"F",0,0],["d","2026-08",5,"Salários PIX","",2029.09,0,"MIGUEL ZINANI DE OLIVEIRA","Despesas com Pessoal",0,"F",0,0],["d","2026-09",5,"Salários PIX","",2029.09,0,"MIGUEL ZINANI DE OLIVEIRA","Despesas com Pessoal",0,"F",0,0],["d","2026-10",5,"Salários PIX","",2029.09,0,"MIGUEL ZINANI DE OLIVEIRA","Despesas com Pessoal",0,"F",0,0],["d","2026-11",5,"Salários PIX","",2029.09,0,"MIGUEL ZINANI DE OLIVEIRA","Despesas com Pessoal",0,"F",0,0],["d","2026-12",5,"Salários PIX","",2029.09,0,"MIGUEL ZINANI DE OLIVEIRA","Despesas com Pessoal",0,"F",0,0],["d","2026-08",5,"Salários PIX","",2855.49,0,"ROBSON LUIZ DOMINGOS DA SILVA","Despesas com Pessoal",0,"F",0,0],["d","2026-09",5,"Salários PIX","",2855.49,0,"ROBSON LUIZ DOMINGOS DA SILVA","Despesas com Pessoal",0,"F",0,0],["d","2026-10",5,"Salários PIX","",2855.49,0,"ROBSON LUIZ DOMINGOS DA SILVA","Despesas com Pessoal",0,"F",0,0],["d","2026-11",5,"Salários PIX","",2855.49,0,"ROBSON LUIZ DOMINGOS DA SILVA","Despesas com Pessoal",0,"F",0,0],["d","2026-12",5,"Salários PIX","",2855.49,0,"ROBSON LUIZ DOMINGOS DA SILVA","Despesas com Pessoal",0,"F",0,0],["d","2026-08",5,"Salários PIX","",1361.84,0,"SIDNEIA MORENA DE SOUZA","Despesas com Pessoal",0,"F",0,0],["d","2026-09",5,"Salários PIX","",1361.84,0,"SIDNEIA MORENA DE SOUZA","Despesas com Pessoal",0,"F",0,0],["d","2026-10",5,"Salários PIX","",1361.84,0,"SIDNEIA MORENA DE SOUZA","Despesas com Pessoal",0,"F",0,0],["d","2026-11",5,"Salários PIX","",1361.84,0,"SIDNEIA MORENA DE SOUZA","Despesas com Pessoal",0,"F",0,0],["d","2026-12",5,"Salários PIX","",1361.84,0,"SIDNEIA MORENA DE SOUZA","Despesas com Pessoal",0,"F",0,0],["d","2026-08",5,"Salários PIX","",697.71,0,"YAN OLIVEIRA PRADO DE ALMEIDA","Despesas com Pessoal",0,"F",0,0],["d","2026-09",5,"Salários PIX","",697.71,0,"YAN OLIVEIRA PRADO DE ALMEIDA","Despesas com Pessoal",0,"F",0,0],["d","2026-10",5,"Salários PIX","",697.71,0,"YAN OLIVEIRA PRADO DE ALMEIDA","Despesas com Pessoal",0,"F",0,0],["d","2026-11",5,"Salários PIX","",697.71,0,"YAN OLIVEIRA PRADO DE ALMEIDA","Despesas com Pessoal",0,"F",0,0],["d","2026-12",5,"Salários PIX","",697.71,0,"YAN OLIVEIRA PRADO DE ALMEIDA","Despesas com Pessoal",0,"F",0,0],["d","2026-07",20,"Central de monitoramento","",4153.72,0,"ECONDOS","Deduções de Receita",0,"V",0,0],["d","2026-08",5,"Salários PIX","",1442.69,0,"CLARA DE OLIVEIRA LIMA","Despesas com Pessoal",0,"F",0,0],["d","2026-09",5,"Salários PIX","",1442.69,0,"CLARA DE OLIVEIRA LIMA","Despesas com Pessoal",0,"F",0,0],["d","2026-10",5,"Salários PIX","",1442.69,0,"CLARA DE OLIVEIRA LIMA","Despesas com Pessoal",0,"F",0,0],["d","2026-11",5,"Salários PIX","",1442.69,0,"CLARA DE OLIVEIRA LIMA","Despesas com Pessoal",0,"F",0,0],["d","2026-12",5,"Salários PIX","",1442.69,0,"CLARA DE OLIVEIRA LIMA","Despesas com Pessoal",0,"F",0,0],["d","2027-01",5,"Salários PIX","",1442.69,0,"CLARA DE OLIVEIRA LIMA","Despesas com Pessoal",0,"F",0,0],["d","2026-07",20,"FGTS","",3975.58,0,"CAIXA ECONOMICA FEDERAL","",0,"V",0,0],["d","2026-08",20,"FGTS","",3975.58,0,"CAIXA ECONOMICA FEDERAL","",0,"V",0,0],["d","2026-09",20,"FGTS","",3975.58,0,"CAIXA ECONOMICA FEDERAL","",0,"V",0,0],["d","2026-10",20,"FGTS","",3975.58,0,"CAIXA ECONOMICA FEDERAL","",0,"V",0,0],["d","2026-11",20,"FGTS","",3975.58,0,"CAIXA ECONOMICA FEDERAL","",0,"V",0,0],["d","2026-12",20,"FGTS","",3975.58,0,"CAIXA ECONOMICA FEDERAL","",0,"V",0,0],["d","2026-07",10,"Contribuição Sindical","",195.17,0,"SINDEEPRES","",0,"V",0,0],["d","2026-07",10,"Contribuição Sindical Odonto","",283.1,0,"SINDEEPRES","",0,"F",0,0],["d","2026-07",27,"Sistema de Gerenciamento","",183.89,0,"MONI SOFTWARE LTDA","",0,"V",0,0],["d","2026-07",20,"Sistema de Gerenciamento","",119,0,"Omiexperience","",0,"V",0,0],["d","2026-08",21,"VT","",6960.77,0,"CDC ADMINISTRACAO DE CONVENIOS LTDA","Despesas com Pessoal",0,"F",0,0],["d","2025-09",29,"Tarifas PIX","",4.47,1,"Sem cliente","",0,"F",0,0],["d","2025-09",29,"Tarifas Bancárias","",4.47,1,"Sem cliente","Despesas Financeiras",0,"F",0,0],["d","2025-09",29,"Tarifas Bancárias","",6.8,1,"Sem cliente","Despesas Financeiras",0,"F",0,0],["d","2025-09",30,"Tarifas Bancárias","",2.98,1,"Sem cliente","Despesas Financeiras",0,"F",0,0],["d","2025-09",30,"Tarifas Bancárias","",6,1,"Sem cliente","Despesas Financeiras",0,"F",0,0],["d","2025-09",30,"Tarifas Bancárias","",6.8,1,"Sem cliente","Despesas Financeiras",0,"F",0,0],["d","2025-10",2,"Conta Garantida","",0.19,1,"Sem cliente","",0,"F",0,0],["d","2025-10",2,"IOF","",0.1,1,"Sem cliente","",0,"F",0,0],["d","2025-10",7,"Salários","",7478.27,1,"Sem cliente","Despesas com Pessoal",0,"F",0,0],["d","2025-10",7,"Prestação de Serviços","",548.01,1,"Sem cliente","",0,"V",0,0],["d","2025-10",7,"Prestação de Serviços","",474.09,1,"Sem cliente","",0,"V",0,0],["d","2025-10",7,"Prestação de Serviços","",1635,1,"Sem cliente","",0,"V",0,0],["d","2025-10",7,"Prestação de Serviços","",217.73,1,"Sem cliente","",0,"V",0,0],["d","2025-10",7,"Salários","",1784.55,1,"MARIA ANGELICA DOS REIS","Despesas com Pessoal",0,"F",0,0],["d","2025-10",7,"Salários","",2046.31,1,"Sem cliente","Despesas com Pessoal",0,"F",0,0],["d","2025-10",7,"Salários","",1702.67,1,"LEONARDO MARTINS ALVES GALDEANO","Despesas com Pessoal",0,"F",0,0],["d","2025-10",7,"Salários","",1733.3,1,"ROBSON LUIZ DOMINGOS DA SILVA","Despesas com Pessoal",0,"F",0,0],["d","2025-10",7,"Salários","",1183.3,1,"ROBSON LUIZ DOMINGOS DA SILVA","Despesas com Pessoal",0,"F",0,0],["d","2025-10",7,"Salários","",716.6,1,"Sem cliente","Despesas com Pessoal",0,"F",0,0],["d","2025-10",7,"Prest Serv Extra","",518.87,1,"Sem cliente","",0,"V",0,0],["d","2025-10",7,"Serviço Esporádicos","",557.28,1,"Sem cliente","",0,"F",0,0],["d","2025-10",9,"Prestação de Serviços","",1000.33,1,"Sem cliente","",0,"V",0,0],["d","2025-10",10,"Prestação de Serviços","",254.79,1,"Sem cliente","",0,"V",0,0],["d","2025-10",10,"Prestação de Serviços","",69.17,1,"Sem cliente","",0,"V",0,0],["d","2025-10",10,"Emprestimos","",177.59,1,"Sem cliente","Despesas Administrativas",0,"F",0,0],["d","2025-10",10,"Emprestimos","",177.59,1,"Sem cliente","Despesas Administrativas",0,"F",0,0],["d","2025-10",15,"Salários","",3234.11,1,"Sem cliente","Despesas com Pessoal",0,"F",0,0],["d","2025-10",15,"Prestação de Serviços","",3545.5,1,"Sem cliente","",0,"V",0,0],["d","2025-10",15,"VR VA VT Monitoramento","",150,1,"Sem cliente","",0,"F",0,0],["d","2025-10",15,"VR VA VT Monitoramento","",150,1,"Sem cliente","",0,"F",0,0],["d","2025-10",15,"Salários","",150,1,"JONATHAN HENRIQUE DA SILVA SANTOS","Despesas com Pessoal",0,"F",0,0],["d","2025-10",15,"VR VA VT Monitoramento","",150,1,"Sem cliente","",0,"F",0,0],["d","2025-10",15,"Salários","",433.2,1,"Sem cliente","Despesas com Pessoal",0,"F",0,0],["d","2025-10",15,"Salários","",183.3,1,"ROBSON LUIZ DOMINGOS DA SILVA","Despesas com Pessoal",0,"F",0,0],["d","2025-10",16,"Prest Serv Extra","",1000,1,"Sem cliente","",0,"V",0,0],["d","2025-10",21,"Material de limpeza","",415.76,1,"Sem cliente","Deduções de Receita",0,"V",0,0],["d","2025-10",21,"VR VA VT Monitoramento","",280,1,"MIGUEL ZINANI DE OLIVEIRA","",0,"F",0,0],["d","2025-10",21,"Salários","",100,1,"ROBSON LUIZ DOMINGOS DA SILVA","Despesas com Pessoal",0,"F",0,0],["d","2025-10",21,"Salários","",320,1,"JONATHAN HENRIQUE DA SILVA SANTOS","Despesas com Pessoal",0,"F",0,0],["d","2025-10",21,"Salários","",1400,1,"LEONARDO MARTINS ALVES GALDEANO","Despesas com Pessoal",0,"F",0,0],["d","2025-10",21,"VR VA VT Monitoramento","",920,1,"FABRICIO RAMOS DOS SANTOS","",0,"F",0,0],["d","2025-10",22,"Prestação de Serviços","",1000,1,"Sem cliente","",0,"V",0,0],["d","2025-10",22,"Prestação de Serviços","",76.5,1,"Sem cliente","",0,"V",0,0],["d","2025-10",22,"Prestação de Serviços","",2878.35,1,"Sem cliente","",0,"V",0,0],["d","2025-10",22,"Salários","",516.66,1,"ROBSON LUIZ DOMINGOS DA SILVA","Despesas com Pessoal",0,"F",0,0],["d","2025-10",22,"VR VA VT Monitoramento","",335,1,"MIGUEL ZINANI DE OLIVEIRA","",0,"F",0,0],["d","2025-10",23,"Emprestimos","",900,1,"Sem cliente","Despesas Administrativas",0,"F",0,0],["d","2025-10",24,"Retirada CL","",15311.64,1,"Sem cliente","Despesas com Pessoal",0,"F",0,0],["d","2025-10",27,"Tarifas Bancárias","",4.47,1,"Sem cliente","Despesas Financeiras",0,"F",0,0],["d","2025-10",27,"Prestação de Serviços","",1400.8,1,"Sem cliente","",0,"V",0,0],["d","2025-10",27,"Prestação de Serviços","",917.53,1,"Sem cliente","",0,"V",0,0],["d","2025-10",30,"Salários","",266.7,1,"Sem cliente","Despesas com Pessoal",0,"F",0,0],["d","2025-10",30,"Salários","",483.3,1,"Sem cliente","Despesas com Pessoal",0,"F",0,0],["d","2025-10",30,"VR VA VT Monitoramento","",170,1,"MIGUEL ZINANI DE OLIVEIRA","",0,"F",0,0],["d","2025-10",30,"Salários","",140,1,"SIDNEIA MORENA DE SOUZA","Despesas com Pessoal",0,"F",0,0],["d","2025-10",30,"Simples Nascional DAS","",2514.59,1,"Sem cliente","",0,"V",0,0],["d","2025-10",30,"FGTS","",1719.29,1,"Sem cliente","",0,"V",0,0],["d","2025-10",30,"Simples Nascional DAS","",1853.55,1,"Sem cliente","",0,"V",0,0],["d","2026-01",6,"Conta Garantida","",0.05,1,"Sem cliente","",0,"F",0,0],["d","2026-01",15,"Tarifas Bancárias","",6,1,"Sem cliente","Despesas Financeiras",0,"F",0,0],["d","2026-02",4,"Conta Garantida","",0.53,1,"Sem cliente","",0,"F",0,0],["d","2026-03",20,"Tarifas Bancárias","",168.5,1,"Sem cliente","Despesas Financeiras",0,"F",0,0],["d","2026-03",20,"Tarifas Bancárias","",168.5,1,"Sem cliente","Despesas Financeiras",0,"F",0,0],["d","2026-03",4,"Conta Garantida","",0.84,1,"Sem cliente","",0,"F",0,0],["d","2026-04",6,"Conta Garantida","",1.15,1,"Sem cliente","",0,"F",0,0],["d","2026-05",6,"Conta Garantida","",1.18,1,"Sem cliente","",0,"F",0,0],["d","2026-05",26,"Tarifas Bancárias","",168.5,1,"Sem cliente","Despesas Financeiras",0,"F",0,0],["d","2026-05",26,"Tarifas Bancárias","",168.5,1,"Sem cliente","Despesas Financeiras",0,"F",0,0],["d","2025-10",13,"Tarifas Bancárias","",1.99,1,"Sem cliente","Despesas Financeiras",0,"F",0,0],["d","2025-10",2,"Tarifas Bancárias","",19.2,1,"Sem cliente","Despesas Financeiras",0,"F",0,0],["d","2025-10",2,"Tarifas Bancárias","",37.4,1,"Sem cliente","Despesas Financeiras",0,"F",0,0],["d","2025-10",1,"Caixinha","",375.65,1,"Sem cliente","",0,"V",0,0],["d","2026-06",5,"Sistema de Gerenciamento","",0.99,1,"Sem cliente","",0,"V",0,0],["d","2026-06",5,"Sistema de Gerenciamento","",0.5,1,"Sem cliente","",0,"V",0,0],["d","2026-06",8,"Sistema de Gerenciamento","",0.99,1,"Sem cliente","",0,"V",0,0],["d","2026-06",10,"Sistema de Gerenciamento","",78.78,1,"IFOOD.COM AGENCIA DE RESTAURANTES ONLINE S.A.","",0,"V",0,0],["d","2026-06",10,"Sistema de Gerenciamento","",0.5,1,"Sem cliente","",0,"V",0,0],["d","2026-06",10,"Sistema de Gerenciamento","",0.99,1,"Sem cliente","",0,"V",0,0],["d","2026-06",10,"Sistema de Gerenciamento","",198.17,1,"SINDEEPRES","",0,"V",0,0],["d","2026-06",10,"Sistema de Gerenciamento","",136.48,1,"SINDEEPRES","",0,"V",0,0],["d","2026-06",10,"Sistema de Gerenciamento","",6000,1,"KATIA MARSON GOMES PEDREIRA VENEZIANI","",0,"V",0,0],["d","2026-06",10,"Sistema de Gerenciamento","",0.5,1,"Sem cliente","",0,"V",0,0],["d","2026-06",12,"Sistema de Gerenciamento","",252,1,"MARIA ANGELICA DOS REIS","",0,"V",0,0],["d","2026-06",12,"Sistema de Gerenciamento","",302.4,1,"ROBSON LUIZ DOMINGOS DA SILVA","",0,"V",0,0],["d","2026-06",12,"Sistema de Gerenciamento","",327.6,1,"LEONARDO MARTINS ALVES GALDEANO","",0,"V",0,0],["d","2026-06",12,"Sistema de Gerenciamento","",0.5,1,"Sem cliente","",0,"V",0,0],["d","2026-06",12,"Sistema de Gerenciamento","",0.5,1,"Sem cliente","",0,"V",0,0],["d","2026-06",12,"Sistema de Gerenciamento","",0.5,1,"Sem cliente","",0,"V",0,0],["d","2026-06",12,"Sistema de Gerenciamento","",1182.59,1,"MULTISEG","",0,"V",0,0],["d","2026-06",12,"Sistema de Gerenciamento","",1400.8,1,"MULTISEG","",0,"V",0,0],["d","2026-06",12,"Sistema de Gerenciamento","",0.5,1,"Sem cliente","",0,"V",0,0],["d","2026-06",12,"Sistema de Gerenciamento","",0.5,1,"Sem cliente","",0,"V",0,0],["d","2026-06",15,"Sistema de Gerenciamento","",693,1,"CONSORCIO 123","",0,"V",0,0],["d","2026-06",15,"Sistema de Gerenciamento","",0.99,1,"Sem cliente","",0,"V",0,0],["d","2026-06",16,"Sistema de Gerenciamento","",0.99,1,"Sem cliente","",0,"V",0,0],["d","2026-06",16,"Sistema de Gerenciamento","",0.99,1,"Sem cliente","",0,"V",0,0],["d","2026-06",18,"Central de monitoramento","",0.99,1,"Sem cliente","Deduções de Receita",0,"V",0,0],["d","2026-06",18,"Máquinas e Equipamentos","",10000,1,"HERITAGE COMPANY LTDA","Deduções de Receita",0,"V",0,0],["d","2026-06",18,"Máquinas e Equipamentos","",0.5,1,"Sem cliente","Deduções de Receita",0,"V",0,0],["d","2026-06",19,"Máquinas e Equipamentos","",917.53,1,"MULTISEG","Deduções de Receita",0,"V",0,0],["d","2026-06",19,"Benefícios","",5349.24,1,"CDC ADMINISTRACAO DE CONVENIOS LTDA","",0,"F",0,0],["d","2026-06",19,"Sistema de Gerenciamento","",189.07,1,"MONI SOFTWARE LTDA","",0,"V",0,0],["d","2026-06",19,"Máquinas e Equipamentos","",0.5,1,"Sem cliente","Deduções de Receita",0,"V",0,0],["d","2026-06",19,"Férias","",1000,1,"LIDIANE CRISTINA DA SILVA","Despesas com Pessoal",0,"F",0,0],["d","2026-06",19,"Férias","",0.5,1,"Sem cliente","Despesas com Pessoal",0,"F",0,0],["d","2026-06",26,"Emprestimos","",2000,1,"SEGPOL","Despesas Administrativas",0,"F",0,0],["d","2026-06",26,"Sistema de Gerenciamento","",0.5,1,"Sem cliente","",0,"V",0,0],["d","2026-06",29,"Emprestimos","",4000,1,"SEGPOL","Despesas Administrativas",0,"F",0,0],["d","2026-06",29,"Máquinas e Equipamentos","",0.5,1,"Sem cliente","Deduções de Receita",0,"V",0,0],["d","2026-07",1,"Uniformes","",774,1,"CHARLEVILLE","Deduções de Receita",0,"V",0,0],["d","2026-07",1,"Sistema de Gerenciamento","",0.5,1,"Sem cliente","",0,"V",0,0],["d","2026-07",1,"Sistema de Gerenciamento","",1886.64,1,"TEKNOLINK SJC","",0,"V",0,0],["d","2026-07",1,"Sistema de Gerenciamento","",0.5,1,"Sem cliente","",0,"V",0,0],["d","2026-07",6,"Vale Transporte","",2545.2,1,"CONSORCIO 123","Despesas com Pessoal",0,"F",0,0],["d","2026-07",6,"Salários PIX","",0.99,1,"Sem cliente","Despesas com Pessoal",0,"F",0,0],["d","2026-07",7,"Salários","",1311.8,1,"ANDRE LUIZ ISIDORO DA SILVA","Despesas com Pessoal",0,"F",0,0],["d","2026-07",7,"Salários PIX","",3.99,1,"Sem cliente","Despesas com Pessoal",0,"F",0,0],["d","2026-07",7,"Salários PIX","",0.99,1,"Sem cliente","Despesas com Pessoal",0,"F",0,0],["d","2026-07",7,"Salários PIX","",3114.89,1,"LEONARDO MARTINS ALVES GALDEANO","Despesas com Pessoal",0,"F",0,0],["d","2026-07",7,"Salários PIX","",0.5,1,"Sem cliente","Despesas com Pessoal",0,"F",0,0],["d","2026-07",7,"Salários PIX","",3541.63,1,"MARIA ANGELICA DOS REIS","Despesas com Pessoal",0,"F",0,0],["d","2026-07",7,"Salários PIX","",0.5,1,"Sem cliente","Despesas com Pessoal",0,"F",0,0],["d","2026-07",7,"Salários","",1148.4,1,"MATEUS HENRIQUE DE FARIA","Despesas com Pessoal",0,"F",0,0],["d","2026-07",7,"Salários PIX","",2029.09,1,"MIGUEL ZINANI DE OLIVEIRA","Despesas com Pessoal",0,"F",0,0],["d","2026-07",7,"Salários PIX","",0.5,1,"Sem cliente","Despesas com Pessoal",0,"F",0,0],["d","2026-07",7,"Salários PIX","",3.99,1,"Sem cliente","Despesas com Pessoal",0,"F",0,0],["d","2026-07",7,"Salários PIX","",2855.49,1,"ROBSON LUIZ DOMINGOS DA SILVA","Despesas com Pessoal",0,"F",0,0],["d","2026-07",7,"Salários PIX","",0.5,1,"Sem cliente","Despesas com Pessoal",0,"F",0,0],["d","2026-07",7,"Salários PIX","",1361.84,1,"SIDNEIA MORENA DE SOUZA","Despesas com Pessoal",0,"F",0,0],["d","2026-07",7,"Salários PIX","",0.5,1,"Sem cliente","Despesas com Pessoal",0,"F",0,0],["d","2026-07",7,"Salários PIX","",697.71,1,"YAN OLIVEIRA PRADO DE ALMEIDA","Despesas com Pessoal",0,"F",0,0],["d","2026-07",7,"Salários PIX","",0.5,1,"Sem cliente","Despesas com Pessoal",0,"F",0,0],["d","2026-07",7,"Salários PIX","",2014.35,1,"AMANDA MAYUMI KOBAYASHI","Despesas com Pessoal",0,"F",0,0],["d","2026-07",7,"Salários PIX","",828.43,1,"JOSIANA DA SILVA","Despesas com Pessoal",0,"F",0,0],["d","2026-07",7,"Salários PIX","",1008.58,1,"FABRICIO RAMOS DOS SANTOS","Despesas com Pessoal",0,"F",0,0],["d","2026-07",7,"Salários PIX","",0.5,1,"Sem cliente","Despesas com Pessoal",0,"F",0,0],["d","2026-07",7,"Salários PIX","",0.5,1,"Sem cliente","Despesas com Pessoal",0,"F",0,0],["d","2026-07",7,"Salários PIX","",0.5,1,"Sem cliente","Despesas com Pessoal",0,"F",0,0],["d","2026-07",7,"Salários PIX","",0.5,1,"Sem cliente","Despesas com Pessoal",0,"F",0,0],["d","2026-07",7,"Salários PIX","",992.13,1,"JONATHAN HENRIQUE DA SILVA SANTOS","Despesas com Pessoal",0,"F",0,0],["d","2026-07",7,"Salários","",1311.8,1,"ANDRE LUIZ ISIDORO DA SILVA","Despesas com Pessoal",0,"F",0,0],["d","2026-07",7,"Salários PIX","",3.99,1,"Sem cliente","Despesas com Pessoal",0,"F",0,0],["d","2026-07",7,"Salários","",1148.4,1,"MATEUS HENRIQUE DE FARIA","Despesas com Pessoal",0,"F",0,0],["d","2026-07",7,"Salários PIX","",0.5,1,"Sem cliente","Despesas com Pessoal",0,"F",0,0],["d","2026-07",7,"Contabilidade","",1000,1,"AGYLIS CONTABILIDADE LTDA","Despesas Administrativas",0,"F",0,0],["d","2026-07",7,"Contabilidade","",0.5,1,"Sem cliente","Despesas Administrativas",0,"F",0,0],["d","2026-07",7,"Salários","",1311.8,1,"ANDRE LUIZ ISIDORO DA SILVA","Despesas com Pessoal",0,"F",0,0],["d","2026-07",7,"Pensão Alimentícia","",0.5,1,"Sem cliente","Despesas com Pessoal",0,"F",0,0],["d","2026-07",7,"Salários PIX","",71.79,1,"SIA FACILITIES","Despesas com Pessoal",0,"F",0,0],["d","2026-07",7,"Exames Admissional/Demissional","",0.5,1,"Sem cliente","",0,"F",0,0],["d","2026-07",7,"Certificado Digital","",250,1,"54.292.368 ROGERIO DE SOUSA DOS SANTOS","",0,"V",0,0],["d","2026-07",7,"Exames Admissional/Demissional","",0.5,1,"Sem cliente","",0,"F",0,0],["d","2026-07",7,"VR e VT Dinheiro..","",340.2,1,"LEONARDO MARTINS ALVES GALDEANO","Despesas com Pessoal",0,"F",0,0],["d","2026-07",7,"Central de monitoramento","",0.5,1,"Sem cliente","Deduções de Receita",0,"V",0,0],["d","2026-07",7,"VR e VT Dinheiro..","",340.2,1,"LEANDRO RIBEIRO CAVALCANTE DE SOUZA LIMA","Despesas com Pessoal",0,"F",0,0],["d","2026-07",7,"Central de monitoramento","",0.5,1,"Sem cliente","Deduções de Receita",0,"V",0,0],["d","2026-07",7,"VR e VT Dinheiro..","",340.2,1,"ROBSON LUIZ DOMINGOS DA SILVA","Despesas com Pessoal",0,"F",0,0],["d","2026-07",7,"Central de monitoramento","",0.5,1,"Sem cliente","Deduções de Receita",0,"V",0,0],["d","2026-07",7,"Central de monitoramento","",3179.19,1,"ECONDOS","Deduções de Receita",0,"V",0,0],["d","2026-07",7,"Hospedagem Hotel","",283,1,"AIRBNB PLATAFORMA DIGITAL LTDA","",0,"V",0,0],["d","2026-07",7,"Central de monitoramento","",0.5,1,"Sem cliente","Deduções de Receita",0,"V",0,0],["d","2026-07",7,"Central de monitoramento","",0.5,1,"Sem cliente","Deduções de Receita",0,"V",0,0],["d","2026-07",7,"VR e VT Dinheiro..","",277.2,1,"MARIA ANGELICA DOS REIS","Despesas com Pessoal",0,"F",0,0],["d","2026-07",7,"Sistema de Gerenciamento","",188.29,1,"MONI SOFTWARE LTDA","",0,"V",0,0],["d","2026-07",8,"Uber","",200,1,"UBER DO BRASIL TECNOLOGIA LTDA.","",0,"V",0,0],["d","2026-07",8,"Contribuição Sindical Odonto","",0.5,1,"Sem cliente","",0,"F",0,0],["d","2026-07",10,"Sistema de Gerenciamento","",0.99,1,"Sem cliente","",0,"V",0,0]];

const REF_YEAR = 2026;
const AVAILABLE_YEARS = [2029,2028,2027,2026,2025];

// aggregateTx: recomputa MONTH_DATA, KPIS, top categorias/clientes/fornecedores
// e EXTRATO a partir de uma lista filtrada de transacoes. Chamada pelas Pages
// quando drilldown ou statusFilter estao ativos.
function aggregateTx(txList, year) {
  year = year || REF_YEAR;
  const months = ["janeiro","fevereiro","março","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"];
  const MONTH_DATA = months.map(m => ({ m, receita: 0, despesa: 0, receita_bruta: 0, impostos: 0 }));
  const recCat = new Map(), despCat = new Map();
  const recCli = new Map(), despForn = new Map();
  const extratoArr = [];
  const extratoRecArr = [], extratoDespArr = [];
  let totalReceita = 0, totalDespesa = 0;

  for (const row of txList) {
    const [kind, mes, dia, categoria, cliente, valor, realizado, fornecedor, cc, _si, _pe, valorTitulo, impostosTx] = row;
    if (!mes) continue;
    const ymonth = mes.slice(0,4);
    if (Number(ymonth) !== year) continue;
    const mIdx = parseInt(mes.slice(5,7), 10) - 1;
    if (mIdx < 0 || mIdx > 11) continue;
    if (kind === 'r') {
      MONTH_DATA[mIdx].receita += valor;
      MONTH_DATA[mIdx].receita_bruta += (valorTitulo || valor);
      MONTH_DATA[mIdx].impostos += (impostosTx || 0);
      totalReceita += valor;
      recCat.set(categoria, (recCat.get(categoria) || 0) + valor);
      if (cliente) recCli.set(cliente, (recCli.get(cliente) || 0) + valor);
    } else {
      MONTH_DATA[mIdx].despesa += valor;
      MONTH_DATA[mIdx].impostos += (impostosTx || 0);
      totalDespesa += valor;
      despCat.set(categoria, (despCat.get(categoria) || 0) + valor);
      if (fornecedor) despForn.set(fornecedor, (despForn.get(fornecedor) || 0) + valor);
    }
    // Extrato compacto pra tabela (renomeado pra extRow porque outer for já usa 'row')
    const dataStr = String(dia).padStart(2,'0') + '/' + mes.slice(5,7) + '/' + mes.slice(0,4);
    const extRow = [dataStr, cc || 'Operações', categoria, kind === 'r' ? cliente : fornecedor, kind === 'r' ? valor : -valor, realizado ? 'PAGO' : ''];
    extratoArr.push(extRow);
    if (kind === 'r') extratoRecArr.push(extRow); else extratoDespArr.push(extRow);
  }

  // sort por data desc (string DD/MM/YYYY → Date) — aplica nos 3 arrays
  const sortByDateDesc = (a, b) => {
    const [da,ma,ya] = a[0].split('/').map(Number);
    const [db,mb,yb] = b[0].split('/').map(Number);
    return new Date(yb,mb-1,db) - new Date(ya,ma-1,da);
  };
  extratoArr.sort(sortByDateDesc);
  extratoRecArr.sort(sortByDateDesc);
  extratoDespArr.sort(sortByDateDesc);

  const topN = (mp, n) => Array.from(mp.entries()).map(([name,value]) => ({name,value})).sort((a,b)=>b.value-a.value).slice(0,n);
  const VALOR_LIQUIDO = totalReceita - totalDespesa;
  const MARGEM_LIQUIDA = totalReceita > 0 ? (VALOR_LIQUIDO / totalReceita) * 100 : 0;

  return {
    MONTH_DATA,
    RECEITA_CATEGORIAS: topN(recCat, 12),
    DESPESA_CATEGORIAS: topN(despCat, 12),
    RECEITA_CLIENTES: topN(recCli, 12),
    DESPESA_FORNECEDORES: topN(despForn, 12),
    EXTRATO: extratoArr.slice(0, 200),
    EXTRATO_RECEITAS: extratoRecArr.slice(0, 200),
    EXTRATO_DESPESAS: extratoDespArr.slice(0, 200),
    KPIS: {
      TOTAL_RECEITA: totalReceita,
      TOTAL_DESPESA: totalDespesa,
      VALOR_LIQUIDO,
      MARGEM_LIQUIDA,
      VALOR_LIQ_SERIES: MONTH_DATA.map(m => m.receita - m.despesa),
    },
  };
}

// applyDrilldown: filtra ALL_TX baseado em statusFilter + drilldown.
// statusFilter: 'realizado' | 'a_pagar_receber' | 'tudo'
// drilldown: null | { type: 'mes'|'categoria'|'cliente'|'fornecedor', value: ... }
function filterTx(allTx, statusFilter, drilldown) {
  let out = allTx;
  if (statusFilter === 'realizado') out = out.filter(r => r[6] === 1);
  else if (statusFilter === 'a_pagar_receber') out = out.filter(r => r[6] === 0);
  if (drilldown) {
    if (drilldown.type === 'mes') out = out.filter(r => r[1] === drilldown.value);
    else if (drilldown.type === 'categoria') out = out.filter(r => r[3] === drilldown.value);
    else if (drilldown.type === 'cliente') out = out.filter(r => r[0] === 'r' && r[4] === drilldown.value);
    else if (drilldown.type === 'fornecedor') out = out.filter(r => r[0] === 'd' && r[7] === drilldown.value);
    else if (drilldown.type === 'dia') out = out.filter(r => r[2] === drilldown.value);
  }
  return out;
}
function filterTxSemInv(out) { return out.filter(r => !r[9]); }

// Sintetiza um BIT "flat" baseado no filtro escolhido (window.BIT_FILTER).
// Default: 'realizado' (PAGO).
function _makeBit(filter) {
  const seg = SEGMENTS[filter] || SEGMENTS.realizado;
  const K = seg.KPIS;
  const indicadores = {
    TOTAL_RECEITA: K.TOTAL_RECEITA,
    TOTAL_DESPESA: K.TOTAL_DESPESA,
    VALOR_LIQUIDO: K.VALOR_LIQUIDO,
    MARGEM_LIQUIDA: K.MARGEM_LIQUIDA,
    IMPOSTOS: 0,
    EBITDA: K.VALOR_LIQUIDO,
    RESULTADO_OPERACIONAL: K.VALOR_LIQUIDO,
    CAPEX: 0,
    MARGEM_CONTRIB: K.MARGEM_LIQUIDA,
    EBITDA_PCT: K.MARGEM_LIQUIDA,
    IMPOSTOS_PCT: 0,
  };
  return Object.assign({
    META, POSICAO_CAIXA, COMPOSICAO_DESPESA,
    MONTHS, MONTHS_FULL, fmt, fmtK, fmtPct,
    SEGMENTS,
    MONTH_DATA: seg.MONTH_DATA,
    RECEITA_CATEGORIAS: seg.RECEITA_CATEGORIAS,
    DESPESA_CATEGORIAS: seg.DESPESA_CATEGORIAS,
    RECEITA_CLIENTES: seg.RECEITA_CLIENTES,
    DESPESA_FORNECEDORES: seg.DESPESA_FORNECEDORES,
    EXTRATO: seg.EXTRATO,
    DIAS: Array.from({ length: 31 }, (_, i) => i + 1),
    RECEITA_DIA: seg.RECEITA_DIA,
    DESPESA_DIA: seg.DESPESA_DIA,
    SALDOS_MES: seg.SALDOS_MES,
    VALOR_LIQ_SERIES: K.VALOR_LIQ_SERIES,
    FLUXO_RECEITA: seg.FLUXO_RECEITA,
    FLUXO_DESPESA: seg.FLUXO_DESPESA,
    COMP_DATA: seg.COMP_DATA,
    RECDESP_AREA: seg.MONTH_DATA.map(m => ({ m: m.m.slice(0,3), receita: m.receita, despesa: m.despesa })),
  }, indicadores);
}

window.BIT = _makeBit(window.BIT_FILTER || 'realizado');
window._makeBit = _makeBit;
window.BIT_SEGMENTS = SEGMENTS;
window.BIT_META = META;
window.ALL_TX = ALL_TX;
window.REF_YEAR = REF_YEAR;
window.AVAILABLE_YEARS = AVAILABLE_YEARS;
window.aggregateTx = aggregateTx;
window.filterTx = filterTx;
// Listas únicas de natureza DRE e categoria extraídas de ALL_TX
window.ALL_NATUREZAS = (function () {
  const s = new Set();
  for (const r of ALL_TX) { if (r[8]) s.add(r[8]); }
  return Array.from(s).sort();
})();
window.ALL_CATEGORIAS = (function () {
  const s = new Set();
  for (const r of ALL_TX) { if (r[3]) s.add(r[3]); }
  return Array.from(s).sort();
})();
window.FLUXO_PROJETADO = {"totais":[],"contas":[],"rows":[],"updatedAt":null,"error":"execute fetch-saldos.cjs to generate"};
window.BI_CMV = {"anos":[],"anoRef":2026,"porAno":{}};
// getBit: SEMPRE recomputa via recomputeBit (sem cache de window.BIT).
// Evita lag no toggle Previsto/Realizado e suporta year/month arbitrario.
// month: 0 = ano completo, 1-12 = mes especifico.
window.getBit = function (statusFilter, drilldown, year, month, semInv, extraFilters) {
  const sf = statusFilter || window.BIT_FILTER || 'realizado';
  const y = year || window.REF_YEAR;
  let dd = drilldown;
  if (!dd && month && month >= 1 && month <= 12) {
    const mm = String(month).padStart(2, '0');
    const ym = y + '-' + mm;
    dd = { type: 'mes', value: ym, label: ym };
  }
  return window.recomputeBit(sf, dd, y, semInv, extraFilters);
};
// Cross-filter helper: combina statusFilter + drilldown + semInv + extraFilters e retorna BIT-like
// com KPIs/charts/extrato recalculados em ~10ms (17k rows).
// extraFilters: { centroCusto: string[], categoria: string[] } — arrays vazios = sem filtro
window.recomputeBit = function (statusFilter, drilldown, year, semInv, extraFilters) {
  let filtered = filterTx(ALL_TX, statusFilter, drilldown);
  if (semInv) filtered = filterTxSemInv(filtered);
  if (extraFilters) {
    const cc = extraFilters.centroCusto;
    const cat = extraFilters.categoria;
    if (cc && cc.length > 0) {
      const ccSet = new Set(cc);
      filtered = filtered.filter(r => ccSet.has(r[8] || ''));
    }
    if (cat && cat.length > 0) {
      const catSet = new Set(cat);
      filtered = filtered.filter(r => catSet.has(r[3]));
    }
  }
  const agg = aggregateTx(filtered, year || REF_YEAR);
  // Mescla com BIT base pra preservar META, helpers (fmt, fmtK), MONTHS etc.
  const base = window.BIT || {};
  return Object.assign({}, base, agg, {
    TOTAL_RECEITA: agg.KPIS.TOTAL_RECEITA,
    TOTAL_DESPESA: agg.KPIS.TOTAL_DESPESA,
    VALOR_LIQUIDO: agg.KPIS.VALOR_LIQUIDO,
    MARGEM_LIQUIDA: agg.KPIS.MARGEM_LIQUIDA,
  });
};
// computePE: indicadores de Ponto de Equilibrio (break-even) sob o MESMO contexto
// de filtro do resto da Visao Geral (statusFilter + drilldown + ano/mes + semInv),
// pra a receita aqui bater com BIT.TOTAL_RECEITA. Espelha o DAX do cliente:
//   Margem de Contribuicao % = (Receita - Custos Variaveis) / Receita
//   Ponto de Equilibrio      = Custos Fixos / Margem de Contribuicao %
//   Margem de Seguranca %     = (Receita - Ponto de Equilibrio) / Receita
// Custos Fixos/Variaveis sao classificados em build-data via categoria_superior (row[10]).
window.computePE = function (statusFilter, drilldown, year, month, semInv, extraFilters) {
  const sf = statusFilter || window.BIT_FILTER || 'realizado';
  const y = year || window.REF_YEAR;
  let dd = drilldown;
  if (!dd && month && month >= 1 && month <= 12) {
    const mm = String(month).padStart(2, '0');
    dd = { type: 'mes', value: y + '-' + mm, label: y + '-' + mm };
  }
  let filtered = filterTx(ALL_TX, sf, dd);
  if (semInv) filtered = filterTxSemInv(filtered);
  if (extraFilters) {
    const cc = extraFilters.centroCusto;
    const cat = extraFilters.categoria;
    if (cc && cc.length > 0) { const s = new Set(cc); filtered = filtered.filter(r => s.has(r[8] || '')); }
    if (cat && cat.length > 0) { const s = new Set(cat); filtered = filtered.filter(r => s.has(r[3])); }
  }
  let receita = 0, custosFixos = 0, custosVariaveis = 0;
  for (let i = 0; i < filtered.length; i++) {
    const row = filtered[i];
    if (!row[1] || Number(row[1].slice(0, 4)) !== y) continue;
    if (row[0] === 'r') { receita += row[5]; continue; }
    if (row[10] === 'F') custosFixos += row[5];
    else if (row[10] === 'V') custosVariaveis += row[5];
  }
  const margemContrib = receita > 0 ? (receita - custosVariaveis) / receita : null;
  const pontoEquilibrio = (margemContrib != null && margemContrib > 0) ? custosFixos / margemContrib : null;
  const margemSeguranca = (pontoEquilibrio != null && receita > 0) ? (receita - pontoEquilibrio) / receita : null;
  return {
    receita: receita,
    custosFixos: custosFixos,
    custosVariaveis: custosVariaveis,
    margemContrib: margemContrib,
    pontoEquilibrio: pontoEquilibrio,
    margemSeguranca: margemSeguranca,
  };
};
