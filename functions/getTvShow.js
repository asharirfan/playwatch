import axios from 'axios';
import config from '@/utils/config';

/**
 * Get TV show from the API by ID.
 *
 * @param  {number}       id TV show id.
 * @return {object|false}    TV Show object or false on fail.
 */
async function getTvShow(id) {
	let tvShowResponse = null;

	try {
		tvShowResponse = await axios(
			`${config.getTvShow}/${id}?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-US`
		);
	} catch (error) {
		console.error(error);
	}

	return tvShowResponse && 200 === tvShowResponse.status
		? tvShowResponse.data
		: false;
}

/**
 * Get tv show credits from the API by ID.
 *
 * @param  {number}       id TV show id.
 * @return {object|false}    TV show credits object or false on fail.
 */
async function getTvShowCredits(id) {
	let tvShowResponse = null;

	try {
		tvShowResponse = await axios(
			`${config.getTvShow}/${id}/credits?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-US`
		);
	} catch (error) {
		console.error(error);
	}

	return tvShowResponse && 200 === tvShowResponse.status
		? tvShowResponse.data
		: false;
}

/**
 * Get tv show keywords from the API by ID.
 *
 * @param  {number}       id TV show id.
 * @return {object|false}    TV show keywords object or false on fail.
 */
async function getTvShowKeywords(id) {
	let tvShowResponse = null;

	try {
		tvShowResponse = await axios(
			`${config.getTvShow}/${id}/keywords?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-US`
		);
	} catch (error) {
		console.error(error);
	}

	return tvShowResponse && 200 === tvShowResponse.status
		? tvShowResponse.data
		: false;
}

/**
 * Get tv show external ids from the API by ID.
 *
 * @param  {number}       id TV show id.
 * @return {object|false}    TV show external ids object or false on fail.
 */
async function getTvShowExternalIds(id) {
	let tvShowResponse = null;

	try {
		tvShowResponse = await axios(
			`${config.getTvShow}/${id}/external_ids?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-US`
		);
	} catch (error) {
		console.error(error);
	}

	return tvShowResponse && 200 === tvShowResponse.status
		? tvShowResponse.data
		: false;
}

export { getTvShow, getTvShowCredits, getTvShowKeywords, getTvShowExternalIds };
