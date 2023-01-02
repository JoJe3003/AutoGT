import Head from 'next/head';
import React from 'react';
import Divider from '../components/Divider';
import Introduction2 from '../components/Introduction2';
import Location from '../components/Location';

export default function omoss() {
	return (
		<>
			<Head>
				<title>Auto GT | Om oss</title>
			</Head>
			<div>
				<div className="overflow-hidden bg-gray-900 text-white">
					<div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-40">
						<div className="space-y-12 lg:space-y-20">
							<h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
								Om oss
							</h2>
							<p className="flex flex-col gap-6 text-lg leading-6">
								<span>
									Våre biler er nøye håndplukket, utbedret og klargjort før salg.
								</span>
								<span>
									Vårt mål er å oppnå et trygt og langsiktig kundeforhold som 
									innebærer at vi selger biler vi kunne tenke oss å kjøpe tilbake
									ved en senere anledning. Finner du ikke bilen du leter etter i 
									vårt sortiment kan vi finne den for deg!
								</span>
								<span>
									Auto GT - Den naturlige forbindelsen mellom din nåværende og
									fremtidige bil.

								</span>
							</p>
						</div>
					</div>
				</div>
				<Introduction2 />
				<Location />
			</div>
		</>
	);
}
