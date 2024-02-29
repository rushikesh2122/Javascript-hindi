const score = 400;
// console.log(score);

const balance = new Number(100);
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));  // => 100.00

const anotherNumber = 25.4567
// console.log(anotherNumber.toPrecision(4)); //=> 25.46

const hundered = 1000000
// console.log(hundered.toLocaleString());


// ++++++++++++++++++++++  Maths  +++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4)); //=> 4   Makes -ve value +ve (absolute)
// console.log(Math.round(4.6)); //=> 5  Makes round off for above 5 decimal
// console.log(Math.ceil(4.2));  //=> 5 takes upper value
// console.log(Math.floor(4.9)); //=> 4 takes lower value

// console.log(Math.min(4,3,2,5));
// console.log(Math.max(3,6,8,4));

// console.log(Math.random());
// console.log((Math.random()*10)+ 1);
// console.log(Math.floor(Math.random()*10)+ 1);

const min =10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1))+ min);