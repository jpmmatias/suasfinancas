import { Fatura } from './classes/Fatura.js';
import { ListTemplate } from './classes/ListsTemplates.js';
import { Pagamento } from './classes/Pagamento.js';
import { HasFormatter } from './interfaces/HasFormater';

const form = document.querySelector('.new-item-form') as HTMLFormElement;
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

const ul = document.querySelector('ul')!;

const list = new ListTemplate(ul);

const handleSubmit = (e: Event) => {
	let doc: HasFormatter;
	e.preventDefault();
	if (type.value === 'fatura') {
		doc = new Fatura(tofrom.value, details.value, amount.valueAsNumber);
	} else {
		doc = new Pagamento(tofrom.value, details.value, amount.valueAsNumber);
	}
	list.render(doc, type.value, 'end');
};

form.addEventListener('submit', handleSubmit);
