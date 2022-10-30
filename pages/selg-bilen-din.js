import Head from 'next/head';
import React from 'react';

function selgbilendin() {
	return (
		<>
			<Head>
				<title>Auto GT | Selg bilen din</title>
			</Head>
			<div className="flex justify-center">
				<div className="max-w-5xl m-6">
					<h2 className="inline-block my-5 text-4xl border-b-2 sm:text-5xl border-accent1">
						Selg din bil
					</h2>
					<p className="mb-5">
						Vi forstår at det å selge sin egen bil kan være tidskrevende, vanskelig og
						iblant en ubehagelig prosess. Vi i Auto GT har ressursene, ekspertisen og
						publikumet til å selge din bil på en effektiv og bryderi fri måte. Vi bærer
						stolthet av å kunne beslutte raske avgjørelser og tilby hurtige
						transaksjoner. Dette gir deg som kunde muligheten til å få innsikt i bilens
						verdi på raskest mulig måte.
					</p>
					<span className="">Vi tilbyr følgende i foretrukne rekkefølge:</span>
					<ul>
						<li>
							<span>Innbytte</span>
							<p>
								Vi er alltid glade for å kunne ta inn din bil der vi har evaluert
								den opp mot verdien til en bil vi har i vårt inventar.
							</p>
						</li>
						<li>
							<span>Vi kjøper din bil </span>
							<p>
								Vi er meget interessert i å kunne kjøpe din velholdte bil direkte av
								deg. For de rette bilene vil vi ikke nøle med raskebeslutninger og
								effektiv sluttprosess. Her får du pengene raskt på konto innen et
								par virkedager etter endt beslutning, istedenfor å vente til bilen
								er solgt.{' '}
							</p>
						</li>
						<li>
							<span>Kommisjon 30 000,- inkl. mva.</span>
							<p>
								Her selger vi bilen i vårt navn og vi står med reklamasjonsansvaret.{' '}
							</p>
						</li>
						<li>
							<span>Formidling 20 000,- inkl. mva. </span>
							<p>
								Her opptrer vi som mellommann og salget blir solgt i ditt navn. Du
								er ansvarlig og reklamasjonsansvaret står på deg.
							</p>
						</li>
					</ul>
					<p>
						Vi skreddersyr en avtale opp mot deg og ditt mål. Her har du tid og
						tålmodighet til at pengene ikke er på konto før bilen er solgt. Vi behandler
						kommisjons/formidlingsbiler på samme måte som våre egne biler, derfor må de
						også være opp mot samme standard. Er bilen eldre og utenfor garantiperiode
						kan det hende vi vil ha tilstandsrapport, dette kan vi hjelpe med å få
						utført via våre kanaler.
					</p>
				</div>
			</div>
		</>
	);
}

export default selgbilendin;
