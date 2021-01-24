import { HasFormatter } from '../interfaces/HasFormater';

export class ListTemplate {
	constructor(private container: HTMLUListElement) {
		this.container = container;
	}

	render(item: HasFormatter, heading: string, pos: 'start' | 'end'): void {
		const li = document.createElement('li');
		const h4 = document.createElement('h4');
		const p = document.createElement('p');

		h4.innerText = heading;
		p.innerText = item.format();

		li.append(h4);
		li.append(p);

		if (pos === 'start') {
			this.container.prepend(li);
		} else {
			this.container.appendChild(li);
		}
	}
}
