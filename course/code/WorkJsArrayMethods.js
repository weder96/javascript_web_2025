// JavaScript Array Methods: A Comprehensive Guide with Handbook
// @see {@link https://morioh.com/a/8b2af6682d41/javascript-array-methods-a-comprehensive-guide-with-handbook}

// @see {@link https://morioh.com/a/b7f83ffcccda/15-best-javascript-books-for-beginners-and-experienced-coders}

///---------------------------------------------------------------------------------------------------
/// ### How to Create an Array in JavaScript
// There are two ways you can create an array in JavaScript:

// Using the square brackets []
// Using the Array() constructor

// The following example shows how to create an array named myArray that has three elements of different types: a Number, a String, and a Boolean.
let myArray = [29, "Weder Sousa", true];

// And here's how to create an array with 3 number elements:
let myNumbers = [5, 10, 15];
// console.log('myNumbers :', myNumbers)

// Another way to create an array is to use the Array() constructor, which works like the square brackets:

let myArray2 = Array(29, "Weder Sousa", true);

// or
let myNumbers2 = new Array(5, 10, 15);
// console.log('myNumbers2 :', myNumbers2)

///---------------------------------------------------------------------------------------------------
/// ### How to Access an Array's Elements

// For example, here's how you access the first element of myArray:

let myArray3 = [29, "Weder Sousa", true];
console.log(myArray3[0]); // 29
console.log(myArray3[1]); // Weder Sousa
console.log(myArray3[2]); // true

///---------------------------------------------------------------------------------------------------
// if you try to access an index number that hasn't been assigned any value yet, JavaScript will return undefined as shown below:

let myArray4 = [29, "Weder Sousa", true];

console.log(myArray4[3]); // undefined
console.log(myArray4[4]); // undefined
console.log(myArray4[100]); // undefined

///---------------------------------------------------------------------------------------------------
// The following example shows how to replace the third element (boolean) with a string:
let myArray5 = [29, "Weder Sousa", true];

// Replace the third element
myArray5[2] = "Sebhastian";
console.log(myArray5); // [ 29, 'Weder Sousa', 'Sebhastian' ]

///---------------------------------------------------------------------------------------------------
// The Array length Property
// The length property shows how many elements an array has. You can access this property using the dot . notation as shown below:

let myArray6 = [29, "Nathan", true];
console.log(myArray6.length); // 3
let animals = ["Dog", "Cat"];
console.log(animals.length); // 2

// The length property is updated each time you add or remove elements from an array.

///---------------------------------------------------------------------------------------------------

// How to Add Elements to an Array

// To add one or more elements to an array, you can use the array
// push() and
// unshift() methods.

// The push() method adds new elements to the end of the array, while the unshift() method inserts new elements at the start of the array:
let animals2 = ["Dog", "Cat"];
animals2.push("Horse", "Fish");
console.log(animals2); // [ 'Dog', 'Cat', 'Horse', 'Fish' ]
animals2.unshift("Bird");
console.log(animals2); // [ 'Bird', 'Dog', 'Cat', 'Horse', 'Fish' ]

///---------------------------------------------------------------------------------------------------
// How to Remove an Element from an Array

// To remove an element from an array, you can use the shift() and pop() methods, depending on the position of the element you want to remove.
// Use the shift() method to remove the first element, and use pop() to remove the last element in the array:

let animals3 = ["Dog", "Cat", "Horse", "Fish"];
animals3.shift();
console.log(animals3); // [ 'Cat', 'Horse', 'Fish' ]
animals3.pop();
console.log(animals3); // [ 'Cat', 'Horse' ]

//  to Use splice() to Remove or Add Element(s)
//  array splice() method is used to remove or add elements at specific positions. You use this method when push, pop, shift, and unshift can't get the job done.
// remove elements using the splice() method, you need to specify two arguments: the index number to start array manipulation, and the number of elements to delete.

// r example, suppose you want to delete two elements at index 1 and 2 in the animals array. Here's how you do it:

let animals4 = ["Dog", "Cat", "Horse", "Fish"];
animals4.splice(1, 2);
console.log(animals4); // [ 'Dog', 'Fish' ]

///---------------------------------------------------------------------------------------------------
// To add elements using splice(), you need to specify the elements to add after the second argument.

// For example, here I add a string value 'Bird' and 'Squid' at index 1:

let animals5 = ["Dog", "Cat"];
animals5.splice(1, 0, "Bird", "Squid");
console.log(animals5); // [ 'Dog', 'Bird', 'Squid', 'Cat' ]

///---------------------------------------------------------------------------------------------------

/// How to Check if a Variable is an Array

let myArray7 = [1, 2, 3];
let notAnArray7 = "Hello!";

console.log(Array.isArray(myArray7)); // true
console.log(Array.isArray(notAnArray7)); // false

///---------------------------------------------------------------------------------------------------

// How to Iterate or Loop Over an Array
// There are 4 ways you can iterate over an array in JavaScript, depending on the method you use:
// - Using a for loop
// - Using a while loop
// - Using the for...in loop
// - Using the for...of loop
// - Using the forEach() method

// 1. How to use a for loop

let animals8 = ["dog", "bird", "cat", "horse"];

for (let i = 0; i < animals8.length; i++) {
  console.log(animals8[i]);
}

// 2. How to use a while loop
let animals9 = ["dog", "bird", "cat", "horse"];

let i = 0;

while (i < animals9.length) {
  console.log(animals9[i]);
  i++;
}

// 3. How to use a for...in loop
let animals10 = ["dog", "bird", "cat", "horse"];

for (i in animals10) {
  console.log(animals10[i]);
}

// 4. How to use a for...of loop
let animals11 = ["dog", "bird", "cat", "horse"];

for (element of animals11) {
  console.log(element);
}

// 5. How to use the forEach() method
let animals12 = ["dog", "bird", "cat", "horse"];

animals12.forEach(function (element, index) {
  console.log(`${index}: ${element}`);
});

// 0: dog
// 1: bird
// 2: cat
// 3: horse

///---------------------------------------------------------------------------------------------------

// How to Convert an Array into a String
const animals13 = ["cat", "bird", "fish"];
console.log(animals13.toString()); // "cat,bird,fish"

///---------------------------------------------------------------------------------------------------

// The join() method also converts an array into a string, but you can pass a specific string separator as its argument.

const animals14 = ["cat", "bird", "fish"];

console.log(animals14.join()); // "cat,bird,fish"
console.log(animals14.join("/")); // "cat/bird/fish"
console.log(animals14.join("")); // "catbirdfish"
///---------------------------------------------------------------------------------------------------
/// How to Compare Two Arrays

let arrayOne = [7, 8, 9];
let arrayTwo = [7, 8, 9];
console.log(arrayOne === arrayTwo); // false

// This is because arrayOne and arrayTwo are different objects stored in different memory locations.

let arrayOne2 = [7, 8, 9];
let arrayTwo2 = arrayOne2;

console.log(arrayOne2 === arrayTwo2); // true

// Compare arrays by converting them to JSON object
// Before comparing two different arrays, you need to convert them into JSON objects by calling the JSON.stringify() method.

let arrayOne3 = [7, 8, 9];
let arrayTwo3 = [7, 8, 9];

console.log(JSON.stringify(arrayOne3) === JSON.stringify(arrayTwo3)); // true

// How to compare arrays with the every() method
let arrayOne4 = [7, 8, 9];
let arrayTwo4 = [7, 8, 9];

let result =
  arrayOne4.length === arrayTwo4.length &&
  arrayOne4.every(function (element, index) {
    // compare if the element matches in the same index
    return element === arrayTwo4[index];
  });

console.log("result : ", result); // true

// How to compare arrays with the includes() method

let arrayOne5 = [7, 8, 9];
let arrayTwo5 = [9, 7, 8];

let result2 =
  arrayOne5.length === arrayTwo5.length &&
  arrayOne5.every(function (element) {
    return arrayTwo5.includes(element);
  });

console.log("result2 : ", result2); // true

// When the element isn't found, the indexOf() method returns -1. This means you need to make every() return true when indexOf(element) !== -1 as shown below:

let arrayOne6 = [7, 8, 9];
let arrayTwo6 = [9, 7, 8];

let result3 =
  arrayOne6.length === arrayTwo6.length &&
  arrayOne6.every(function (element) {
    return arrayTwo6.indexOf(element) !== -1;
  });

console.log("result3 : ", result3); // true

///---------------------------------------------------------------------------------------------------

// How to Copy an Array
// One way to copy an array is to use the slice() method, which is provided exactly for copying an array.

let arrayOne7 = [7, 8, 9];
let arrayTwo7 = arrayOne7.slice();

console.log(arrayOne7); // [ 7, 8, 9 ]
console.log(arrayTwo7); // [ 7, 8, 9 ]

// But it might become an issue when you copy an array of objects.
let arrayOne8 = [{ name: "Jack", age: 25 }];
let arrayTwo8 = arrayOne8.slice();

console.log(arrayOne8); // [ { name: 'Jack', age: 25 } ]
console.log(arrayTwo8); // [ { name: 'Jack', age: 25 } ]

arrayTwo8[0].name = "Weder Sousa";

console.log("arrayOne8 : ", arrayOne8); // [ { name: 'Weder Sousa', age: 25 } ]
console.log("arrayTwo8 : ", arrayTwo8); // [ { name: 'Weder Sousa', age: 25 } ]

// How to create a deep copy of an array
// The JSON.stringify() transforms the array into a JSON string, and JSON.parse() converts that string back into an array.
// Because the copy is created from a JSON string, there's no connection to the original array anymore:

let arrayOne9 = [{ name: "Jack", age: 25 }];
let arrayTwo9 = JSON.parse(JSON.stringify(arrayOne9));

console.log(arrayOne9); // [ { name: 'Jack', age: 25 } ]
console.log(arrayTwo9); // [ { name: 'Jack', age: 25 } ]

arrayTwo9[0].name = "Weder Sousa";

console.log("arrayOne9 : ", arrayOne9); // [ { name: 'Jack', age: 25 } ]
console.log("arrayTwo9 : ", arrayTwo9); // [ { name: 'Weder Sousa', age: 25 } ]

///---------------------------------------------------------------------------------------------------
// How to Merge Two Arrays into One

let cats = ["tiger", "cat"];
let birds = ["owl", "eagle"];

let animals16 = cats.concat(birds);

console.log(animals16); // [ 'tiger', 'cat', 'owl', 'eagle' ]
console.log(cats); // [ 'tiger', 'cat' ]
console.log(birds); // [ 'owl', 'eagle' ]

let cats2 = ["tiger", "cat"];
let birds2 = ["owl", "eagle"];

let animals17 = [].concat(cats2, birds2);

// The concat() method allows you to merge as many arrays as you need. The following example merges three arrays as one:

let cats3 = ["tiger", "cat"];
let birds3 = ["owl", "eagle"];
let dogs3 = ["wolf", "dog"];

let animals18 = [].concat(cats3, birds3, dogs3);
console.log(animals3); // [ 'tiger', 'cat', 'owl', 'eagle', 'wolf', 'dog' ]

// How to merge arrays with the spread operator
// The spread operator ... can be used to expand elements of the arrays you want to merge. You need to put the expanded elements in one new array as follows:

let cats4 = ["tiger", "cat"];
let birds4 = ["owl", "eagle"];

let animals19 = [...cats4, ...birds4];
console.log(animals19); // [ 'tiger', 'cat', 'owl', 'eagle' ]

///---------------------------------------------------------------------------------------------------
/// How to Search an Array

// 1. How to find whether an element exists in an array
// If you only want to know if a certain element exists in an array, you can use the includes() method. The following example searches for the string value 'e' in an array of strings:

let letters = ["a", "b", "c", "d"];
console.log(letters.includes("e")); // false

// How to find the index position of an element in an array
// Other times, you might want to get the index position of the element. You need to use the indexOf() method in that case:

let letters2 = ["a", "b", "c", "d"];
console.log(letters2.indexOf("c")); // 2

// How to find elements that meet certain criteria in an array
// To find elements that meet certain criteria, you need to use the filter() method.

let stockPrices = [3, 7, 2, 15, 4, 9, 21, 14];
let filteredPrices = stockPrices.filter(function (currentElement) {
  return currentElement > 5;
});
console.log(filteredPrices); // [7, 15, 9, 21, 14]

/// How to filter an array of objects
// The filter() method can also be used on an array of objects.

let stocks = [
  { code: "GOOGL", price: 1700 },
  { code: "AAPL", price: 130 },
  { code: "MSFT", price: 219 },
  { code: "TSLA", price: 880 },
  { code: "FB", price: 267 },
  { code: "AMZN", price: 3182 },
];

// Now you need to filter the array to contain only stocks with price value less than 1000. Here's how you do it:
let filteredStocks = stocks.filter(function (currentElement) {
  return currentElement.price < 1000;
});

console.log(filteredStocks);

///---------------------------------------------------------------------------------------------------

///---------------------------------------------------------------------------------------------------

///---------------------------------------------------------------------------------------------------

///---------------------------------------------------------------------------------------------------

///---------------------------------------------------------------------------------------------------

///---------------------------------------------------------------------------------------------------

///---------------------------------------------------------------------------------------------------

///---------------------------------------------------------------------------------------------------

var days = [];
const now = moment();
var day1 = moment(now).add(1, "days");

for (var indx = 10; indx > 0; indx++) {
  days.push(moment(now).subtract(indx, "days"));
}

for (var indx2 = 0; indx2 < 10; indx2++) {
  days.push(moment(now).add(indx2, "days"));
}

for (const day of days) {
  console.log("", day);
}
