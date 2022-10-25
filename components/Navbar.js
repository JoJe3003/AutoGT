import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Disclosure } from '@headlessui/react';
import logosrc from '../public/AutoGT.png';

function Navbar() {
	return (
		<nav className="bg-white w-full py-4 px-10 flex justify-between items-center sticky top-0 z-10">
			<div className="flex justify-center items-center max-w-[120px]">
				<Link href="/">
					<Image src={logosrc} alt="Website logo" priority></Image>
				</Link>
			</div>
			<div>
				<button
					data-collapse-toggle="navbar-default"
					type="button"
					className="inline-flex items-center text-gray-800 p-2 text-md rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200"
					aria-controls="navbar-default"
					aria-expanded="false"
				>
					<span className="sr-only">Åpne menyen</span>
					<svg
						className="w-8 h-8"
						aria-hidden="true"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fillRule="evenodd"
							d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
							clipRule="evenodd"
						></path>
					</svg>
				</button>
				<div id="navbar-default">
					<ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
						<li className="px-3 py-1">
							<Link href="/om-oss">
								<a href="#" aria-current="page">
									Om oss
								</a>
							</Link>
						</li>
						<li className="px-3 py-1">
							<Link href="/inventar">
								<a>Inventar</a>
							</Link>
						</li>
						<li className="px-3 py-1">
							<Link href="/selg-bilen-din">
								<a>Selg bilen din</a>
							</Link>
						</li>
						<li className="px-3 py-1">
							<Link href="/kontakt">
								<a>Kontakt oss</a>
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
