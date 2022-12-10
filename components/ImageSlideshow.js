import Image from 'next/image';
import React, { useEffect, useState } from 'react';

export default function ImageSlideshow({ arr }) {
	const [activePic, setActivePic] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setActivePic(activePic + 1);
			console.log('Change pic');
		}, 7000);
		return () => clearInterval(interval);
	}, [activePic]);

	return (
		<div
			className="relative my-8 mx-5 max-w-4xl overflow-hidden rounded-lg xl:max-w-2xl"
			onClick={(prev) => {
				setActivePic(activePic + 1);
				// console.log(activePic % arr.length);
				// console.log((activePic + 1) % arr.length);
			}}
		>
			<Image
				src={arr[activePic % arr.length]}
				alt="Slideshow bil"
				width={1600}
				height={1067}
				loading="eager"
			/>
		</div>
	);
}
