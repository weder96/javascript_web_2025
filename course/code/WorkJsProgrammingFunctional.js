//@see {@link https://hackernoon.com/functional-programming-with-javascript-a-deep-dive}

///---------------------------------------------------------------------------------------------------------
// ### Functional Programming Benefits

const assertEquals = (expected, actual, message) => {
  return actual === expected
    ? ""
    : console.log(`${message}: ${actual} is NOT equal to ${expected}!`);
};

// We have seen the definition of functional programming and a very simple  example of a function in JavaScript.
//We now have to answer a simple question:
//What are the benefits of functional programming? This section helps you see the huge benefits that functional programming offers us.
//Most of the benefits of functional programming come from writing pure functions.
//So before we see the benefits of functional programming, we need to know what a pure function is.

// A Simple Pure Function
var double = (value) => value * 2;

// Pure Functions Lead to Testable Code
// Functions that are not pure have side effects. Take our previous tax
// calculation example
var percentValue = 5;
var calculateTax = (value) => {
  return (value / 100) * (100 + percentValue);
}; //depends on external environment percentValue variable
assertEquals(5.25, calculateTax(5), "message");
assertEquals(6.3, calculateTax(6), "message");
assertEquals(7.3500000000000005, calculateTax(7), "message");

// As you can see here, the function is very hard to test.
// We can easily fix  the issue, though, by removing the external environment dependency from
//our function, leading the code to this:
var calculateTaxFnPure = function (value, percentValue) {
  return (value / 100) * (100 + percentValue);
};

assertEquals(5.25, calculateTaxFnPure(5, percentValue), "message");
assertEquals(6.3, calculateTaxFnPure(6, percentValue), "message");
assertEquals(
  7.3500000000000005,
  calculateTaxFnPure(7, percentValue),
  "message"
);

///---------------------------------------------------------------------------------------------------------
// Impure Functions
let global = "something";
let function1 = function (input) {
  // works on input
  //changes global
  global = "somethingElse";
};

let function2 = function () {
  if (global === "something") {
    //business logic
  }
};

// Pure Functions
let functionOne = function (input, global) {
  // works on input
  //changes global
  global = "somethingElse";
};

let functionTwo = function (global) {
  if (global === "something") {
    //business logic
  }
};

///---------------------------------------------------------------------------------------------------------

// Immutability: In the functional world, once data is created, it remains unchanged. This not only
// simplifies reasoning but also plays well with parallel processing. Here's a taste of immutability:

const originalArray = [1, 2, 3];
const newArray = [...originalArray, 4]; // spred operator
//console.log('newArray :', newArray)
//console.log('originalArray :', originalArray)

// Consider an example with objects:

const person = { name: "Alice", age: 30 };
const updatedPerson = { ...person, age: 31 };
//console.log('updatedPerson :', updatedPerson)

var clonedArray = JSON.parse(JSON.stringify(updatedPerson));
clonedArray = { ...person, age: 32 };
//console.log('clonedArray :', clonedArray);
//console.log('person :', person);
//console.log('updatedPerson :', updatedPerson);

const clonenewArray = originalArray.map(function (arr) {
  return arr * arr;
});
// console.log('clonenewArray :', clonenewArray)

const newArrayUsingSlice = originalArray.slice(0);
console.log("newArrayUsingSlice :", newArrayUsingSlice);

let objArray = [{ a: 1 }, { b: 2 }];

let refArray = objArray; // this will just point to the objArray
let clonedObjArray = [...objArray]; // will clone the array spread Operator

//console.log( "before:" );
//console.log( "obj array" , objArray );
//console.log( "ref array" , refArray );
//console.log( "cloned array" , clonedObjArray );

objArray[0] = { c: 3 };

//console.log( "after:" );
//console.log( "obj array" , objArray ); // [ {c:3} , {b:2} ]
//console.log( "ref array" , refArray ); // [ {c:3} , {b:2} ]
//console.log( "cloned array" , clonedObjArray ); // [ {a:1} , {b:2} ]

///---------------------------------------------------------------------------------------------------------
// ###  JavaScript as a language supports the following data  types:
/*  • Numbers
    • Strings
    • Booleans
    • Objects
    • null
    • undefined
*/

let arrOne = [55, 555, 5555];

//forEach Function
var forEachFn = function (array, fn) {
  let i;
  for (i = 0; i < array.length; i++) fn(array[i]);
};

//forEachFn(arrOne, function (data) { console.log('forEachFn :'+data)})

//forEach Function
var forEach = function (array, fn) {
  let i;
  for (i = 0; i < array.length; i++) fn(array[i]);
};

//forEach(arrOne,(data) => console.log('forEach :'+data))

const forEachObject = function (obj, fn) {
  for (var property in obj) {
    if (obj.hasOwnProperty(property)) {
      //calls the fn with key and value as its argument
      fn(property, obj[property]);
    }
  }
};

// Here they are in action:
let object = { a: 1, b: 2 };
//forEachObject(object, (k,v) => console.log(k + ":" + v));

///---------------------------------------------------------------------------------------------------------
// unless Function Definition
const unless = function (predicate, fn) {
  if (!predicate) fn();
};

//With the unless function in place, we can write a concise piece of code  to find the list of even numbers.
//The code for it looks like this:
var arrEven = [];
var arrFornElem = [1, 2, 3, 4, 5, 6, 7, 8];
forEach(arrFornElem, function (number) {
  unless(number % 2, function () {
    console.log(number, " is even");
    arrEven.push(number);
  });
});
// console.log('arrEven :', arrEven)

//This code, when executed, is going to print the following:
// 2 " is even"
// 4 " is even"
// 6 " is even"

///---------------------------------------------------------------------------------------------------------
// times Function Definition
const times = function (times, fn) {
  for (var i = 0; i < times; i++) fn(i);
};
//The times function looks very similar to the forEach function; it’s  just that we are operating on a Number rather than an Array.
//Now with the  times function in place, we can go ahead and solve our problem at hand  like this:

times(100, function (n) {
  unless(n % 2, function () {
    //console.log(n, "is even");
  });
});

///---------------------------------------------------------------------------------------------------------
// every Function Definition
const every = function (arr, fn) {
  let result = true;
  for (let i = 0; i < arr.length; i++) result = result && fn(arr[i]);
  return result;
};

//console.log(every([NaN, NaN, NaN], isNaN))  //true
//console.log(every([1, 1, 1], 1));  //true
//console.log(every([NaN, NaN, 4], isNaN)) // false

///---------------------------------------------------------------------------------------------------------
// some Function Definition
const some = function (arr, fn) {
  var result = false;
  for (var value of arr) result = result || fn(value);
  return result;
};

console.log(some([NaN, NaN, 4], isNaN)); // true
console.log(some([3, 4, 4], isNaN)); //false

///---------------------------------------------------------------------------------------------------------
/**
 * @see {@link https://github.com/antsmartian/functional-es8/blob/chap07/lib/es6-functional.js#L155}
 **/

// map Function Definition
const map = function (array, fn) {
  let results = [];
  for (const value of array) results.push(fn(value));
  return results;
};

const arrayUtils = {
  map: map,
};

const maps = arrayUtils.map;
maps([1, 2, 3], function (x) {
  //console.log('maps :'+(x * x))
});

///---------------------------------------------------------------------------------------------------------
// Recursion in Functional Programming
// It's possible in JavaScript to call a function from the function itself.

// So what we could always do:

function recursive(start, end, arr) {
  if (start === end) {
    arr.push(start);
    return;
  } else {
    arr.push(start);
    return recursive(start + 1, end, arr);
  }
}
var arr = [];
recursive(1, 10, arr);

//console.log(arr)

// 1, 2, 3, 4, 5, 6, 7, 8, 9, 10

///---------------------------------------------------------------------------------------------------------
// Why use currying?
//The big benefit of currying is when you need to re-use the same function multiple times but only change one (or fewer) of the parameters. So you can save the first function call, something like this:

function curryAdd(firstNum) {
  return function (secondNum) {
    return firstNum + secondNum;
  };
}

let add10 = curryAdd(10);
//console.log(add10(5)); // Returns 15

let add20 = curryAdd(20);
//console.log(add20(2)); // Returns 22

///---------------------------------------------------------------------------------------------------------
//Count, Max, Min, AVG using functions ES5, ES6+

const vehicles = [
  { make: "Honda", model: "CR-V", type: "suv", price: 24045, intenalId: 1 },
  { make: "Honda", model: "Accord", type: "sedan", price: 22455, intenalId: 2 },
  {
    make: "Mazda",
    model: "Mazda 6",
    type: "sedan",
    price: 24195,
    intenalId: 3,
  },
  { make: "Mazda", model: "CX-9", type: "suv", price: 31520, intenalId: 4 },
  { make: "Toyota", model: "4Runner", type: "suv", price: 34210, intenalId: 5 },
  { make: "Toyota", model: "Sequoia", type: "suv", price: 45560, intenalId: 6 },
  {
    make: "Toyota",
    model: "Tacoma",
    type: "truck",
    price: 24320,
    intenalId: 7,
  },
  { make: "Ford", model: "F-150", type: "truck", price: 27110, intenalId: 8 },
  { make: "Ford", model: "Fusion", type: "sedan", price: 22120, intenalId: 9 },
  { make: "Ford", model: "Explorer", type: "suv", price: 31660, intenalId: 10 },
];
//Version >= 5
const numParc = vehicles.map(function (veic) {
  return veic.intenalId;
});
console.log("numParc", numParc);

var foo = [];
for (var i = 1; i <= 10; i++) {
  foo.push(i);
}
console.log("foo", foo);
console.log(foo.toString() === numParc.toString());

//Version >= 6
const averageSUVPrice = vehicles
  .filter((veic) => veic.type === "suv")
  .map((veic) => veic.price)
  .reduce((sum, price, i, array) => sum + price / array.length, 0);
console.log(averageSUVPrice); // 33399

//Version >= 5
const arrAvgSUVPrice = vehicles
  .filter(function (veic) {
    return veic.type === "suv";
  })
  .map(function (veic) {
    return veic.price;
  });
console.log("arrAvgSUVPrice :", arrAvgSUVPrice);

const avgSUV =
  arrAvgSUVPrice.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
  }, 0) / arrAvgSUVPrice.length;
console.log("avgSUV :", avgSUV); // 33399

const count = vehicles.filter((veic) => veic.type === "suv").length;
console.log(count);

const max = Math.max.apply(
  Math,
  vehicles.map(function (veic) {
    return veic.price;
  })
);
console.log(max);

const min = Math.min.apply(
  Math,
  vehicles.map(function (veic) {
    return veic.price;
  })
);
console.log(min);

///---------------------------------------------------------------------------------------------------------
