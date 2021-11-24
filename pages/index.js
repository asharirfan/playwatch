import axios from 'axios';
import config from '@/utils/config';
import Layout from '@/components/common/Layout';
import PropTypes from 'prop-types';

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
			<div id="trending-movies">
				{movies.results.length > 0 ? (
					movies.results.map(movie => {
						return (
							<article key={movie.id}>
								<h3>{movie.title}</h3>
								<p>{movie.overview}</p>
								<p>Release Date: {movie.release_date}</p>
							</article>
						);
					})
				) : (
					<article>
						<p>No movies found.</p>
					</article>
				)}
			</div>
			<div id="trending-tv-shows">
				{tvShows.results.length > 0 ? (
					tvShows.results.map(tvShow => {
						return (
							<article key={tvShow.id}>
								<h3>{tvShow.name}</h3>
								<p>{tvShow.overview}</p>
								<p>First aired on: {tvShow.first_air_date}</p>
							</article>
						);
					})
				) : (
					<article>
						<p>No tv shows found.</p>
					</article>
				)}
			</div>
		</Layout>
	);
}

/**
 * Get static props for the homepage.
 *
 * @return {object} Props object.
 */
export async function getStaticProps() {
	const moviesResponse = await axios(config.trendingMoviesByDay);

	const tvShowsResponse = await axios(config.trendingTvShowsByDay);

	return {
		props: {
			movies: moviesResponse.data,
			tvShows: tvShowsResponse.data
		}
	};
}

Home.props = {
	movies: PropTypes.object.isRequired,
	tvShows: PropTypes.object.isRequired
};
