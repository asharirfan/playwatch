import Layout from '@/components/common/Layout';
import PropTypes from 'prop-types';
import { getTrendingMoviesByDay } from '@/functions/getTrendingMovies';
import MoviesList from '@/components/movies/MoviesList';
import TvShowsList from '@/components/tvshows/TvShowsList';
import { getTrendingTvShowsByDay } from '@/functions/getTrendingTvShows';

/**
 * Home page.
 *
 * @param  {object}  props         The component attributes as props.
 * @param  {object}  props.movies  Movies data.
 * @param  {object}  props.tvShows TV Shows data.
 * @return {Element}               HTML element.
 */
export default function Home({ movies, tvShows }) {
	return (
		<Layout>
			<MoviesList movies={movies.results} />
			<TvShowsList tvShows={tvShows.results} />
		</Layout>
	);
}

/**
 * Get static props for the homepage.
 *
 * @return {object} Props object.
 */
export async function getStaticProps() {
	return {
		props: {
			movies: await getTrendingMoviesByDay(),
			tvShows: await getTrendingTvShowsByDay()
		}
	};
}

Home.props = {
	movies: PropTypes.object.isRequired,
	tvShows: PropTypes.object.isRequired
};
