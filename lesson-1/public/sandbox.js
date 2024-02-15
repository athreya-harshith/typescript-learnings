"use strict";
// function signatures
let greet; // its the signature of the function not the actual function
greet = (name, greeting) => {
    console.log(`${name} says ${greeting}`);
};
let calc; //signature
calc = (numOne, numTwo, action) => {
    if (action === 'add')
        return numOne + numTwo;
    return numOne - numTwo; // mandatory as the signature says returns number 
};
let logDetails;
logDetails = (person) => {
    console.log(person);
};
logDetails({ name: 'athreya', age: 21 });
