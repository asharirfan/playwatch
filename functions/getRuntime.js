/**
 * Get movie runtime in hrs and minutes.
 *
 * @param  {number} minutes Number of minutes.
 * @return {string}         Total time in hrs and mins.
 */
function getMovieRuntime(minutes) {
	return `${parseInt(minutes / 60)}h ${minutes % 60}m`;
}

export { getMovieRuntime };
