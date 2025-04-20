// JS objects act like "dictionaries" or "maps" in other languages
// They're key/value pairs. Keys must be strings, values are anything
let obj1 = {    
    "a" : 1,    
    "b" : 2,    
    "first.last" : "Weder Sousa",
    // and values can be whatever
    "dashed-name" :  {nested : {data : ["here"]}},
    someFunction : function() {}
};
// Object fields can be accessed using dot or string notation
console.log(obj1["a"])
console.log(obj1.b)
console.log(obj1["dashed-name"].nested.data)