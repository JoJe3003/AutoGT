import Head from 'next/head';
import React from 'react';
import Kontakt from '../components/Kontakt';

function vitilbyr() {
	return (
		<>
			<Head>
				<title>Auto GT | Vi tilbyr</title>
			</Head>

			<div
				className="relative overflow-hidden bg-white pt-16"
				// style={{
				// 	backgroundImage:
				// 		'url("http://www.transparenttextures.com/patterns/ag-square.png")',
				// 	backgroundColor: 'rgb(255, 255, 255, 0.3)',
				// }}
			>
				<div className="prose prose-2xl mx-auto px-4 sm:px-6 lg:px-8 ">
					<div className="mx-auto max-w-[100ch] text-lg">
						<h1>
							{/* <span className="block text-lg font-semibold text-center text-indigo-600">
								Vi hjelper deg!
							</span> */}
							<span className="mt-2 block text-center text-3xl font-bold leading-8 tracking-wider text-accent2 sm:text-4xl">
								Vi tilbyr
							</span>
						</h1>
						<p className="mt-8 text-xl leading-8">
							Å selge sin egen bil kan være tidskrevende, vanskelig og iblant en
							ubehagelig prosess. Auto GT har ressurser og ekspertise
							til å selge din bil på en effektiv og bryderi fri måte.
						</p>
					</div>
					<div className="prose prose-xl mx-auto mt-6">
						<ul role="list">
							<li>
								<p className="mx-2">
									<span className="font-bold text-accent2">Innbytte</span> - Vi
									kjøper din bil og verdien blir trukket fra kjøpesummen på bilen
									du handler hos oss.
								</p>
							</li>
							<li>
								<p className="mx-2">
									<span className="font-bold text-accent2">Innkjøp</span> - Vi
									kjøper din bil og pengene kommer raskt på konto.
								</p>
							</li>
							<li>
								<p className="mx-2">
									<span className="font-bold text-accent2">Kommisjon</span> - Vi
									selger din bil i vårt navn.
								</p>
							</li>
							<li>
								<p className="mx-2">
									<span className="font-bold text-accent2">Formidling</span> - Vi
									opptrer som mellommann, bilen blir solgt i ditt navn og
									reklamasjonsansvaret er ditt.
								</p>
							</li>
						</ul>
					</div>
					<div className="mx-auto max-w-[100ch] text-lg">
						<p className="mt-8 text-xl leading-8">
							Auto GT Skreddersydd en avtale opp mot dine ønsker og behov. Biler til 
							kommisjon og formidling	må være opp mot samme standard som våre egne biler. 
							Er bilen eldre og utenfor garantiperiode kan det hende vi ber om tilstandsrapport, 
							dette kan vi hjelpe med å få utført via våre kontakter.
						</p>
					</div>
				</div>
				<div className="mx-5 mb-5 pt-14">
					<Kontakt />
				</div>
			</div>
		</>
	);
}

export default vitilbyr;
