/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./pages/**/*.{html,js}', './components/**/*.{html,js}'],
	theme: {
		extend: {
			keyframes: {
				loadFadeIn: {
					'0%': { opacity: '0.0' },
					'30%': { opacity: '0.0' },
					'100%': { opacity: '1.0' },
				},
				loadRemove: {
					'0%': { opacity: '100%', transform: 'translateY(0)' },
					'90%': { opacity: '100%', transform: 'translateY(0)' },
					'99%': { opacity: '0%', transform: 'translateY(0)' },
					'100%': { opacity: '0%', transform: 'translateY(-2000px)' },
				},
			},
			animation: {
				loadFadeIn: 'loadFadeIn 2s ease-in-out forwards',
				loadRemove: 'loadRemove 3s linear forwards',
			},
		},
	},
	plugins: [],
};
