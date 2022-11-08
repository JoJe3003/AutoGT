import Head from 'next/head';
import React from 'react';
import Divider from '../components/Divider';
import Introduction2 from '../components/Introduction2';
import Location from '../components/Location';

function omoss() {
	return (
		<>
			<Head>
				<title>Auto GT | Om oss</title>
			</Head>
			<div>
				<Introduction2 />
				<Divider />
				<Location />
			</div>
		</>
	);
}

export default omoss;
