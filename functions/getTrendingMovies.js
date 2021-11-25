import config from '@/utils/config';
import axios from 'axios';

/**
 * Get trending movies by day.
 *
 * @param  {number}      page Number of page. Default is 1.
 * @return {null|object}      Movies object or null if failed.
 */
async function getTrendingMoviesByDay(page = 1) {
	let moviesResponse = null;

	try {
		moviesResponse = await axios(
			`${config.trendingMoviesByDay}&page=${page}`
		);
	} catch (error) {
		console.error(error);
	}

	return moviesResponse ? moviesResponse.data : { results: [] };
}

export { getTrendingMoviesByDay };
