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
		<div id="trending-tv-shows">
			{tvShows && tvShows.length > 0 ? (
				tvShows.map(tvShow => (
					<TvShow key={tvShow.id} tvShow={tvShow} />
				))
			) : (
				<article>
					<p>No tv shows found.</p>
				</article>
			)}
		</div>
	);
}

TvShowsList.props = {
	tvShows: PropTypes.array.isRequired
};
