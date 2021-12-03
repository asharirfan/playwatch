import Layout from '@/components/common/Layout';
import { getMovie } from '@/functions/getMovie';
import { getAllTrendingMoviesByDay } from '@/functions/getTrendingMovies';
import config from '@/utils/config';
import Image from 'next/image';

/**
 * Single movie page.
 *
 * @param  {object}  props       The component attributes as props.
 * @param  {object}  props.movie Movie object.
 * @return {Element}             Movie page.
 */
export default function Movie({ movie }) {
	if (!movie) {
		return <Layout>Movie not found.</Layout>;
	}

	const backdropPath = movie.backdrop_path
		? `${config.tmdbImgBaseUrl}w1280${movie.backdrop_path}`
		: 'https://via.placeholder.com/1280x720.png/353849/03CC90?text=PlayWatch';
	const posterPath = movie.poster_path
		? `${config.tmdbImgBaseUrl}w500${movie.poster_path}`
		: 'https://via.placeholder.com/500x750.png/353849/03CC90?text=PlayWatch';

	return (
		<Layout>
			<Image
				alt={movie.title}
				height="720"
				src={backdropPath}
				width="1280"
			/>
			<h3>{movie.title}</h3>
			<Image
				alt={movie.title}
				height="750"
				src={posterPath}
				width="500"
			/>
			<p>{movie.overview}</p>
			<p>Popularity: {movie.vote_average}</p>
			<p>Release Date: {movie.release_date}</p>
		</Layout>
	);
}

/**
 * Next.js function to get all expected movie ids at build time.
 *
 * This function gets called at build time.
 *
 * @return {object} Props object.
 */
export async function getStaticPaths() {
	const trendingMovies = await getAllTrendingMoviesByDay(10);

	const paths = trendingMovies.map(movie => ({
		params: { id: movie.id.toString() }
	}));

	return {
		paths,
		fallback: 'blocking'
	};
}

/**
 * Get static props for the dynamic movie page.
 *
 * @param  {object} props        The component attributes as props.
 * @param  {object} props.params Object containing movie id.
 * @return {object}              Props object.
 */
export async function getStaticProps({ params }) {
	const movie = await getMovie(params.id);

	return {
		props: {
			movie
		},
		revalidate: 86400
	};
}
