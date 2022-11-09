import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import { xml2json } from 'xml-js';

// const xml2json = require('xml-js');
const cheerio = require('cheerio');

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
			{/* <h1 className="h-screen my-auto text-center text-7xl">IN DEVELOPMENT</h1> */}
			<div className="mt-16 flex justify-center gap-5">
				{/* {data.map((e) => (
					<Image key={e.index} src={e} alt="Pic of car" width={2507} height={1672} />
				))} */}
				{data.map(({ ANNONSE }) => {
					return (
						<div key={ANNONSE.ID}>
							<div className="max-w-sm overflow-hidden rounded bg-slate-100">
								<Image
									src={ANNONSE.BILDE[0].URL}
									alt="Bilde av bilen"
									width={2507}
									height={1672}
									objectFit="layout"
								/>
								<div className="flex flex-col gap-4 p-2">
									<h3>
										{ANNONSE.INFO.map(({ ID, LEDETEKST, VERDI }) => {
											if (LEDETEKST == 'Merke') return VERDI;
										})}{' '}
										{ANNONSE.INFO.map(({ ID, LEDETEKST, VERDI }) => {
											if (LEDETEKST == 'Modell') return VERDI;
										})}
										{' - '}
										{ANNONSE.INFO.map(({ ID, LEDETEKST, VERDI }) => {
											if (LEDETEKST == 'Variant') return VERDI;
										})}
									</h3>
									<div>
										<span>{ANNONSE.SALG.BELOP};-</span>
									</div>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</>
	);
}

export async function getStaticProps() {
	const res = await fetch(
		'https://billink.no/page2_xml.php?kode=3baa6aaa-a8c2-4565-b6a4-4b4f4c33b5b0&butikk=agt&detaljert=1'
	);
	const xmlText = await res.text();

	// console.log(jsonText);

	const $ = cheerio.load(xmlText, { xmlMode: true });
	let xml = $('BODY')
		.children()
		.map(function (i, el) {
			let fXml = '<?xml?><ANNONSE>' + $(this).html() + '</ANNONSE>';
			let json = JSON.parse(xml2json(fXml, options));
			return json;
		})
		.toArray();

	// console.log(xml.length);
	let data = xml;

	// let data = xml2json(xml, { compact: true, spaces: 4 });
	// var data = $('BILDE')
	// 	.children('URL')
	// 	.map(function (i, el) {
	// 		return $(this).text();
	// 	})
	// 	.toArray();

	// console.log(data);

	// const parser = parser.parseFromString(data, 'text/xml');

	// Pass data to the page via props
	return { props: { data } };
}

export default inventar;
