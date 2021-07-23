// Required because automocking is enabled
jest.unmock('../../src/module-to-test');

describe('jest.doMock() with module factory parameter', () => {
	it('mocks core module that has a __mock__', async () => {
		jest.doMock('util', () => ({
			format: () => 'doMock factory value',
		}));

		const moduleToTest = await import('../../src/module-to-test');
		const result = moduleToTest.default.coreWithMock();
		expect(result).toBe('doMock factory value');
	});

	it('mocks core module that does not have a __mock__', async () => {
		jest.doMock('path', () => ({
			join: () => 'doMock factory value',
		}));

		const moduleToTest = await import('../../src/module-to-test');
		const result = moduleToTest.default.coreWithoutMock();
		expect(result).toBe('doMock factory value');
	});

	it('mocks external module that has a __mock__', async () => {
		jest.doMock('lodash.identity', () => ({
			__esModule: true,
			default: () => 'doMock factory value',
		}));

		const moduleToTest = await import('../../src/module-to-test');
		const result = moduleToTest.default.externalWithMock();
		expect(result).toBe('doMock factory value');
	});

	it('mocks external module that does not have a __mock__', async () => {
		jest.doMock('lodash.tolower', () => ({
			__esModule: true,
			default: () => 'doMock factory value',
		}));

		const moduleToTest = await import('../../src/module-to-test');
		const result = moduleToTest.default.externalWithoutMock();
		expect(result).toBe('doMock factory value');
	});

	it('mocks local module that has a __mock__', async () => {
		jest.doMock('../../src/module-with-mock', () => ({
			__esModule: true,
			default: () => 'doMock factory value',
		}));

		const moduleToTest = await import('../../src/module-to-test');
		const result = moduleToTest.default.localWithMock();
		expect(result).toBe('doMock factory value');
	});

	it('mocks local module that does not have a __mock__', async () => {
		jest.doMock('../../src/module-without-mock', () => ({
			__esModule: true,
			default: () => 'doMock factory value',
		}));

		const moduleToTest = await import('../../src/module-to-test');
		const result = moduleToTest.default.localWithoutMock();
		expect(result).toBe('doMock factory value');
	});
});
