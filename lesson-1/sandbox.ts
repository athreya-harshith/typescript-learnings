// explicit types

let character : string
let age : number
let isLoggedIn:boolean

// isLoggedIn='not' not possible
isLoggedIn = true
character = 'athreya'
age = 21

// Arrays 

// let names : string[]
// names.push('athreya')
// console.log(names)
// even though could be done in the above way , it gives us the type error as names is not yet initialized as
// array but push() is being called 
// either do this names = ['some values'] , then names.push('some other values') 
// or do the below

let names : string[] = []
names.push('alice')
names.push('bob')
console.log(names)

let ages : number[] = []
ages.push(22,2)
console.log(ages)

// names.push(2); gives error

// Union types

let mixed : (string|boolean|number)[] = []
mixed.push('athreya')
mixed.push(21)
mixed.push(true)
console.log(mixed)

let uid : number|string
uid = '123'
console.log(uid)
uid = 123
console.log(uid)

//Objects

let obj : object

obj = {
    name:'athreya',
    work:'intern',
    age :21
}

console.log(obj,'object 1')

let obj1:{
    name:string,
    work:string,
    age:number
}

// obj1 = {
//     name:123
// } gives error

obj1 = {
    name:'harshith',
    work:'intern',
    age:20
}
console.log(obj1)
console.log('end')