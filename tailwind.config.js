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
		height: {
			sm: '8px',
			md: '16px',
			lg: '24px',
			xl: '48px',
			headerBg: '700px'
		},
		screens: {
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1536px'
		},
		extend: {
			backgroundImage: {
				'header-bg': "url('/header-bg.jpg')"
			}
		}
	},
	variants: {
		extend: {}
	},
	plugins: []
};
