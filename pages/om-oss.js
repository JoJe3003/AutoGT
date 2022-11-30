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
									Vi selger biler vi kunne tenkt oss å kjøpe tilbake ved senere
									anledning. Vårt mål er å oppnå et kontinuerlig kundeforhold der
									Auto GT blir det naturlige leddet mellom din nåværende og
									fremtidige bil.
								</span>
								<span>
									Finner du ikke bilen du leter etter i vårt sortiment så kan vi
									finne den for deg!
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
