// JS data can be converted to a JSON string:
let obj1 = {a : 42, b : "blah", c : [123]};
let string1 = JSON.stringify(obj1);
console.log(string1);
// '{"a":42,"b":"blah","c":[123]}'

// And JSON data strings can be converted back to data:
let obj2 = JSON.parse(string1);
console.log(obj2);
// {a : 42, b : "blah", c : [123]}

// Parsed objects are new references:
console.log(obj1 === obj2) // false
