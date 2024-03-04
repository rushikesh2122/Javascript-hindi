// const tinderUser = new Object();  Singleton Object

const tinderUser = {};  //Non Singleton

tinderUser.id = "123abc";
tinderUser.name = "Rushikesh";
tinderUser.isLoggedIn = true;
// console.log(tinderUser);

const regularUser = {
    email: "abc@gamil.com",
    fullName: {
        username: {
            firstname: "Rushikesh",
            lastname: "Malwale",
        }
    }
}
// console.log(regularUser.fullName.username.firstname);

const obj1 = {1:"a",2:"b"};
const obj2 = {3:"c",4:"d"};
// const obj3 = Object.assign(obj1,obj2)
const obj3 = {...obj1, ...obj2}
// console.log(obj3);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
    coursename: "Js in hindi",
    price: "999",
    courseInstructor: "rushikesh"
}
const {courseInstructor: instructor} =  course;
console.log(instructor);

// Json 
// {
//     "name": "Rushikesh",
//     "coursename": "JS in hindi",  
//     "price": "Free"
// }
