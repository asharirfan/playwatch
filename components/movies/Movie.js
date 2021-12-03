import config from '@/utils/config';
import Image from 'next/image';
import PropTypes from 'prop-types';
import Link from 'next/link';

/**
 * Single movie component.
 *
 * @param  {object}  props       The component attributes as props.
 * @param  {object}  props.movie Single movie data.
 * @return {Element}             HTML element.
 */
export default function Movie({ movie }) {
	const posterPath = movie.poster_path
		? `${config.tmdbImgBaseUrl}w185${movie.poster_path}`
		: 'https://via.placeholder.com/185x278.png/353849/03CC90?text=PlayWatch';

	return (
		<Link href={`/${movie.media_type}/${movie.id}`}>
			<a>
				<article key={movie.id}>
					<Image
						alt={movie.title}
						height="278"
						src={posterPath}
						width="185"
					/>
					<h3>{movie.title}</h3>
					<p>{movie.overview}</p>
					<p>{movie.release_date}</p>
				</article>
			</a>
		</Link>
	);
}

Movie.props = {
	movie: PropTypes.object.isRequired
};
