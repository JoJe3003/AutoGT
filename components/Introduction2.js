import Image from 'next/image';
import React from 'react';
import profilEndre from '/public/static/profilbilder/EndreProfilbilde.webp';
import profilErlend from '/public/static/profilbilder/ErlendProfilbilde.webp';

export default function Introduction2() {
	const people = [
		{
			name: 'Endre Holmdal',
			role: 'Daglig Leder & Eier',
			imageUrl: profilEndre,
			bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ipsa ullam quia repellendus a nemo, magnam facilis voluptas tenetur neque dignissimos cum error optio reprehenderit et? Mollitia vitae ratione deleniti. ',
		},
		{
			name: 'Erlend Høyen',
			role: 'Eier',
			imageUrl: profilErlend,
			bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ipsa ullam quia repellendus a nemo, magnam facilis voluptas tenetur neque dignissimos cum error optio reprehenderit et? Mollitia vitae ratione deleniti. ',
		},
	];

	return (
		<div className="bg-white">
			<div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-24">
				<div className="space-y-12">
					<h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
						Hils på teamet vårt!
					</h2>

					<ul
						role="list"
						className="space-y-12 lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8 lg:gap-y-12 lg:space-y-0"
					>
						{people.map((person) => (
							<li key={person.name}>
								<div className="space-y-4 sm:grid sm:grid-cols-3 sm:gap-6 sm:space-y-0 lg:gap-8">
									<div className="aspect-w-1 aspect-h-1 h-0 sm:aspect-w-3 sm:aspect-h-4">
										<Image
											className="rounded-lg object-cover shadow-lg"
											src={person.imageUrl}
											alt=""
											layout="fill"
											objectFit="cover"
										/>
									</div>
									<div className="sm:col-span-2">
										<div className="space-y-4">
											<div className="space-y-1 text-lg font-medium leading-6">
												<h3>{person.name}</h3>
												<p className="text-accent1">{person.role}</p>
											</div>
											<div className="text-lg">
												<p className="text-gray-500">{person.bio}</p>
											</div>
										</div>
									</div>
								</div>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
}
