import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';

import logosrc from '../public/AutoGT.png';

function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

export default function Alphanav() {
	return (
		<Disclosure as="nav" className="bg-white shadow">
			{({ open }) => (
				<>
					<div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
						<div className="flex justify-between h-16">
							<div className="flex justify-between w-full">
								<div className="flex items-center flex-shrink-0">
									<div className="flex flex-shrink-0 items-center justify-center max-w-[120px]">
										<Link href="/">
											<Image
												src={logosrc}
												alt="Website logo"
												priority
											></Image>
										</Link>
									</div>
								</div>
								<div className="hidden sm:ml-6 sm:flex sm:space-x-8">
									{/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
									<Link href="/om-oss">
										<a
											href="#"
											className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 border-b-2 border-indigo-500"
										>
											Om oss
										</a>
									</Link>
									<Link href="/inventar">
										<a
											href="#"
											className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 border-b-2 border-transparent hover:border-gray-300 hover:text-gray-700"
										>
											Inventar
										</a>
									</Link>
									<Link href="/selg-bilen-din">
										<a
											href="#"
											className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 border-b-2 border-transparent hover:border-gray-300 hover:text-gray-700"
										>
											Selg bilen din
										</a>
									</Link>
									<Link href="/kontakt">
										<a
											href="#"
											className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 border-b-2 border-transparent hover:border-gray-300 hover:text-gray-700"
										>
											Kontakt oss
										</a>
									</Link>
								</div>
							</div>

							<div className="flex items-center -mr-2 sm:hidden">
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

					<Disclosure.Panel className="sm:hidden">
						<div className="pt-2 pb-3 space-y-1">
							{/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
							<Link href="/om-oss">
								<Disclosure.Button
									as="a"
									href="#"
									className="block py-2 pl-3 pr-4 text-base font-medium text-indigo-700 border-l-4 border-indigo-500 bg-indigo-50"
								>
									Om oss
								</Disclosure.Button>
							</Link>
							<Link href="/inventar">
								<Disclosure.Button
									as="a"
									href="#"
									className="block py-2 pl-3 pr-4 text-base font-medium text-gray-500 border-l-4 border-transparent hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
								>
									Inventar
								</Disclosure.Button>
							</Link>
							<Link href="/selg-bilen-din">
								<Disclosure.Button
									as="a"
									href="#"
									className="block py-2 pl-3 pr-4 text-base font-medium text-gray-500 border-l-4 border-transparent hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
								>
									Selg bilen din
								</Disclosure.Button>
							</Link>
							<Link href="/kontakt">
								<Disclosure.Button
									as="a"
									href="#"
									className="block py-2 pl-3 pr-4 text-base font-medium text-gray-500 border-l-4 border-transparent hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
								>
									Kontakt oss
								</Disclosure.Button>
							</Link>
						</div>
					</Disclosure.Panel>
				</>
			)}
		</Disclosure>
	);
}
