import Layout from '@/components/common/Layout';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { getTrendingPersonsByDay } from '@/functions/getTrendingPersons';
import PersonsList from '@/components/persons/PersonsList';

/**
 * Persons page.
 *
 * @param  {object}  props                The component attributes as props.
 * @param  {object}  props.initialPersons Persons data.
 * @return {Element}                      HTML element.
 */
export default function Person({ initialPersons }) {
	const [loading, setLoading] = useState(false);
	const [persons, setPersons] = useState([]);
	const [page, setPage] = useState(1);

	useEffect(() => {
		setPersons([...initialPersons.results]);
	}, [initialPersons]);

	/**
	 * Load next page of persons.
	 */
	async function loadPersons() {
		const paged = page + 1;
		setLoading(true);
		const nextPagePersons = await getTrendingPersonsByDay(paged);
		setPersons([...persons, ...nextPagePersons.results]);
		setPage(paged);
		setLoading(false);
	}

	return (
		<Layout>
			<PersonsList persons={persons} />
			<button onClick={loadPersons} type="button" disabled={loading}>
				{loading ? 'Loading...' : 'Load More'}
			</button>
		</Layout>
	);
}

/**
 * Get static props for persons page.
 *
 * @return {object} Props object.
 */
export async function getStaticProps() {
	return {
		props: {
			initialPersons: await getTrendingPersonsByDay()
		}
	};
}

Person.props = {
	initialPersons: PropTypes.object.isRequired
};
