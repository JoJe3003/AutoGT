import React from 'react';
import Image from 'next/image';
import Logo from '../public/AutoGT.png';
import { AnimatePresence, motion } from 'framer-motion';

function Webloader({ isVisible }) {
	return (
		<AnimatePresence>
			{isVisible && (
				<motion.div
					className="absolute z-50 grid h-screen w-full place-items-center overflow-hidden bg-white"
					// initial={{ opacity: 100 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.5 }}
				>
					<motion.div
						className="relative max-w-[15rem]"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.7, delay: 0.3 }}
					>
						<Image src={Logo} alt="Website logo displayed as loading screen" />
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>

		// <div className="absolute top-0 z-50 flex h-screen w-full animate-loadRemove select-none items-center justify-center overflow-hidden bg-white">
		// 	<div className="forwards max-w-[15rem] animate-loadFadeIn opacity-100 duration-1000 hover:opacity-100">
		// 		<Image src={Logo} alt="Website logo displayed as loading screen" />
		// 	</div>
		// </div>
	);
}

export default Webloader;
