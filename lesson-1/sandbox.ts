let character = 'athreya'
// character = false; not possible to assign a different type to the string 
// typescript  automatically infers the type of the variable accroding to the value assigned

let isCorrect = false;
// isCorrect = 38; not posssible

isCorrect = true;

const circumference = (diameter : number)=>{
    return diameter*Math.PI;
}

// console.log(circumference('hello')) //this would resultin NaN in browser
//  the above statement doesnt makes sense if we use (diametet) =>{}
//  hence the type is preffered

console.log(circumference(10))