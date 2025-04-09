// This TypeScript code with a type declaration:
const greeting = (person: string) => {
    console.log('Good day ' + person);
};
greeting('Daniel');

// Compiles to this plain JS code:
var greetingNew = function(person) {
    console.log('Good day ' + person);
};
greeting('Daniel');


// Basic TS/JS types:
let isAwesome : boolean = true;
let nameNew : string = "Mark";
let meaningOfLife : number = 42;

// Arrays:
let letters : string[] = ["a", "b", "c"];

// "Tuples": fixed-size arrays with specific types
let tuple1: [string, number, boolean];
tuple1 = ['chair', 20, true]; // ✅
// tuple1 = [5, 20, true]; // ❌ - Should be a string, not a number