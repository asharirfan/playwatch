/**
 * Simple button component.
 *
 * @param  {object}  props          The component attributes as props.
 * @param  {Element} props.children Component children to render.
 * @return {Element}                Button.
 */
export default function Button({ children }) {
	return (
		<button className="text-text bg-green text-lg px-4 py-2" type="submit">
			{children}
		</button>
	);
}
