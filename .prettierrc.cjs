module.exports = {
	semi: false,
	singleQuote: true,
	trailingComma: 'all',
	useTabs: true,
	plugins: [require.resolve('prettier-plugin-astro')],
	overrides: [
		{
			files: '*.astro',
			options: {
				parser: 'astro',
			},
		},
	],
}
