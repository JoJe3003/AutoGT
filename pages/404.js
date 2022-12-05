import React from 'react';
// import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import Link from 'next/link';

export default function NotFound() {
	// const router = useRouter();
	// console.log(router.asPath);
	return (
		<div
			className="min-h-full bg-cover bg-top sm:bg-top"
			style={{
				backgroundImage:
					'url("https://images.unsplash.com/photo-1545972154-9bb223aac798?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3050&q=80&exp=8&con=-15&sat=-75")',
				backgroundPosition: 0,
			}}
		>
			<div className="mx-auto h-5/6 max-w-7xl px-4 py-16 text-center sm:px-6 sm:py-24 lg:px-8 lg:py-48">
				<p className="text-4xl font-semibold text-white text-opacity-50">404</p>
				<h1 className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
					Har du gått deg bort?
				</h1>
				<div>
					{/* <p className="text-white">
						Det ser ut som at addressen: <strong>{router.asPath}</strong> ikke
						eksisterer.
					</p> */}
				</div>
				<div className="mt-6">
					<Link
						href="/"
						className="inline-flex items-center rounded-md border border-transparent bg-white bg-opacity-75 px-4 py-2 text-sm font-medium text-black text-opacity-75 sm:bg-opacity-25 sm:hover:bg-opacity-50"
					>
						Gå tilbake
					</Link>
				</div>
			</div>
		</div>
	);
}
