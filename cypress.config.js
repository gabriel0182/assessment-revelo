const { defineConfig } = require('cypress')


module.exports = defineConfig({
	viewportWidth: 1600,
	viewportHeight: 900,
	screenshotOnRunFailure: false,
	video: false,
	videoCompression: 32,
	defaultCommandTimeout: 30000,
	numTestsKeptInMemory: 0,
	responseTimeout: 60000,
	requestTimeout: 60000,
	taskTimeout: 60000,
	execTimeout: 60000,
	experimentalMemoryManagement: true,
  projectId: "9t7suj",

	retries: {
		runMode: 1,
		openMode: 0,
	},

	scrollBehavior: 'center',

	env: {
		
	},

	pageLoadTimeout: 60000,
	chromeWebSecurity: false,
	watchForFileChanges: false,


	e2e: {
		specPattern: 'cypress/e2e/**/*.js',
		testIsolation: false,
		slowTestThreshold: 60000,
		experimentalRunAllSpecs: true,
		baseUrl: 'https://demoqa.com/',
	},
})
