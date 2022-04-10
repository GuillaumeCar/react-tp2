import Component from "./component";

export default class Page extends Component {
    title;
	constructor(title, className, children) {
        super('div', {name: 'class', value: className}, children);
		this.title = title;
        
	}

    renderTitle() {
        const pageTitle = new Component('h1', null, this.title);
        return pageTitle.render();
    }
}
