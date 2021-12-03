import Layout from '@/components/common/Layout';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import MoviesList from '@/components/movies/MoviesList';
import { getTrendingMoviesByDay } from '@/functions/getTrendingMovies';

/**
 * Movies page.
 *
 * @param  {object}  props               The component attributes as props.
 * @param  {object}  props.initialMovies Movies data.
 * @return {Element}                     HTML element.
 */
export default function Movie({ initialMovies }) {
	const [loading, setLoading] = useState(false);
	const [movies, setMovies] = useState([]);
	const [page, setPage] = useState(1);

	useEffect(() => {
		setMovies([...initialMovies.results]);
	}, [initialMovies]);

	/**
	 * Load next page of movies.
	 */
	async function loadMovies() {
		const paged = page + 1;
		setLoading(true);
		const nextPageMovies = await getTrendingMoviesByDay(paged);
		setMovies([...movies, ...nextPageMovies.results]);
		setPage(paged);
		setLoading(false);
	}

	return (
		<Layout>
			<MoviesList movies={movies} />
			<button onClick={loadMovies} type="button" disabled={loading}>
				{loading ? 'Loading...' : 'Load More'}
			</button>
		</Layout>
	);
}

/**
 * Get static props for movies page.
 *
 * @return {object} Props object.
 */
export async function getStaticProps() {
	return {
		props: {
			initialMovies: await getTrendingMoviesByDay()
		}
	};
}

Movie.props = {
	initialMovies: PropTypes.object.isRequired
};
