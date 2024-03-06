let a =100;
const b = 200;
// var c = 300;

if (true){
    let a = 10;
    const b =20;
    var c = 30;
    // console.log(a);
}

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "rushikesh"

    function two(){
        const website = "Youtube"
        console.log(username);
    }
    // console.log(website);

    two();

}
// one();

if (true){
    const username = "Rushikesh"
    if (username === "Rushikesh"){
        const website = "Youtube"
        console.log(username + website);
    }
    console.log(username);
}
// console.log(username);


// ++++++++++++++++ Interesting +++++++++++++++++

// console.log(addone(5));
function addone (num) {
    return num + 1;
}


const addTwo = function(num){
    return num + 2;
}
// console.log(addTwo(10));
