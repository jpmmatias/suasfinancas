var Fatura = /** @class */ (function () {
    function Fatura(c, details, amount) {
        this.client = c;
        this.details = details;
        this.amount = amount;
    }
    Fatura.prototype.format = function () {
        return this.client + " deve R" + this.amount + " por " + this.details;
    };
    return Fatura;
}());
export { Fatura };
