import config from '@/utils/config';
import Image from 'next/image';
import PropTypes from 'prop-types';

/**
 * Single movie component.
 *
 * @param  {object}  props       The component attributes as props.
 * @param  {object}  props.movie Single movie data.
 * @return {Element}             HTML element.
 */
export default function Movie({ movie }) {
	return (
		<article key={movie.id}>
			<Image
				alt={movie.title}
				height="278"
				src={`${config.tmdbImgBaseUrl}w185${movie.poster_path}`}
				width="185"
			/>
			<h3>{movie.title}</h3>
			<p>{movie.overview}</p>
			<p>{movie.release_date}</p>
		</article>
	);
}

Movie.props = {
	movie: PropTypes.object.isRequired
};
