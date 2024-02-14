// explicit types
var character;
var age;
var isLoggedIn;
// isLoggedIn='not' not possible
isLoggedIn = true;
character = 'athreya';
age = 21;
// Arrays 
// let names : string[]
// names.push('athreya')
// console.log(names)
// even though could be done in the above way , it gives us the type error as names is not yet initialized as
// array but push() is being called 
// either do this names = ['some values'] , then names.push('some other values') 
// or do the below
var names = [];
names.push('alice');
names.push('bob');
console.log(names);
var ages = [];
ages.push(22, 2);
console.log(ages);
// names.push(2); gives error
// Union types
var mixed = [];
mixed.push('athreya');
mixed.push(21);
mixed.push(true);
console.log(mixed);
var uid;
uid = '123';
console.log(uid);
uid = 123;
console.log(uid);
//Objects
var obj;
obj = {
    name: 'athreya',
    work: 'intern',
    age: 21
};
console.log(obj, 'object 1');
var obj1;
// obj1 = {
//     name:123
// } gives error
obj1 = {
    name: 'harshith',
    work: 'intern',
    age: 20
};
console.log(obj1);
console.log('end');
