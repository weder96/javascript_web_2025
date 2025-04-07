// Up through ES5, only the `var` keyword existed:
var a = 1;
// `var` is "function scoped" - all declarations are "hoisted"
// to the top of the enclosing function:
function func1() {
    // 2) "hoisted" as if it were declared on the first line
    // technically it exists right here, but is still undefined

    if(true ) {
        var b = "test"; // 1) declared here
    }
    if(true) {
        // 3) This declaration actually overrides the other one
        var b = "blah";
    }

    // 4) Still accessible in the outer function scope
    console.log("B is: ", b); // "blah"
}


// `var` also leaks outside of a `for` loop
for(var i = 0; i < 10; i++) {}
console.log(i); // 10 - it's a global variable now

// Technically you can declare global variables without `var`
c = 42

// The root object is `window` in a browser.
//console.log(window.i); // 10
//console.log(window.c); // 42

// In Node.js, it's `global`:
console.log(global.c);


// `let` and `const` are "block scoped", as you'd expect:
function func2() {
    console.log(a);
    if(true) {
        let a = 1;
    } 
}
func2() // Error: a is not defined
// And you can "shadow" variables:
function func3() {
    let a = 1;

    if(true) {
        const a = 2;
        console.log(a); // 2
    }

    console.log(a); // 1
}


// `let` allows reassigning to the same variable
let an = 1;
an = 2;

// `const` does not:
const b = 3;
b = 4; // error!

// However, `const` objects and arrays can be mutated!
const obj1 = {};
obj1.c = 5;

const arr1 = [];
arr1[0] = 6;
arr1.push(7);
//Strong style suggestion: prefer to always declare variables as const by default, and only use let if you know you will reassign the variable!