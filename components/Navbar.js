import { Fragment, useState } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

import logosrc from '../public/AutoGT.png';

function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

export default function Alphanav() {
	const [isShowing, setIsShowing] = useState(false);

	const router = useRouter();
	const path = router.asPath;

	return (
		<Disclosure as="nav" className="bg-white">
			{({ open }) => (
				<>
					<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
						<div className="flex h-16 justify-between">
							<div className="flex w-full justify-between">
								<div className="flex flex-shrink-0 items-center">
									<div className="flex max-w-[120px] flex-shrink-0 items-center justify-center">
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
									<Link
										href="/om-oss"
										className={`inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium text-gray-900 ${
											path === '/om-oss'
												? 'border-accent1'
												: 'border-transparent hover:border-gray-300 hover:text-gray-700'
										}`}
									>
										Om oss
									</Link>
									<Link
										href="/inventar"
										className={`inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium text-gray-900 ${
											path === '/inventar'
												? 'border-accent1'
												: 'border-transparent hover:border-gray-300 hover:text-gray-700'
										}`}
									>
										Våre biler
									</Link>
									<Link
										href="/selg-bilen-din"
										className={`inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium text-gray-900 ${
											path === '/selg-bilen-din'
												? 'border-accent1'
												: 'border-transparent hover:border-gray-300 hover:text-gray-700'
										}`}
									>
										Vi tilbyr
									</Link>
									<Link
										href="/kontakt"
										className={`inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium text-gray-900 ${
											path === '/kontakt'
												? 'border-accent1'
												: 'border-transparent hover:border-gray-300 hover:text-gray-700'
										}`}
									>
										Kontakt oss
									</Link>
								</div>
							</div>

							<div className="-mr-2 flex items-center sm:hidden">
								{/* Mobile menu button */}
								<Disclosure.Button
									onClick={() => setIsShowing((isShowing) => !isShowing)}
									className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
								>
									<span className="sr-only">Open main menu</span>
									{open ? (
										<XMarkIcon className="block h-6 w-6" aria-hidden="true" />
									) : (
										<Bars3Icon className="block h-6 w-6" aria-hidden="true" />
									)}
								</Disclosure.Button>
							</div>
						</div>
					</div>

					<Transition
						show={isShowing}
						enter="transition-opacity duration-75"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="transition-opacity duration-150"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<Disclosure.Panel className="sm:hidden">
							<div className="space-y-1 pt-2 pb-3">
								{/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
								<Link href="/om-oss">
									<Disclosure.Button
										as="a"
										href="#"
										className={`block py-2 pl-3 pr-4 text-base font-medium ${
											path === '/om-oss'
												? 'border-l-4 border-indigo-500 bg-indigo-50 text-indigo-700'
												: 'border-l-4 border-transparent text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700'
										}`}
									>
										Om oss
									</Disclosure.Button>
								</Link>
								<Link href="/inventar">
									<Disclosure.Button
										as="a"
										href="#"
										className={`block py-2 pl-3 pr-4 text-base font-medium ${
											path === '/inventar'
												? 'border-l-4 border-indigo-500 bg-indigo-50 text-indigo-700'
												: 'border-l-4 border-transparent text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700'
										}`}
									>
										Våre biler
									</Disclosure.Button>
								</Link>
								<Link href="/selg-bilen-din">
									<Disclosure.Button
										as="a"
										href="#"
										className={`block py-2 pl-3 pr-4 text-base font-medium ${
											path === '/selg-bilen-din'
												? 'border-l-4 border-indigo-500 bg-indigo-50 text-indigo-700'
												: 'border-l-4 border-transparent text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700'
										}`}
									>
										Vi tilbyr
									</Disclosure.Button>
								</Link>
								<Link href="/kontakt">
									<Disclosure.Button
										as="a"
										href="#"
										className={`block py-2 pl-3 pr-4 text-base font-medium ${
											path === '/kontakt'
												? 'border-l-4 border-indigo-500 bg-indigo-50 text-indigo-700'
												: 'border-l-4 border-transparent text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700'
										}`}
									>
										Kontakt oss
									</Disclosure.Button>
								</Link>
							</div>
						</Disclosure.Panel>
					</Transition>
				</>
			)}
		</Disclosure>
	);
}
