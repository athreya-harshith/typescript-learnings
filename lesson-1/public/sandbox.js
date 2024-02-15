"use strict";
let greet;
greet = () => {
    console.log('hello again');
};
greet();
let add = (a, b, c) => {
    console.log(a + b);
    console.log(c); // default value is undefined
}; //return type is void
add(1, 4);
add(10, 20, '123');
add(5, 5, 2);
let add1 = (a, b, c = 10) => {
    //some task
}; //return type is void
let minus = (a, b) => {
    return a - b;
};
let res = minus(24, 12);
console.log(res);
