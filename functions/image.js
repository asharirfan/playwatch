import config from '@/utils/config';

/**
 * Get full path of the backdrop image.
 *
 * @param  {string} path Backdrop image path.
 * @param  {string} size Image size.
 * @return {string}      Full path to backdrop image.
 */
function getBackdropPath(path, size = 'w1280') {
	return path
		? `${config.tmdbImgBaseUrl}${size}${path}`
		: 'https://via.placeholder.com/1280x720.png/353849/03CC90?text=PlayWatch';
}

/**
 * Get full path of the poster image.
 *
 * @param  {string} path Poster image path.
 * @param  {string} size Image size.
 * @return {string}      Full path to poster image.
 */
function getPosterPath(path, size = 'w500') {
	return path
		? `${config.tmdbImgBaseUrl}${size}${path}`
		: 'https://via.placeholder.com/500x750.png/353849/03CC90?text=PlayWatch';
}

export { getBackdropPath, getPosterPath };
