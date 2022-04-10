import Component from "./component";
import Img from "./img";

export default class VideoItem extends Component {
	constructor({title, description, file, thumbnail}) {
		super(
			'a',
			{name: 'href', value: file},
			[
				new Img(`https://source.unsplash.com/${thumbnail}/600x340`),
				new Component('section', {name: 'class', value: 'infos'}, [
					new Component('h4', null, title),
					new Component('p', null, description)
				])
			]
		);
	}
}
