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
			<div className={styles.hero}>
				<div className={styles.heroWrapper}>
					<Image
						src={heroimg}
						alt="Bilde av to biler"
						layout="fill"
						objectFit="cover"
						objectPosition="center"
						priority
					/>
				</div>
				<div className={styles.heroText}>
					<h1>Velkommen til AutoGT</h1>
					<p className="mx-16 my-4">
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
						blanditiis quisquam sapiente voluptates est.
					</p>
					<button className="px-4 py-2 bg-slate-400 rounded-md">
						Utforsk bilsortiment
					</button>
				</div>
			</div>
		</>
	);
}
