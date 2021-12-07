import PropTypes from 'prop-types';
import TvShow from '@/components/tvshows/TvShow';

/**
 * TV shows list component.
 *
 * @param  {object}  props         The component attributes as props.
 * @param  {object}  props.tvShows TV shows data.
 * @return {Element}               HTML element.
 */
export default function TvShowsList({ tvShows }) {
	return (
		<div id="trending-tv-shows" className="my-10">
			<h2 className="font-heading text-2xl my-4">Trending TV Shows</h2>
			<div className="flex flex-wrap justify-start -mx-4">
				{tvShows && tvShows.length > 0 ? (
					tvShows.map(tvShow => (
						<TvShow key={tvShow.id} tvShow={tvShow} />
					))
				) : (
					<article className="px-4 my-4">
						<p>No tv shows found.</p>
					</article>
				)}
			</div>
		</div>
	);
}

TvShowsList.props = {
	tvShows: PropTypes.array.isRequired
};
