import { NextSeo } from 'next-seo';
import PropTypes from 'prop-types';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import config from '@/utils/config';

/**
 * Layout component.
 *
 * @param  {object}  props          The component attributes as props.
 * @param  {any}     props.children Child components to render.
 * @return {Element}                Component.
 */
export default function Layout({ children }) {
	return (
		<>
			<NextSeo
				title={config.title}
				description={config.description}
				openGraph={{
					title: config.title,
					description: config.description
				}}
				nofollow={config.nofollow}
				noindex={config.noindex}
			/>
			<Header />
			<main id="page-content">{children}</main>
			<Footer />
		</>
	);
}

Layout.props = {
	children: PropTypes.any.isRequired
};
