export default class Component {
	tagName;
	children;
	attribute
	constructor(tagName, attribute, children) {
		this.tagName   = tagName;
		this.children  = children;
		this.attribute = attribute;
	}

	render(){
        let attr = ''
		if (this.attribute) {
			attr = this.renderAttribute();
		}

        let children = '';
		if (this.children) {
			children = this.renderChildren();
		} else {
			return `<${this.tagName} ${attr}/>`;
		}

		return `<${this.tagName} ${attr}>${children}</${this.tagName}>`;

	}

	renderAttribute() {
		return  `${this.attribute.name}="${this.attribute.value}"`
	}

    renderChildren() {
        if (this.children instanceof Array) {
            return this.children.reduce( (str, data) => {
                if (data instanceof Component) {
                    return str + data.render();
                }
                return str + data;
                }, '');
        }
        
        return this.children;
    }
}

