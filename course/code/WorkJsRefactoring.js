let response = {
  contract: {
    funding: {
      rateCode: "PRE",
      type: "COMPOSTO",
      cost: 0,
      date: "2021-05-21",
      indexPercentage: 100.0,
      externalId: null,
      currency: "DOLAR",
    },
    operation: {
      branch: "030",
      currency: "DOLAR",
      financesIOF: null,
      debitsIOF: null,
      conterpartyCode: "1000100",
      portability: false,
      portfolioCode: "999999",
      bacenRefNumber: "154566543",
      sicorRegistrationDate: "2021-05-21",
      externalSourceSystem: "BNP",
      ventures: [
        {
          percentage: 70,
          code: 1,
          sequence: 1,
        },
        {
          percentage: 30,
          code: 2,
          sequence: 2,
        },
      ],
      commitment: {
        number: "cnbb97217",
        code: "",
        productCode: "CCB789",
        amount: 10000,
        valueDate: "2021-05-21",
        maturityDate: "2022-05-23",
        localFacilityId: "",
        globalFacilityId: "1233",
      },
      loan: {
        number: "BPM70044",
        code: "",
        productCode: "AWS02",
        amount: 10000,
        valueDate: "2021-05-21",
        maturityDate: "2022-05-23",
        interestRate: 2.75,
        rateCode: "COI",
        percentageRate: 10.1,
        spotRate: 5.774,
        schedules: [
          {
            type: "principal&interest",
            amount: 10000,
            date: "2022-05-23",
            frequency: "D",
          },
        ],
      },
      account: {
        currentAccountRegistered: false,
        bank: "999",
        agency: "99999",
        account: "000999-9",
        releaseType: "AUT",
      },
    },
  },
  callbackQueueName: "IL.DB.R",
  customProperties: '{"teste1":"valor teste 1"}',
};

console.log(response);

//variables Globals
var local = {
  primeiraConsulta: true,
  valorPrincipal: 12345.56,
  flagSimples: true,
  modelContract: {},
  contract: {
    operation: {},
  },
};

var modelContract = {
  dataEmissaoCCB: "2024/01/03",
  dataModelContract: "2024/01/04",
  dataVencimentocontrato: "2024/12/02",
  numeroCCB: "CCC/Number/012024",
  dataCotacaoMoeda: "2023/01/02",
  descricaoFormaFinanciamento: "CG",
  moeda: "REAL",
  boletaFuncao: {
    codigoIndexadorRate: 123,
    taxa: 5.32,
    prtgIndxTax: 1.45,
    commitmentCode: "0001/2024BF",
    flagFinanciaIOC: true,
    flagDebitaIOC: true,
    numeroProposta: "4568",
  },
  client: {
    codInstitucional: "007",
  },
  dataRcr: {
    numRefCOR: 799,
    registerBCM: "2023/01/03",
  },
  linhaCreditoFormalizada: {
    seq_sub_limite_gem: 123456,
    cod_Global_Facility_Id: "codGlobal-n01",
  },
  esquemaPagamento: [],
  percentualOrcamentos: [
    { percentual: 10, codEmpreendimento: "412", ordem: "789" },
    { percentual: 11, codEmpreendimento: "444", ordem: "999" },
  ],
};

var contract = {
  funding: {},
  operation: {
    commitment: {},
  },
};

/// Funding :
checkFundingType(contract, local.flagSimples);
checkPaymentType(modelContract, contract);
loadcontract(modelContract, contract);

function loadcontract(modelContract, contract) {
  var arrFunding = ["rateCode", "cost", "indexPercentage", "externalId"];
  var arrCompare = ["codigoIndexadorRate", "taxa", "prtgIndxTax", null];
  arrFunding.map(function (arr, indx) {
    contract.funding[arr] = modelContract.boletaFuncao[arrCompare[indx]];
  });
  contract.funding.date =
    modelContract.dataCotacaoMoeda !== null
      ? modelContract.dataCotacaoMoeda
      : null;
}

function checkFundingType(contract, flagSimples) {
  contract.funding.type = flagSimples ? "SIMPLES" : "EXP";
}

function checkPaymentType(modelContract, contract) {
  var arr = ["RR27", "CPG", "CCE", "CCEC", "NCE", "NCEC"];
  var checkCurrency = modelContract.moeda === "REAL";
  var checkFormat =
    checkCurrency &&
    arr.some(function (type) {
      return type === modelContract.descricaoFormaFinanciamento;
    });
  contract.funding.currency = checkFormat ? "REAL" : "DOLAR"; //One Linear
}

// Operation:
loadOperation(modelContract, contract);
checkPaymentType(modelContract, contract);
loadScrRegistartionDat(modelContract, contract);

function loadOperation(modelContract, contract) {
  var arrOpertion = ["fnIOF", "debIOF"];
  var arrCompare = ["flagFnIOC", "flagDebIOC"];
  arrOpertion.map(function (arr, indx) {
    contract.operation[arr] = modelContract.boletaFuncao[arrCompare[indx]];
  });
  contract.operation["conterpartyCode"] = String(
    modelContract.client.codInstitucional
  );
  contract.operation["branch"] = "";
  contract.operation["portability"] = "N";
  contract.operation["portfolioCode"] = "999999";
  contract.operation["bcnRefNumber"] = modelContract.dataRcr.numRefCOR;
}

function loadScrRegistartionDat(modelContract, contract) {
  if (modelContract.dataRcr.registerBCM.includes("/")) {
    var dateString = modelContract.dataRcr.registerBCM;
    var dateNumber = dateString.split("/");
    contract.operation["scrRegistrationDate"] = String(
      dateNumber[2] + "-" + dateNumber[1] + "-" + dateNumber[0]
    );
  }
}

// commitment:

loadCommitmentData(modelContract, contract);
loadProductCode(modelContract, contract);

function loadCommitmentData(modelContract, contract) {
  contract.operation.commitment = {};
  contract.operation.commitment.number = modelContract.numeroCCB;
  contract.operation.commitment.code =
    modelContract.boletaFuncao.commitmentCode;
  contract.operation.commitment.amount = local.valorPrincipal;
  contract.operation.commitment.valueDate =
    modelContract.dataEmissaoCCB || modelContract.dataEmissaoCCB; //.format("yyyy-MM-dd");
  contract.operation.commitment.maturityDate =
    modelContract.dataVencimentomodelContract ||
    modelContract.dataVencimentomodelContract; //.format("yyyy-MM-dd");
  contract.operation.commitment.localFacilityId = String(
    modelContract.linhaCreditoFormalizada.seq_sub_limite_gem
  ); // validar"????";
  contract.operation.commitment.globalFacilityId =
    modelContract.linhaCreditoFormalizada.cod_Global_Facility_Id;
}

function loadProductCode(modelContract, contract) {
  var arrCedula = ["CCE", "CCEC"];
  var arrNota = ["NCE", "NCEC"];
  if (
    arrCedula.some(function (type) {
      return type === modelContract.descricaoFormaFinanciamento;
    })
  ) {
    contract.operation.commitment.productCode = "CCE0";
    return;
  }

  if (
    arrNota.some(function (type) {
      return type === modelContract.descricaoFormaFinanciamento;
    })
  ) {
    contract.operation.commitment.productCode = "NCE0";
    return;
  }

  contract.operation.commitment.productCode = "CCB0";
}

// Loan:
loadLoan(contract, modelContract);

function loadLoan(contract, modelContract) {
  contract.operation.loan = {};
  contract.operation.loan.number = modelContract.boletaFuncao.numeroProposta;
  contract.operation.externalSourceSystem = "WMS";
  contract.operation.loan.code =
    local.primeiraConsulta && modelContract.boletaFuncao.loanCode != null
      ? null
      : modelContract.boletaFuncao.loanCode;

  contract.operation.loan.productCode =
    modelContract.boletaFuncao.codigoProdutoFuncao;
  contract.operation.loan.amount = modelContract.valormodelContract;
  contract.operation.loan.interestRate = modelContract.boletaFuncao.taxaJuros;
  contract.operation.loan.rateCode = contract.funding.rateCode;
  contract.operation.loan.percentageRate =
    modelContract.boletaFuncao.prtgIndxTax;
  contract.operation.loan.valueDate =
    modelContract.datamodelContract || modelContract.datamodelContract; //.format("yyyy-MM-dd");
  contract.operation.loan.maturityDate =
    modelContract.dataVencimentomodelContract ||
    modelContract.dataVencimentomodelContract; //.format("yyyy-MM-dd");

  contract.operation.loan.spotRate = null;
  contract.operation.loan.spotRate =
    modelContract.moeda !== "REAL"
      ? modelContract.valorCotacaoMoeda
      : contract.operation.loan.spotRate;
}

//Schedule:
contract.operation.loan.schedules = [];
var TYPE_INSTALLMENT = "J";
for (var i = 0; i < modelContract.esquemaPagamento.length; i++) {
  var schedules = {};
  schedules.amount = modelContract.esquemaPagamento[i].principal;
  schedules.frequency = "D";
  schedules.type =
    modelContract.esquemaPagamento[i].tipoParcela !== TYPE_INSTALLMENT
      ? "principal&interest"
      : "interest";
  schedules.date =
    modelContract.esquemaPagamento[i].dataVencimento != null
      ? modelContract.esquemaPagamento[i].dataVencimento.format("yyyy-MM-dd")
      : schedules.date;

  if (modelContract.esquemaPagamento[i].principal > 0) {
    contract.operation.loan.schedules.insertIntoList(
      contract.operation.loan.schedules.listLength,
      schedules
    );
  }
}

// Ventures:
contract.operation.ventures = [];
for (var i = 0; i < modelContract.percentualOrcamentos.length; i++) {
  contract.operation.ventures[i] = {};
  contract.operation.ventures[i].percentage =
    modelContract.percentualOrcamentos[i].percentual;
  contract.operation.ventures[i].code =
    modelContract.percentualOrcamentos[i].codEmpreendimento;
  contract.operation.ventures[i].sequence = Number(
    modelContract.percentualOrcamentos[i].ordem
  );
}

//Account:
contract.operation.account = {};
contract.operation.account.bank = String(modelContract.codigoBancoLiberacao);
contract.operation.account.agency = modelContract.codigoAgenciaLiberacao;
contract.operation.account.account = modelContract.numeroContaLiberacao;

var EXT = "E";
contract.operation.account.releaseType =
  modelContract.tipoContaLiberacao === EXT ? "EXT" : "AUT";
contract.operation.account.currentAccountRegistered =
  !modelContract.contratoEmContaNaoCadastrada;

local.contract = contract;
console.log("local.contract :", local.contract);
