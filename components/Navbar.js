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
		href: '/selg-bilen-din',
	},
	{
		name: 'Kontakt oss',
		href: '/kontakt',
	},
];

export default function Alphanav() {
	const [isShowing, setIsShowing] = useState(false);

	const router = useRouter();
	const path = router.asPath;

	return (
		<Disclosure as="nav" className="border bg-white">
			{({ open }) => (
				<>
					{/* HEADER */}
					<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
						<div className="flex h-16 justify-between">
							<div className="flex w-full justify-between">
								<div className="flex flex-shrink-0 items-center">
									<div className="flex max-w-[120px] items-center justify-center">
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
									{links.map((link, index) => (
										<Link
											key={index}
											href={link.href}
											className={`inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium text-gray-700 hover:text-red-400 ${
												path === link.href
													? 'border-accent1'
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
									className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
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
						enter="transition-opacity duration-150"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="transition-opacity duration-150"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<Disclosure.Panel className="sm:hidden">
							<div className="space-y-1 pt-2 pb-3">
								{links.map((link, index) => (
									<Link key={index} href={link.href}>
										<Disclosure.Button
											as="a"
											className={`block py-2 pl-3 pr-4 text-base font-medium ${
												path === link.href
													? 'border-l-4 border-indigo-500 bg-indigo-50 text-indigo-700'
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
			)}
		</Disclosure>
	);
}
