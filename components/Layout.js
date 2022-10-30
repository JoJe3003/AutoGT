import Alphanav from './Alphanav';
import Footer from './Footer';
import Navbar from './Navbar';

const Layout = ({ children }) => {
	return (
		<div className="content">
			<Alphanav />
			{/* <Navbar /> */}
			{children}
			<Footer />
		</div>
	);
};

export default Layout;
