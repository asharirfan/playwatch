import { useRouter } from 'next/router';
import HomePageHeader from '@/components/header/HomePageHeader';
import Logo from '@/components/header/Logo';
import Menu from '@/components/menu';

/**
 * Header component.
 *
 * @return {Element} Header.
 */
export default function Header() {
	const router = useRouter();
	const { route } = router;

	if ('/' === route) {
		return <HomePageHeader />;
	}

	return (
		<header className="relative">
			<div className="relative z-10">
				<div className="container px-16 mx-auto flex flex-auto justify-between items-center">
					<Logo />
					<Menu />
				</div>
			</div>
		</header>
	);
}
