var Pagamento = /** @class */ (function () {
    function Pagamento(c, details, amount) {
        this.recipient = c;
        this.details = details;
        this.amount = amount;
    }
    Pagamento.prototype.format = function () {
        return this.recipient + " pagou R$ " + this.amount + " por " + this.details;
    };
    return Pagamento;
}());
export { Pagamento };
