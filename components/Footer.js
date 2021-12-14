import Link from 'next/link';

/**
 * Footer component.
 *
 * @return {Element} Footer.
 */
export default function Footer() {
	return (
		<footer className="bg-grey">
			<div className="container m-auto p-16 mt-8 text-center">
				<Link href="/">
					<a className="inline-block cursor-pointer">
						<h3 className="font-heading text-4xl">PlayWatch</h3>
					</a>
				</Link>
				<p className="mt-4 text-md">
					This product uses{' '}
					<Link href="https://www.themoviedb.org/">
						<a className="cursor-pointer underline">TMDB</a>
					</Link>{' '}
					API but is not endorsed or certified by it.
				</p>
			</div>
		</footer>
	);
}
