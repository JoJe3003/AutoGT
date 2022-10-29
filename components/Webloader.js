import Image from 'next/image';
import React from 'react';
import Logo from '../public/AutoGT.png';

function Webloader() {
	setInterval(() => {}, 5000);

	return (
		<div className="absolute top-0 z-50 flex items-center justify-center w-full h-screen overflow-hidden bg-white select-none animate-loadRemove">
			<div className="max-w-[15rem] opacity-100 animate-loadFadeIn forwards hover:opacity-100 duration-1000">
				<Image src={Logo} alt="Website logo displayed as loading screen" />
			</div>
		</div>
	);
}

export default Webloader;
