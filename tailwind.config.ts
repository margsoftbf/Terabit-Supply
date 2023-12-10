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
			},
			colors: {
				darkBlue: '#10598f',
				ownBlue: '#7FB3D5',
				ownGray: '#BFC9CA',
			},
			maxWidth: {
				'8xl': '1440px',
			},
		},
	},
	plugins: [require('@tailwindcss/forms')],
};
export default config;
