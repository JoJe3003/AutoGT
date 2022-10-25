import Head from 'next/head';
import React from 'react';

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
	const data = await res.text();

	// Pass data to the page via props
	return { props: { data } };
}

export default inventar;
