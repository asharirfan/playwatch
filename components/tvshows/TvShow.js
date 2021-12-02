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
	return (
		<Link href={`/${tvShow.media_type}/${tvShow.id}`}>
			<a>
				<article key={tvShow.id}>
					<Image
						alt={tvShow.name}
						height="278"
						src={`${config.tmdbImgBaseUrl}w185${tvShow.poster_path}`}
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
