function* myGenFunc() {
 yield 1;
 yield 2;
 yield 3; 
};
let iterator = myGenFunc();
// Iterators are objects with a `next()` function:
let result1 = iterator.next().value;
console.log(result1) 