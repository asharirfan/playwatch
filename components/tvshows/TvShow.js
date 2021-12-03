import config from '@/utils/config';
import Image from 'next/image';
import PropTypes from 'prop-types';
import Link from 'next/link';

/**
 * Single tv show component.
 *
 * @param  {object}  props        The component attributes as props.
 * @param  {object}  props.tvShow Single tv show data.
 * @return {Element}              HTML element.
 */
export default function TvShow({ tvShow }) {
	const posterPath = tvShow.poster_path
		? `${config.tmdbImgBaseUrl}w185${tvShow.poster_path}`
		: 'https://via.placeholder.com/185x278.png/353849/03CC90?text=PlayWatch';

	return (
		<Link href={`/${tvShow.media_type}/${tvShow.id}`}>
			<a>
				<article key={tvShow.id}>
					<Image
						alt={tvShow.name}
						height="278"
						src={posterPath}
						width="185"
					/>
					<h3>{tvShow.name}</h3>
					<p>{tvShow.overview}</p>
					<p>{tvShow.first_air_date}</p>
				</article>
			</a>
		</Link>
	);
}

TvShow.props = {
	tvShow: PropTypes.object.isRequired
};
