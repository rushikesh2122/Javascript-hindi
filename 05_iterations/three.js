const arr = [1, 2, 3, 4, 5]

for (const num of arr){
    // console.log(num);
}

const greetings = "Namaste Bharat";
for (const greet of greetings){
    // console.log(`Each char is ${greet}`);
}

// Maps

const map = new Map();
map.set('IN',"India");
map.set('USA', "United States Of America");
map.set('UAE', "United Arab Emirates")

// console.log(map);

const map1 = new Map()
map1.set("TML", "Tata Motors")
map1.set("BMW", "British Motor works")
map1.set("JLR", "Jaguar and Land Rover")

// console.log(map1);

const myObj = {
    game1: 'NFS',
    game2: 'CandyCrush'
}

for (const [key, value] of myObj){
    console.log(key, ":", value);
}