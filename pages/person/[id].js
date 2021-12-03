import Layout from '@/components/common/Layout';
import { getPerson } from '@/functions/getPerson';
import { getAllTrendingPersonsByDay } from '@/functions/getTrendingPersons';
import config from '@/utils/config';
import Image from 'next/image';

/**
 * Single person page.
 *
 * @param  {object}  props        The component attributes as props.
 * @param  {object}  props.person Person object.
 * @return {Element}              Person page.
 */
export default function Person({ person }) {
	if (!person) {
		return <Layout>Person not found.</Layout>;
	}

	const profilePath = person.profile_path
		? `${config.tmdbImgBaseUrl}w500${person.profile_path}`
		: 'https://via.placeholder.com/500x750.png/353849/03CC90?text=PlayWatch';

	return (
		<Layout>
			<h3>{person.title}</h3>
			<Image
				alt={person.title}
				height="750"
				src={profilePath}
				width="500"
			/>
			<p>{person.biography}</p>
			<p>Popularity: {person.popularity}</p>
		</Layout>
	);
}

/**
 * Next.js function to get all expected person ids at build time.
 *
 * This function gets called at build time.
 *
 * @return {object} Props object.
 */
export async function getStaticPaths() {
	const trendingPersons = await getAllTrendingPersonsByDay(10);

	const paths = trendingPersons.map(person => ({
		params: { id: person.id.toString() }
	}));

	return {
		paths,
		fallback: 'blocking'
	};
}

/**
 * Get static props for the dynamic person page.
 *
 * @param  {object} props        The component attributes as props.
 * @param  {object} props.params Object containing person id.
 * @return {object}              Props object.
 */
export async function getStaticProps({ params }) {
	const person = await getPerson(params.id);

	return {
		props: {
			person
		},
		revalidate: 86400
	};
}
