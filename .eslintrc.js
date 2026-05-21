module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: ['airbnb-base', 'prettier', 'plugin:cypress/recommended'],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['no-cypress-chain'],
	rules: {
		'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
		'eol-last': ['error', 'always'],
		'semi': ['error', 'never'],
		'max-len': ['warn', {
			code: 100,
			ignorePattern: '^cy\\.[a-zA-Z]+\\([^)]*\\);?$',
		}],
		'no-cypress-chain/no-cypress-chain': 'warn',
	},
}
