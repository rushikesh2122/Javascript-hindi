// Primitve DataTypes 

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt 

const score = 100;        
const scoreValue = 100.5;  // => data type = Number
const outsideTemp = null;  // => data type = Object

const id = Symbol(123);    // => data type = Symbol
const diffId = Symbol(123);

console.log(id == diffId);
const bigNumber = 3456786789900n;  // => data type = BigInt



//  Reference (Non Primitive)

// Array, Objects, Functions 

const iplTeams = ["MI", "RCB", "GT","CSK"];   // => data type = Array
let myObj = {                                 // => data type = object
    name: "Rushikesh",
    age: "23",
}

const myFunction = function(){   // => data type = function
    console.log("Hello World");
}

console.log(typeof iplTeams )


// ** IMP ** 
// Type of Val          Result
// undefined      =>  "undefined"
// null           =>  "object"
// boolean        =>  "boolean"
// number         =>  "number"
// string         =>  "string"
// object         =>  "function"
// Array          =>  "Object"