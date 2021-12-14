import PropTypes from 'prop-types';

/**
 * Keywords widget component.
 *
 * @param  {object}  props          The component attributes as props.
 * @param  {Array}   props.keywords Keywords array.
 * @return {Element}                Keywords widget.
 */
export default function KeywordsWidget({ keywords }) {
	return (
		<div className="mb-4">
			<p className="text-md mb-2 opacity-60">Keywords</p>
			<p>
				{keywords &&
					keywords.map(keyword => {
						return (
							<span
								className="bg-green inline-block mr-4 mb-4 py-1 px-2 text-grey rounded-2xl"
								key={keyword.id}
							>
								{keyword.name}
							</span>
						);
					})}
			</p>
		</div>
	);
}

KeywordsWidget.props = {
	keywords: PropTypes.array.isRequired
};
