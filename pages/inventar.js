import Head from 'next/head';
import React from 'react';
import { xml2json } from 'xml-js';

const axios = require('axios');
const cheerio = require('cheerio');
const xml2js = require('xml2js');

const xmlFile =
	'<food><name>Belgian Waffles</name><price>$5.95</price><description>Two of our famous Belgian Waffles with plenty of real maple syrup</description><calories>650</calories></food>';

function inventar({ data }) {
	return (
		<>
			<Head>
				<title>Auto GT | Inventar</title>
			</Head>
			<div>{data}</div>
		</>
	);
}

export async function getServerSideProps() {
	const res = await fetch(
		'https://billink.no/page2_xml.php?kode=3baa6aaa-a8c2-4565-b6a4-4b4f4c33b5b0&butikk=agt&detaljert=1'
	);
	const xml = await res.text();
	// console.log(xml);
	const jsonObject = xml2json(xml);

	// console.log(jsonObject);

	const data = jsonObject;
	// console.log('LOGGED -> ' + JSON.stringify(res.ok));
	// console.dir('DIR -> ' + JSON.stringify(res.url));
	// const xmlText = await res.text();
	// const $ = cheerio.load(xmlText, { xmlMode: true });

	// var data = $('ANNONSE').first().children('BILDE').text();

	// console.log(data);

	// const parser = parser.parseFromString(data, 'text/xml');

	// Pass data to the page via props
	return { props: { data } };
}

export default inventar;
