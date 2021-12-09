/**
 * Get formatted date.
 *
 * @param  {string} date Date.
 * @return {string}      Formatted date.
 */
function getFormattedDate(date) {
	const dateObj = new Date(date);
	return dateObj.toLocaleString('en-US', {
		day: 'numeric', // numeric, 2-digit
		year: 'numeric', // numeric, 2-digit
		month: 'short' // numeric, 2-digit, long, short, narrow
	});
}

export { getFormattedDate };
