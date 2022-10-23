import Image from 'next/image';
import styles from '../styles/Home.module.css';
import heroimg from '/public/static/hero.jpg';

export default function Home() {
	return (
		<div className={styles.container}>
			<div className={styles.hero}>
				<Image src={heroimg} alt="Bilde av to biler"></Image>
			</div>
		</div>
	);
}
