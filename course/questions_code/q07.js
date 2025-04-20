// "Destructuring" is creating local variables based on contents
let arr1 = ["a", "b", "c", "d"];
let [a, , c, d] = arr1;
let [a1, b1, ...otherLetters] = arr1;
console.log(otherLetters)

let [firstName, lastName] = "Mark Erikson".split(" ");
// Can even do object assignments! Notice no "let" for destructuring
let user = {};
[user.firstName, user.lastName] = "Mark Erikson".split(" ");
console.log(user)

// Defaults can be provided if the value is `undefined`
let arr2 = ["a", "b"];
let [a2, b2, c2 = "fallback"] = arr2;
// New arrays can be created using the `...` "spread" operator
let arr3 = ["e", ...otherLetters, "f"]
console.log(arr3)

// These are equivalent:
let arr4 = ["a", "b"];
let arr5 = [...arr4, "c"];
let arr6 = arr4.concat("c");
console.log(arr6)