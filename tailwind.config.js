console.warn('In tailwind.config.js, root.');

const { colors } = require('tailwindcss/defaultTheme');

module.exports = {
	theme: {
		colors: {
			pretty: '#5c6ac4'
		},
		extend: {
			colors: {
				blue: {
					...colors.blue,
					'900': '#1e3656'
				}
			}
		}
	}
};
