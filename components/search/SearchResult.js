import config from '@/utils/config';
import PropTypes from 'prop-types';
import Card from '@/components/card';

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
			? `${config.tmdbImgBaseUrl}w342${result.poster_path}`
			: 'https://via.placeholder.com/342x486.png/353849/03CC90?text=PlayWatch';
	} else {
		posterPath = result.profile_path
			? `${config.tmdbImgBaseUrl}w500${result.profile_path}`
			: 'https://via.placeholder.com/500x750.png/353849/03CC90?text=PlayWatch';
	}

	return (
		<Card
			date={'person' !== result.media_type ? date : ''}
			id={result.id}
			link={`/${result.media_type}/${result.id}`}
			poster={posterPath}
			title={title}
		/>
	);
}

SearchResult.props = {
	result: PropTypes.object.isRequired
};
