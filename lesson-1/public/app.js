"use strict";
let anchor = document.querySelector('a');
console.log(anchor);
// console.log(anchor.href) only this gives the error as it (anchor )might have null values 
if (anchor)
    console.log(anchor.href);
// or even this can be done
let anchor1 = document.querySelector('a'); // ! asserts that the element exists
console.log(anchor1.href);
// can even type cast as  following if classname is used inside querySelector() 
const form = document.querySelector('.new-item-form');
// console.log(form.children)
const type = document.querySelector("#type");
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber //this makes the value as a number
    );
});
