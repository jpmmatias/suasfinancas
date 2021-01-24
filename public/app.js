import { Fatura } from './classes/Fatura.js';
import { ListTemplate } from './classes/ListsTemplates.js';
import { Pagamento } from './classes/Pagamento.js';
var form = document.querySelector('.new-item-form');
var type = document.querySelector('#type');
var tofrom = document.querySelector('#tofrom');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
var ul = document.querySelector('ul');
var list = new ListTemplate(ul);
var handleSubmit = function (e) {
    var doc;
    e.preventDefault();
    if (type.value === 'fatura') {
        doc = new Fatura(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Pagamento(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, 'end');
};
form.addEventListener('submit', handleSubmit);
