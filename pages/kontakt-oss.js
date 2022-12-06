import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import Gmaps from '../components/Gmaps';
import bilde from '../public/static/AutoGTbmw.jpg';

function kontakt() {
	return (
		<>
			<Head>
				<title>Auto GT | Kontakt</title>
			</Head>
			<div className="bg-white">
				<div className="h-96">
					<div className="absolute h-96 w-full">
						<Image
							src={bilde}
							alt="Bilde av to biler"
							quality={100}
							as="div"
							fill
							className="object-cover"
							loading="eager"
							priority
							placeholder="blur"
							sizes="(max-width: 768px) 33vw,
              (max-width: 1200px) 50vw,
              100vw"
						/>
					</div>
				</div>
				<div className="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
					<div className="lg:grid lg:grid-cols-3 lg:gap-8">
						<h2 className="text-2xl font-bold text-gray-900 sm:text-3xl sm:tracking-tight">
							Kontaktinformasjon
						</h2>
						<div className="mt-8 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:col-span-2 lg:mt-0">
							<div className="sm:col-span-2">
								<h3 className="text-lg font-medium leading-6 text-gray-900">
									Generel Epost
								</h3>
								<dl className="mt-2 text-base text-gray-500">
									<div>
										<dt className="sr-only">Email</dt>
										<dd>post@autogt.no</dd>
									</div>
								</dl>
							</div>
							<div>
								<h3 className="text-lg font-medium leading-6 text-gray-900">
									Endre Holmedal
								</h3>
								<dl className="mt-2 text-base text-gray-500">
									<div>
										<dt className="sr-only">Epost</dt>
										<dd>endre@autogt.no</dd>
									</div>
									<div className="mt-1">
										<dt className="sr-only">Telefon</dt>
										<dd>+47 12345678</dd>
									</div>
								</dl>
							</div>
							<div>
								<h3 className="text-lg font-medium leading-6 text-gray-900">
									Erlend Høyen
								</h3>
								<dl className="mt-2 text-base text-gray-500">
									<div>
										<dt className="sr-only">Email</dt>
										<dd>erlend@autogt.no</dd>
									</div>
									<div className="mt-1">
										<dt className="sr-only">Phone number</dt>
										<dd>+47 12345678</dd>
									</div>
								</dl>
							</div>
						</div>
					</div>

					<div className="mt-16 pt-16 lg:grid lg:grid-cols-3 lg:gap-8">
						<h2 className="text-2xl font-bold text-gray-900 sm:text-3xl sm:tracking-tight">
							Lokasjon og Åpningstider
						</h2>
						<div className="mt-8 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:col-span-2 lg:mt-0">
							<div>
								<h3 className="text-lg font-medium leading-6 text-gray-900">
									Borgerskogen 45 E
								</h3>
								<div className="mt-2 text-base text-gray-500">
									<p>3160, Stokke</p>
								</div>
							</div>
							<div>
								<h3 className="text-lg font-medium leading-6 text-gray-900">
									Mandag - Fredag
								</h3>
								<div className="my-2 text-base text-gray-500">
									<p>17:00 - 19:00</p>
								</div>
								<h3 className="text-lg font-medium leading-6 text-gray-900">
									Lørdag
								</h3>
								<div className="my-2 text-base text-gray-500">
									<p>11:00 - 14:00</p>
								</div>
								<h3 className="text-lg font-medium leading-6 text-gray-900">
									Søndag
								</h3>
								<div className="my-2 text-base text-gray-500">
									<p>Stengt</p>
								</div>
							</div>
						</div>
					</div>
					<div className="mt-16 h-96 overflow-hidden rounded-lg pt-16">
						<Gmaps />
					</div>
				</div>
			</div>
		</>
	);
}

export default kontakt;
