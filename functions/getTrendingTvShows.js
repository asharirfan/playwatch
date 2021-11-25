import config from '@/utils/config';
import axios from 'axios';

/**
 * Get trending tv shows by day.
 *
 * @param  {number}      page Number of page. Default is 1.
 * @return {null|object}      Movies object or null if failed.
 */
async function getTrendingTvShowsByDay(page = 1) {
	let tvShowsResponse = null;

	try {
		tvShowsResponse = await axios(
			`${config.trendingTvShowsByDay}&page=${page}`
		);
	} catch (error) {
		console.error(error);
	}

	return tvShowsResponse ? tvShowsResponse.data : { results: [] };
}

export { getTrendingTvShowsByDay };
