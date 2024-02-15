export class Payments {
    constructor(recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    format() {
        // this.client = 'modified' not possible 
        return `${this.recipient} owes $${this.amount} for ${this.details}`;
    }
}
