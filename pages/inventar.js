import Head from 'next/head';
import React from 'react';
import Data from '../components/Data';

function inventar() {
	return (
		<>
			<Head>
				<title>Auto GT | Inventar</title>
			</Head>
			<div>
				<Data />
			</div>
		</>
	);
}

export default inventar;
