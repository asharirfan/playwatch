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
		extend: {}
	},
	variants: {
		extend: {}
	},
	plugins: []
};
