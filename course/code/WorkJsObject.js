let response = {
  recordCount: 1,
  content: [
    {
      id: 1,
      name: "Jhon",
      birthDate: "1983-12-11",
      system: "021",
      hobby: { reading: true, gaming: false, sport: "football" },
      finance: { rate: null, currency: 720264.35, bankAmount: 544545.0 },
      observations: [{ id: "77ef15b3-dcb0-4fbd", description: "descr Jhon" }],
      process: {
        id: 10,
        date: "2021-04-25T21:30:05",
        users: "user01-branch-05",
        statusWorkFlow: { id: 1, description: "Approved" },
      },
      operation: {
        code: "SXF/2",
        date: "2021-04-25T21:30:05",
        value: 554.23,
        rate: 2.3,
      },
      payments: [
        {
          installmentId: 156335,
          code: "SXF/2",
          paymentSystem: "4",
          value: 150.48,
          date: "2021-04-25T21:30:05",
          statusPayment: { id: 2, description: "Received" },
        },
        {
          installmentId: 216335,
          code: "SXF/2",
          paymentSystem: "4",
          value: 199.08,
          date: "2021-04-25T21:30:05",
          statusPayment: { id: 1, description: "Open" },
        },
      ],
      custom: '{"teste": "valor do teste 1"}',
      transactions: [
        {
          transactionId: 1,
          processId: 10,
          operationCode: "SXF/2",
          transactionsPayments: [
            {
              installmentId: 156335,
              value: 150.48,
              datePayment: "2021-04-30T21:30:05",
              rate: 2.38,
            },
          ],
        },
      ],
    },
    {
      id: 2,
      name: "Sara",
      birthDate: "1987-07-09",
      system: "005",
      hobby: { reading: true, gaming: false, sport: "football" },
      finance: { rate: null, currency: 720264.35, bankAmount: 544545.0 },
      observations: [{ id: "b75cf085-c52d-4336", description: "descr Sara" }],
      process: {
        id: 15,
        date: "2021-04-25T21:30:05",
        users: "user02-branch-05",
        statusWorkFlow: { id: 1, description: "Renegotiated" },
      },
      operation: {
        code: "SXF/4",
        date: "2021-04-25T21:30:05",
        value: 554.23,
        rate: 2.3,
      },
      payments: [
        {
          installments: 155335,
          code: "SXF/4",
          paymentSystem: "4",
          value: 150.48,
          date: "2021-04-25T21:30:05",
          statusPayment: { id: 5, description: "Cancelled" },
        },
        {
          installments: 215335,
          code: "SXF/4",
          paymentSystem: "4",
          value: 199.08,
          date: "2021-04-25T21:30:05",
          statusPayment: { id: 1, description: "Open" },
        },
      ],
      custom: '{"teste": "valor do teste 1"}',
    },
    {
      id: 3,
      name: "Domnic",
      birthDate: "1968-10-12",
      system: "021",
      hobby: { reading: true, gaming: false, sport: "football" },
      finance: { rate: null, currency: 720264.35, bankAmount: 544545.0 },
      observations: [{ id: "6e381cb3-40d9-4838", description: "descr Domnic" }],
      process: {
        id: 20,
        date: "2021-04-25T21:30:05",
        users: "user04-branch-05",
        statusWorkFlow: { id: 1, description: "Approved" },
      },
      operation: {
        code: "SXF/6",
        date: "2021-04-25T21:30:05",
        value: 554.23,
        rate: 2.3,
      },
      payments: [
        {
          installments: 154335,
          code: "SXF/6",
          paymentSystem: "4",
          value: 150.48,
          date: "2021-04-25T21:30:05",
          statusPayment: { id: 1, description: "Open" },
        },
        {
          installments: 214335,
          code: "SXF/6",
          paymentSystem: "4",
          value: 199.08,
          date: "2021-04-25T21:30:05",
          statusPayment: { id: 1, description: "Open" },
        },
      ],
      custom: '{"teste": "valor do teste 1"}',
    },
    {
      id: 4,
      name: "Bravo",
      birthDate: "1991-01-07",
      system: "078",
      hobby: { reading: true, gaming: false, sport: "football" },
      finance: { rate: null, currency: 720264.35, bankAmount: 544545.0 },
      observations: [{ id: "efd351ab-ce2a-441f", description: "descr Bravo" }],
      process: {
        id: 25,
        date: "2021-04-25T21:30:05",
        users: "user07-branch-05",
        statusWorkFlow: { id: 1, description: "Approved" },
      },
      operation: {
        code: "SXF/8",
        date: "2021-04-25T21:30:05",
        value: 554.23,
        rate: 2.3,
      },
      payments: [
        {
          installments: 153335,
          code: "SXF/8",
          paymentSystem: "4",
          value: 150.48,
          date: "2021-04-25T21:30:05",
          statusPayment: { id: 1, description: "Open" },
        },
        {
          installments: 213335,
          code: "SXF/8",
          paymentSystem: "4",
          value: 199.08,
          date: "2021-04-25T21:30:05",
          statusPayment: { id: 5, description: "Cancelled" },
        },
      ],
      custom: '{"teste": "valor do teste 1"}',
    },
    {
      id: 5,
      name: "Steve",
      birthDate: "1999-03-01",
      system: "005",
      hobby: { reading: true, gaming: false, sport: "football" },
      finance: { rate: null, currency: 720264.35, bankAmount: 544545.0 },
      observations: [{ id: "77ef15b3-dcb0-4fbd", description: "descr Jhon" }],
      process: {
        id: 78,
        date: "2021-04-25T21:30:05",
        users: "user99-branch-05",
        statusWorkFlow: { id: 1, description: "Canceled" },
      },
      operation: {
        code: "SXF/10",
        date: "2021-04-25T21:30:05",
        value: 554.23,
        rate: 2.3,
      },
      payments: [
        {
          installments: 152335,
          code: "SXF/10",
          paymentSystem: "4",
          value: 150.48,
          date: "2021-04-25T21:30:05",
          statusPayment: { id: 1, description: "Open" },
        },
        {
          installments: 212335,
          code: "SXF/10",
          paymentSystem: "4",
          value: 199.08,
          date: "2021-04-25T21:30:05",
          statusPayment: { id: 4, description: "Expired" },
        },
      ],
      custom: '{"teste": "valor do teste 1"}',
    },
    {
      id: 6,
      name: "Sara",
      birthDate: "2000-06-15",
      system: "005",
      hobby: { reading: true, gaming: false, sport: "football" },
      finance: { rate: null, currency: 720264.35, bankAmount: 544545.0 },
      observations: [{ id: "b75cf085-c52d-4336", description: "descr Sara" }],
      process: {
        id: 18,
        date: "2021-04-25T21:30:05",
        users: "user09-branch-05",
        statusWorkFlow: { id: 1, description: "Canceled" },
      },
      operation: {
        code: "SXF/12",
        date: "2021-04-25T21:30:05",
        value: 554.23,
        rate: 2.3,
      },
      payments: [
        {
          installments: 151335,
          code: "SXF/12",
          paymentSystem: "4",
          value: 150.48,
          date: "2021-04-25T21:30:05",
          statusPayment: { id: 1, description: "Open" },
        },
        {
          installments: 211335,
          code: "SXF/12",
          paymentSystem: "4",
          value: 199.08,
          date: "2021-04-25T21:30:05",
          statusPayment: { id: 1, description: "Open" },
        },
      ],
      custom: '{"teste": "valor do teste 1"}',
    },
    {
      id: 7,
      name: "Bernard",
      birthDate: "2003-10-18",
      system: "078",
      hobby: { reading: true, gaming: false, sport: "football" },
      finance: { rate: null, currency: 720264.35, bankAmount: 544545.0 },
      observations: [{ id: "6e381cb3-40d9-4838", description: "descr Domnic" }],
      process: {
        id: 40,
        date: "2021-04-25T21:30:05",
        users: "user21-branch-05",
        statusWorkFlow: { id: 1, description: "Approved" },
      },
      operation: {
        code: "SXF/14",
        date: "2021-04-25T21:30:05",
        value: 554.23,
        rate: 2.3,
      },
      payments: [
        {
          installments: 150368,
          code: "SXF/14",
          paymentSystem: "4",
          value: 150.48,
          date: "2021-04-25T21:30:05",
          statusPayment: { id: 1, description: "Open" },
        },
        {
          installments: 210399,
          code: "SXF/14",
          paymentSystem: "4",
          value: 199.08,
          date: "2021-04-25T21:30:05",
          statusPayment: { id: 3, description: "Cancelled" },
        },
      ],
      custom: '{"teste": "valor do teste 1"}',
    },
    {
      id: 8,
      name: "Anne",
      birthDate: "1975-04-21",
      system: "005",
      hobby: { reading: true, gaming: false, sport: "football" },
      finance: { rate: null, currency: 720264.35, bankAmount: 544545.0 },
      observations: [{ id: "efd351ab-ce2a-441f", description: "descr Bravo" }],
      process: {
        id: 55,
        date: "2021-04-25T21:30:05",
        users: "user78-branch-05",
        statusWorkFlow: { id: 1, description: "Canceled" },
      },
      operation: {
        code: "SXF/21",
        date: "2021-04-25T21:30:05",
        value: 554.23,
        rate: 2.3,
      },
      payments: [
        {
          installments: 150335,
          code: "SXF/21",
          paymentSystem: "4",
          value: 150.48,
          date: "2021-04-25T21:30:05",
          statusPayment: { id: 2, description: "Received" },
        },
        {
          installments: 210335,
          code: "SXF/21",
          paymentSystem: "4",
          value: 199.08,
          date: "2021-04-25T21:30:05",
          statusPayment: { id: 2, description: "Received" },
        },
        {
          installments: 210378,
          code: "SXF/21",
          paymentSystem: "4",
          value: 39.15,
          date: "2021-04-25T21:30:05",
          statusPayment: { id: 1, description: "Open" },
        },
      ],
      custom: '{"teste": "valor do teste 8"}',
      transactions: [
        {
          transactionId: 2,
          processId: 55,
          operationCode: "SXF/21",
          transactionsPayments: [
            {
              installmentId: 150335,
              value: 150.48,
              datePayment: "2021-04-30T21:30:05",
              rate: 2.38,
            },
            {
              installmentId: 210335,
              value: 150.48,
              datePayment: "2021-04-30T21:30:05",
              rate: 2.38,
            },
          ],
        },
      ],
    },
  ],
};

var movimentsPerson = response.content; // dimunir sempre uma variavel long para uma simples

function loadForUsingKey() {
  for (var key in movimentsPerson) {
    if (key === "7") {
      //console.log('moviment: ', movimentsPerson[key])
    }
  }
}

/**
 * @description This function load Filter Array Object
 * @author Weder Sousa
 * @param { Function } t => translation function
 * @param { Object } history => contains previous state
 * @param { Function } print => property passed from parent to print
 * @returns { Array } buttons array of Objects
 * @see {@link https://stackoverflow.com/users/5282407/ashish-singh-rawat }
 * @todo Performance optimisation, removing multiple loops
 * * BELOW ARE SOME MORE META DATA, that can be used
 * @argument @async @borrows @class @classdesc @constant
 * @constructor @copyright @default @deprecated @emits
 * @enum @event @example @extends @external @field @file
 * @fileoverview @fires @function @generator @global
 * @hideconstructor @host @ignore @implements @inheritdoc @inner
 * @instance @interface @kind @lends @license @listens @member @memberof
 * @method @mixes @module @name @namespace @override @param @private @property
 * @protected @public @readonly @returns @see @since @static @summary @template
 * @this @throws @tutorial @type @typedef @var @variation @version @virtual
 * @yields
 **/
function loadFilterArrayObject() {
  var search = 1;
  obj = movimentsPerson.filter(function (obj) {
    return obj["id"] == search;
  });
  obj[0].name = "Ander";
  return obj;
}
var person = loadFilterArrayObject();
//console.log("person",person) ;

movimentsPerson.forEach(readMovimentsPerson);
function readMovimentsPerson(persons) {
  //console.log('read: ', persons)
}

/**
 * @description This function This function aims to add up all payment amounts made by all customers
 * @author Weder Sousa
 * @param { Object } history => contains person
 * @param { Function } print => property passed from parent to print using reduce
 * @returns { sum }
 **/
var sum = movimentsPerson.reduce(movimentPaymentReduce, 0);
function movimentPaymentReduce(total, obj) {
  return Number(total) + Number(sumPayments(obj["payments"]));
}
//console.log('sum:', sum)

function sumPayments(payments) {
  var sumValue = 0;
  payments.map(function (pay) {
    sumValue += Number(pay["value"]);
  });
  return sumValue;
}
///---------------------------------------------------------------------------------------------------------

/**
 * @description This function search all person statusWorkflow mode Approved
 * @author Weder Sousa
 * @param { Object } history => contains person
 * @param { Function } print => property passed from parent to print using every
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every }
 * @returns { true or false }
 **/

var allStatusWorkflowApproved = false;
var statusWorkflow = "Approved";
allStatusWorkflowApproved = movimentsPerson.every(checkStatusWorkflow);

function checkStatusWorkflow(person) {
  return person["process"]["statusWorkFlow"]["description"] === statusWorkflow;
}

//console.log('allStatusWorkflowApproved:', allStatusWorkflowApproved)
///---------------------------------------------------------------------------------------------------------

/**
 * @description This function search one person statusWorkflow mode Approved
 * @author Weder Sousa
 * @param { Object } history => contains person
 * @param { Function } print => property passed from parent to print using some
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some }
 * @returns { true or false }
 **/
var oneStatusWorkflowApproved = false;
var statusWorkflow = "Approved";
oneStatusWorkflowApproved = movimentsPerson.some(checkStatusWorkflow);

function checkStatusWorkflow(person) {
  return person["process"]["statusWorkFlow"]["description"] === statusWorkflow;
}

// console.log('oneStatusWorkflowApproved:', oneStatusWorkflowApproved)

///---------------------------------------------------------------------------------------------------------

/**
 * @description This function search person name  equals nameSearch
 * @author Weder Sousa
 * @param { Object } history => contains person
 * @param { Function } print => property passed from parent to print using some
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf}
 * @returns { -1 case not found , case found return number }
 **/
// Verdion > 6
var nameSearch = "Sara";
var personIndx = movimentsPerson
  .map((person) => person["name"])
  .indexOf(nameSearch);
//console.log('personIndx', personIndx)

// Verdion > 5
var nameSearch = "Sara";
var personIndx = movimentsPerson
  .map(function (person) {
    return person["name"];
  })
  .indexOf(nameSearch);
// console.log('personIndx : Es5', personIndx)
///---------------------------------------------------------------------------------------------------------

/**
 * @description This function search person name  equals nameSearch case repeat return last found index
 * @author Weder Sousa
 * @param { Object } history => contains person
 * @param { Function } print => property passed from parent to print using some
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf}
 * @returns { -1 case not found , case found return number }
 **/

var nameSearch = "Sara";
var personIndxLast = movimentsPerson
  .map((person) => person["name"])
  .lastIndexOf(nameSearch);
//console.log('personIndxLast', personIndxLast)

// Verdion > 5
var nameSearch = "Sara";
var personIndx = movimentsPerson
  .map(function (person) {
    return person["name"];
  })
  .lastIndexOf(nameSearch);
//console.log('personIndxLast : Es5', personIndx)

///---------------------------------------------------------------------------------------------------------
/**
 * @description The JavaScript function JSON.parse() is used to convert the text into a JavaScript object:
 * @author Weder Sousa
 * @param { Object } history => contains person
 * @param { Function } print => property passed from parent to print using some
 * @returns { -1 case not found , case found return number }
 **/

var objParse = JSON.parse(movimentsPerson[7]["custom"]);
//console.log('objParse', objParse)

///---------------------------------------------------------------------------------------------------------
/**
 * @description The JavaScript function JSON.stringify() is used to convert the object to String :
 * @author Weder Sousa
 * @param { Object } history => contains person
 * @param { Function } print => property passed from parent to print using some
 * @returns { -1 case not found , case found return number }
 **/

var myJSON = JSON.stringify(movimentsPerson[7]);
//console.log('myJSON :', myJSON)

///---------------------------------------------------------------------------------------------------------
// ### Differences between JSON and JavaScript

// @see {@link https://www.freecodecamp.org/news/json-stringify-example-how-to-parse-a-json-object-with-javascript/#:~:text=The%20main%20difference%20between%20a,are%20a%20bit%20more%20flexible. }
/*
  But is this object JSON?
  
  The acronym JSON stands for JavaScript Object Notation in English. From the name of the thing, it seems so...
  
  It seems like it but it isn't. JSON is a data transfer format widely used in AJAX calls between the browser and a server. You're interested in the data, just the data...
  
  A JSON has some restrictions:
  */

// - cannot have functions
// - cannot have comments
// - all text always has double quotes
// - properties always have double quotes

// Attribute creation
// As you may have noticed in the example, in JSON it is necessary to create the properties using double quotes, while in the object only the name is needed.
//obj literal
let object = {
  aProp: "Lorem Ipsum",
};

//JSON
let object2 = {
  aProp: "Lorem Ipsum",
};

// Data Types:
// JSON: Json can store the following values

// String
// Number
// JSON Object
// Vector
// Boolean
// Null

// Object: In addition to the values above, the object has some values that are not valid in JSON

// Literal Object
// Date (in Date format)
// Function
// Undefined

// Os seguintes exemplos não são JSONs válidos
// { 'prop': "propriedade" }
// { "prop": 'propriedade' }

//console.log('typeof JSON.stringify', typeof  JSON.stringify(movimentsPerson[7])); // string
//console.log('typeof ',typeof  movimentsPerson[7]); // string

///--------------------------------------------------------------------------------------------------------

/**
 * @description Create new Array obect contains id, name, birthDate , age all person
 * @author Weder Sousa
 * @param { Object } history => contains person
 * @param { Function } print => property passed from parent to print using some
 * @returns {objecr }
 **/
personAge = [];
movimentsPerson.map(function (person) {
  var objPerson = {
    id: person["id"],
    name: person["name"],
    birthDate: person["birthDate"],
    age: _calculateAge(person["birthDate"]),
  };
  personAge.push(objPerson);
});

function getAge(dateString) {
  var today = new Date();
  var birthDate = new Date(dateString);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

function _calculateAge(birthday) {
  // birthday is a date
  var birthday = new Date(birthday);
  var ageDifMs = Date.now() - birthday.getTime();
  var ageDate = new Date(ageDifMs); // miliseconds from epoch
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

//console.log("personAge :", personAge)

///--------------------------------------------------------------------------------------------------------

/**
 * @description Create new Array objects moviment contains id, name,  object operation  , object process and array payments
 * @author Weder Sousa
 * @param { Object } history => contains person
 * @param { Function } print => property passed from parent to print using some
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf}
 * @returns { object }
 **/
var moviments = [];

function loadMoviments() {
  movimentsPerson.forEach(function (person) {
    createMoviments(person);
  });
}

function createMoviments(person) {
  var moviment = {};
  moviment = {
    id: person["id"],
    name: person["name"],
    process: loadObjectSimple(person, "process"),
    operation: loadObjectSimple(person, "operation"),
    payments: loadInstallments(person, "payments"),
  };
  moviments.push(moviment);
}

function loadObjectSimple(person, type) {
  return person[type];
}

function loadInstallments(person, type) {
  return person[type];
}

loadMoviments();
console.log("moviments ", moviments[0]);

///--------------------------------------------------------------------------------------------------------

/**
 * @description count system equals 005 and transactions
 * @author Weder Sousa
 * @param { Object } history => contains person
 * @param { Function } print => property passed from parent to print using some
 * @returns { total }
 **/
// Version >= 5
var systemOrigem = "005";
var field = "system";

var total = movimentsPerson
  .filter(function (collection) {
    return collection[field] === systemOrigem;
  })
  .filter(function (collection) {
    return collection["transactions"] !== undefined;
  }).length;
//console.log('total1 :', total)

// Version >= 6
// Using Arrow Function
var predicateBranch = (person) => person[field] === systemOrigem;
var predicateTransactions = (person) => person["transactions"] !== undefined;
var total2 = movimentsPerson
  .filter(predicateBranch)
  .filter(predicateTransactions).length;
//console.log('total2', total2)

///--------------------------------------------------------------------------------------------------------

/**
 * @description create Object with person = {},  operation = {}, process = {}, payments= [], transactions= []
 * @author Weder Sousa
 * @param { Object } history => contains person
 * @param { Function } print => property passed from parent to print using some
 * @returns { total }
 **/

function MovimentBranch(
  person = {},
  operation = {},
  process = {},
  payments = [],
  transactions = []
) {
  this.person = person;
  this.operation = operation;
  this.process = process;
  this.payments = payments;
  this.payments = transactions;
}

MovimentBranch.prototype = {
  addPerson: function (paramPerson) {
    this.person = paramPerson;
    return this;
  },
  addOperation: function (paramOper) {
    this.operation = paramOper;
    return this;
  },
  addProcess: function (paramProcess) {
    this.process = paramProcess;
    return this;
  },
  addPayments: function (paramPayments) {
    this.payments = paramPayments;
    return this;
  },
  addTransactions: function (paramTransactions) {
    this.transactions = paramTransactions;
    return this;
  },
  log: function (val) {
    console.log("Moviment: " + JSON.stringify(this));
    return this;
  },
};

// ### Chaining example
var moves = [];
movimentsPerson.map(function (person) {
  var move = new MovimentBranch();
  move
    .addPerson(getPerson(person))
    .addOperation(getOperations(person, "operation"))
    .log()
    .addProcess(getProcess(person, "process"))
    .addPayments(getPayments(person, "payments"))
    .addTransactions(getTransactions(person, "transactions"));
  moves.push(move);
});

// console.log(' moves :',moves[0])

function getPerson(person) {
  return {
    id: person["id"],
    name: person["name"],
    birthDate: person["birthDate"],
  };
}

function getOperations(person, type) {
  return person[type];
}

function getProcess(person, type) {
  return person[type];
}

function getPayments(person, type) {
  return person[type];
}

function getTransactions(person, type) {
  return person[type];
}

///--------------------------------------------------------------------------------------------------------

/**
 * @description Sort Persons by Name
 * @author Weder Sousa
 * @param { Object } history => contains person
 * @param { Function } print => property passed from parent to print using some
 * @see {@link https://github.com/antsmartian/functional-es8/blob/chap07/lib/es6-functional.js#L155}
 * @returns { total }
 **/

//Version > 6
let orderPerson = movimentsPerson.sort((a, b) => {
  return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
});
// orderPerson.map(person => console.log('ES6+',person['name']))

// Version > 5
let orderPersonCompare = movimentsPerson.sort(function (a, b) {
  return a.name - b.name;
});
// orderPersonCompare.map(function(person) { console.log('ES5', person['name'])})

///--------------------------------------------------------------------------------------------------------
/**
 * @description Group By Object
 * @author Weder Sousa
 * @param { Object } history => contains person
 * @param { Function } print => property passed from parent to print using some
 * @see {@link https://github.com/antsmartian/functional-es8/blob/chap07/lib/es6-functional.js#L155}
 * @returns { total }
 **/

const inventory = [
  { name: "asparagus", type: "vegetables", quantity: 5 },
  { name: "bananas", type: "fruit", quantity: 0 },
  { name: "goat", type: "meat", quantity: 23 },
  { name: "cherries", type: "fruit", quantity: 5 },
  { name: "fish", type: "meat", quantity: 22 },
];

// ES2024 native Object.groupBy and Map.groupBy
// const resultObjectGroupBY = Object.groupBy(inventory, ({ type }) => type);
// console.log('resultObjectGroupBY ', resultObjectGroupBY)

var groupBy = function (array, key) {
  return array.reduce(function (item, obj) {
    (item[obj[key]] = item[obj[key]] || []).push(obj);
    return item;
  }, {});
};

const resultGroupBY = groupBy(movimentsPerson, "system");
console.log("resultGroupBY ", resultGroupBY);
