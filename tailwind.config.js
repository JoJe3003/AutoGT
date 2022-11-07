/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./pages/**/*.{html,js}', './components/**/*.{html,js}'],
	theme: {
		extend: {
			colors: {
				accent1: '#29465b',
			},
			keyframes: {
				loadFadeIn: {
					'0%': { opacity: '0.0' },
					'30%': { opacity: '0.0' },
					'100%': { opacity: '1.0' },
				},
				loadRemove: {
					'0%': { opacity: '100%' },
					'90%': { opacity: '100%' },
					'99%': { opacity: '0%' },
					'100%': { opacity: '0%' },
				},
			},
			animation: {
				loadFadeIn: 'loadFadeIn 1s ease-in-out forwards',
				loadRemove: 'loadRemove 2s linear forwards',
			},
		},
	},
	plugins: [require('@tailwindcss/typography')],
};
