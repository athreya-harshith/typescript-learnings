// function signatures

let greet : (a:string, b:string) => void ; // its the signature of the function not the actual function

greet = (name : string, greeting:string ) => {
    console.log(`${name} says ${greeting}`)
}

let calc : (a:number,b:number,c:string )=> number; //signature

calc = (numOne :  number,numTwo :number ,action :string) =>{
    if(action === 'add')
        return numOne+numTwo;
    return numOne-numTwo // mandatory as the signature says returns number 
}

let logDetails : (obj :{name:string,age:number}) => void;

logDetails = (person : {name :string , age:number}) =>{
    console.log(person)
}

logDetails({name:'athreya',age:21})
