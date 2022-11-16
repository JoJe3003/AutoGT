import { motion } from 'framer-motion';
import React, { useRef } from 'react';

export default function Framertest() {
	const constraintRef = useRef();

	return (
		<div className="grid h-screen place-content-center bg-purple-200" ref={constraintRef}>
			<motion.div
				drag
				className="aspect-1 w-52 rounded bg-slate-500"
				initial={{ scale: 0 }}
				animate={{ scale: 1 }}
				whileHover={{ scale: 1.02 }}
				whileTap={{ scale: 0.95 }}
				dragConstraints={constraintRef}
			></motion.div>
		</div>
	);
}
