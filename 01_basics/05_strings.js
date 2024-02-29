const name = "Rushikesh";
const repoCount = "50";
//  console.log(name + " "+ repoCount + "Value");

//  console.log(`My Name is ${name} and my repoCount is ${repoCount}.`);

 const gameName =new String ("Rushikesh");

//  console.log(gameName[0]);
//  console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(0));
// console.log(gameName.indexOf('h'));

const newString = gameName.substring(0,5);
// console.log(newString);

const anotherString = gameName.slice(-8,4);
// console.log(anotherString);

const newStringOne = "  Rushikesh  ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://rushikeshmalwale.com/rushikesh%10malwale"

console.log(url.replace('%10','-'));
console.log(url.includes('rushikesh'));

console.log(gameName.split('-'));

