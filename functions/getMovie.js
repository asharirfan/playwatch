import axios from 'axios';
import config from '@/utils/config';

/**
 * Get movie from the API by ID.
 *
 * @param  {number}       id Movie id.
 * @return {object|false}    Movie object or false on fail.
 */
async function getMovie(id) {
	let movieResponse = null;

	try {
		movieResponse = await axios(
			`${config.getMovie}/${id}?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-US`
		);
	} catch (error) {
		console.error(error);
	}

	return movieResponse && 200 === movieResponse.status
		? movieResponse.data
		: false;
}

/**
 * Get movie credits from the API by ID.
 *
 * @param  {number}       id Movie id.
 * @return {object|false}    Movie credits object or false on fail.
 */
async function getMovieCredits(id) {
	let movieResponse = null;

	try {
		movieResponse = await axios(
			`${config.getMovie}/${id}/credits?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-US`
		);
	} catch (error) {
		console.error(error);
	}

	return movieResponse && 200 === movieResponse.status
		? movieResponse.data
		: false;
}

/**
 * Get movie keywords from the API by ID.
 *
 * @param  {number}       id Movie id.
 * @return {object|false}    Movie keywords object or false on fail.
 */
async function getMovieKeywords(id) {
	let movieResponse = null;

	try {
		movieResponse = await axios(
			`${config.getMovie}/${id}/keywords?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-US`
		);
	} catch (error) {
		console.error(error);
	}

	return movieResponse && 200 === movieResponse.status
		? movieResponse.data
		: false;
}

/**
 * Get movie external ids from the API by ID.
 *
 * @param  {number}       id Movie id.
 * @return {object|false}    Movie external ids object or false on fail.
 */
async function getMovieExternalIds(id) {
	let movieResponse = null;

	try {
		movieResponse = await axios(
			`${config.getMovie}/${id}/external_ids?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-US`
		);
	} catch (error) {
		console.error(error);
	}

	return movieResponse && 200 === movieResponse.status
		? movieResponse.data
		: false;
}

export { getMovie, getMovieCredits, getMovieExternalIds, getMovieKeywords };
