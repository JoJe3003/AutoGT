import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Disclosure } from '@headlessui/react';
import logosrc from '../public/AutoGT.png';

function Navbar() {
	return (
		<nav className="bg-white w-full py-4 px-16 flex justify-between items-center sticky top-0 opacity-90 z-10">
			<div className="flex justify-center items-center max-w-[120px]">
				<Link href="/">
					<Image src={logosrc} alt="Website logo" priority></Image>
				</Link>
			</div>
			<div>
				<ul className="gap-2 text-lg hidden md:flex">
					<li className="px-3 py-1">
						<Link href="/om-oss">Om oss</Link>
					</li>
					<li className="px-3 py-1">
						<Link href="/inventar">Inventar</Link>
					</li>
					<li className="px-3 py-1">
						<Link href="/selg-bilen-din">Selg bilen din</Link>
					</li>
					<li className="px-3 py-1">
						<Link href="/kontakt">Kontakt oss</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default Navbar;
