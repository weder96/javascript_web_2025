// Multiple "named exports" per file:
export function addTodo() {}
export const toggleTodo = () => {}
export class MyClass {}

export let a = 1;

// Can also write export separate from declaration:
const deleteTodo = () => {};
let b = 2;
export {deleteTodo, a, b as b2};

// Only one single "default export" per file:
export default 42;

// Could also do:
const c = 3;
export default c;

// Or even create an object (NOT the same as named exports!)
const exportObject = {a, b, c};
export default exportObject;


// Importing "named exports" requires curly braces,
// and the names _must_ match identically
import {addTodo, toggleTodo, a, b2} from "./todoActions";

// You can also turn all named imports into a single object:
import * as combinedExports from "./todoActions";
console.log(combinedExports.a) // 1

// You can rename named exports
import {a as a2} from "./todoActions";

// Importing "default exports" requires _no_ curlies,
// and you can name it whatever you want:
import TheNumberThree from "./todoActions";

// You can import both default and named exports in one line:
import Three, {addTodo, b2} from "./todoActions";