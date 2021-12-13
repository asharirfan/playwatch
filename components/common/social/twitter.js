import Image from 'next/image';
import Link from 'next/link';
import PropTypes from 'prop-types';

/**
 * Twitter link component.
 *
 * @param  {object}  props    The component attributes as props.
 * @param  {string}  props.id Twitter id.
 * @return {Element}          Twitter link.
 */
export default function Twitter({ id }) {
	return (
		<Link href={`https://twitter.com/${id}`}>
			<a className="inline-block cursor-pointer mx-2" target="_blank">
				<Image
					alt="Twitter"
					height={32}
					src="/icons/twitter.svg"
					width={32}
				/>
			</a>
		</Link>
	);
}

Twitter.props = {
	id: PropTypes.string.isRequired
};
