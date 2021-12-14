import Layout from '@/components/common/Layout';
import Cast from '@/components/common/single/Cast';
import Header from '@/components/common/single/Header';
import Widget from '@/components/common/single/widget';
import KeywordsWidget from '@/components/common/single/widget/KeywordsWidget';
import PopularityWidget from '@/components/common/single/widget/PopularityWidget';
import { getAllTrendingTvShowsByDay } from '@/functions/getTrendingTvShows';
import {
	getTvShow,
	getTvShowCredits,
	getTvShowExternalIds,
	getTvShowKeywords
} from '@/functions/getTvShow';
import { getBackdropPath, getPosterPath } from '@/functions/image';

/**
 * Single tv show page.
 *
 * @param  {object}  props             The component attributes as props.
 * @param  {object}  props.credits     TV show credits object.
 * @param  {object}  props.externalIds TV show external ids object.
 * @param  {object}  props.keywords    TV show keywords object.
 * @param  {object}  props.tvShow      TV show object.
 * @return {Element}                   TV show page.
 */
export default function TvShow({ credits, externalIds, keywords, tvShow }) {
	if (!tvShow) {
		return <Layout>Show not found.</Layout>;
	}

	const backdropPath = getBackdropPath(tvShow.backdrop_path);
	const posterPath = getPosterPath(tvShow.poster_path);

	return (
		<Layout>
			<Header
				backdropPath={backdropPath}
				date={tvShow.first_air_date}
				externalIds={externalIds}
				genres={tvShow.genres}
				overview={tvShow.overview}
				posterPath={posterPath}
				runTime=""
				tagline={tvShow.tagline}
				title={tvShow.name}
			/>
			<div className="flex mt-8">
				<div className="w-4/5">
					<Cast cast={credits.cast} />
				</div>
				<div className="w-1/5 px-4 mt-2">
					<Widget
						label="Original Title"
						value={tvShow.original_name}
					/>
					<PopularityWidget popularity={tvShow.vote_average} />
					<Widget label="Status" value={tvShow.status} />
					<Widget
						label="Number of Seasons"
						value={tvShow.number_of_seasons}
					/>
					<Widget
						label="Number of Episodes"
						value={tvShow.number_of_episodes}
					/>
					<Widget label="Type" value={tvShow.type} />
					<KeywordsWidget keywords={keywords.results} />
				</div>
			</div>
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
	return {
		props: {
			credits: await getTvShowCredits(params.id),
			externalIds: await getTvShowExternalIds(params.id),
			keywords: await getTvShowKeywords(params.id),
			tvShow: await getTvShow(params.id)
		},
		revalidate: 86400
	};
}
