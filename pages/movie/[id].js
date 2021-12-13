import Layout from '@/components/common/Layout';
import {
	getMovie,
	getMovieBackdropPath,
	getMovieCredits,
	getMovieExternalIds,
	getMovieKeywords,
	getMoviePosterPath
} from '@/functions/getMovie';
import { getAllTrendingMoviesByDay } from '@/functions/getTrendingMovies';
import Image from 'next/image';
import Link from 'next/link';
import { getPersonImgPath } from '@/functions/getPerson';
import { formatCurrency } from '@/functions/format';
import ProgressBar from '@ramonak/react-progress-bar';
import Header from '@/components/common/single/Header';

/**
 * Single movie page.
 *
 * @param  {object}  props             The component attributes as props.
 * @param  {object}  props.credits     Movie credits object.
 * @param  {object}  props.externalIds Movie external ids object.
 * @param  {object}  props.keywords    Movie keywords object.
 * @param  {object}  props.movie       Movie object.
 * @return {Element}                   Movie page.
 */
export default function Movie({ credits, externalIds, keywords, movie }) {
	if (!movie) {
		return <Layout>Movie not found.</Layout>;
	}

	const { cast } = credits;

	const backdropPath = getMovieBackdropPath(movie.backdrop_path);
	const posterPath = getMoviePosterPath(movie.poster_path);

	return (
		<Layout>
			<Header
				backdropPath={backdropPath}
				date={movie.release_date}
				externalIds={externalIds}
				genres={movie.genres}
				overview={movie.overview}
				posterPath={posterPath}
				runTime={movie.runtime}
				tagline={movie.tagline}
				title={movie.title}
			/>
			<div className="flex mt-8">
				<div className="w-4/5">
					<h3 className="font-heading my-2 text-2xl">Cast</h3>
					<div className="flex flex-wrap justify-start mt-4 -mx-2">
						{cast &&
							cast.map(person => {
								if (!person.profile_path) {
									return;
								}

								return (
									<div className="w-36 m-2" key={person.id}>
										<Link href={`/person/${person.id}`}>
											<a className="cursor-pointer">
												<Image
													alt={person.name}
													height={278}
													src={getPersonImgPath(
														person.profile_path,
														'w185'
													)}
													width={185}
												/>
											</a>
										</Link>
										<Link href={`/person/${person.id}`}>
											<a className="cursor-pointer text-lg hover:text-green">
												<h4>{person.name}</h4>
											</a>
										</Link>
										<p className="text-md opacity-60">
											as {person.character}
										</p>
									</div>
								);
							})}
					</div>
				</div>
				<div className="w-1/5 px-4 mt-2">
					<div className="mb-4">
						<p className="text-md mb-2 opacity-60">
							Original Title
						</p>
						<p className="font-heading text-xl">
							{movie.original_title}
						</p>
					</div>
					<div className="mb-4">
						<p className="text-md mb-2 opacity-60">Popularity</p>
						<ProgressBar
							completed={movie.vote_average * 10}
							bgColor="#03CC90"
							baseBgColor="#ffffff"
							labelColor="#3F4354"
						/>
					</div>
					<div className="mb-4">
						<p className="text-md mb-2 opacity-60">Status</p>
						<p className="font-heading text-xl">{movie.status}</p>
					</div>
					<div className="mb-4">
						<p className="text-md mb-2 opacity-60">Budget</p>
						<p className="font-heading text-xl">
							{formatCurrency(movie.budget)}
						</p>
					</div>
					<div className="mb-4">
						<p className="text-md mb-2 opacity-60">Revenue</p>
						<p className="font-heading text-xl">
							{formatCurrency(movie.revenue)}
						</p>
					</div>
					<div className="mb-4">
						<p className="text-md mb-2 opacity-60">Keywords</p>
						<p>
							{keywords.keywords &&
								keywords.keywords.map(keyword => {
									return (
										<span
											className="bg-green inline-block mr-4 mb-4 py-1 px-2 text-grey rounded-2xl"
											key={keyword.id}
										>
											{keyword.name}
										</span>
									);
								})}
						</p>
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
	return {
		props: {
			credits: await getMovieCredits(params.id),
			externalIds: await getMovieExternalIds(params.id),
			keywords: await getMovieKeywords(params.id),
			movie: await getMovie(params.id)
		},
		revalidate: 86400
	};
}
