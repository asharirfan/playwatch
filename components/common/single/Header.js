import BackdropHeader from '@/components/common/header/BackdropHeader';
import Facebook from '@/components/common/social/facebook';
import Twitter from '@/components/common/social/twitter';
import Instagram from '@/components/common/social/instagram';
import IMDB from '@/components/common/social/imdb';
import Image from 'next/image';
import { getRuntime } from '@/functions/getRuntime';
import { getYear } from '@/functions/getDate';
import PropTypes from 'prop-types';

/**
 * Single movie/tv show page header component.
 *
 * @param  {object}  props              The component attributes as props.
 * @param  {string}  props.backdropPath Backdrop image path.
 * @param  {string}  props.date         Date.
 * @param  {object}  props.externalIds  External ids object.
 * @param  {Array}   props.genres       Genres array.
 * @param  {string}  props.overview     Overview.
 * @param  {string}  props.posterPath   Poster image path.
 * @param  {string}  props.runTime      Run time.
 * @param  {string}  props.tagline      Tag line.
 * @param  {string}  props.title        Title.
 * @return {Element}                    Movie/TV show page header.
 */
export default function Header({
	backdropPath,
	date,
	externalIds,
	genres,
	overview,
	posterPath,
	runTime,
	tagline,
	title
}) {
	const time = getRuntime(runTime);
	const year = getYear(date);

	return (
		<div className="min-h-headerBg">
			<BackdropHeader backdropPath={backdropPath} />
			<div className="flex justify-between py-8">
				<div>
					<h3 className="font-heading text-4xl">{title}</h3>
					<p>{time ? `${year} - ${time}` : `${year}`}</p>
				</div>
				<div>
					{externalIds.facebook_id && (
						<Facebook id={externalIds.facebook_id} />
					)}
					{externalIds.twitter_id && (
						<Twitter id={externalIds.twitter_id} />
					)}
					{externalIds.instagram_id && (
						<Instagram id={externalIds.instagram_id} />
					)}
					{externalIds.imdb_id && <IMDB id={externalIds.imdb_id} />}
				</div>
			</div>
			<div className="flex">
				<div className="w-1/5">
					<Image
						alt={title}
						height="540"
						src={posterPath}
						width="360"
					/>
				</div>
				<div className="ml-8 w-4/5">
					<p className="mb-2">
						{genres &&
							genres.map(genre => {
								return (
									<span
										className="border inline-block mr-4 p-1 rounded-2xl"
										key={genre.id}
									>
										{genre.name}
									</span>
								);
							})}
					</p>
					{tagline && (
						<p className="italic mb-2 pt-2 text-lg">{tagline}</p>
					)}
					<h4 className="font-heading mb-2 text-2xl">Overview</h4>
					<p className="mb-2 text-lg">{overview}</p>
				</div>
			</div>
		</div>
	);
}

Twitter.props = {
	backdropPath: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired,
	externalIds: PropTypes.object.isRequired,
	genres: PropTypes.array.isRequired,
	overview: PropTypes.string.isRequired,
	posterPath: PropTypes.string.isRequired,
	runTime: PropTypes.string.isRequired,
	tagline: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired
};
