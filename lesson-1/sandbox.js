var age = 25;
// the any type can interchange its type in future
age = true;
console.log(true);
age = 'hello';
console.log(age);
var mixed = [];
mixed.push(5);
mixed.push('athreya');
mixed.push(false);
console.log(mixed);
var obj;
obj = {
    name: 'athreya',
    age: 21
};
console.log(obj);
obj = {
    name: 24,
    age: 'athreya'
};
console.log(obj);
//  as seen above with the object obj , its more prone to mistakes , hence use this with caution
