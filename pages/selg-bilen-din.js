import Head from 'next/head';
import React from 'react';

function selgbilendin() {
	return (
		<>
			<Head>
				<title>Auto GT | Selg bilen din</title>
			</Head>

			<div className="relative overflow-hidden bg-white py-16">
				<div className="hidden lg:absolute lg:inset-y-0 lg:block lg:h-full lg:w-full lg:[overflow-anchor:none]">
					<div className="relative mx-auto h-full max-w-prose text-lg" aria-hidden="true">
						<svg
							className="absolute top-12 left-full translate-x-32 transform"
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
							className="absolute top-1/2 right-full -translate-x-32 -translate-y-1/2 transform"
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
							className="absolute bottom-12 left-full translate-x-32 transform"
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
					<div className="mx-auto max-w-prose text-lg">
						<h1>
							<span className="block text-center text-lg font-semibold text-indigo-600">
								Vi hjelper deg!
							</span>
							<span className="mt-2 block text-center text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
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
					<div className="prose-lg prose prose-indigo mx-auto mt-6 text-gray-500">
						<p>Vi tilbyr følgende i foretrukne rekkefølge:</p>
						<ul role="list">
							<li>
								<p className="mx-2">
									<span className="text-indigo-600">Innbytte. </span>
									Vi er alltid glade for å kunne ta inn din bil der vi har
									evaluert den opp mot verdien til en bil vi har i vårt inventar.
								</p>
							</li>
							<li>
								<p className="mx-2">
									<span className="text-indigo-600">Vi kjøper din bil. </span>
									Vi er meget interessert i å kunne kjøpe din velholdte bil
									direkte av deg. For de rette bilene vil vi ikke nøle med
									raskebeslutninger og effektiv sluttprosess. Her får du pengene
									raskt på konto innen et par virkedager etter endt beslutning,
									istedenfor å vente til bilen er solgt.{' '}
								</p>
							</li>
							<li>
								<p className="mx-2">
									<span className="text-indigo-600">
										Kommisjon 30 000,- inkl. mva.{' '}
									</span>
									Her selger vi bilen i vårt navn og vi står med
									reklamasjonsansvaret.{' '}
								</p>
							</li>
							<li>
								<p className="mx-2">
									<span className="text-indigo-600">
										Formidling 20 000,- inkl. mva.{' '}
									</span>
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
