import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { xml2json } from 'xml-js';
import { ImgSlider } from '../components/ImgSlider';

// const xml2json = require('xml-js');
const cheerio = require('cheerio');
const numFormat = require('currency-formatter');

function nativeType(value) {
	var nValue = Number(value);
	if (!isNaN(nValue)) {
		return nValue;
	}
	var bValue = value.toLowerCase();
	if (bValue === 'true') {
		return true;
	} else if (bValue === 'false') {
		return false;
	}
	return value;
}

var removeJsonTextAttribute = function (value, parentElement) {
	try {
		var keyNo = Object.keys(parentElement._parent).length;
		var keyName = Object.keys(parentElement._parent)[keyNo - 1];
		parentElement._parent[keyName] = nativeType(value);
	} catch (e) {
		console.log(e);
	}
};

var options = {
	compact: true,
	trim: true,
	spaces: 2,
	ignoreDeclaration: true,
	ignoreInstruction: true,
	ignoreAttributes: true,
	ignoreComment: true,
	ignoreCdata: true,
	ignoreDoctype: true,
	textFn: removeJsonTextAttribute,
};

function inventar({ data }) {
	return (
		<>
			<Head>
				<title>Auto GT | Inventar</title>
			</Head>
			<div className="bg-white">
				<div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
					<h2 id="products-heading" className="sr-only">
						Biler
					</h2>

					<div className="grid grid-cols-1 gap-y-10 gap-x-6 lg:grid-cols-2 xl:gap-x-8">
						{data.map(({ ANNONSE }) => {
							let bilInfo = new Map();

							ANNONSE.INFO.map(({ ID, LEDETEKST, VERDI }) => {
								bilInfo.set(LEDETEKST, VERDI);
							});

							const imgToArr = [];
							ANNONSE.BILDE.map(({ URL }) => {
								imgToArr.push(URL);
							});

							return (
								<a
									key={ANNONSE.ID}
									href={`https://www.finn.no/car/used/ad.html?finnkode=${ANNONSE.FINN_KODE}`}
									className="group"
								>
									<div>
										<div className="aspect-w-2 aspect-h-1 w-full overflow-hidden rounded-lg sm:aspect-w-3 sm:aspect-h-2">
											<div className="relative flex h-full w-full items-center justify-center">
												{/* <ImgSlider imageArr={imgToArr} /> */}
											</div>
											<Image
												src={
													ANNONSE.BILDE.length
														? ANNONSE.BILDE[0].URL
														: ANNONSE.BILDE.URL
												}
												alt="Bilde av bil"
												objectFit="layout"
												width={5014}
												height={3344}
												className="h-full w-full object-cover object-center group-hover:opacity-75"
											/>
										</div>
										<div className="mt-4 flex items-center justify-between gap-4 text-base font-medium text-gray-900">
											<h3>
												{bilInfo.get('Merke')} {bilInfo.get('Modell')}
												{' - '}
												{bilInfo.get('Variant')}
											</h3>
											<span className="whitespace-nowrap">
												{numFormat.format(ANNONSE.SALG.BELOP, {
													symbol: 'kr',
													decimal: ',',
													thousand: ' ',
													precision: 0,
													format: '%v %s', // %s is the symbol and %v is the value
												})}
											</span>
										</div>
										<p className="mt-1 text-sm italic text-gray-500">
											{numFormat.format(bilInfo.get('Kilometer'), {
												symbol: 'km',
												decimal: ',',
												thousand: ' ',
												precision: 0,
												format: '%v %s', // %s is the symbol and %v is the value
											})}{' '}
											{' - '}
											{bilInfo.get('Årsmodell')}
										</p>
									</div>
								</a>
							);
						})}
					</div>
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

	return { props: { data } };
}

export default inventar;
