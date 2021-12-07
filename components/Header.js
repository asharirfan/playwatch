import Image from 'next/image';
import Link from 'next/link';
import Router, { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Menu from '@/components/menu';

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
		<header className="relative bg-header-bg">
			<div className="absolute top-0 h-screen w-full bg-darkGrey bg-opacity-60 z-0" />
			<div className="relative h-screen z-10">
				<div className="container mx-auto flex flex-auto justify-between items-center">
					<Link href="/">
						<a className="cursor-pointer">
							<Image
								src="/tmdb-logo.svg"
								alt="Site Logo"
								width={250}
								height={70}
							/>
						</a>
					</Link>
					<Menu />
				</div>
				<div className="container mx-auto flex flex-auto justify-center items-center h-5/6">
					<form
						className="text-center w-1/2"
						onSubmit={redirectOnSubmit}
					>
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
				</div>
			</div>
		</header>
	);
}
