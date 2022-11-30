import Head from 'next/head';
import React from 'react';
import Kontakt from '../components/Kontakt';

function vitilbyr() {
	return (
		<>
			<Head>
				<title>Auto GT | Selg bilen din</title>
			</Head>

			<div
				className="relative overflow-hidden bg-white pt-16"
				style={{
					backgroundImage:
						'url("http://www.transparenttextures.com/patterns/ag-square.png")',
					backgroundColor: 'rgb(255, 255, 255, 0.3)',
				}}
			>
				{/* <div className="hidden lg:absolute lg:inset-y-0 lg:block lg:h-full lg:w-full lg:[overflow-anchor:none]">
					<div className="relative h-full mx-auto text-lg max-w-prose" aria-hidden="true">
						<svg
							className="absolute transform translate-x-32 top-12 left-full"
							width={404}
							height={384}
							fill="none"
							viewBox="0 0 404 384"
						>
							<defs>
								<pattern
									id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
									x={0}
									y={0}
									width={20}
									height={20}
									patternUnits="userSpaceOnUse"
								>
									<rect
										x={0}
										y={0}
										width={4}
										height={4}
										className="text-gray-200"
										fill="currentColor"
									/>
								</pattern>
							</defs>
							<rect
								width={404}
								height={384}
								fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)"
							/>
						</svg>
						<svg
							className="absolute transform -translate-x-32 -translate-y-1/2 top-1/2 right-full"
							width={404}
							height={384}
							fill="none"
							viewBox="0 0 404 384"
						>
							<defs>
								<pattern
									id="f210dbf6-a58d-4871-961e-36d5016a0f49"
									x={0}
									y={0}
									width={20}
									height={20}
									patternUnits="userSpaceOnUse"
								>
									<rect
										x={0}
										y={0}
										width={4}
										height={4}
										className="text-gray-200"
										fill="currentColor"
									/>
								</pattern>
							</defs>
							<rect
								width={404}
								height={384}
								fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
							/>
						</svg>
						<svg
							className="absolute transform translate-x-32 bottom-12 left-full"
							width={404}
							height={384}
							fill="none"
							viewBox="0 0 404 384"
						>
							<defs>
								<pattern
									id="d3eb07ae-5182-43e6-857d-35c643af9034"
									x={0}
									y={0}
									width={20}
									height={20}
									patternUnits="userSpaceOnUse"
								>
									<rect
										x={0}
										y={0}
										width={4}
										height={4}
										className="text-gray-200"
										fill="currentColor"
									/>
								</pattern>
							</defs>
							<rect
								width={404}
								height={384}
								fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)"
							/>
						</svg>
					</div> 
				</div> */}
				<div className="relative px-4 sm:px-6 lg:px-8 ">
					<div className="mx-auto max-w-prose text-lg">
						<h1>
							{/* <span className="block text-lg font-semibold text-center text-indigo-600">
								Vi hjelper deg!
							</span> */}
							<span className="mt-2 block text-center text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
								Vi tilbyr
							</span>
						</h1>
						<p className="mt-8 text-xl leading-8 text-nardogrey">
							Det å selge sin egen bil kan være tidskrevende, vanskelig og iblant en
							ubehagelig prosess. Auto GT har ressursene, ekspertisen og publikumet
							til å selge din bil på en effektiv og bryderi fri måte.
						</p>
					</div>
					<div className="prose-lg prose prose-indigo mx-auto mt-6 text-nardogrey">
						<ul role="list">
							<li>
								<p className="mx-2">
									<span className="font-bold text-accent1">Innbytte</span> - Vi
									kjøper din bil og verdien blir trukket fra kjøpesummen på bilen
									du handler hos oss.
								</p>
							</li>
							<li>
								<p className="mx-2">
									<span className="font-bold text-accent1">Innkjøp</span> - Vi
									kjøper din bil og pengene kommer raskt på konto.
								</p>
							</li>
							<li>
								<p className="mx-2">
									<span className="font-bold text-accent1">Kommisjon</span> - Vi
									selger din bil i vårt navn.
								</p>
							</li>
							<li>
								<p className="mx-2">
									<span className="font-bold text-accent1">Formidling</span> - Vi
									opptrer som mellommann, salget blir solgt i ditt navn og
									reklamasjonsansvaret står på deg.
								</p>
							</li>
						</ul>
						<p className="mt-8 text-xl leading-8">
							Skreddersydd avtale opp mot ditt mål. Biler til kommisjon og formidling
							blir behandlet på samme måte som våre egne biler, derfor må de også være
							opp mot samme standard. Er bilen eldre og utenfor garantiperiode kan det
							hende vi vil ha tilstandsrapport, dette kan vi hjelpe med å få utført
							via våre kanaler.
						</p>
					</div>

					<div className="mb-5 pt-14">
						<Kontakt />
					</div>
				</div>
			</div>
		</>
	);
}

export default vitilbyr;
