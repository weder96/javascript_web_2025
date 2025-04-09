enum Sizes { Small, Medium, Large}
Sizes.Medium; // => 1 // default to 0-indexed

// Enums can also be string-based
enum ThemeColors { Primary = 'primary', Secondary = 'secondary'}

// `any`: the "cheat code" for the type system.
let num1 : number = 4;
// num1 = "test"; // ❌ERROR: cannot assign a string to a number

let whoKnows: any = 4; // assigned a number
whoKnows = 'a beautiful string'; // can be reassigned to a string
whoKnows = false; // can be reassigned to a boolean, or whatever

// `void`: equivalent to `undefined`
let logAndReturnNothing = (): void => {
    console.log("hey there");
};

// TS can often "infer" types based on values:
let xa = 10; // x is given the number type

const tweetLength = (message = 'A default tweet') => {
    return message.length; // inferred string type, so this is okay
};