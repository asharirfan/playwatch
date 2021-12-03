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

export { getMovie };
