import { useEffect, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Script from 'next/script';
import Introduction from '../components/Introduction';
import Webloader from '../components/Webloader';
import heroimg from '/public/static/hero25.webp';
import { NavLinks } from '../components/Navlinks';
import { ImgSlider } from '../components/ImgSlider';
import ImageSlideshow from '../components/ImageSlideshow';
import Link from 'next/link';

export default function Home() {
	return (
		<>
			<Script async src="https://cdn.splitbee.io/sb.js" />
			<Head>
				<title>Auto GT</title>
			</Head>

			{/* Hero */}
			<div className="px-30 relative flex w-full items-center justify-center bg-background object-center py-0">
				<div className="absolute h-full w-full">
					<Image
						src={heroimg}
						alt="Bilde av to biler"
						as="div"
						fill
						className="object-cover"
						loading="eager"
						priority
						placeholder="blur"
						sizes="(max-width: 768px) 33vw,
              (max-width: 1200px) 50vw,
              100vw"
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
			<div className="flex flex-col items-center justify-center gap-0 xl:flex-row xl:gap-16">
				<ImageSlideshow />
				<div className="prose-h2 prose my-4 flex flex-col items-center gap-3 bg-white xl:items-start">
					<h2 className="text-2xl">Her er noen av bilene vi kan tilby!</h2>
					{/* <h2 className="text-2xl">Våre biler</h2> */}
					{/* <p>Her er noen av bilene vi kan tilby!</p> */}
					<button className="inline-flex justify-center rounded-md border border-transparent bg-accent2 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-accent2/80 focus:outline-none focus:ring-2 focus:ring-accent2 focus:ring-offset-2">
						<Link href="/inventar" className="text-white no-underline">
							Utforsk inventar
						</Link>
					</button>
				</div>
			</div>
		</>
	);
}

export async function getStaticProps() {
	const res = await fetch(
		'https://billink.no/page2_xml.php?kode=3baa6aaa-a8c2-4565-b6a4-4b4f4c33b5b0&butikk=agt&detaljert=1'
	);
	const xmlText = await res.text();

	const $ = cheerio.load(xmlText, { xmlMode: true });
	let xml = $('BODY')
		.children()
		.map(function (i, el) {
			let fXml = '<?xml?><ANNONSE>' + $(this).html() + '</ANNONSE>';
			let json = JSON.parse(xml2json(fXml, options));
			return json;
		})
		.toArray();

	let data = xml.reverse();

	return { props: { data }, revalidate: 60 * 10 };
}
