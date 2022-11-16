import Image from 'next/image';
import React from 'react';
import Logo from '../public/AutoGT.png';

function Webloader() {
	return (
		// <div className="absolute top-0 z-50 flex h-screen w-full select-none items-center justify-center overflow-hidden bg-gray-400">
		// 	<div className="forwards max-w-[15rem]">
		// 		<Image src={Logo} alt="Website logo displayed as loading screen" />
		// 	</div>
		// </div>
		<div className="absolute top-0 z-50 flex h-screen w-full animate-loadRemove select-none items-center justify-center overflow-hidden bg-white">
			<div className="forwards max-w-[15rem] animate-loadFadeIn opacity-100 duration-1000 hover:opacity-100">
				<Image src={Logo} alt="Website logo displayed as loading screen" />
			</div>
		</div>
	);
}

export default Webloader;
