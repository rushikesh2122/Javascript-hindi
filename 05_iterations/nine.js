const myNums = [1, 2, 3]

// const myTotal = myNums.reduce( function(acc, curval){
//     console.log(`acc: ${acc} and curval : ${curval}`);
//     return acc + curval;
// },0)

// const myTotal = myNums.reduce( (acc,cv) => acc + cv, 0)
// console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2000
    },
    {
        itemName: "mobile app",
        price: 3000
    },
    {
        itemName: "full stack",
        price: 1000
    },
    {
        itemName: "python",
        price: 1000
    },
]

const priceToPay = shoppingCart.reduce( (acc,item) => (acc + item.price), 0)
console.log(priceToPay);