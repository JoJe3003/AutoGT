import Image from 'next/image';
import Link from 'next/link';
import React, { Fragment } from 'react';

import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import logosrc from '../public/AutoGT.png';

function Navbar() {
	return (
		<>
			<Disclosure as="nav" className="bg-white shadow">
				{({ open }) => (
					<div className="px-4 mx-auto lg:px-8">
						<div className="flex items-center justify-between h-20">
							{/* LOGO CONTAINER */}
							<div className="flex flex-shrink-0 items-center justify-center max-w-[120px]">
								<Link href="/">
									<Image src={logosrc} alt="Website logo" priority></Image>
								</Link>
							</div>
							{/* NAV ITEMS */}
							<div>
								<ul className="absolute z-10 flex flex-col py-4 border border-gray-100 rounded-md bg-gray-50 sm:flex-row sm:gap-x-8 sm:mt-1 sm:text-sm sm:font-medium sm:border-0 sm:bg-white sm:static top-24 right-3">
									<li>
										<Link href="/om-oss">
											<a className="inline-flex px-4 py-0 text-gray-600 border-b-4 border-transparent sm:px-0 hover:border-red-700 hover:text-black">
												Om oss
											</a>
										</Link>
									</li>
									<li>
										<Link href="/inventar">
											<a className="inline-flex px-4 py-0 text-gray-600 border-b-4 border-transparent sm:px-0 hover:border-red-700 hover:text-black">
												Inventar
											</a>
										</Link>
									</li>
									<li>
										<Link href="/selg-bilen-din">
											<a className="inline-flex px-4 py-0 text-gray-600 border-b-4 border-transparent sm:px-0 hover:border-red-700 hover:text-black">
												Selg bilen din
											</a>
										</Link>
									</li>
									<li>
										<Link href="/kontakt">
											<a className="inline-flex px-4 py-0 text-gray-600 border-b-4 border-transparent sm:px-0 hover:border-red-700 hover:text-black">
												Kontakt oss
											</a>
										</Link>
									</li>
								</ul>
							</div>

							<div className="flex items-center sm:hidden">
								{/* Mobile menu button */}
								<Disclosure.Button className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
									<span className="sr-only">Open main menu</span>
									{open ? (
										<XMarkIcon className="block w-6 h-6" aria-hidden="true" />
									) : (
										<Bars3Icon className="block w-6 h-6" aria-hidden="true" />
									)}
								</Disclosure.Button>
							</div>
						</div>
					</div>
				)}
			</Disclosure>
			{/* <nav className="sticky top-0 z-10 flex items-center justify-between w-full px-10 py-4 bg-pink-300">
				<div className="flex justify-center items-center max-w-[120px]">
					<Link href="/">
						<Image src={logosrc} alt="Website logo" priority></Image>
					</Link>
				</div>
				<div>
					<button
						data-collapse-toggle="navbar-default"
						type="button"
						className="inline-flex items-center p-2 text-gray-800 rounded-lg text-md md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200"
						aria-controls="navbar-default"
						aria-expanded="false"
					>
						<span className="sr-only">Åpne menyen</span>
						<svg
							className="w-6 h-6"
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
						<ul className="absolute flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white md:static top-20 right-3">
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
    */}
		</>
	);
}

export default Navbar;
