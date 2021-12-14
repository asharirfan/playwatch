import { getPersonImgPath } from '@/functions/getPerson';
import Image from 'next/image';
import Link from 'next/link';
import PropTypes from 'prop-types';

/**
 * Single movie/tv show cast component.
 *
 * @param  {object}  props      The component attributes as props.
 * @param  {Array}   props.cast Casts array.
 * @return {Element}            Cast component.
 */
export default function Cast({ cast }) {
	return (
		<>
			<h3 className="font-heading my-2 text-2xl">Cast</h3>
			<div className="flex flex-wrap justify-start mt-4 -mx-2">
				{cast &&
					cast.map(person => {
						if (!person.profile_path) {
							return;
						}

						return (
							<div className="w-36 m-2" key={person.id}>
								<Link href={`/person/${person.id}`}>
									<a className="cursor-pointer">
										<Image
											alt={person.name}
											height={278}
											src={getPersonImgPath(
												person.profile_path,
												'w185'
											)}
											width={185}
										/>
									</a>
								</Link>
								<Link href={`/person/${person.id}`}>
									<a className="cursor-pointer text-lg hover:text-green">
										<h4>{person.name}</h4>
									</a>
								</Link>
								<p className="text-md opacity-60">
									as {person.character}
								</p>
							</div>
						);
					})}
			</div>
		</>
	);
}

Cast.props = {
	cast: PropTypes.array.isRequired
};
