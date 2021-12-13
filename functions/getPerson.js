import axios from 'axios';
import config from '@/utils/config';

/**
 * Get person from the API by ID.
 *
 * @param  {number}       id Person id.
 * @return {object|false}    Person object or false on fail.
 */
async function getPerson(id) {
	let personResponse = null;

	try {
		personResponse = await axios(
			`${config.getPerson}/${id}?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-US`
		);
	} catch (error) {
		console.error(error);
	}

	return personResponse && 200 === personResponse.status
		? personResponse.data
		: false;
}

/**
 * Get full path of the person image.
 *
 * @param  {string} path Person image path from API.
 * @param  {string} size Image size.
 * @return {string}      Full path to person image.
 */
function getPersonImgPath(path, size = 'w500') {
	return path
		? `${config.tmdbImgBaseUrl}${size}${path}`
		: 'https://via.placeholder.com/500x750.png/353849/03CC90?text=PlayWatch';
}

export { getPerson, getPersonImgPath };
