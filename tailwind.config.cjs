/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		colors: {
			white: 'hsl(0, 0%, 100%)',
			'soft-orange': 'hsl(35, 77%, 62%)',
			'soft-red': 'hsl(5, 85%, 63%)',
			'off-white': 'hsl(36, 100%, 99%)',
			'grayish-blue': 'hsl(233, 8%, 79%)',
			'dark-grayish-blue': 'hsl(236, 13%, 42%)',
			'very-dark-blue': 'hsl(240, 100%, 5%)',
		},
		letterSpacing: {
			normal: '0',
			widest: '0.25em',
		},
		gridTemplateRows: {
			main: 'min-content min-content min-content',
			'3-min-content': 'repeat(3, min-content)',
		},
	},
	plugins: [],
}
