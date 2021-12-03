import config from '@/utils/config';
import PropTypes from 'prop-types';
import Image from 'next/image';
import Link from 'next/link';

/**
 * Single search result.
 *
 * @param  {object}  props        The component attributes as props.
 * @param  {object}  props.result Single search result
 * @return {Element}              HTML element.
 */
export default function SearchResult({ result }) {
	const title = 'movie' !== result.media_type ? result.name : result.title;
	const date =
		'tv' === result.media_type
			? result.first_air_date
			: result.release_date;
	let posterPath = '';

	if ('person' !== result.media_type) {
		posterPath = result.poster_path
			? `${config.tmdbImgBaseUrl}w185${result.poster_path}`
			: 'https://via.placeholder.com/185x278.png/353849/03CC90?text=PlayWatch';
	} else {
		posterPath = result.profile_path
			? `${config.tmdbImgBaseUrl}w185${result.profile_path}`
			: 'https://via.placeholder.com/185x278.png/353849/03CC90?text=PlayWatch';
	}

	return (
		<Link href={`/${result.media_type}/${result.id}`}>
			<a>
				<article
					key={result.id}
					id={`${result.media_type}-${result.id}`}
				>
					<Image
						alt={title}
						height="278"
						src={posterPath}
						width="185"
					/>
					<h3>{title}</h3>
					{'person' !== result.media_type && <p>{result.overview}</p>}
					{'person' !== result.media_type && <p>{date}</p>}
				</article>
			</a>
		</Link>
	);
}

SearchResult.props = {
	result: PropTypes.object.isRequired
};
