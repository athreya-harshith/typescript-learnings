import { HasFormatter } from "../interfaces/HasFormatter.js"
export class Invoice implements HasFormatter
{ 
    
    // readonly client:string;
    // private details:string;
    // public amount:number;
    
    // constructor(c:string,d:string,a:number)
    // {
    //     this.client = c;
    //     this.details = d;
    //     this.amount = a;
    // }
    
    /* Below is the short form of the above  */
    constructor(
        readonly client:string,
        private details:string,
        public amount : number
    ){}


    format()
    {
        // this.client = 'modified' not possible 
        return `${this.client} owes $${this.amount} for ${this.details}`
    }
}