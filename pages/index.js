import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import heroimg from '/public/static/hero25.webp';

export default function Home() {
	return (
		<>
			<Head>
				<title>AutoGT</title>
			</Head>
			<div className={styles.container}>
				<div className={styles.hero}>
					<div>
						<Image src={heroimg} alt="Bilde av to biler" priority></Image>
					</div>
					<h1>Bilsalg gjort enkelt</h1>
				</div>
			</div>
		</>
	);
}
