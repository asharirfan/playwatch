import Link from 'next/link';
import Image from 'next/image';

/**
 * Logo component.
 *
 * @return {Element} Logo.
 */
export default function Logo() {
	return (
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
	);
}
