// Arrays
var names = ['athreya', 'harshith', 'alice', 'bob'];
names.push('james'); // valid
// names.push(29);// error
var numbers = [19, 12, 12, 1, 11, 1, 223, 2];
// numbers.push('alice') invalid
numbers.push(200); // valid
var mixed = ['alice', 23, 'bob', 10];
mixed.push('hello');
mixed.push(44);
mixed[3] = 'athreya';
// Objects
var obj = {
    name: 'athreya',
    place: 'mysore',
    age: 21
};
// obj.age ='hello' not possible
// obj.skills = ['coding'] not possible
obj = {
    name: 'harshith',
    place: 'mandya',
    age: 20
};
// note that the structure after re-assigning the object must hold as well !!
