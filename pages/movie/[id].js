import Layout from '@/components/common/Layout';
import {
	getMovie,
	getMovieCredits,
	getMovieExternalIds,
	getMovieKeywords
} from '@/functions/getMovie';
import { getAllTrendingMoviesByDay } from '@/functions/getTrendingMovies';
import { formatCurrency } from '@/functions/format';
import Header from '@/components/common/single/Header';
import Cast from '@/components/common/single/Cast';
import Widget from '@/components/common/single/widget';
import PopularityWidget from '@/components/common/single/widget/PopularityWidget';
import KeywordsWidget from '@/components/common/single/widget/KeywordsWidget';
import { getBackdropPath, getPosterPath } from '@/functions/image';

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

	const backdropPath = getBackdropPath(movie.backdrop_path);
	const posterPath = getPosterPath(movie.poster_path);

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
					<Cast cast={credits.cast} />
				</div>
				<div className="w-1/5 px-4 mt-2">
					<Widget
						label="Original Title"
						value={movie.original_title}
					/>
					<PopularityWidget popularity={movie.vote_average} />
					<Widget label="Status" value={movie.status} />
					<Widget
						label="Budget"
						value={formatCurrency(movie.budget)}
					/>
					<Widget
						label="Revenue"
						value={formatCurrency(movie.revenue)}
					/>
					<KeywordsWidget keywords={keywords.keywords} />
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
