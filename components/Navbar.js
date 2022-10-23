import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from '../styles/Navbar.module.css';
import logosrc from '../public/AutoGT.png';

function Navbar() {
	return (
		<div className={styles.container}>
			<div className={styles.logo}>
				<Link href="/">
					<Image src={logosrc} alt="Website logo" priority></Image>
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
