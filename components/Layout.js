import { useEffect, useState } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import Webloader from './Webloader';

const Layout = ({ children }) => {
	// const [loading, setLoading] = useState(false);

	// useEffect(() => {
	// 	setLoading(true);
	// 	setTimeout(() => {
	// 		setLoading(false);
	// 	}, 2000);
	// }, []);

	return (
		<div className="flex min-h-screen flex-col justify-between">
			{/* {loading ? <Webloader /> : null} */}
			{/* <Webloader /> */}
			<Navbar />
			<main>{children}</main>
			<Footer />
		</div>
	);
};

export default Layout;
