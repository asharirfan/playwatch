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
		? `${config.tmdbImgBaseUrl}w500${person.profile_path}`
		: 'https://via.placeholder.com/500x750.png/353849/03CC90?text=PlayWatch';

	return (
		<div className="flex-initial w-64">
			<div className="px-4 my-4">
				<article
					className="bg-white text-text rounded-2xl pb-4"
					key={person.id}
				>
					<Link href={`/${person.media_type}/${person.id}`}>
						<a className="cursor-pointer block">
							<Image
								alt={person.title}
								className="rounded-t-2xl"
								height="486"
								src={profilePath}
								width="342"
							/>
							<div className="mx-2 mt-2">
								<h3 className="font-heading text-xl font-semibold">
									{person.name}
								</h3>
							</div>
						</a>
					</Link>
				</article>
			</div>
		</div>
	);
}

Person.props = {
	person: PropTypes.object.isRequired
};
