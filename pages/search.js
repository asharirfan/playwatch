import Layout from '@/components/common/Layout';
import SearchForm from '@/components/search/SearchForm';
import SearchList from '@/components/search/SearchList';
import { getSearchResults } from '@/functions/search';
import config from '@/utils/config';
import Router, { useRouter } from 'next/router';
import useSWR from 'swr';

/**
 * Search page.
 *
 * @return {Element} HTML element.
 */
export default function Search() {
	const router = useRouter();
	const { query, page } = router.query;

	let searchQueryUrl = config.search;

	if (!page) {
		searchQueryUrl = `${searchQueryUrl}&query=${query}&page=1`;
	} else {
		searchQueryUrl = `${searchQueryUrl}&query=${query}&page=${page}`;
	}

	const { data, error } = useSWR(searchQueryUrl, getSearchResults);

	/**
	 * Load previous page results.
	 */
	function loadPreviousPage() {
		Router.push({
			pathname: '/search',
			query: {
				query: query,
				page: parseInt(page) - 1
			}
		});
	}

	/**
	 * Load next page results.
	 */
	function loadNextPage() {
		Router.push({
			pathname: '/search',
			query: {
				query: query,
				page: page ? parseInt(page) + 1 : 2
			}
		});
	}

	if (!data) {
		return (
			<Layout>
				<SearchForm />
				<h2 className="font-heading text-2xl my-4">Search Page</h2>
				<p className="my-4">
					Getting search results for <strong>{query}</strong>
				</p>
			</Layout>
		);
	}

	if (error) {
		return (
			<Layout>
				<SearchForm />
				<h2 className="font-heading text-2xl my-4">Search Page</h2>
				<p className="my-4">
					An error occurred while getting your results back.
				</p>
			</Layout>
		);
	}

	return (
		<Layout>
			<SearchForm />
			<SearchList
				results={data.results}
				totalResults={data.total_results}
				searchQuery={query}
			/>
			{data.total_pages > 1 && (
				<>
					{1 !== data.page && (
						<button onClick={loadPreviousPage} type="button">
							Previous Page
						</button>
					)}
					{data.page < data.total_pages && (
						<button onClick={loadNextPage} type="button">
							Next Page
						</button>
					)}
				</>
			)}
		</Layout>
	);
}
