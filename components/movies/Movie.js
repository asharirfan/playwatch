import config from '@/utils/config';
import PropTypes from 'prop-types';
import Card from '@/components/card';

/**
 * Single movie component.
 *
 * @param  {object}  props       The component attributes as props.
 * @param  {object}  props.movie Single movie data.
 * @return {Element}             HTML element.
 */
export default function Movie({ movie }) {
	const posterPath = movie.poster_path
		? `${config.tmdbImgBaseUrl}w342${movie.poster_path}`
		: 'https://via.placeholder.com/342x486.png/353849/03CC90?text=PlayWatch';

	return (
		<Card
			id={movie.id}
			link={`/${movie.media_type}/${movie.id}`}
			poster={posterPath}
			date={movie.release_date}
			title={movie.title}
		/>
	);
}

Movie.props = {
	movie: PropTypes.object.isRequired
};
