import '../styles/globals.css';
import '../styles/reset.css';
import { Analytics } from '@vercel/analytics/react';

import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
	return (
		<Layout>
			<Component {...pageProps} />
			<Analytics />
		</Layout>
	);
}

export default MyApp;
