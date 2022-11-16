import React from 'react';
import Gmaps from './Gmaps';

export default function Location() {
	return (
		<div className="pb-2">
			<div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-24">
				<h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Vår lokasjon</h2>
				<div className="mx-auto lg:max-w-7xl lg:px-0">
					{/* Main 3 column grid */}
					<div className="grid grid-cols-1 items-start gap-4 py-6 lg:grid-cols-3 lg:gap-8">
						{/* Left column */}
						<div className="my-auto grid grid-cols-1 gap-4 lg:col-span-2">
							<section aria-labelledby="section-1-title">
								<h2 className="sr-only" id="section-1-title">
									Om Auto GT lokasjon.
								</h2>
								<div className="overflow-hidden bg-white">
									<div>
										<p>
											Vi holder til på bla bla bla... Lorem ipsum, dolor sit
											amet consectetur adipisicing elit. Ut officiis quo
											placeat fuga eos nulla tempora error cumque, corporis
											eligendi repudiandae voluptatem obcaecati id quam
											reprehenderit ipsa impedit mollitia libero. Odio nemo
											ratione corrupti, quisquam repellat natus delectus
											expedita, quod laudantium rem doloremque a deserunt
											ipsam harum laboriosam consequatur numquam excepturi
											nostrum molestias illo accusantium aperiam hic saepe
											libero. Error! Non mollitia necessitatibus possimus
											dignissimos temporibus saepe tenetur excepturi, in
											asperiores odio iste praesentium dolorem earum eligendi
											omnis, nihil doloribus delectus facilis quaerat a.
											Eveniet, optio recusandae. Labore, maiores animi!{' '}
										</p>
									</div>
								</div>
							</section>
						</div>

						{/* Right column */}
						<div className="grid grid-cols-1 gap-4 lg:-mt-20">
							<section aria-labelledby="section-2-title">
								<h2 className="sr-only" id="section-2-title">
									Kart til Auto GT.
								</h2>
								<div className="overflow-hidden rounded-lg bg-white shadow">
									<div className="h-80">
										<Gmaps />
									</div>
								</div>
							</section>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
