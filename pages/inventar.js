import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
// import { xml2json } from 'xml-js';

// const axios = require('axios');
// const xml2js = require('xml2js');
const cheerio = require('cheerio');

const xmlFile =
	'<food><name>Belgian Waffles</name><price>$5.95</price><description>Two of our famous Belgian Waffles with plenty of real maple syrup</description><calories>650</calories></food>';

function inventar({ data }) {
	return (
		<>
			<Head>
				<title>Auto GT | Inventar</title>
			</Head>
			<h1 className="h-screen my-auto text-center text-7xl">IN DEVELOPMENT</h1>
			<div className="inline max-w-xs">
				{data.map((e) => (
					<Image key={e.index} src={e} alt="Pic of car" width="1773px" height="1182px" />
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

	var data = $('BILDE')
		.children('URL')
		.map(function (i, el) {
			return $(this).text();
		})
		.toArray();

	// console.log(data);

	// const parser = parser.parseFromString(data, 'text/xml');

	// Pass data to the page via props
	return { props: { data } };
}

export default inventar;
