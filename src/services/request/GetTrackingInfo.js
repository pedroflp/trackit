import api from "../api";

export const getTrackingInfo = async (code) => {
  const response = await api.get('', {
    params: {
      user: process.env.REACT_APP_USER_KEY,
      token: process.env.REACT_APP_API_KEY,
      codigo: code
    }
  });

  return response;
}

export const getTrackingMoc = () => {
  return {
    data: {
      "codigo": "LX002249507BR",
      "servico": "PAC - Encomenda Econômica",
      "host": "dw",
      "quantidade": 12,
      "eventos": [
        {
          "data": "24/10/2019",
          "hora": "10:40",
          "local": "CURITIBA/PR",
          "status": "Devolução autorizada pela Receita Federal",
          "subStatus": [
            "Registrado por CENTRO INTERNACIONAL PR - CURITIBA/PR"
          ]
        },
        {
          "data": "11/09/2019",
          "hora": "00:00",
          "local": "CURITIBA/PR",
          "status": "Pagamento não efetuado no prazo",
          "subStatus": [
            "Objeto em análise de destinação"
          ]
        },
        {
          "data": "15/08/2019",
          "hora": "13:37",
          "local": "CURITIBA/PR",
          "status": "Encaminhado para fiscalização aduaneira",
          "subStatus": [
            "Registrado por CENTRO INTERNACIONAL PR - CURITIBA/PR"
          ]
        },
        {
          "data": "13/08/2019",
          "hora": "16:53",
          "local": "CURITIBA/PR",
          "status": "Encaminhado para fiscalização aduaneira",
          "subStatus": [
            "Registrado por CENTRO INTERNACIONAL PR - CURITIBA/PR"
          ]
        },
        {
          "data": "13/08/2019",
          "hora": "16:13",
          "local": "CURITIBA/PR",
          "status": "Encaminhado para fiscalização aduaneira",
          "subStatus": [
            "Registrado por CENTRO INTERNACIONAL PR - CURITIBA/PR"
          ]
        },
        {
          "data": "13/08/2019",
          "hora": "14:34",
          "local": "CURITIBA/PR",
          "status": "Encaminhado para fiscalização aduaneira",
          "subStatus": [
            "Registrado por CENTRO INTERNACIONAL PR - CURITIBA/PR"
          ]
        },
        {
          "data": "09/08/2019",
          "hora": "18:11",
          "local": "CURITIBA/PR",
          "status": "Aguardando pagamento",
          "subStatus": [
            "<span class=\"minhasImportacoes\">Acesse o ambiente <a href=\"https://www.correios.com.br/encomendas-logistica/minhas-importacoes/minhas-importacoes\" target=\"_blank\">Minhas Importações</a></span>"
          ]
        },
        {
          "data": "09/08/2019",
          "hora": "15:23",
          "local": "CURITIBA/PR",
          "status": "Encaminhado para fiscalização aduaneira",
          "subStatus": [
            "Registrado por CENTRO INTERNACIONAL PR - CURITIBA/PR"
          ]
        },
        {
          "data": "09/08/2019",
          "hora": "12:22",
          "local": "CURITIBA/PR",
          "status": "Objeto encaminhado",
          "subStatus": [
            "de CENTRO INTERNACIONAL PR - CURITIBA/PR para Fiscalizacao Aduaneira - /BR"
          ]
        },
        {
          "data": "09/08/2019",
          "hora": "12:22",
          "local": "CURITIBA/PR",
          "status": "Encaminhado para fiscalização aduaneira",
          "subStatus": [
            "Registrado por CENTRO INTERNACIONAL PR - CURITIBA/PR"
          ]
        },
        {
          "data": "31/07/2019",
          "hora": "15:10",
          "local": "CURITIBA/PR",
          "status": "Informações prestadas pelo cliente em análise",
          "subStatus": [
            "Registrado por CENTRO INTERNACIONAL PR - CURITIBA/PR"
          ]
        },
        {
          "data": "31/07/2019",
          "hora": "14:15",
          "local": "CURITIBA/PR",
          "status": "Faltam informações. Sua ação é necessária",
          "subStatus": [
            "<span class=\"minhasImportacoes\">Acesse o ambiente <a href=\"https://www.correios.com.br/encomendas-logistica/minhas-importacoes/minhas-importacoes\" target=\"_blank\">Minhas Importações</a></span>"
          ]
        }
      ],
    }
  }
}