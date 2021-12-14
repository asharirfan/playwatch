import ProgressBar from '@ramonak/react-progress-bar';
import PropTypes from 'prop-types';

/**
 * Popularity widget component.
 *
 * @param  {object}  props            The component attributes as props.
 * @param  {number}  props.popularity Popularity.
 * @return {Element}                  Popularity widget.
 */
export default function PopularityWidget({ popularity }) {
	return (
		<div className="mb-4">
			<p className="text-md mb-2 opacity-60">Popularity</p>
			<ProgressBar
				completed={popularity * 10}
				bgColor="#03CC90"
				baseBgColor="#ffffff"
				labelColor="#3F4354"
			/>
		</div>
	);
}

PopularityWidget.props = {
	popularity: PropTypes.number.isRequired
};
