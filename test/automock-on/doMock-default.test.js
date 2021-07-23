// Required because automocking is enabled
jest.unmock('../../src/module-to-test');

describe('jest.doMock() without any parameters', () => {
	it('mocks core module that has a __mock__', async () => {
		jest.doMock('util');

		const moduleToTest = await import('../../src/module-to-test');
		const result = moduleToTest.default.coreWithMock();
		expect(result).toBe('__mock__ value');
	});

	it('mocks core module that does not have a __mock__', async () => {
		jest.doMock('path');

		const moduleToTest = await import('../../src/module-to-test');
		const result = moduleToTest.default.coreWithoutMock();
		expect(result).toBe(undefined);
	});

	it('mocks external module that has a __mock__', async () => {
		jest.doMock('lodash.identity');

		const moduleToTest = await import('../../src/module-to-test');
		const result = moduleToTest.default.externalWithMock();
		expect(result).toBe('__mock__ value');
	});

	it('mocks external module that does not have a __mock__', async () => {
		jest.doMock('lodash.tolower');

		const moduleToTest = await import('../../src/module-to-test');
		const result = moduleToTest.default.externalWithoutMock();
		expect(result).toBe(undefined);
	});

	it('mocks local module that has a __mock__', async () => {
		jest.doMock('../../src/module-with-mock');

		const moduleToTest = await import('../../src/module-to-test');
		const result = moduleToTest.default.localWithMock();
		expect(result).toBe('__mock__ value');
	});

	it('mocks local module that does not have a __mock__', async () => {
		jest.doMock('../../src/module-without-mock');

		const moduleToTest = await import('../../src/module-to-test');
		const result = moduleToTest.default.localWithoutMock();
		expect(result).toBe(undefined);
	});
});
