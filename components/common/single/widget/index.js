import PropTypes from 'prop-types';

/**
 * Sidebar widget component.
 *
 * @param  {object}  props       The component attributes as props.
 * @param  {string}  props.label Label.
 * @param  {string}  props.value Value.
 * @return {Element}             Widget component.
 */
export default function Widget({ label, value }) {
	return (
		<div className="mb-4">
			<p className="text-md mb-2 opacity-60">{label}</p>
			<p className="font-heading text-xl">{value}</p>
		</div>
	);
}

Widget.props = {
	label: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired
};
