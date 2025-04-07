//# Section 7.12: Functions Types
/**
 * @description Functions Declarations
 * @author Weder Sousa
 * @version >= 5.0
 **/

// Declaration Functions
function greet(name) {
  console.log("Hello " + name);
}
greet("Weder Sousa");

// Expression Functions
var muliply = function (num1, num2) {
  return num1 * num2;
};
//console.log(muliply(10, 20));

//Arrow Functions
var add = (num1, num2) => {
  return num1 + num2;
};
//console.log(add(10, 20));

//Anonymous Functions
var numbers = [1, 2, 3];
numbers.forEach(function (num) {
  console.log(num);
});

// Immediately Invoke Functions Expressions(IIFE)
(function () {
  //console.log('Iam an IIFE');
})();

// Named Function Expressions
var factorial = function factorial(n) {
  return n == 0 ? 1 : n * factorial(n - 1);
};

//console.log(factorial(5));

// Generate Functions
function* generateNumbers(x) {
  yield x;
  yield x * 10;
  yield x * 30;
}

var generator = generateNumbers(10);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);

// Callback Functions
function result(data) {
  // console.log(data);
}

function fetchData(callback) {
  setTimeout(() => {
    const data = "Some async data";
    callback(data);
  }, 1000);
}

fetchData(result); //mode 1 create function
fetchData((result) => {
  console.log(result);
}); // mode 2 call function anomymous

//// Higher-Order Functions
function higherOrderFunction(operation) {
  return function (a, b) {
    return operation(a, b);
  };
}

var add = higherOrderFunction((a, b) => a + b);
//console.log('add :', add(2,6));

var mult = higherOrderFunction((a, b) => a * b);
//console.log('mult :', mult(2,6));

///--------------------------------------------------------------------------------------------------------
//#  One Linear

// ### Truncate String
var str = "Bom dia Linear String";
var maxLength = 10;

//One Linear
var truncate = str.slice(0, maxLength) + "...";
//console.log('truncate : ',truncate);

//Non Linear
var truncat = "";
if (str.length > maxLength) {
  truncat = str.substring(0, maxLength) + "...";
} else {
  truncat = str;
}
//console.log('truncat : ',truncat);

//Non Linear using ternary Operator
var trunc = str.length > maxLength ? str.substring(0, maxLength) + "..." : str;
//console.log('trunc : ',trunc);
