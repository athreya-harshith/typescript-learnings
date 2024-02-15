"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Invoice = void 0;
var Invoice = /** @class */ (function () {
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
    function Invoice(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    Invoice.prototype.format = function () {
        // this.client = 'modified' not possible 
        return "".concat(this.client, " owes $").concat(this.amount, " for ").concat(this.details);
    };
    return Invoice;
}());
exports.Invoice = Invoice;
