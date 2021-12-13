import Link from 'next/link';
import Image from 'next/image';
import PropTypes from 'prop-types';
import { getFormattedDate } from '@/functions/getDate';

/**
 * Media Card component.
 *
 * @param  {object}  props        The component attributes as props.
 * @param  {number}  props.id     ID.
 * @param  {string}  props.link   Link
 * @param  {string}  props.poster Poster link.
 * @param  {string}  props.date   Date.
 * @param  {string}  props.title  Title.
 * @return {Element}              Card component.
 */
export default function Card({ id, link, poster, date = '', title }) {
	return (
		<div className="flex-initial w-72">
			<div className="px-4 my-4">
				<article
					key={id}
					className="bg-white text-text rounded-2xl pb-4"
				>
					<Link href={link}>
						<a className="cursor-pointer block">
							<Image
								alt={title}
								className="rounded-t-2xl"
								height="486"
								src={poster}
								width="342"
							/>
						</a>
					</Link>
					<div className="mx-2 mt-2">
						<Link href={link}>
							<a className="cursor-pointer hover:text-green">
								<h3 className="font-heading text-xl font-semibold">
									{title}
								</h3>
							</a>
						</Link>
						{date && <p>{getFormattedDate(date)}</p>}
					</div>
				</article>
			</div>
		</div>
	);
}

Card.props = {
	id: PropTypes.number.isRequired,
	link: PropTypes.string.isRequired,
	poster: PropTypes.string.isRequired,
	date: PropTypes.string,
	title: PropTypes.string.isRequired
};
