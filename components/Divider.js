import React from 'react';

export default function Divider() {
	return (
		<div className="relative">
			<div
				className="absolute inset-0 mx-auto flex max-w-7xl items-center"
				aria-hidden="true"
			>
				<div className="w-full border-t border-gray-300" />
			</div>
		</div>
	);
}
