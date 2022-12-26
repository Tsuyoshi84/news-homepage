module.exports = {
	semi: false,
	singleQuote: true,
	trailingComma: 'all',
	useTabs: true,
	plugins: [
		require.resolve('prettier-plugin-astro'),
		require('prettier-plugin-tailwindcss'),
	],
	overrides: [
		{
			files: '*.astro',
			options: {
				parser: 'astro',
			},
		},
	],
}
