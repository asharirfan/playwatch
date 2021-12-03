import '@/styles/globals.css';

/**
 * Next.js App.
 *
 * @param  {object}  props           The component attributes as props.
 * @param  {Element} props.Component React component to render as App.
 * @param  {object}  props.pageProps App props.
 * @return {Element}                 App.
 */
function MyApp({ Component, pageProps }) {
	return <Component {...pageProps} />;
}

export default MyApp;
