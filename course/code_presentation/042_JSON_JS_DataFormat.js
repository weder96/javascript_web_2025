// Example JSON data. Note: this comment can't exist in the file!
let json = {
    "firstName": "John",
    "lastName": "Smith",
    "isAlive": true,
    "age": 27,
    "address": {
      "streetAddress": "21 2nd Street",
      "city": "New York",
      "state": "NY",
      "postalCode": "10021-3100"
    },
    "phoneNumbers": [
      { "type": "home", "number": "212 555-1234" },
      { "type": "office", "number": "646 555-4567" },
      { "type": "mobile", "number": "123 456-7890" }
    ],
    "children": [],
    "spouse": null
}

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
obj1 === obj2 // false
