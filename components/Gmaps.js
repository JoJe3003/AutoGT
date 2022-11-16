import React from 'react';

export default function Gmaps() {
	return (
		<iframe
			width="400"
			height="500"
			id="gmap_canvas"
			src="https://maps.google.com/maps?q=Auto%20GT%20Stokke&t=&z=12&ie=UTF8&iwloc=&output=embed"
			frameborder="0"
			scrolling="no"
			marginheight="0"
			marginwidth="0"
			className="top-0 left-0 h-full w-full"
		></iframe>
	);
}
