// Immediately Invoked Function Expressions (IIFE)

(function chai(){
    console.log(`DB Connected`);
})();

( () => {
    console.log(`DB Connected Two`);
})();

( (username) => {
    console.log(`My Name is ${username}.`);
})("Rushikesh")