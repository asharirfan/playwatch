import Menu from '@/components/menu';
import Logo from '@/components/header/Logo';
import HeaderSearchForm from '@/components/header/HeaderSearchForm';

/**
 * Homepage header.
 *
 * @return {Element} Header.
 */
export default function HomePageHeader() {
	return (
		<header className="relative bg-header-bg">
			<div className="absolute top-0 h-screen w-full bg-darkGrey bg-opacity-60 z-0" />
			<div className="relative h-screen z-10">
				<div className="container mx-auto flex flex-auto justify-between items-center">
					<Logo />
					<Menu />
				</div>
				<div className="container mx-auto flex flex-auto justify-center items-center h-5/6">
					<HeaderSearchForm />
				</div>
			</div>
		</header>
	);
}
