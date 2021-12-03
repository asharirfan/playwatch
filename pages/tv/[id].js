import Layout from '@/components/common/Layout';
import { getAllTrendingTvShowsByDay } from '@/functions/getTrendingTvShows';
import { getTvShow } from '@/functions/getTvShow';
import config from '@/utils/config';
import Image from 'next/image';

/**
 * Single tv show page.
 *
 * @param  {object}  props        The component attributes as props.
 * @param  {object}  props.tvShow TV show object.
 * @return {Element}              TV show page.
 */
export default function TvShow({ tvShow }) {
	if (!tvShow) {
		return <Layout>Show not found.</Layout>;
	}

	const backdropPath = tvShow.backdrop_path
		? `${config.tmdbImgBaseUrl}w1280${tvShow.backdrop_path}`
		: 'https://via.placeholder.com/1280x720.png/353849/03CC90?text=PlayWatch';
	const posterPath = tvShow.poster_path
		? `${config.tmdbImgBaseUrl}w500${tvShow.poster_path}`
		: 'https://via.placeholder.com/500x750.png/353849/03CC90?text=PlayWatch';

	return (
		<Layout>
			<Image
				alt={tvShow.name}
				height="720"
				src={backdropPath}
				width="1280"
			/>
			<h3>{tvShow.name}</h3>
			<Image
				alt={tvShow.name}
				height="750"
				src={posterPath}
				width="500"
			/>
			<p>{tvShow.overview}</p>
			<p>Popularity: {tvShow.vote_average}</p>
			<p>First Air Date: {tvShow.first_air_date}</p>
			<p>Number of seasons: {tvShow.number_of_seasons}</p>
			<p>Number of episodes: {tvShow.number_of_episodes}</p>
		</Layout>
	);
}

/**
 * Next.js function to get all expected TVShow ids at build time.
 *
 * This function gets called at build time.
 *
 * @return {object} Props object.
 */
export async function getStaticPaths() {
	const trendingTvShows = await getAllTrendingTvShowsByDay(10);

	const paths = trendingTvShows.map(tvShow => ({
		params: { id: tvShow.id.toString() }
	}));

	return {
		paths,
		fallback: 'blocking'
	};
}

/**
 * Get static props for the dynamic tv shows page.
 *
 * @param  {object} props        The component attributes as props.
 * @param  {object} props.params Object containing tv show id.
 * @return {object}              Props object.
 */
export async function getStaticProps({ params }) {
	const tvShow = await getTvShow(params.id);

	return {
		props: {
			tvShow
		},
		revalidate: 86400
	};
}
