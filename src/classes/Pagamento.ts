import { HasFormatter } from '../interfaces/HasFormater';
export class Pagamento implements HasFormatter {
	recipient: string;
	details: string;
	amount: number;

	constructor(c: string, details: string, amount: number) {
		this.recipient = c;
		this.details = details;
		this.amount = amount;
	}

	public format() {
		return `${this.recipient} pagou R$ ${this.amount} por ${this.details}`;
	}
}
