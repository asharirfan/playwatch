import config from '@/utils/config';
import PropTypes from 'prop-types';
import Card from '@/components/card';

/**
 * Single tv show component.
 *
 * @param  {object}  props        The component attributes as props.
 * @param  {object}  props.tvShow Single tv show data.
 * @return {Element}              HTML element.
 */
export default function TvShow({ tvShow }) {
	const posterPath = tvShow.poster_path
		? `${config.tmdbImgBaseUrl}w342${tvShow.poster_path}`
		: 'https://via.placeholder.com/342x486.png/353849/03CC90?text=PlayWatch';

	return (
		<Card
			id={tvShow.id}
			link={`/${tvShow.media_type}/${tvShow.id}`}
			poster={posterPath}
			date={tvShow.first_air_date}
			title={tvShow.name}
		/>
	);
}

TvShow.props = {
	tvShow: PropTypes.object.isRequired
};
