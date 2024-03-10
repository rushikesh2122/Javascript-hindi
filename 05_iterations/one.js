// for 

// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     if (element == 5){
//         console.log("5 is the best number");
    // }
    // console.log(element);
    
// }
// console.log(element);

// for (let i=1; i<= 10; i++){
//     console.log(`Outer Loop Value: ${i}`);
//     for (let j=1; j<= 10; j++){
//     // console.log(`Inner loop value ${j} and inner loop${i}`);
//     console.log(i + '*'+ j + '=' + i*j )
//     }
// }

// let array = ["Doremon", "Ben10","Pockeman"];
// console.log(array.length);
// for (let i=0; i<= array.length;i++){
//     const ele = array[i];
//     console.log(ele);
// }


// break and continue

// for (let i=0; i<=20; i++){
//     if (i == 5){
//         console.log("5 Detected");
//         continue;
//     }
//     console.log(`value of i is :${i}`);
// }


const numbers = [0, 1, 2, 3, 4, 5];
// const result = [];
// numbers.filter( (ele) => {
    // if (ele<3){
//        result.push(ele) 
//     }
// });
// console.log(result);

// const result = numbers.toString();
// // console.log(result)
// const obj = {... numbers};   //=> array to object 
// console.log(obj)


// +++++++++++++ IMP ++++++++++++++
const user1 = {
    name: "Rushikesh",
    age: 22,
    Design: "Student",
    address: {
        City: "Sambhajinagar",
        State: "Maharashtra"
    },
}
const user2 = user1;

user1.name = "Rohit";
user1.address.City = "Pune";

// console.log(user1);
// console.log(user2);

console.log([1,2] == [1,2]);
console.log