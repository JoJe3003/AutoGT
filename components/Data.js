import React, { useState } from 'react';

export default function Data() {
	var config = {
		headers: { 'Content-Type': 'text/xml' },
	};

	const axios = require('axios');
	const parseString = require('xml2js').parseString;
	exports.handler = function (context, event, callback) {
		const xmlBodyStr = `<?xml version="1.0" encoding="UTF-8"?>
			<req:KnownTrackingRequest xmlns:req="http://www.example.com" 
			xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
			xsi:schemaLocation="http://www.example.com
			 TrackingRequestKnown.xsd">
			 <Request>
			 <ServiceHeader>
			 <MessageTime>2002-06-25T11:28:56-08:00</MessageTime>
			 <MessageReference>1234567890123456789012345678</MessageReference>
			 <SiteID>SiteID</SiteID>
			 <Password>Password</Password>
			 </ServiceHeader>
			 </Request>
			 <LanguageCode>en</LanguageCode>
			 <AWBNumber>01234567890</AWBNumber>
			 <LevelOfDetails>LAST_CHECK_POINT_ONLY</LevelOfDetails>`;
		var config = {
			headers: { 'Content-Type': 'text/xml' },
		};
		axios
			.post(
				'https://billink.no/page2_xml.php?kode=3baa6aaa-a8c2-4565-b6a4-4b4f4c33b5b0&butikk=agt&detaljert=1',
				xmlBodyStr,
				config
			)
			.then((res) => {
				callback(res.data);
				console.log(res.data);
			})
			.catch((err) => callback(err));
	};

	// const [data, setData] = useState();

	// const detaljertAPI =
	// 	'https://billink.no/page2_xml.php?kode=3baa6aaa-a8c2-4565-b6a4-4b4f4c33b5b0&butikk=agt&detaljert=1';
	// const axios = require('axios');

	// axios
	// 	.get(detaljertAPI)
	// 	.then((response) => {
	// 		const xmlData = response.data;
	// 		console.log(xmlData);
	// 	})
	// 	.catch((error) => {
	// 		console.log(error);
	// 	});

	return <div>Data</div>;
}
