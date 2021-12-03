import Person from '@/components/persons/Person';
import PropTypes from 'prop-types';

/**
 * Persons list component.
 *
 * @param  {object}  props         The component attributes as props.
 * @param  {object}  props.persons Persons data.
 * @return {Element}               HTML element.
 */
export default function PersonsList({ persons }) {
	return (
		<div id="trending-persons">
			{persons && persons.length > 0 ? (
				persons.map(person => (
					<Person key={person.id} person={person} />
				))
			) : (
				<article>
					<p>No persons found.</p>
				</article>
			)}
		</div>
	);
}

PersonsList.props = {
	persons: PropTypes.array.isRequired
};
