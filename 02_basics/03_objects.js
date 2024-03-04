// Singleton 
// Object.create


// Object Literals
const sym = Symbol("key1");

const JsUser = {
    name: "Rushikesh",
    "fullName": "Rushikesh Malwale",
    age: 18,
    [sym]: "myKey1",
    location: "Sambhajinagar",
    email: "rushikeshmalwale@gmail.com",
    isloggedin: true,
    lastLoginDays: ["Tuesday","Wednesday"]
}
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser.fullName);
// console.log(JsUser[sym]);

JsUser.email = "rushikesh@google.com";
// Object.freeze(JsUser);
JsUser.email = "malwale@gmail.com";
// console.log(JsUser);

JsUser.greetings = function() {
    console.log("Hello JS Users");
}
// console.log(JsUser.greetings());
JsUser.greetingsTwo = function() {
    console.log(`Hello JS Users, ${this.name}`)
}
// console.log(JsUser.greetingsTwo());