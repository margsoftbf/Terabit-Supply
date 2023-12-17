import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			fontFamily: {
				raleway: ['Raleway', 'sans-serif'],
				montserrat: ['Montserrat', 'sans-serif'],
				body: ['Montserrat', 'sans-serif'],
			},
			colors: {
				myPink: '#F38160',
				myOrange: '#F0B70D',
				myGray: '#403C39',
				myYellowLight: '#F8F2E9',
				myYellowLighter: '#f2eee9',
			},
			maxWidth: {
				'8xl': '1440px',
			},
		},
	},
	plugins: [
		require('@tailwindcss/forms'),
		require('@tailwindcss/aspect-ratio'),
	],
};
export default config;
