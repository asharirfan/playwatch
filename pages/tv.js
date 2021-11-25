import Layout from '@/components/common/Layout';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import TvShowsList from '@/components/tvshows/TvShowsList';
import { getTrendingTvShowsByDay } from '@/functions/getTrendingTvShows';

/**
 * TV shows page.
 *
 * @param  {object}  props                The component attributes as props.
 * @param  {object}  props.initialTvShows TV shows data.
 * @return {Element}                      HTML element.
 */
export default function TVShows({ initialTvShows }) {
	const [loading, setLoading] = useState(false);
	const [tvShows, setTvShows] = useState([]);
	const [page, setPage] = useState(1);

	useEffect(() => {
		setTvShows([...initialTvShows.results]);
	}, [initialTvShows]);

	/**
	 * Load next page of movies.
	 */
	async function loadTvShows() {
		const paged = page + 1;
		setLoading(true);
		const nextPageTvShows = await getTrendingTvShowsByDay(paged);
		setTvShows([...tvShows, ...nextPageTvShows.results]);
		setPage(paged);
		setLoading(false);
	}

	return (
		<Layout>
			<TvShowsList tvShows={tvShows} />
			<button onClick={loadTvShows} type="button" disabled={loading}>
				{loading ? 'Loading...' : 'Load More'}
			</button>
		</Layout>
	);
}

/**
 * Get static props for tv shows page.
 *
 * @return {object} Props object.
 */
export async function getStaticProps() {
	return {
		props: {
			initialTvShows: await getTrendingTvShowsByDay()
		}
	};
}

TVShows.props = {
	initialTvShows: PropTypes.object.isRequired
};
