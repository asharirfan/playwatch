import PropTypes from 'prop-types';

/**
 * Backdrop image header for single movie/tv show page.
 *
 * @param  {object}  props              The component attributes as props.
 * @param  {string}  props.backdropPath Backdrop image path.
 * @return {Element}                    Backdrop header component.
 */
export default function BackdropHeader({ backdropPath }) {
	return (
		<div
			className="absolute bg-cover bg-center left-0 w-full h-headerBg"
			style={{
				backgroundImage: `url(${backdropPath})`,
				zIndex: '-1'
			}}
		>
			<div className="absolute top-0 h-headerBg w-full bg-darkGrey bg-opacity-80" />
		</div>
	);
}

BackdropHeader.props = {
	backdropPath: PropTypes.string.isRequired
};
