import MenuItem from '@/components/menu/MenuItem';

/**
 * Menu component.
 *
 * @return {Element} Menu component.
 */
export default function Menu() {
	return (
		<div className="menu ml-2 mr-2">
			<MenuItem link="/" text="Home" />
			<MenuItem link="/movie" text="Movies" />
			<MenuItem link="/tv" text="TV Shows" />
			<MenuItem link="/person" text="People" />
		</div>
	);
}
