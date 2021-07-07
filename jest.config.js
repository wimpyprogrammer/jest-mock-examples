module.exports = {
	testEnvironment: 'node',
	// Prevent tests from affecting each other
	restoreMocks: true,
	verbose: true,
	projects: [
		{
			displayName: 'Automock Enabled',
			testMatch: ['<rootDir>/test/automock-on/*.test.js'],
			automock: true,
		},
		{
			displayName: 'Automock Disabled',
			testMatch: ['<rootDir>/test/automock-off/*.test.js'],
		},
	],
};
