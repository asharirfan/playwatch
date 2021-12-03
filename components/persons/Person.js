import config from '@/utils/config';
import Image from 'next/image';
import PropTypes from 'prop-types';
import Link from 'next/link';

/**
 * Single person component.
 *
 * @param  {object}  props        The component attributes as props.
 * @param  {object}  props.person Single person data.
 * @return {Element}              HTML element.
 */
export default function Person({ person }) {
	const profilePath = person.profile_path
		? `${config.tmdbImgBaseUrl}w185${person.profile_path}`
		: 'https://via.placeholder.com/185x278.png/353849/03CC90?text=PlayWatch';

	return (
		<Link href={`/${person.media_type}/${person.id}`}>
			<a>
				<article key={person.id}>
					<Image
						alt={person.title}
						height="278"
						src={profilePath}
						width="185"
					/>
					<h3>{person.name}</h3>
				</article>
			</a>
		</Link>
	);
}

Person.props = {
	person: PropTypes.object.isRequired
};
