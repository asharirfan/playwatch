import Layout from '@/components/common/Layout';
import { getYear } from '@/functions/getDate';
import { getMovie } from '@/functions/getMovie';
import { getAllTrendingMoviesByDay } from '@/functions/getTrendingMovies';
import config from '@/utils/config';
import Image from 'next/image';
import { getMovieRuntime } from '@/functions/getRuntime';

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
			<div className="min-h-headerBg">
				<div
					className="absolute bg-cover bg-center left-0 w-full h-headerBg"
					style={{
						backgroundImage: `url(${backdropPath})`,
						zIndex: '-1'
					}}
				>
					<div className="absolute top-0 h-headerBg w-full bg-darkGrey bg-opacity-80" />
				</div>
				<div className="flex justify-between py-8">
					<div>
						<h3 className="font-heading text-4xl">{movie.title}</h3>
						<p>
							{getYear(movie.release_date)} -{' '}
							{getMovieRuntime(movie.runtime)}
						</p>
					</div>
					<div>
						<p>Popularity: {movie.vote_average}</p>
					</div>
				</div>
				<div className="flex">
					<div className="w-1/5">
						<Image
							alt={movie.title}
							height="540"
							src={posterPath}
							width="360"
						/>
					</div>
					<div className="ml-4 w-4/5">
						<p className="mb-2">
							{movie.genres &&
								movie.genres.map(genre => {
									return (
										<span
											className="border inline-block mr-3 p-1 rounded-2xl"
											key={genre.id}
										>
											{genre.name}
										</span>
									);
								})}
						</p>
						<p className="italic mb-2">{movie.tagline}</p>
						<h4 className="font-heading mb-2 text-xl">Overview</h4>
						<p className="mb-2">{movie.overview}</p>
					</div>
				</div>
			</div>
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
