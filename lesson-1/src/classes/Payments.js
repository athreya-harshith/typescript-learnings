"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Payments = void 0;
var Payments = /** @class */ (function () {
    function Payments(recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    Payments.prototype.format = function () {
        // this.client = 'modified' not possible 
        return "".concat(this.recipient, " owes $").concat(this.amount, " for ").concat(this.details);
    };
    return Payments;
}());
exports.Payments = Payments;
