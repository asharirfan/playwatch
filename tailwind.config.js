module.exports = {
	purge: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}'
	],
	darkMode: false, // or 'media' or 'class'
	theme: {
		colors: {
			darkGrey: '#353849',
			green: '#03CC90',
			grey: '#3F4354',
			text: '#232734',
			white: '#FFFFFF'
		},
		fontFamily: {
			heading: ['Halant', 'serif'],
			text: ['Nunito Sans', 'sans-serif']
		},
		screens: {
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1536px'
		}
	},
	variants: {
		extend: {}
	},
	plugins: []
};
