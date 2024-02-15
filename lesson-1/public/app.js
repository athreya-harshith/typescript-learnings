"use strict";
//Classes
class Invoice {
    constructor(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    format() {
        return `${this.client} owes $${this.amount} for ${this.details}`;
    }
}
const invOne = new Invoice('Athreya ', 'daily snacks ', 500);
const invTwo = new Invoice('Harshith ', 'lunches', 150);
console.log(invOne);
console.log(invTwo);
const invoices = [];
// invTwo.client = 'Athreya' one can change the values as they are public properties
invoices.push(invOne, invTwo);
console.log(invoices, 'invoice array');
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
