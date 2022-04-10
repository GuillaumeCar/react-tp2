import Component from "./component";

export default class Img extends Component {
	constructor(src) {
		super('img', {name: 'src', value: src});
	}
}
