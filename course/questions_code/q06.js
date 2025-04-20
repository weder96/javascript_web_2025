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

obj1.c = 3;
obj1.b = "blah";

delete obj1.a;

// You can use variables to index into an object
let keyName = "c";
console.log(obj1[keyName])
obj1.hasOwnProperty("c")
obj1.hasOwnProperty("d")