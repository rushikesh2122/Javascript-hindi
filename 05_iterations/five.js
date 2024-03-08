const coding = ["js", "rb", "py", "cpp"]

coding.forEach( function (ele){
    // console.log(ele);
})

coding.forEach( (item) =>{
    // console.log(item);
})

// coding.forEach(printMe)

coding.forEach((item, index, arr ) => {
    // console.log(item, index, arr);
})

const myCoding = [
    {
        langName: "javascript",
        langFileName: "js"
    },
    {
        langName: "Java",
        langFileName: "java"
    },
    {
        langName: "python",
        langFileName: "py"
    }
]

myCoding.forEach((item)=>{
    console.log(item.langFileName);
})