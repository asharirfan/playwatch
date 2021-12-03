import config from '@/utils/config';
import axios from 'axios';

/**
 * Get trending persons by day.
 *
 * @param  {number}      page Number of page. Default is 1.
 * @return {null|object}      Persons object or null if failed.
 */
async function getTrendingPersonsByDay(page = 1) {
	let personsResponse = null;

	try {
		personsResponse = await axios(
			`${config.trendingPersonsByDay}&page=${page}`
		);
	} catch (error) {
		console.error(error);
	}

	return personsResponse && personsResponse.status === 200
		? personsResponse.data
		: { results: [] };
}

/**
 * Get all trending persons by day.
 *
 * @param  {number} numberOfPages Number of pages to get.
 * @return {Array}                Persons array.
 */
async function getAllTrendingPersonsByDay(numberOfPages = 500) {
	let currentPage = 1;
	let persons = [];
	let personsResponse = null;

	do {
		personsResponse = await getTrendingPersonsByDay(currentPage);

		if (personsResponse.results.length !== 0) {
			persons = [...persons, ...personsResponse.results];
		}

		currentPage = personsResponse.page + 1;
	} while (personsResponse.page < numberOfPages);

	return persons;
}

export { getTrendingPersonsByDay, getAllTrendingPersonsByDay };
