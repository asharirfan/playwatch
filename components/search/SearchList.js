import PropTypes from 'prop-types';
import SearchResult from '@/components/search/SearchResult';

/**
 * Search list component.
 *
 * @param  {object}  props         The component attributes as props.
 * @param  {Array}   props.results Search results.
 * @return {Element}               HTML element.
 */
export default function SearchList({ results }) {
	return (
		<div id="search-results">
			{results && results.length > 0 ? (
				results.map(result => (
					<SearchResult key={result.id} result={result} />
				))
			) : (
				<article>
					<p>No results found.</p>
				</article>
			)}
		</div>
	);
}

SearchList.props = {
	results: PropTypes.array.isRequired
};
