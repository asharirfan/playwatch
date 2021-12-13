import Image from 'next/image';
import Link from 'next/link';
import PropTypes from 'prop-types';

/**
 * IMDB link component.
 *
 * @param  {object}  props    The component attributes as props.
 * @param  {string}  props.id IMDB id.
 * @return {Element}          IMDB link.
 */
export default function IMDB({ id }) {
	return (
		<Link href={`https://imdb.com/title/${id}`}>
			<a className="inline-block cursor-pointer mx-2" target="_blank">
				<Image
					alt="IMDB"
					height={32}
					src="/icons/imdb.svg"
					width={32}
				/>
			</a>
		</Link>
	);
}

IMDB.props = {
	id: PropTypes.string.isRequired
};
