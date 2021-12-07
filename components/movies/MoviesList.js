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
		<div id="trending-movies" className="my-10">
			<h2 className="font-heading text-2xl my-4">Trending Movies</h2>
			<div className="flex flex-wrap justify-start -mx-4">
				{movies && movies.length > 0 ? (
					movies.map(movie => <Movie key={movie.id} movie={movie} />)
				) : (
					<article className="px-4 my-4">
						<p>No movies found.</p>
					</article>
				)}
			</div>
		</div>
	);
}

MoviesList.props = {
	movies: PropTypes.array.isRequired
};
