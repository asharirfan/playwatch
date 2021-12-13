/**
 * Format currency.
 *
 * @param  {number} amount Amount of currency.
 * @return {string}        Formatted currency.
 */
function formatCurrency(amount) {
	const formatter = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD'
	});
	return formatter.format(amount);
}

export { formatCurrency };
