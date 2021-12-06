import Link from 'next/link';
import PropTypes from 'prop-types';

/**
 * Menu item.
 *
 * @param  {object}  props      The component attributes as props.
 * @param  {string}  props.link Item link.
 * @param  {string}  props.text Item text.
 * @return {Element}            Menu element.
 */
export default function MenuItem({ link, text }) {
	return (
		<Link href={link}>
			<a className="ml-2 mr-2 cursor-pointer border-b">{text}</a>
		</Link>
	);
}

MenuItem.props = {
	link: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired
};
