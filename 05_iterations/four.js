const myObject = {
    js: 'javascript',
    py: 'python',
    cpp: 'C++',
    rb: 'ruby'
}

// for (const key in myObject){
//     console.log(`${key} shortcut is for ${myObject[key]}`);
// }

const programming = ["JS", "py", "rb", "java","cpp"]
for (const key in programming){
    console.log(programming[key]);
}