import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Introduction from '../components/Introduction';
import Webloader from '../components/Webloader';
import heroimg from '/public/static/hero25.webp';

export default function Home() {
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
		}, 2000);
	}, []);

	return (
		<>
			<Head>
				<title>Auto GT</title>
			</Head>
			{loading ? <Webloader /> : null}

			{/* Hero */}
			<div className="relative flex items-center justify-center object-center w-full py-0 px-30 ">
				<div>
					<Image
						src={heroimg}
						alt="Bilde av to biler"
						layout="fill"
						objectFit="cover"
						objectPosition="center"
						priority
					/>
				</div>
				<div className="relative flex flex-col items-center gap-16 mx-8 my-64 text-white">
					<h1 className="text-4xl text-center md:text-6xl ">
						Velkommen til <span className="block">Auto GT</span>
					</h1>

					{/* <button className="px-4 py-2 rounded-md bg-accent1 hover:bg-red-600">
						<Link href="/inventar">Utforsk bilsortiment</Link>
					</button> */}
				</div>
			</div>
			{/* Introduksjon */}
			<Introduction />
		</>
	);
}
