import axios from 'axios';

const KEY = 'AIzaSyCdTF_Clq3oA-6cn4KOaDTuVXKC5SvQokw';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		maxResults: '5',
		key: KEY,
	}
});