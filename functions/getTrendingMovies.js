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

	return moviesResponse && moviesResponse.status === 200
		? moviesResponse.data
		: { results: [] };
}

/**
 * Get all trending movies by day.
 *
 * @param  {number} numberOfPages Number of pages to get.
 * @return {Array}                Movies array.
 */
async function getAllTrendingMoviesByDay(numberOfPages = 500) {
	let currentPage = 1;
	let movies = [];
	let moviesResponse = null;

	do {
		moviesResponse = await getTrendingMoviesByDay(currentPage);

		if (moviesResponse.results.length !== 0) {
			movies = [...movies, ...moviesResponse.results];
		}

		currentPage = moviesResponse.page + 1;
	} while (moviesResponse.page < numberOfPages);

	return movies;
}

export { getTrendingMoviesByDay, getAllTrendingMoviesByDay };
