import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from '../styles/Navbar.module.css';

function Navbar() {
	return (
		<div className={styles.container}>
			<div className={styles.logo}>
				<Link href="/">
					<a href="#">
						<Image
							src="/favicon.ico"
							width="60px"
							height="60px"
							alt="Website logo"
						></Image>
					</a>
				</Link>
			</div>
			<nav className={styles.navigation}>
				<ul>
					<li>Biler</li>
					<li>Informasjon</li>
					<li>Kontakt</li>
				</ul>
			</nav>
		</div>
	);
}

export default Navbar;
