import Image from 'next/image';
import Link from 'next/link';
import React, { Fragment } from 'react';

import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import logosrc from '../public/AutoGT.png';

function Navbar() {
	return (
		<>
			<nav as="nav" className="bg-white shadow">
				<div className="px-4 mx-auto lg:px-8">
					<div className="flex items-center justify-between h-20">
						{/* LOGO CONTAINER */}
						<div className="flex flex-shrink-0 items-center justify-center max-w-[120px]">
							<Link href="/">
								<Image src={logosrc} alt="Website logo" priority></Image>
							</Link>
						</div>
						{/* NAV ITEMS */}
						<Menu>
							<Menu.Button className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md sm:hidden hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
								<span className="sr-only">Open main menu</span>
								{open ? (
									<XMarkIcon className="block w-6 h-6" aria-hidden="true" />
								) : (
									<Bars3Icon className="block w-6 h-6" aria-hidden="true" />
								)}
							</Menu.Button>
							<Menu.Items>
								<div>
									<ul className="absolute z-10 flex flex-col py-4 border border-gray-100 rounded-md bg-gray-50 sm:hidden gap-y-3 sm:gap-x-8 sm:mt-1 sm:text-sm sm:font-medium sm:border-0 sm:bg-white sm:static top-24 right-3">
										<li>
											<Link href="/om-oss">
												<a className="inline-flex px-4 py-0 text-gray-600 border-transparent sm:border-b-4 sm:px-0 hover:border-accent1 hover:text-black">
													Om oss
												</a>
											</Link>
										</li>
										<li>
											<Link href="/inventar">
												<a className="inline-flex px-4 py-0 text-gray-600 border-transparent sm:border-b-4 sm:px-0 hover:border-accent1 hover:text-black">
													Inventar
												</a>
											</Link>
										</li>
										<li>
											<Link href="/selg-bilen-din">
												<a className="inline-flex px-4 py-0 text-gray-600 border-transparent sm:border-b-4 sm:px-0 hover:border-accent1 hover:text-black">
													Selg bilen din
												</a>
											</Link>
										</li>
										<li>
											<Link href="/kontakt">
												<a className="inline-flex px-4 py-0 text-gray-600 border-transparent sm:border-b-4 sm:px-0 hover:border-accent1 hover:text-black">
													Kontakt oss
												</a>
											</Link>
										</li>
									</ul>
								</div>
							</Menu.Items>
						</Menu>

						<div>
							<ul className="z-10 hidden py-4 mt-1 text-sm font-medium border-gray-100 sm:flex gap-y-3 gap-x-8 top-24 right-3">
								<li>
									<Link href="/om-oss">
										<a className="inline-flex px-4 py-0 text-gray-600 border-transparent sm:border-b-4 sm:px-0 hover:border-accent1 hover:text-black">
											Om oss
										</a>
									</Link>
								</li>
								<li>
									<Link href="/inventar">
										<a className="inline-flex px-4 py-0 text-gray-600 border-transparent sm:border-b-4 sm:px-0 hover:border-accent1 hover:text-black">
											Inventar
										</a>
									</Link>
								</li>
								<li>
									<Link href="/selg-bilen-din">
										<a className="inline-flex px-4 py-0 text-gray-600 border-transparent sm:border-b-4 sm:px-0 hover:border-accent1 hover:text-black">
											Selg bilen din
										</a>
									</Link>
								</li>
								<li>
									<Link href="/kontakt">
										<a className="inline-flex px-4 py-0 text-gray-600 border-transparent sm:border-b-4 sm:px-0 hover:border-accent1 hover:text-black">
											Kontakt oss
										</a>
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</nav>
		</>
	);
}

export default Navbar;
