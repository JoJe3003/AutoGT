import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import { Disclosure, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

import logosrc from '../public/AutoGT.png';

const links = [
	{
		name: 'Om oss',
		href: '/om-oss',
	},
	{
		name: 'Våre biler',
		href: '/inventar',
	},
	{
		name: 'Vi tilbyr',
		href: '/vi-tilbyr',
	},
	{
		name: 'Kontakt oss',
		href: '/kontakt-oss',
	},
];

export default function Alphanav() {
	const [isShowing, setIsShowing] = useState(false);

	const router = useRouter();
	const path = router.asPath;

	return (
		<Disclosure as="nav" className="border-b bg-white">
			<>
				{/* HEADER */}
				<div className="mx-auto max-w-full px-4 sm:px-6 lg:px-8">
					<div className="flex h-16 justify-between">
						<div className="flex w-full justify-between">
							<div className="flex flex-shrink-0 items-center">
								<div className="flex max-w-[120px] items-center justify-center">
									<Link href="/">
										<Image src={logosrc} alt="Website logo" priority></Image>
									</Link>
								</div>
							</div>
							<div className="hidden sm:ml-6 sm:flex sm:space-x-8">
								{links.map((link, index) => (
									<Link
										key={index}
										href={link.href}
										className={`inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium text-gray-700 ${
											path === link.href
												? 'border-accent2'
												: 'border-transparent hover:border-gray-300 hover:text-gray-700'
										}`}
									>
										{link.name}
									</Link>
								))}
							</div>
						</div>
						<div className="-mr-2 flex items-center sm:hidden">
							{/* Mobile menu button */}
							<Disclosure.Button
								onClick={() => setIsShowing((isShowing) => !isShowing)}
								className="inline-flex items-center justify-center rounded-sm p-2 text-gray-700 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-1 focus:ring-inset focus:ring-accent2"
							>
								<span className="sr-only">Open main menu</span>
								{isShowing ? (
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
					enter="transition duration-100 ease-out"
					enterFrom="transform scale-95 opacity-0"
					enterTo="transform scale-100 opacity-100"
					leave="transition duration-75 ease-out"
					leaveFrom="transform scale-100 opacity-100"
					leaveTo="transform scale-95 opacity-0"
				>
					<Disclosure.Panel className="sm:hidden">
						<div className="space-y-1 pt-2 pb-3">
							{links.map((link, index) => (
								<Link key={index} href={link.href}>
									<Disclosure.Button
										as="a"
										onClick={() => setIsShowing((isShowing) => !isShowing)}
										className={`block py-2 pl-3 pr-4 text-base font-medium ${
											path === link.href
												? 'border-l-4 border-accent2 bg-accent2/20 text-accent2'
												: 'border-l-4 border-transparent text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700'
										}`}
									>
										{link.name}
									</Disclosure.Button>
								</Link>
							))}
						</div>
					</Disclosure.Panel>
				</Transition>
			</>
		</Disclosure>
	);
}
