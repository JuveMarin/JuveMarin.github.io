module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{png,html,json,md,js,css}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};