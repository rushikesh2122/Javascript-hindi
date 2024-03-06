function sayMyName (){
    console.log("R");
    console.log("U");
    console.log("S");
    console.log("H");
}
// sayMyName();

function addTwoNumber (num1,num2){  //parameters
    console.log(num1+num2);
}
// addTwoNumber(2,3);  // arguments

function addNumbers (num1, num2){
    // let result = num1 + num2;
    // return result;
    return num1 + num2;
}
const result = addNumbers(10,20);
// console.log("Result: ",result);

function loginUserMessage (username){
    if (!username){
        console.log("Plz enter a username");
        return 
    }
    return `${username}, just logged in`
}
// console.log(loginUserMessage("Rushikesh"));
// console.log(loginUserMessage());

function calculateCartPrice (val1, val2, ...num1){
    return num1;
}
// console.log(calculateCartPrice(100,200,5000));

const user = {
    username: "rush",
    price: 199
}
function handleObject (anyobj){
    console.log(`username is ${anyobj.username}, and price is ${anyobj.price} `);
}
// handleObject(user);

const MyArray = [100,200,300,400];

function returnValue (getArray){
    console.log(getArray[2]);
}
returnValue(MyArray);