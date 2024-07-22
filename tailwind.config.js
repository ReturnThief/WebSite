export default {
	content: [
		"./Public/**/*.html",
		"./Source/**/*.{astro,js,jsx,ts,tsx,vue,svelte}",
	],
<<<<<<< HEAD

	darkMode: "media",

=======
	darkMode: "media",
>>>>>>> Fork/Current
	theme: {
		container: {
			center: true,
		},
		extend: {
			typography: {
				DEFAULT: {
					css: {
						a: {
							"font-weight": "400",
						},
					},
				},
			},
		},
	},
<<<<<<< HEAD

	variants: {},

=======
	variants: {},
>>>>>>> Fork/Current
	plugins: [
		require("@tailwindcss/forms"),
		require("@tailwindcss/typography"),
		require("@tailwindcss/aspect-ratio"),
	],
};
