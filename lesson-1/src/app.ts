//Classes
import {Invoice} from './classes/Invoice.js'
import { Payments} from './classes/Payments.js'
import { HasFormatter } from './interfaces/HasFormatter.js'

let docOne :HasFormatter
let docTwo : HasFormatter
docOne = new Invoice('Athreya','some coffee',80)
docTwo = new Payments('Harshith ', 'some tea ',50)

let docs : HasFormatter[] = []
docs.push(docOne,docTwo)
console.log(docs, 'the docs complying with the interface')
// const invOne = new Invoice('Athreya ','daily snacks ',500)
// const invTwo = new Invoice('Harshith ','lunches',150)

// console.log(invOne)
// console.log(invTwo)

// const invoices : Invoice[] = []
// // invTwo.client = 'Athreya' one can change the values as they are public properties
// invoices.push(invOne,invTwo)

// /*
// invoices.forEach(inv =>{
//     inv.client = 'random' // not possible readonly 
//     console.log(inv.client,inv.details,inv.format()) // details not accessible because private
// })
// */
// invoices.forEach(inv =>{
//     console.log(inv.client,inv.amount,inv.format())
// })

// console.log('using the modular approach')



// console.log(invoices, 'invoice array')
// let anchor = document.querySelector('a')
// console.log(anchor)
// // console.log(anchor.href) only this gives the error as it (anchor )might have null values 
// if(anchor)
//     console.log(anchor.href) 

// // or even this can be done

// let anchor1 = document.querySelector('a')!; // ! asserts that the element exists
// console.log(anchor1.href) 

// // can even type cast as  following if classname is used inside querySelector() 

const form = document.querySelector('.new-item-form') as HTMLFormElement;
// // console.log(form.children)

const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit',(e:Event)=>{
    e.preventDefault()
    let doc : HasFormatter;
    if(type.value ==='invoice')
        doc = new Invoice(tofrom.value,details.value,amount.valueAsNumber);
    else
        doc = new Payments(tofrom.value,details.value,amount.valueAsNumber)

    console.log(doc)
    // console.log(
    //     type.value,
    //     tofrom.value,
    //     details.value,
    //     amount.valueAsNumber //this makes the value as a number
    // );
})