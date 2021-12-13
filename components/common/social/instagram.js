import Image from 'next/image';
import Link from 'next/link';
import PropTypes from 'prop-types';

/**
 * Instagram link component.
 *
 * @param  {object}  props    The component attributes as props.
 * @param  {string}  props.id Instagram id.
 * @return {Element}          Instagram link.
 */
export default function Instagram({ id }) {
	return (
		<Link href={`https://instagram.com/${id}`}>
			<a className="inline-block cursor-pointer mx-2" target="_blank">
				<Image
					alt="Instagram"
					height={32}
					src="/icons/instagram.svg"
					width={32}
				/>
			</a>
		</Link>
	);
}

Instagram.props = {
	id: PropTypes.string.isRequired
};
