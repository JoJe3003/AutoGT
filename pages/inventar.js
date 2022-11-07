import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import { xml2json } from 'xml-js';

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
			<div className="inline max-w-xs">
				{/* {data.map((e) => (
					<Image key={e.index} src={e} alt="Pic of car" width={2507} height={1672} />
				))} */}
				{data.map((e) => (
					<div key={e.index}>{e.ANNONSE}</div>
				))}
			</div>
		</>
	);
}

export async function getServerSideProps() {
	const res = await fetch(
		'https://billink.no/page2_xml.php?kode=3baa6aaa-a8c2-4565-b6a4-4b4f4c33b5b0&butikk=agt&detaljert=1'
	);
	const xmlText = await res.text();
	const $ = cheerio.load(xmlText, { xmlMode: true });
	let xml = $('BODY')
		.children()
		.map(function (i, el) {
			let fXml = '<?xml?><ANNONSE>' + $(this).html() + '</ANNONSE>';

			let json = xml2json(fXml, options);

			return json;
		})
		.toArray();

	console.log(xml[0].length);
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
