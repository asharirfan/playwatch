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

export { getTvShow };
