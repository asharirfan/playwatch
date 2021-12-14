import Image from 'next/image';
import { getYear } from '@/functions/getDate';
import { getPosterPath } from '@/functions/image';
import PropTypes from 'prop-types';

/**
 * Component to display seasons of a TV Show.
 *
 * @param  {object}  props         The component attributes as props.
 * @param  {Array}   props.seasons Seasons array.
 * @return {Element}               Seasons component.
 */
export default function Seasons({ seasons }) {
	return (
		<div className="mt-4">
			<h3 className="font-heading text-2xl my-2">Seasons</h3>
			<div>
				{seasons &&
					seasons.map(season => {
						return (
							<div
								className="flex bg-white text-text my-4"
								key={season.id}
							>
								<div
									className="w-1/5"
									style={{ height: '338px' }}
								>
									<Image
										alt={season.name}
										className="block"
										height={750}
										src={getPosterPath(season.poster_path)}
										width={500}
									/>
								</div>
								<div className="w-4/5 p-4">
									<h4 className="font-heading text-xl font-bold mt-2">
										{season.name}
									</h4>
									<p className="mt-2 text-sm">{`${getYear(
										season.air_date
									)} | ${season.episode_count} episodes`}</p>
									<p className="text-md mt-2">
										{season.overview}
									</p>
								</div>
							</div>
						);
					})}
			</div>
		</div>
	);
}

Seasons.props = {
	seasons: PropTypes.array.isRequired
};
