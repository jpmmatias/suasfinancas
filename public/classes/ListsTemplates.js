var ListTemplate = /** @class */ (function () {
    function ListTemplate(container) {
        this.container = container;
        this.container = container;
    }
    ListTemplate.prototype.render = function (item, heading, pos) {
        var li = document.createElement('li');
        var h4 = document.createElement('h4');
        var p = document.createElement('p');
        h4.innerText = heading;
        p.innerText = item.format();
        li.append(h4);
        li.append(p);
        if (pos === 'start') {
            this.container.prepend(li);
        }
        else {
            this.container.appendChild(li);
        }
    };
    return ListTemplate;
}());
export { ListTemplate };
