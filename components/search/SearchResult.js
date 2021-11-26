import config from '@/utils/config';
import PropTypes from 'prop-types';
import Image from 'next/image';

/**
 * Single search result.
 *
 * @param  {object}  props        The component attributes as props.
 * @param  {object}  props.result Single search result
 * @return {Element}              HTML element.
 */
export default function SearchResult({ result }) {
	const title = 'tv' === result.media_type ? result.name : result.title;
	const date =
		'tv' === result.media_type
			? result.first_air_date
			: result.release_date;

	return (
		<article key={result.id}>
			<Image
				alt={title}
				height="278"
				src={`${config.tmdbImgBaseUrl}w185${result.poster_path}`}
				width="185"
			/>
			<h3>{title}</h3>
			<p>{result.overview}</p>
			<p>{date}</p>
		</article>
	);
}

SearchResult.props = {
	result: PropTypes.object.isRequired
};
