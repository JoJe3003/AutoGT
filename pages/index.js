import { useEffect, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Script from 'next/script';
import Introduction from '../components/Introduction';
import Webloader from '../components/Webloader';
import heroimg from '/public/static/hero25.webp';
import { NavLinks } from '../components/Navlinks';

export default function Home() {
	return (
		<>
			<Script async src="https://cdn.splitbee.io/sb.js" />
			<Head>
				<title>Auto GT</title>
			</Head>

			{/* Hero */}
			<div className="px-30 relative flex w-full items-center justify-center bg-background object-center py-0">
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
				<div className="relative mx-8 my-64 flex flex-col items-center gap-16 text-white">
					<h1 className="text-center text-4xl md:text-6xl ">
						Velkommen til <span className="block">Auto GT</span>
					</h1>

					{/* <button className="px-4 py-2 rounded-md bg-accent1 hover:bg-red-600">
						<Link href="/inventar">Utforsk bilsortiment</Link>
					</button> */}
				</div>
			</div>
			{/* Introduksjon */}
			<div className="grid place-content-center">
				<h1 className="my-24 text-6xl">Nettside under utvikling</h1>
			</div>
		</>
	);
}
