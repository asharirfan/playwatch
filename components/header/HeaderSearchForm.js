import Router, { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

/**
 * Search form header component.
 *
 * @return {Element} Search form.
 */
export default function HeaderSearchForm() {
	const [searchQuery, setSearchQuery] = useState('');
	const router = useRouter();
	const { query } = router.query;

	useEffect(() => {
		if (query) {
			setSearchQuery(query);
		}
	}, [query]);

	/**
	 * Handle search query.
	 *
	 * @param {object} event Event handler object.
	 */
	function handleSearchQuery(event) {
		setSearchQuery(event.target.value);
	}

	/**
	 * Redirect search form on submit.
	 *
	 * @param {object} event Event handler object.
	 */
	function redirectOnSubmit(event) {
		event.preventDefault();
		Router.push({
			pathname: '/search',
			query: {
				query: event.target.search.value
			}
		});
	}

	return (
		<form className="text-center w-1/2" onSubmit={redirectOnSubmit}>
			<input
				className="text-text bg-white px-4 py-2 w-3/4 text-lg text-left"
				id="search"
				onChange={handleSearchQuery}
				required
				type="text"
				value={searchQuery}
				placeholder="Search for a movie, tv show..."
			/>
			<button
				className="text-text bg-green text-lg px-4 py-2"
				type="submit"
			>
				Search
			</button>
		</form>
	);
}
