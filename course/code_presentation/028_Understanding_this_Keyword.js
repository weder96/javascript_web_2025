// a "constructor" call is any use of the `new`
// keyword in front of a function.
// The `this` keyword will point to the function instance.
function Person(name, age) {
    this.name = name;
    this.age = age;
}

let person1 = new Person("Joe", 34);
let person2 = new Person("Sarah", 27);

console.log(person1.name) // "Joe"
console.log(person2.name) // "Sarah"