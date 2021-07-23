// Just a formality, not required because automocking is disabled
jest.unmock('../../src/module-to-test');

describe('jest.doMock() with explicit mockReturnValueOnce()', () => {
	it('mocks core module that has a __mock__', async () => {
		jest.doMock('util');
		const coreWithMock = await import('util');
		coreWithMock.format.mockReturnValueOnce('explicit value');

		const moduleToTest = await import('../../src/module-to-test');
		const result = moduleToTest.default.coreWithMock();
		expect(result).toBe('explicit value');
	});

	it('mocks core module that does not have a __mock__', async () => {
		jest.doMock('path');
		const coreWithoutMock = await import('path');
		coreWithoutMock.join.mockReturnValueOnce('explicit value');

		const moduleToTest = await import('../../src/module-to-test');
		const result = moduleToTest.default.coreWithoutMock();
		expect(result).toBe('explicit value');
	});

	it('mocks external module that has a __mock__', async () => {
		jest.doMock('lodash.identity');
		const externalWithMock = await import('lodash.identity');
		externalWithMock.default.mockReturnValueOnce('explicit value');

		const moduleToTest = await import('../../src/module-to-test');
		const result = moduleToTest.default.externalWithMock();
		expect(result).toBe('explicit value');
	});

	it('mocks external module that does not have a __mock__', async () => {
		jest.doMock('lodash.tolower');
		const externalWithoutMock = await import('lodash.tolower');
		externalWithoutMock.default.mockReturnValueOnce('explicit value');

		const moduleToTest = await import('../../src/module-to-test');
		const result = moduleToTest.default.externalWithoutMock();
		expect(result).toBe('explicit value');
	});

	it('mocks local module that has a __mock__', async () => {
		jest.doMock('../../src/module-with-mock');
		const localWithMock = await import('../../src/module-with-mock');
		localWithMock.default.mockReturnValueOnce('explicit value');

		const moduleToTest = await import('../../src/module-to-test');
		const result = moduleToTest.default.localWithMock();
		expect(result).toBe('explicit value');
	});

	it('mocks local module that does not have a __mock__', async () => {
		jest.doMock('../../src/module-without-mock');
		const localWithoutMock = await import('../../src/module-without-mock');
		localWithoutMock.default.mockReturnValueOnce('explicit value');

		const moduleToTest = await import('../../src/module-to-test');
		const result = moduleToTest.default.localWithoutMock();
		expect(result).toBe('explicit value');
	});
});
