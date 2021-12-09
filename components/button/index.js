/**
 * Simple button component.
 *
 * @param  {object}  props           The component attributes as props.
 * @param  {Element} props.children  Component children to render.
 * @param  {string}  props.className Additional classnames.
 * @return {Element}                 Button.
 */
export default function Button({ children, className }) {
	return (
		<button
			className={`text-text bg-green text-lg px-4 py-2 ${className}`}
			type="submit"
		>
			{children}
		</button>
	);
}
