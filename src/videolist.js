import Page from "./page.js";
import VideoItem from "./videoitem";

export default class VideoList extends Page {
	
	constructor(data) {
		super(
			'Recommandations',
			'videoList',
			data.map(item => {
					const videoItem = new VideoItem(item);
					return videoItem.render();
			})
		);
	}

	set videos(data) {
		this.children = data.map(item => {
			const videoItem = new VideoItem(item);
			return videoItem.render();
	});
	}

}
