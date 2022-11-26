import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

export default function Example() {
	const [fullname, setFullname] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [message, setMessage] = useState('');

	//   Form validation state
	const [errors, setErrors] = useState({});

	//   Setting button text on form submission
	const [buttonText, setButtonText] = useState('Send');

	// Setting success or failure messages states
	const [showSuccessMessage, setShowSuccessMessage] = useState(false);
	const [showFailureMessage, setShowFailureMessage] = useState(false);

	const handleValidation = () => {
		let tempErrors = {};
		let isValid = true;

		if (email.length <= 0) {
			tempErrors['email'] = true;
			isValid = false;
		}
		if (fullname.length <= 0) {
			tempErrors['fullname'] = true;
			isValid = false;
		}
		if (phone.length <= 0) {
			tempErrors['phone'] = true;
			isValid = false;
		}
		if (message.length <= 0) {
			tempErrors['message'] = true;
			isValid = false;
		}

		setErrors({ ...tempErrors });
		console.log('errors', errors);
		return isValid;
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		let isValidForm = handleValidation();

		const res = await fetch('/api/sendgrid', {
			body: JSON.stringify({
				fullname: fullname,
				email: email,
				phone: phone,
				message: message,
			}),
			headers: {
				'Content-Type': 'application/json',
			},
			method: 'POST',
		});

		const { error } = await res.json();
		if (error) {
			console.log(error);
			return;
		}
		console.log(fullname, email, phone, message);
	};

	return (
		<div className="relative overflow-hidden rounded-lg bg-white shadow">
			<div className="absolute inset-0">
				<div className="absolute inset-y-0 left-0 w-1/2 bg-gray-50" />
			</div>
			<div className="relative mx-auto max-w-7xl lg:grid lg:grid-cols-5">
				<div className="bg-gray-50 px-4 py-16 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
					<div className="mx-auto max-w-lg">
						<h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
							Ta kontakt
						</h2>
						<p className="mt-3 text-lg leading-6 text-gray-500">
							Dersom et av alternativene over er av interrese, send oss gjerne en
							melding så vi kan følge opp med en hyggelig bilprat.
						</p>
						<dl className="mt-8 text-base text-gray-500">
							<div>
								<dt className="sr-only">Postal address</dt>
								<dd>
									<p>Borgerskogen 45 E</p>
									<p>3160, Stokke</p>
								</dd>
							</div>
							<div className="mt-6">
								<dt className="sr-only">Telefonnummer</dt>
								<dd className="flex">
									<PhoneIcon
										className="h-6 w-6 flex-shrink-0 text-gray-400"
										aria-hidden="true"
									/>
									<span className="ml-3">
										<span className="inline-block">+47 954 20 529</span> /{' '}
										<span className="inline-block">+47 464 82 654</span>
									</span>
								</dd>
							</div>
							<div className="mt-6">
								<dt className="sr-only">Email</dt>
								<dd className="flex">
									<EnvelopeIcon
										className="h-6 w-6 flex-shrink-0 text-gray-400"
										aria-hidden="true"
									/>
									<span className="ml-3">endre@autogt.no / erlend@autogt.no</span>
								</dd>
							</div>
							<ul role="list" className="mt-6 flex items-center space-x-10">
								<li>
									<a
										className="text-gray-500 hover:text-gray-900"
										href="https://www.facebook.com/profile.php?id=100086945687044"
									>
										<span className="sr-only">Facebook</span>
										<svg
											width={24}
											height={24}
											viewBox="0 0 24 24"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
											className="h-6 w-6"
											aria-hidden="true"
										>
											<path
												d="M22.258 1H2.242C1.556 1 1 1.556 1 2.242v20.016c0 .686.556 1.242 1.242 1.242h10.776v-8.713h-2.932V11.39h2.932V8.887c0-2.906 1.775-4.489 4.367-4.489 1.242 0 2.31.093 2.62.134v3.037l-1.797.001c-1.41 0-1.683.67-1.683 1.653v2.168h3.362l-.438 3.396h-2.924V23.5h5.733c.686 0 1.242-.556 1.242-1.242V2.242C23.5 1.556 22.944 1 22.258 1"
												fill="currentColor"
											/>
										</svg>
									</a>
								</li>
								<li>
									<a
										className="text-gray-500 hover:text-gray-900"
										href="https://www.instagram.com/autogtas/"
									>
										<span className="sr-only">Instagram</span>
										<svg
											width={23}
											height={23}
											viewBox="0 0 23 23"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
											className="h-6 w-6"
											aria-hidden="true"
										>
											<path
												fill="currentColor"
												fillRule="evenodd"
												d="M7.465 1.066C8.638 1.012 9.012 1 12 1c2.988 0 3.362.013 4.534.066c1.172.053 1.972.24 2.672.511c.733.277 1.398.71 1.948 1.27c.56.549.992 1.213 1.268 1.947c.272.7.458 1.5.512 2.67C22.988 8.639 23 9.013 23 12c0 2.988-.013 3.362-.066 4.535c-.053 1.17-.24 1.97-.512 2.67a5.396 5.396 0 0 1-1.268 1.949c-.55.56-1.215.992-1.948 1.268c-.7.272-1.5.458-2.67.512c-1.174.054-1.548.066-4.536.066c-2.988 0-3.362-.013-4.535-.066c-1.17-.053-1.97-.24-2.67-.512a5.397 5.397 0 0 1-1.949-1.268a5.392 5.392 0 0 1-1.269-1.948c-.271-.7-.457-1.5-.511-2.67C1.012 15.361 1 14.987 1 12c0-2.988.013-3.362.066-4.534c.053-1.172.24-1.972.511-2.672a5.396 5.396 0 0 1 1.27-1.948a5.392 5.392 0 0 1 1.947-1.269c.7-.271 1.5-.457 2.67-.511Zm8.98 1.98c-1.16-.053-1.508-.064-4.445-.064c-2.937 0-3.285.011-4.445.064c-1.073.049-1.655.228-2.043.379c-.513.2-.88.437-1.265.822a3.412 3.412 0 0 0-.822 1.265c-.151.388-.33.97-.379 2.043c-.053 1.16-.064 1.508-.064 4.445c0 2.937.011 3.285.064 4.445c.049 1.073.228 1.655.379 2.043c.176.477.457.91.822 1.265c.355.365.788.646 1.265.822c.388.151.97.33 2.043.379c1.16.053 1.507.064 4.445.064c2.938 0 3.285-.011 4.445-.064c1.073-.049 1.655-.228 2.043-.379c.513-.2.88-.437 1.265-.822c.365-.355.646-.788.822-1.265c.151-.388.33-.97.379-2.043c.053-1.16.064-1.508.064-4.445c0-2.937-.011-3.285-.064-4.445c-.049-1.073-.228-1.655-.379-2.043c-.2-.513-.437-.88-.822-1.265a3.413 3.413 0 0 0-1.265-.822c-.388-.151-.97-.33-2.043-.379Zm-5.85 12.345a3.669 3.669 0 0 0 4-5.986a3.67 3.67 0 1 0-4 5.986ZM8.002 8.002a5.654 5.654 0 1 1 7.996 7.996a5.654 5.654 0 0 1-7.996-7.996Zm10.906-.814a1.337 1.337 0 1 0-1.89-1.89a1.337 1.337 0 0 0 1.89 1.89Z"
												clipRule="evenodd"
											/>
										</svg>
									</a>
								</li>
							</ul>
						</dl>
					</div>
				</div>
				<div className="bg-white px-4 py-16 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
					<div className="mx-auto max-w-lg lg:max-w-none">
						<form onSubmit={handleSubmit} className="grid grid-cols-1 gap-y-6">
							<div>
								<label htmlFor="full-name" className="sr-only">
									Fullt navn
								</label>
								<input
									type="text"
									name="full-name"
									id="full-name"
									autoComplete="name"
									className="block w-full rounded-md border-gray-300 px-4 py-3 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
									placeholder="Fullt navn"
									value={fullname}
									onChange={(e) => {
										setFullname(e.target.value);
									}}
								/>
							</div>
							<div>
								<label htmlFor="email" className="sr-only">
									Epost
								</label>
								<input
									id="email"
									name="email"
									type="email"
									autoComplete="email"
									className="block w-full rounded-md border-gray-300 px-4 py-3 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
									placeholder="Epost"
									value={email}
									onChange={(e) => {
										setEmail(e.target.value);
									}}
								/>
							</div>
							<div>
								<label htmlFor="phone" className="sr-only">
									Telefon
								</label>
								<input
									type="text"
									name="phone"
									id="phone"
									autoComplete="tel"
									className="block w-full rounded-md border-gray-300 px-4 py-3 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
									placeholder="Telefon"
									value={phone}
									onChange={(e) => {
										setPhone(e.target.value);
									}}
								/>
							</div>
							<div>
								<label htmlFor="message" className="sr-only">
									Melding
								</label>
								<textarea
									id="message"
									name="message"
									rows={4}
									className="block w-full rounded-md border-gray-300 px-4 py-3 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
									placeholder="Melding"
									defaultValue={''}
									value={message}
									onChange={(e) => {
										setMessage(e.target.value);
									}}
								/>
							</div>
							<div>
								<button
									type="submit"
									className="inline-flex justify-center rounded-md border border-transparent bg-accent1 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
								>
									Send
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}
