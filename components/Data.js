import React, { useState } from 'react';

export default function Data() {
	const [data, setData] = useState();

	const detaljertAPI =
		'https://billink.no/page2_xml.php?kode=3baa6aaa-a8c2-4565-b6a4-4b4f4c33b5b0&butikk=agt&detaljert=1';

	const axios = require('axios');

	axios.get(detaljertAPI).then((response) => {
		const xmlData = response.data;
		console.log(xmlData);
	});
	return <div>Data</div>;
}
