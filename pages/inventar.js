import Head from 'next/head';
import React from 'react';

const axios = require('axios');
const cheerio = require('cheerio');
const xml2js = require('xml2js');

const xmlFile =
	'<food><name>Belgian Waffles</name><price>$5.95</price><description>Two of our famous Belgian Waffles with plenty of real maple syrup</description><calories>650</calories></food>';

function inventar({ content }) {
	return (
		<>
			<Head>
				<title>Auto GT | Inventar</title>
			</Head>
			<div>{content}</div>
		</>
	);
}

export async function getServerSideProps() {
	// let data = '';
	// const res = await fetch(
	// 	'https://billink.no/page2_xml.php?kode=3baa6aaa-a8c2-4565-b6a4-4b4f4c33b5b0&butikk=agt&detaljert=1'
	// )
	// .then((res) => res.text())
	// .then((xml) => {
	// 	const $ = cheerio.load(xml, {
	// 		xmlMode: true,
	// 	});
	// 	data = $('KONTAKT').children('NAVN');
	// });
	// const $ = cheerio.load(res, { xmlMode: true });
	// data = typeof $.xml();

	const url =
		'https://billink.no/page2_xml.php?kode=3baa6aaa-a8c2-4565-b6a4-4b4f4c33b5b0&butikk=agt&detaljert=1';

	let content = '';
	var parser = new xml2js.Parser();

	axios.get(url).then((res) => {
		const $ = cheerio.load(xmlFile, { xml: { xmlMode: true } });
		console.log($('food').children().text());
	});

	// const parser = parser.parseFromString(data, 'text/xml');

	// Pass data to the page via props
	return { props: { content } };
}

export default inventar;
