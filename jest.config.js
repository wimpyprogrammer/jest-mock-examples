const baseConfig = {
	testEnvironment: 'node',

	// Prevent tests from affecting each other
	restoreMocks: true,
};

module.exports = {
	verbose: true,
	projects: [
		{
			...baseConfig,
			displayName: 'Automock Enabled',
			testMatch: ['<rootDir>/test/automock-on/*.test.js'],
			automock: true,
		},
		{
			...baseConfig,
			displayName: 'Automock Disabled',
			testMatch: ['<rootDir>/test/automock-off/*.test.js'],
		},
	],
};
