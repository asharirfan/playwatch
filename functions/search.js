import axios from 'axios';
import config from '@/utils/config';

/**
 * Get search results from TMDB API with swr hook.
 *
 * @param  {string} url Search query URL.
 * @return {object}     Query response.
 */
function getSearchResults(url) {
	return axios(url).then(response => response.data);
}

/**
 * Query search results from TMDB API.
 *
 * @param  {string} query Search query.
 * @param  {number} page  Page number.
 * @return {object}       Search results.
 */
async function querySearchResults(query, page = 1) {
	let searchResultsResponse = null;

	try {
		searchResultsResponse = await axios(
			`${config.search}&query=${query}&page=${page}`
		);
	} catch (error) {
		console.error(error);
	}

	return searchResultsResponse ? searchResultsResponse.data : { results: [] };
}

export { getSearchResults, querySearchResults };
