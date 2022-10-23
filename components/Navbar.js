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
							src="/Logo.pdf"
							width="140px"
							height="55px"
							alt="Website logo"
						></Image>
					</a>
				</Link>
			</div>
			<nav className={styles.navigation}>
				<ul>
					<li>
						<Link href="/om-oss">Om oss</Link>
					</li>
					<li>
						<Link href="/inventar">Inventar</Link>
					</li>
					<li>
						<Link href="/selg-bilen-din">Selg bilen din</Link>
					</li>
					<li>
						<Link href="/kontakt">Kontakt oss</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
}

export default Navbar;
