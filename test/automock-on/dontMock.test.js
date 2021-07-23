// Required because automocking is enabled
jest.dontMock('../../src/module-to-test');

describe('jest.dontMock() all modules', () => {
	it('does not mock core module that has a __mock__', async () => {
		jest.dontMock('util');

		const moduleToTest = await import('../../src/module-to-test');
		const result = moduleToTest.default.coreWithMock();
		expect(result).toBe('actual value');
	});

	it('does not mock core module that does not have a __mock__', async () => {
		jest.dontMock('path');

		const moduleToTest = await import('../../src/module-to-test');
		const result = moduleToTest.default.coreWithoutMock();
		expect(result).toBe('actual value');
	});

	it('does not mock external module that has a __mock__', async () => {
		jest.dontMock('lodash.identity');

		const moduleToTest = await import('../../src/module-to-test');
		const result = moduleToTest.default.externalWithMock();
		expect(result).toBe('actual value');
	});

	it('does not mock external module that does not have a __mock__', async () => {
		jest.dontMock('lodash.tolower');

		const moduleToTest = await import('../../src/module-to-test');
		const result = moduleToTest.default.externalWithoutMock();
		expect(result).toBe('actual value');
	});

	it('does not mock local module that has a __mock__', async () => {
		jest.dontMock('../../src/module-with-mock');

		const moduleToTest = await import('../../src/module-to-test');
		const result = moduleToTest.default.localWithMock();
		expect(result).toBe('actual value');
	});

	it('does not mock local module that does not have a __mock__', async () => {
		jest.dontMock('../../src/module-without-mock');

		const moduleToTest = await import('../../src/module-to-test');
		const result = moduleToTest.default.localWithoutMock();
		expect(result).toBe('actual value');
	});
});
