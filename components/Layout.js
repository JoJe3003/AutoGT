import { useEffect, useState } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import Webloader from './Webloader';

const Layout = ({ children }) => {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
		}, 2000);
	}, []);

	return (
		<div className="flex min-h-screen flex-col justify-between">
			<Webloader isVisible={loading} />
			{loading ? null : (
				<>
					<Navbar />
					<main>{children}</main>
					<Footer />
				</>
			)}
		</div>
	);
};

export default Layout;
