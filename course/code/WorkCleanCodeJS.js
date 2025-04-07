// #https://github.com/weder96/demoJoinCommunity?tab=readme-ov-file

/// Demo Clen Code Javascript
// https://github.com/weder96/clean-code-javascript/
// https://akfpartners.com/growth-blog/why-code-reviews-save-money-and-time

//--------------------------------------------------------------------------------------------------------
// survey.stackoverflow
// https://survey.stackoverflow.co/2023/
//
//---------------------------------------------------------------------------------------------------------

// ## **Variables**

// ### Use meaningful and pronounceable variable names

var yyyymmdstr = "2021-04-25T21:30:05"; // Bad
var currentDate = "2023-12-25T21:30:05"; // Good

///---------------------------------------------------------------------------------------------------------
// ### Use the same vocabulary for the same type of variable

// Bad:

/*
getUserInfo();
getClientData();
getCustomerRecord();
*/

// Good
var user = getUser();

function getUser() {
  return {
    info: "information client",
    data: "data register",
    record: "records []",
  };
}
//console.log(getUser());

///---------------------------------------------------------------------------------------------------------

/*
### Use searchable names

We will read more code than we will ever write. It's important that the code we
do write is readable and searchable. By _not_ naming variables that end up
being meaningful for understanding our program, we hurt our readers.
Make your names searchable. Tools like
[buddy.js](https://github.com/danielstjules/buddy.js) and
[ESLint](https://github.com/eslint/eslint/blob/660e0918933e6e7fede26bc675a0763a6b357c94/docs/rules/no-magic-numbers.md)
can help identify unnamed constants.
*/

var release = function () {};

// What is 86400000 for?
setTimeout(release, 86400000); //Bad

// Declare them as capitalized named constants.
const MILLISECONDS_PER_DAY = 60 * 60 * 24 * 1000; //86400000;
setTimeout(release, MILLISECONDS_PER_DAY); //Good

///---------------------------------------------------------------------------------------------------------

// ### Use explanatory variables

var address = "One Infinite Loop, Cupertino 95014";
var cityZipCodeRegex = /^[^,\\]+[,\\\s]+(.+?)\s*(\d{5})?$/;
//console.log(address.match(cityZipCodeRegex))
saveCityZipCode(
  address.match(cityZipCodeRegex)[1],
  address.match(cityZipCodeRegex)[2]
); //Bad

var address = "One Infinite Loop, Cupertino 95014";
const cityZipCodeRegex2 = /^[^,\\]+[,\\\s]+(.+?)\s*(\d{5})?$/;
const [_, city, zipCode] = address.match(cityZipCodeRegex2) || []; // Good
saveCityZipCode(city, zipCode);

function saveCityZipCode(city, zipCode) {
  console.log(city);
  console.log(zipCode);
}

///---------------------------------------------------------------------------------------------------------

// ###  Avoid Mental Mapping
// ###  Explicit is better than implicit.

var locations = ["Austin", "New York", "San Francisco"];
locations.forEach((l) => {
  // Bad
  doStuff();
  doSomeOtherStuff();
  dispatch(l); // Wait, what is `l` for again?
});

var locationsNew = ["Austin", "New York", "San Francisco"];
locationsNew.forEach((location) => {
  // Good
  doStuff();
  doSomeOtherStuff();
  dispatch(location);
});

function doStuff() {}
function doSomeOtherStuff() {}
function dispatch(location) {}

///---------------------------------------------------------------------------------------------------------

// ###  Don't add unneeded context
// ###  If your class/object name tells you something, don't repeat that in your variable name.

const Car = {
  carMake: "Honda", //Bad
  carModel: "Accord", //Bad
  carColor: "Blue", //Bad
};

const CarNew = {
  make: "Honda", //Good
  model: "Accord", //Good
  color: "Blue", //Good
};

function paintCar(car, color) {
  car.carColor = color;
}

///---------------------------------------------------------------------------------------------------------
// ### Use default parameters instead of short circuiting or conditionals
// ### Default parameters are often cleaner than short circuiting.
// ### Be aware that if you use them, your function will only provide default values for undefined arguments.
// ### Other "falsy" values such as '', "", false, null, 0, and NaN, will not be replaced by a default value.

function createUser(name) {
  const userName = name || "Name not given"; // Bad
  // ...
}

function createUser(name = "Name not given") {
  //Good
  const userName = name;
  // ...
}

///---------------------------------------------------------------------------------------------------------
// ### Functions

/*Function arguments (2 or fewer ideally)
Limiting the amount of function parameters is incredibly important because it makes testing your function easier. Having more than three leads to a combinatorial explosion where you have to test tons of different cases with each separate argument.

One or two arguments is the ideal case, and three should be avoided if possible. Anything more than that should be consolidated. Usually, if you have more than two arguments then your function is trying to do too much. In cases where it's not, most of the time a higher-level object will suffice as an argument.

Since JavaScript allows you to make objects on the fly, without a lot of class boilerplate, you can use an object if you are finding yourself needing a lot of arguments.
*/

function createMenu(title, body, buttonText, cancellable) {
  //Bad
  // ...
}

createMenu("Foo", "Bar", "Baz", true);

function createMenu({ title, body, buttonText, cancellable }) {
  //Good
  // ...
}

createMenu({
  title: "Foo",
  body: "Bar",
  buttonText: "Baz",
  cancellable: true,
});

///---------------------------------------------------------------------------------------------------------
// ### Functions should do one thing

/*This is by far the most important rule in software engineering. When functions do more than one thing, they are harder to compose, test, and reason about. When you can isolate a function to just one action, it can be refactored easily and your code will read much cleaner. If you take nothing else away from this guide other than this, you'll be ahead of many developers.
 */

// Bad
function emailClients(clients) {
  clients.forEach((client) => {
    const clientRecord = database.lookup(client);
    if (clientRecord.isActive()) {
      email(client);
    }
  });
}

//  Good
function emailActiveClients(clients) {
  clients.filter(isActiveClient).forEach(email);
}

function isActiveClient(client) {
  const clientRecord = database.lookup(client);
  return clientRecord.isActive();
}

///---------------------------------------------------------------------------------------------------------
// ### Function names should say what they do
// Bad
function addToDate(date, month) {
  // ...
}

const today = new Date();
// It's hard to tell from the function name what is added
addToDate(today, 1);

// Good
function addMonthToDate(month, date) {
  // ...
}

const today2 = new Date();
addMonthToDate(1, today2);

///---------------------------------------------------------------------------------------------------------
// ### Functions should only be one level of abstraction

// When you have more than one level of abstraction your function is usually doing too much. Splitting up functions leads to reusability and easier testing.

// Bad
function parseBetterJSAlternative(code) {
  const REGEXES = [];

  const statements = code.split(" ");
  const tokens = [];
  REGEXES.forEach((REGEX) => {
    statements.forEach((statement) => {});
  });

  const ast = [];
  tokens.forEach((token) => {});

  ast.forEach((node) => {});
}

// Good:
function parseBetterJSAlternative(code) {
  const tokens = tokenize(code);
  const syntaxTree = parse(tokens);
  syntaxTree.forEach((node) => {});
}

function tokenize(code) {
  const REGEXES = [];
  const statements = code.split(" ");
  const tokens = [];
  REGEXES.forEach((REGEX) => {
    statements.forEach((statement) => {
      tokens.push(/* ... */);
    });
  });
  return tokens;
}

function parse(tokens) {
  const syntaxTree = [];
  tokens.forEach((token) => {
    syntaxTree.push(/* ... */);
  });
  return syntaxTree;
}

///---------------------------------------------------------------------------------------------------------
// ###  Remove duplicate code

// ###  Do your absolute best to avoid duplicate code.
// ###  Duplicate code is bad because it means that there's more than one place to alter something if you need to change some logic.

// Bad
function showDeveloperList(developers) {
  developers.forEach((developer) => {
    const expectedSalary = developer.calculateExpectedSalary();
    const experience = developer.getExperience();
    const githubLink = developer.getGithubLink();
    const data = { expectedSalary, experience, githubLink };
    render(data);
  });
}

function showManagerList(managers) {
  managers.forEach((manager) => {
    const expectedSalary = manager.calculateExpectedSalary();
    const experience = manager.getExperience();
    const portfolio = manager.getMBAProjects();
    const data = { expectedSalary, experience, portfolio };
    render(data);
  });
}

// Good
function showEmployeeList(employees) {
  employees.forEach((employee) => {
    const expectedSalary = employee.calculateExpectedSalary();
    const experience = employee.getExperience();
    const data = { expectedSalary, experience };

    switch (employee.type) {
      case "manager":
        data.portfolio = employee.getMBAProjects();
        break;
      case "developer":
        data.githubLink = employee.getGithubLink();
        break;
    }
    render(data);
  });
}

///---------------------------------------------------------------------------------------------------------
// ###  Set default objects with Object.assign

// Bad
const menuConfig = {
  title: null,
  body: "Bar",
  buttonText: null,
  cancellable: true,
};

function createMenu(config) {
  config.title = config.title || "Foo";
  config.body = config.body || "Bar";
  config.buttonText = config.buttonText || "Baz";
  config.cancellable =
    config.cancellable !== undefined ? config.cancellable : true;
}

createMenu(menuConfig);

// Good:
const menuConfigObj = {
  title: "Order", // User did not include 'body' key
  buttonText: "Send",
  cancellable: true,
};

function createMenuObjectAssign(config) {
  let finalConfig = Object.assign(
    {
      title: "Foo",
      body: "Bar",
      buttonText: "Baz",
      cancellable: true,
    },
    config
  );
  console.log(finalConfig);
  return finalConfig; // config now equals: {title: "Order", body: "Bar", buttonText: "Send", cancellable: true}
}
createMenuObjectAssign(menuConfigObj);

///---------------------------------------------------------------------------------------------------------
// ### Don't use flags as function parameters

// Flags tell your user that this function does more than one thing.
// Functions should do one thing.
// Split out your functions if they are following different code paths based on a boolean.

// Bad
function createFile(name, temp) {
  if (temp) {
    fs.create(`./temp/${name}`);
  } else {
    fs.create(name);
  }
}

// Good
function createFile(name) {
  fs.create(name);
}

function createTempFile(name) {
  createFile(`./temp/${name}`);
}

///---------------------------------------------------------------------------------------------------------
// ### Avoid Side Effects (part 1)

// A function produces a side effect if it does anything other than take a value in and return another value or values.
// A side effect could be writing to a file, modifying some global variable, or accidentally wiring all your money to a stranger.

// Bad
// Global variable referenced by following function.
// If we had another function that used this name, now it'd be an array and it could break it.
let name = "Weder Sousa";

function splitIntoFirstAndLastName() {
  name = name.split(" ");
}

splitIntoFirstAndLastName();

// console.log(name); // ['Weder', 'Sousa'];

// Good
function splitIntoFirstAndLastNameGood(name) {
  return name.split(" ");
}

const nameGood = "Weder Sousa";
const newName = splitIntoFirstAndLastNameGood(nameGood);

console.log(nameGood); // 'Weder Sousa';
console.log(newName); // ['Weder', 'Sousa'];

///---------------------------------------------------------------------------------------------------------
// ### Avoid Side Effects (part 2)

// In JavaScript, some values are unchangeable (immutable) and some are changeable (mutable).
// Objects and arrays are two kinds of mutable values so it's important to handle them carefully when they're passed as parameters to a function.
// A JavaScript function can change an object's properties or alter the contents of an array which could easily cause bugs elsewhere.

/* Two caveats to mention to this approach:

    1. There might be cases where you actually want to modify the input object, but when you adopt this programming practice you will find that those cases are pretty rare. Most things can be refactored to have no side effects!

    2. Cloning big objects can be very expensive in terms of performance. Luckily, this isn't a big issue in practice because there are great libraries that allow this kind of programming approach to be fast and not as memory intensive as it would be for you to manually clone objects and arrays.
*/

// Bad
const addItemToCart = (cart, item) => {
  cart.push({ item, date: Date.now() });
};

// Good
const addItemToCartNew = (cart, item) => {
  return [...cart, { item, date: Date.now() }];
};

///---------------------------------------------------------------------------------------------------------
// ###  Favor functional programming over imperative programming

// JavaScript isn't a functional language in the way that Haskell is, but it has a functional flavor to it.
// Functional languages can be cleaner and easier to test. Favor this style of programming when you can.

//Bad
const programmerOutput = [
  { key: 1, name: "Uncle Bobby", linesOfCode: 500 },
  { key: 2, name: "Carol Shaw", linesOfCode: 1500 },
  { key: 3, name: "Jimmy Gosling", linesOfCode: 150 },
  { key: 4, name: "Gracie Hopper", linesOfCode: 1000 },
  { key: 5, name: "Brendan Eich ", linesOfCode: 2000 },
];

var totalOutput = 0;
for (let i = 0; i < programmerOutput.length; i++) {
  totalOutput += programmerOutput[i].linesOfCode;
}
console.log("totalOutput : ", totalOutput);

//Good
// Version ≤ 5.1
const totalLinesOfCodes = programmerOutput.reduce(function (accum, current) {
  return accum + current.linesOfCode;
}, 0);
console.log("totalLinesOfCodes : ", totalLinesOfCodes);

// Version ≥ 6
const totalOutputGood = programmerOutput.reduce(
  (accum, current) => accum + current.linesOfCode,
  0
);
console.log("totalOutputGood : ", totalOutputGood);

///---------------------------------------------------------------------------------------------------------
// ###  Encapsulate conditionals
var fsm = { state: "fetching" };
var listNode = [];

// Bad
if (fsm.state === "fetching" && isEmpty(listNode)) {
  // ...
}

//  Good
function shouldShowSpinner(fsm, listNode) {
  return fsm.state === "fetching" && isEmpty(listNode);
}
function isEmpty(node) {
  return node.length === 0;
}

if (shouldShowSpinner(fsm, listNode)) {
  // ...
}

///---------------------------------------------------------------------------------------------------------
// ### Avoid negative conditionals

var node = [];
// Bad
function isDOMNodeNotPresent(node) {
  // ...
}

if (!isDOMNodeNotPresent(node)) {
  // ...
}

// Good:
function isDOMNodePresent(node) {
  // ...
}

if (isDOMNodePresent(node)) {
  // ...
}

///---------------------------------------------------------------------------------------------------------
// ### Don't over-optimize

// Modern browsers do a lot of optimization under-the-hood at runtime.
// A lot of times, if you are optimizing then you are just wasting your time.
// There are good resources for seeing where optimization is lacking.
// Target those in the meantime, until they are fixed if they can be.

// Bad:

// On old browsers, each iteration with uncached `list.length` would be costly
// because of `list.length` recomputation. In modern browsers, this is optimized.
var list = [0, 1, 2, 3, 4];
for (let i = 0, len = list.length; i < len; i++) {
  // ...
}

// Good:
for (let row = 0; row < list.length; row++) {
  // ...
}

///---------------------------------------------------------------------------------------------------------
// ###  Remove dead code

// Dead code is just as bad as duplicate code.
// There's no reason to keep it in your codebase.
// If it's not being called, get rid of it! It will still be safe in your version history if you still need it.

// Bad
function oldRequestModule(url) {
  // ...
}

function newRequestModule(url) {
  // ...
}

function inventoryTracker(fruit, req, url) {
  // ....
}

const req = newRequestModule;
inventoryTracker("apples", req, "www.inventory-awesome.io");

// Good
function newRequestModule(url) {
  // ...
}

const reqNew = newRequestModule;
inventoryTracker("apples", reqNew, "www.inventory-awesome.io");

///---------------------------------------------------------------------------------------------------------
// ###  Use getters and setters

// Using getters and setters to access data on objects could be better than simply looking for a property on an object.

// "Why?" you might ask. Well, here's an unorganized list of reasons why:

/* When you want to do more beyond getting an object property, you don't have to look up and change every accessor in your codebase.
   Makes adding validation simple when doing a set.
   Encapsulates the internal representation.
   Easy to add logging and error handling when getting and setting.
   You can lazy load your object's properties, let's say getting it from a server.
*/

// Bad
function makeBankAccount() {
  // ...

  return {
    balance: 0,
    // ...
  };
}

const account = makeBankAccount();
account.balance = 100;

// Good
function makeBankAccountNew() {
  // this one is private
  let balance = 0;

  // a "getter", made public via the returned object below
  function getBalance() {
    return balance;
  }

  // a "setter", made public via the returned object below
  function setBalance(amount) {
    // ... validate before updating the balance
    balance = amount;
  }

  return {
    // ...
    getBalance,
    setBalance,
  };
}

const accountNew = makeBankAccountNew();
accountNew.setBalance(100);
console.log(accountNew.getBalance());

///---------------------------------------------------------------------------------------------------------
// ###   Make objects have private members

// This can be accomplished through closures (for ES5 and below).
// @see {@link https://medium.com/@licaretraul/closure-in-javascript-6b9087ec3108}

// Bad
var EmployeeMyFunction = function (name) {
  this.name = name;
};

EmployeeMyFunction.prototype.getName = function getName() {
  return this.name;
};

const employeeObj = new EmployeeMyFunction("Weder Sousa");
//console.log(`employeeObj name: ${employeeObj.getName()}`); // Employee name: John Doe
delete employeeObj.name;
//console.log(`employeeObj name: ${employeeObj.getName()}`); // Employee name: undefined

// Good:
function makeEmployee(name) {
  return {
    getName() {
      return name;
    },
  };
}

const employee = makeEmployee("Weder Sousa");
console.log(`Employee name: ${employee.getName()}`); // Employee name: Weder Sousa
delete employee.name;
console.log(`Employee name: ${employee.getName()}`); // Employee name: Weder Sousa

///---------------------------------------------------------------------------------------------------------
// ### Use consistent capitalization

// JavaScript is untyped, so capitalization tells you a lot about your variables, functions, etc.
// These rules are subjective, so your team can choose whatever they want.
// The point is, no matter what you all choose, just be consistent.

// Bad
const A_DAYS_IN_WEEK = 7;
const a_daysInMonth = 30;

const songs = ["Back In Black", "Stairway to Heaven", "Hey Jude"];
const Artists = ["ACDC", "Led Zeppelin", "The Beatles"];

function eraseDatabase() {}
function restore_database() {}

class animal {}
class Alpaca {}

// Good

const DAYS_IN_WEEK = 7;
const DAYS_IN_MONTH = 30;

const SONGS = ["Back In Black", "Stairway to Heaven", "Hey Jude"];
const ARTISTS = ["ACDC", "Led Zeppelin", "The Beatles"];

function eraseDatabase() {}
function restoreDatabase() {}

class AnimalNew {}
class AlpacaNew {}

///---------------------------------------------------------------------------------------------------------
// ### Comments

// Only comment things that have business logic complexity.
// Comments are an apology, not a requirement. Good code mostly documents itself.

// Bad
function hashIt(data) {
  // The hash
  let hash = 0;

  // Length of string
  const length = data.length;

  // Loop through every character in data
  for (let i = 0; i < length; i++) {
    // Get character code.
    const char = data.charCodeAt(i);
    // Make the hash
    hash = (hash << 5) - hash + char;
    // Convert to 32-bit integer
    hash &= hash;
  }
  return hash;
}
//console.log(hashIt("Weder Sousa"));

// Good:

/**
 * @description This function has the purpose of creating a hash of a string passed as a parameter and Convert to 32-bit integer
 * @author Weder Sousa
 * @param { String } history => contains String
 * @returns { hash 32-bit integer}
 **/
function hashIt(data) {
  let hash = 0;
  const length = data.length;

  for (let i = 0; i < length; i++) {
    const char = data.charCodeAt(i);
    hash = (hash << 5) - hash + char;

    // Convert to 32-bit integer
    hash &= hash;
  }
  return hash;
}

//console.log(hashIt("Weder Sousa"));

///---------------------------------------------------------------------------------------------------------
// ###  Don't leave commented out code in your codebase

// Version control exists for a reason. Leave old code in your history.

function doStuff() {
  //....
}

// Bad
doStuff();
// doOtherStuff();
// doSomeMoreStuff();
// doSoMuchStuff();

// Good:
doStuff();

///---------------------------------------------------------------------------------------------------------
// ### Don't have journal comments

// Remember, use version control! There's no need for dead code, commented code, and especially journal comments.
// Use git log to get history!

// Bad

/**
 * 2016-12-20: Removed monads, didn't understand them (RM)
 * 2016-10-01: Improved using special monads (JP)
 * 2016-02-03: Removed type-checking (LI)
 * 2015-03-14: Added combine with type-checking (JR)
 */
function combine(a, b) {
  return a + b;
}

// Good
function combine(a, b) {
  return a + b;
}

///---------------------------------------------------------------------------------------------------------
// ### Avoid positional markers
// They usually just add noise. Let the functions and variable names along with the proper indentation and formatting give the visual structure to your code.

var $scope = {};
// Bad
////////////////////////////////////////////////////////////////////////////////
// Scope Model Instantiation
////////////////////////////////////////////////////////////////////////////////
$scope.model = {
  menu: "foo",
  nav: "bar",
};

////////////////////////////////////////////////////////////////////////////////
// Action setup
////////////////////////////////////////////////////////////////////////////////
const actions = function () {
  // ...
};

// Good

$scope.model = {
  menu: "foo",
  nav: "bar",
};

const actionsNew = function () {
  // ...
};
