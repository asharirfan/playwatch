import Image from 'next/image';
import Link from 'next/link';
import PropTypes from 'prop-types';

/**
 * Facebook link component.
 *
 * @param  {object}  props    The component attributes as props.
 * @param  {string}  props.id Facebook id.
 * @return {Element}          Facebook link.
 */
export default function Facebook({ id }) {
	return (
		<Link href={`https://facebook.com/${id}`}>
			<a className="inline-block cursor-pointer mx-2" target="_blank">
				<Image
					alt="Facebook"
					height={32}
					src="/icons/facebook.svg"
					width={32}
				/>
			</a>
		</Link>
	);
}

Facebook.props = {
	id: PropTypes.string.isRequired
};
