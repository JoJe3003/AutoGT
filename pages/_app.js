import '../styles/globals.css';
import '../styles/reset.css';
import Layout from '../components/Layout';
import { Analytics } from '@vercel/analytics/react';
import { Roboto_Flex } from '@next/font/google';

const roboto = Roboto_Flex({
	subsets: ['latin'],
	variable: '--font-roboto',
});

function MyApp({ Component, pageProps }) {
	return (
		<main className={`${roboto.variable} font-sans`}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
			<Analytics />
		</main>
	);
}

export default MyApp;
