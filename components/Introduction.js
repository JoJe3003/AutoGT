import Image from 'next/image';
import React from 'react';
import profilEndre from '../public/static/profilbilder/EndreProfilbilde.webp';
import profilErlend from '../public/static/profilbilder/ErlendProfilbilde.webp';

function Introduction() {
	return (
		<section className="shadow">
			<div className="flex justify-center gap-12 sm:gap-28 sm:mx-80">
				<div className="flex flex-col gap-5">
					<div id="Endre" className="relative w-32 h-32 gap-40 sm:w-52 sm:h-52">
						<Image
							src={profilEndre}
							className="rounded-full"
							layout="fill"
							objectFit="cover"
							alt="Profilbilde av daglig leder Endre Holmedal."
						/>
					</div>
					<div className="my-auto">
						<h3 className="text-xl text-center">Endre Holmedal</h3>
					</div>
				</div>
				<div className="flex flex-col gap-5">
					<div id="Erlend" className="relative flex w-32 h-32 sm:w-52 sm:h-52">
						<Image
							src={profilErlend}
							className="rounded-full"
							layout="fill"
							objectFit="cover"
							alt="Profilbilde av styreleder Erlend Høyen."
						/>
					</div>
					<div className="my-auto">
						<h3 className="text-xl text-center">Erlend Høyen</h3>
						{/* <p className="text-sm">- Styreleder Auto GT</p> */}
					</div>
				</div>
			</div>
		</section>
	);
}

export default Introduction;
