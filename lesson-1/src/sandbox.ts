let greet : Function;
greet = ()=>{
    console.log('hello again');
}
greet()

let add = (a:number, b:number , c?:number|string)=>{
    console.log(a+b)
    console.log(c) // default value is undefined
}//return type is void
add(1,4)
add(10,20,'123')
add(5,5,2)

let add1 = (a:number,b:number,c:number|string=10) =>{
    //some task
}//return type is void

let minus = (a : number , b:number) : number =>{
    return a-b;
}

let res = minus(24,12);
console.log(res)