const user = {
    username: "Rushikesh",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`)

        console.log(this);
    }
}
// user.welcomeMessage(); 
// user.username = "Sam bahadur" 
// user.welcomeMessage();          

// console.log(this);

// function chai(){
//     console.log(this.username)
// }
// chai();

// const chai = function(){
//     let username = "Rushikesh"
//     console.log(this.username);
// }

const chai = () => {
    let username = "Rushikesh"
    console.log(this);
}
// chai();

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => (num1 + num2)

// const addTwo = (num1, num2) => ({username: "Rushikesh"})
// console.log(addTwo(3,4));
