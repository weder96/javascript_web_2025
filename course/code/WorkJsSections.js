///--------------------------------------------------------------------------------------------------------
/**
 * @description  Using Spread Operator
 * @author Weder Sousa
 * @version >= 6.0
 * @param { Object } history => contains person
 * @param { Function } print => property passed from parent to print using some
 * @see {@link https://javascript.info/destructuring-assignment}
 * @returns { object }
 **/

var a, b, rest;
[a, b, ...rest] = [10, 20, 30, 40, 50];
//console.log(a, b)
//console.log(rest)

///--------------------------------------------------------------------------------------------------------
/**
 * @description check Time execute method
 * @author Weder Sousa
 * @version >= 5.0
 **/
var start = Date.now();
for (var indxLine = 0; indxLine < 5000; indxLine++) {
  for (var indxRow = 0; indxRow < 5000; indxRow++) {}
}
var end = Date.now();
var timeSpent = (end - start) / 1000 + "secs";
//console.log('timeSpent : ', timeSpent);

///--------------------------------------------------------------------------------------------------------

/**
 * @description compare string for ordering
 * @author Weder Sousa
 * @version >= 5.0
 **/
var a = "apples";
var b = "bananas";
var c = "cranberries";
var d = "now";

// console.log(a.localeCompare(b)); // -1
// console.log(a.localeCompare(c)); // -1
//console.log(c.localeCompare(b)); // 1
//console.log(d.localeCompare(a)); // 1

var arr = ["bananas", "cranberries", "apples"];
arr.sort(function (a, b) {
  return a.localeCompare(b);
});
//console.log(arr); // [ "apples", "bananas", "cranberries" ]

///--------------------------------------------------------------------------------------------------------

//#Section 7.8: Splitting a string into an array
/**
 * @description Use .split to go from strings to an array of the split substrings:
 * @author Weder Sousa
 * @version >= 5.0
 **/

var s = "one, two, three, four, five";
var arrS = s.split(", "); // ["one", "two", "three", "four", "five"]
//console.log(arrS)

//#Use the array method .join to go back to a string:
var stringS = s.split(", ").join(", "); // "one--two--three--four--five"
// console.log(stringS)
///--------------------------------------------------------------------------------------------------------

//# Section 7.11: Substrings with slice
/**
 * @description Use .slice() to extract substrings given two indices:
 * @author Weder Sousa
 * @version >= 5.0
 **/

var hexaDecimal = "0123456789abcdef";
//console.log(hexaDecimal.slice(0, 5)); // "01234"
//console.log(hexaDecimal.slice(5, 6)); // "5"
// #Given one index, it will take from that index to the end of the string:
//console.log(hexaDecimal.slice(10)); // "abcdef"

///--------------------------------------------------------------------------------------------------------

//# Section 10.14: Grouping multiple logic statements
/**
 * @description You can group multiple boolean logic statements within parenthesis in order to create a more complex logic
                evaluation, especially useful in if statements.
 * @author Weder Sousa 
 * @version >= 5.0
 **/

var age = 18,
  height = 6,
  status = "royalty",
  hasInvitation = true;
if ((age >= 18 && height >= 5.11) || (status === "royalty" && hasInvitation)) {
  //Bad
  console.log("You can enter our club");
}
// # We could also move the grouped logic to variables to make the statement a bit shorter and descriptive:

var isLegal = age >= 18;
var tall = height >= 5.11;
var suitable = isLegal && tall;
var isRoyalty = status === "royalty";
var specialCase = isRoyalty && hasInvitation;
var canEnterOurBar = suitable || specialCase;
if (canEnterOurBar)
  // Good
  console.log("You can enter our club");

if (chechCredentialsEnterClub()) {
  // Good
  console.log("You can enter our club");
}

function chechCredentialsEnterClub() {
  return (
    (age >= 18 && height >= 5.11) || (status === "royalty" && hasInvitation)
  );
}

///--------------------------------------------------------------------------------------------------------

///---------------------------------------------------------------------------------------------------------

// ### Seeting a default value for variable

var inputName = undefined;

//one Linear
var name = inputName || "Guest";
console.log(name);

//Non Linear
if (inputName) {
  name = inputName;
} else {
  name = "Guest";
}
console.log(name);

//Non Linear using ternary Operator
var name = inputName ? inputName : "Guest";
console.log(name);

///---------------------------------------------------------------------------------------------------------

// ###  Referential Transparency

// With our definition of function, we have made a statement that all the  functions are going to return the same value for the same input.
// This  property of a function is called a referential transparency.

// A simple  example is shown:
const sum = (a, b) => a + b;
var identity = (i) => {
  return i;
};
console.log(sum(4, 5) + identity(10));

///---------------------------------------------------------------------------------------------------------

// ### Imperative, Declarative, Abstraction

// Iterating over the Array Imperative Approach
var array = [1, 2, 3];
for (i = 0; i < array.length; i++) console.log(array[i]); //prints 1, 2, 3

// Iterating over the Array Declarative Approach
var array = [1, 2, 3];
array.forEach((element) => console.log(element)); //prints 1, 2, 3

///---------------------------------------------------------------------------------------------------------
// ### Replace switch case javascript

//Bad
var today = new Date();
var dayWeek = today.getDay();
switch (dayWeek) {
  case 0:
    console.log("Sunday");
    break;
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  default:
    console.log("Invalid Day");
}

//Good
var arrDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
console.log(arrDays[dayWeek]);
