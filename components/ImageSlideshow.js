import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Bil1 from '../public/static/Bil1.jpg';
import Bil2 from '../public/static/Bil2.jpg';

const biler = [
	'https://billink3.blob.core.windows.net/blob5/image/2212/annonser/o_1gfu4lkbd12ltpfr14eu1u671a8ub.jpg',
	'https://billink3.blob.core.windows.net/blob5/image/2212/annonser/o_1ggnk442m15fe6613841eir1dr41h.jpg',
	'https://billink3.blob.core.windows.net/blob5/image/2212/annonser/o_1gftq026m1tvmabpm71eva1gn31n.jpg',
	'https://billink3.blob.core.windows.net/blob5/image/2212/annonser/o_1gftq026m1hna1bqtahh3e13k81l.jpg',
];

function nextPic() {
	setActivePic(activePic + 1);
}

export default function ImageSlideshow() {
	const [activePic, setActivePic] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setActivePic(activePic + 1);
			console.log('Change pic');
		}, 10000);
		return () => clearInterval(interval);
	}, [activePic]);

	return (
		<div
			className="relative my-8 mx-5 max-w-4xl overflow-hidden rounded-lg xl:max-w-2xl"
			onClick={(prev) => {
				setActivePic(activePic + 1);
				console.log(activePic % biler.length);
				console.log((activePic + 1) % biler.length);
			}}
		>
			{/* {biler.map((bil, index) => (
				<Image src={bil} alt="Slideshow bil" key={index} width={1600} height={1067} />
			))} */}
			<Image
				src={biler[activePic % biler.length]}
				alt="Slideshow bil"
				width={1600}
				height={1067}
				loading="eager"
				// className="absolute"
			/>
			{/* <Image
				src={biler[(activePic + 1) % biler.length]}
				alt="Slideshow bil"
				width={1600}
				height={1067}
				loading="eager"
				className=""
			/> */}
		</div>
	);
}
