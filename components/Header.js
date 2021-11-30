import Image from 'next/image';
import Link from 'next/link';
import Router, { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

/**
 * Header component.
 *
 * @return {Element} Header.
 */
export default function Header() {
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
		<header>
			<Link href="/">
				<a>
					<Image
						src="/tmdb-logo.svg"
						alt="Site Logo"
						width={250}
						height={70}
					/>
				</a>
			</Link>
			<div>
				<Link href="/">Home</Link>
				<Link href="/movies">Movies</Link>
				<Link href="/tv">TV Shows</Link>
			</div>
			<div>
				<form onSubmit={redirectOnSubmit}>
					<input
						id="search"
						onChange={handleSearchQuery}
						required
						type="text"
						value={searchQuery}
					/>
					<button type="submit">Search</button>
				</form>
			</div>
		</header>
	);
}
