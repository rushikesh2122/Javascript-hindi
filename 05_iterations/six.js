// const coding = ["js", "rb", "py", "cpp"]

// const values = coding.forEach( (item) => {
//     console.log(item);
//     return item;
// })
// console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8]

// const newNums = myNums.filter( (num) => {
//     return num > 4;
// })

const newNums = []

myNums.forEach( (num)=>{
    if (num > 4){
        newNums.push(num)
    }
})

// console.log(newNums)

const books = [
    {title: "Book one", genre: "Non-Fiction", publish: 1998, edition: 2010},
    {title: "Book Two", genre: "History", publish: 2000, edition: 2012},
    {title: "Book Three", genre: "Fiction", publish: 2002, edition: 2011}
]
    
let userBooks = books.filter( (bk) => bk.edition == 2010);

userBooks = books.filter( (bk) => {
    return bk.publish >= 1998 && bk.genre === "History";
})
console.log(userBooks);