import { HasFormatter } from '../interfaces/HasFormater';
export class Fatura implements HasFormatter {
	client: string;
	details: string;
	amount: number;

	constructor(c: string, details: string, amount: number) {
		this.client = c;
		this.details = details;
		this.amount = amount;
	}

	public format() {
		return `${this.client} deve R${this.amount} por ${this.details}`;
	}
}
