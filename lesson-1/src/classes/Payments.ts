import { HasFormatter } from "../interfaces/HasFormatter.js"
export class Payments implements HasFormatter
{ 
    constructor(
        readonly recipient:string,
        private details:string,
        public amount : number
    ){}


    format()
    {
        // this.client = 'modified' not possible 
        return `${this.recipient} owes $${this.amount} for ${this.details}`
    }
}