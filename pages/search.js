import Layout from '@/components/common/Layout';
import SearchList from '@/components/search/SearchList';
import { getSearchResults } from '@/functions/search';
import config from '@/utils/config';
import Router, { useRouter } from 'next/router';
import useSWR from 'swr';
import { useState } from 'react';

/**
 * Search page.
 *
 * @return {Element} HTML element.
 */
export default function Search() {
	// const [loading, setLoading] = useState(false);
	// const [searchResults, setSearchResults] = useState([]);
	const [page, setPage] = useState(1);

	const router = useRouter();
	const { query } = router.query;
	// console.log(router);

	const { data, error } = useSWR(
		`${config.search}&query=${query}&page=${page}`,
		getSearchResults
	);

	/**
	 * Load previous page results.
	 */
	function loadPreviousPage() {
		Router.push({
			pathname: '/search',
			query: {
				search: encodeURI(query),
				page: page - 1
			}
		});
		setPage(page - 1);
	}

	/**
	 * Load next page results.
	 */
	function loadNextPage() {
		Router.push({
			pathname: '/search',
			query: {
				search: encodeURI(query),
				page: page + 1
			}
		});
		setPage(page + 1);
	}

	if (!data) {
		return (
			<Layout>
				<h2>Search Page</h2>
				<p>Getting search results...</p>
			</Layout>
		);
	}

	if (error) {
		return (
			<Layout>
				<h2>Search Page</h2>
				<p>An error occurred while getting your results back.</p>
			</Layout>
		);
	}
	// console.log(data);

	return (
		<Layout>
			<h3>Results for {query}</h3>
			<SearchList results={data.results} />
			{data.total_pages > 1 && (
				<>
					{1 !== data.page && (
						<button onClick={loadPreviousPage} type="button">
							Previous Page
						</button>
					)}
					{page !== data.total_pages && (
						<button onClick={loadNextPage} type="button">
							Next Page
						</button>
					)}
				</>
			)}
		</Layout>
	);
}
