import Router, { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Button from '@/components/button';

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
		<form className="text-center w-2/3" onSubmit={redirectOnSubmit}>
			<input
				className="text-text bg-white px-4 py-2 w-5/6 text-lg text-left"
				id="search"
				onChange={handleSearchQuery}
				required
				type="text"
				value={searchQuery}
				placeholder="Search for a movie, tv show..."
			/>
			<Button className="w-1/6">Search</Button>
		</form>
	);
}
