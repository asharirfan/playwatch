import config from '@/utils/config';
import axios from 'axios';

/**
 * Get trending tv shows by day.
 *
 * @param  {number}      page Number of page. Default is 1.
 * @return {null|object}      TV shows object or null if failed.
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

/**
 * Get first 50 pages of trending tv shows by day.
 *
 * @return {Array} TV shows array.
 */
async function getAllTrendingTvShowsByDay() {
	let currentPage = 1;
	let tvShows = [];
	let tvShowsResponse = null;

	do {
		tvShowsResponse = await getTrendingTvShowsByDay(currentPage);

		if (tvShowsResponse.results.length !== 0) {
			tvShows = [...tvShows, ...tvShowsResponse.results];
		}

		currentPage = tvShowsResponse.page + 1;
	} while (tvShowsResponse.page < 10);

	return tvShows;
}

export { getTrendingTvShowsByDay, getAllTrendingTvShowsByDay };
