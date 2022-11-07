import Head from 'next/head';
import React from 'react';

function selgbilendin() {
	return (
		<>
			<Head>
				<title>Auto GT | Selg bilen din</title>
			</Head>

			<div className="relative py-16 overflow-hidden bg-white">
				<div className="hidden lg:absolute lg:inset-y-0 lg:block lg:h-full lg:w-full lg:[overflow-anchor:none]">
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
				</div>
				<div className="relative px-4 sm:px-6 lg:px-8">
					<div className="mx-auto text-lg max-w-prose">
						<h1>
							<span className="block text-lg font-semibold text-center text-indigo-600">
								Vi hjelper deg!
							</span>
							<span className="block mt-2 text-3xl font-bold leading-8 tracking-tight text-center text-gray-900 sm:text-4xl">
								Selg bilen din
							</span>
						</h1>
						<p className="mt-8 text-xl leading-8 text-gray-500">
							Vi forstår at det å selge sin egen bil kan være tidskrevende, vanskelig
							og iblant en ubehagelig prosess. Vi i{' '}
							<span className="text-indigo-600">Auto GT</span> har ressursene,
							ekspertisen og publikumet til å selge din bil på en effektiv og bryderi
							fri måte. Vi bærer stolthet av å kunne beslutte raske avgjørelser og
							tilby hurtige transaksjoner. Dette gir deg som kunde muligheten til å få
							innsikt i bilens verdi på raskest mulig måte.
						</p>
					</div>
					<div className="mx-auto mt-6 prose prose-lg text-gray-500 prose-indigo">
						<p>Vi tilbyr følgende i foretrukne rekkefølge:</p>
						<ul role="list">
							<li>
								<span className="text-indigo-600">Innbytte</span>
								<p className="mx-2">
									Vi er alltid glade for å kunne ta inn din bil der vi har
									evaluert den opp mot verdien til en bil vi har i vårt inventar.
								</p>
							</li>
							<li>
								<span className="text-indigo-600">Vi kjøper din bil </span>
								<p className="mx-2">
									Vi er meget interessert i å kunne kjøpe din velholdte bil
									direkte av deg. For de rette bilene vil vi ikke nøle med
									raskebeslutninger og effektiv sluttprosess. Her får du pengene
									raskt på konto innen et par virkedager etter endt beslutning,
									istedenfor å vente til bilen er solgt.{' '}
								</p>
							</li>
							<li>
								<span className="text-indigo-600">
									Kommisjon 30 000,- inkl. mva.
								</span>
								<p className="mx-2">
									Her selger vi bilen i vårt navn og vi står med
									reklamasjonsansvaret.{' '}
								</p>
							</li>
							<li>
								<span className="text-indigo-600">
									Formidling 20 000,- inkl. mva.{' '}
								</span>
								<p className="mx-2">
									Her opptrer vi som mellommann og salget blir solgt i ditt navn.
									Du er ansvarlig og reklamasjonsansvaret står på deg.
								</p>
							</li>
						</ul>
						<p>
							Vi skreddersyr en avtale opp mot deg og ditt mål. Her har du tid og
							tålmodighet til at pengene ikke er på konto før bilen er solgt. Vi
							behandler kommisjons/formidlingsbiler på samme måte som våre egne biler,
							derfor må de også være opp mot samme standard. Er bilen eldre og utenfor
							garantiperiode kan det hende vi vil ha tilstandsrapport, dette kan vi
							hjelpe med å få utført via våre kanaler.
						</p>
					</div>
				</div>
			</div>
		</>
	);
}

export default selgbilendin;
