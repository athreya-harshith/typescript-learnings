let anchor = document.querySelector('a')
console.log(anchor)
// console.log(anchor.href) only this gives the error as it (anchor )might have null values 
if(anchor)
    console.log(anchor.href) 

// or even this can be done

let anchor1 = document.querySelector('a')!; // ! asserts that the element exists
console.log(anchor1.href) 

// can even type cast as  following if classname is used inside querySelector() 

const form = document.querySelector('.new-item-form') as HTMLFormElement;
// console.log(form.children)

const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit',(e:Event)=>{
    e.preventDefault()

    console.log(
        type.value,
        tofrom.value,
        details.value,
        amount.valueAsNumber //this makes the value as a number
    );
})