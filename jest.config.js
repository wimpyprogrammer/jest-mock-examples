const baseConfig = {
	testEnvironment: 'node',

	// Prevent tests from affecting each other
	resetModules: true,

	/**
	 * Replaced restoreMocks with clearMocks due to change in Jest 29.4.3.
	 * https://github.com/facebook/jest/blob/main/CHANGELOG.md#2943
	 */
	// restoreMocks: true,
	clearMocks: true,
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
