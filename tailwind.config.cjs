const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				red: {
					pen: "#FF0000"
				},
				blue: {
					pen: "#0000FF"
				},
				green: {
					pen: "#00FF00"
				},
				yellow: {
					pen: "#FFFF00"
				},
				black: "#000000",
			}
		}
	},

	plugins: []
};

module.exports = config;
