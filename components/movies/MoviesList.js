import Movie from '@/components/movies/Movie';
import PropTypes from 'prop-types';

/**
 * Movies list component.
 *
 * @param  {object}  props        The component attributes as props.
 * @param  {object}  props.movies Movies data.
 * @return {Element}              HTML element.
 */
export default function MoviesList({ movies }) {
	return (
		<div id="trending-movies">
			{movies && movies.length > 0 ? (
				movies.map(movie => <Movie key={movie.id} movie={movie} />)
			) : (
				<article>
					<p>No movies found.</p>
				</article>
			)}
		</div>
	);
}

MoviesList.props = {
	movies: PropTypes.array.isRequired
};
