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

	return tvShowsResponse && tvShowsResponse.status === 200
		? tvShowsResponse.data
		: { results: [] };
}

/**
 * Get all trending tv shows by day.
 *
 * @param  {number} numberOfPages Number of pages to get.
 * @return {Array}                TV shows array.
 */
async function getAllTrendingTvShowsByDay(numberOfPages = 500) {
	let currentPage = 1;
	let tvShows = [];
	let tvShowsResponse = null;

	do {
		tvShowsResponse = await getTrendingTvShowsByDay(currentPage);

		if (tvShowsResponse.results.length !== 0) {
			tvShows = [...tvShows, ...tvShowsResponse.results];
		}

		currentPage = tvShowsResponse.page + 1;
	} while (tvShowsResponse.page < numberOfPages);

	return tvShows;
}

export { getTrendingTvShowsByDay, getAllTrendingTvShowsByDay };
