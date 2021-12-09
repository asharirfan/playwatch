import PropTypes from 'prop-types';
import SearchResult from '@/components/search/SearchResult';

const ALLOWED_MEDIA_TYPES = ['movie', 'person', 'tv'];

/**
 * Search list component.
 *
 * @param  {object}  props              The component attributes as props.
 * @param  {Array}   props.results      Search results.
 * @param  {number}  props.totalResults Total search results.
 * @param  {string}  props.searchQuery  Search query.
 * @return {Element}                    HTML element.
 */
export default function SearchList({ results, totalResults, searchQuery }) {
	return (
		<div id="search-results" className="my-10">
			<h2 className="font-heading text-2xl my-4">
				{totalResults} results found for <strong>{searchQuery}</strong>
			</h2>
			<div className="flex flex-wrap justify-start -mx-4">
				{results && results.length > 0 ? (
					results.map(result => {
						if (
							ALLOWED_MEDIA_TYPES.indexOf(result.media_type) ===
							-1
						) {
							return;
						}

						return <SearchResult key={result.id} result={result} />;
					})
				) : (
					<article className="px-4 my-4">
						<p>No results found.</p>
					</article>
				)}
			</div>
		</div>
	);
}

SearchList.props = {
	results: PropTypes.array.isRequired,
	totalResults: PropTypes.number.isRequired,
	searchQuery: PropTypes.string.isRequired
};
