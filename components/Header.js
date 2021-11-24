import Image from 'next/image';
import Link from 'next/link';

/**
 * Redirect search form on submit.
 *
 * @param {object} event Event handler object.
 */
function redirectOnSubmit(event) {
	event.preventDefault();
	location.href = `/search?query=${event.target.search.value}`;
}

/**
 * Header component.
 *
 * @return {Element} Header.
 */
export default function Header() {
	return (
		<header>
			<Image
				src="/tmdb-logo.svg"
				alt="Site Logo"
				width={250}
				height={70}
			/>
			<div>
				<Link href="/">Home</Link>
				<Link href="/movies">Movies</Link>
				<Link href="/tv">TV Shows</Link>
			</div>
			<div>
				<form onSubmit={redirectOnSubmit}>
					<input id="search" type="text" required />
					<button type="submit">Search</button>
				</form>
			</div>
		</header>
	);
}
