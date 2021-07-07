import moduleToTest from '../../src/module-to-test';

describe('no calls to jest.mock()', () => {
	it('mocks core module that has a __mock__', () => {
		const result = moduleToTest.coreWithMock();
		expect(result).toBe(undefined);
	});

	it('mocks core module that does not have a __mock__', () => {
		const result = moduleToTest.coreWithoutMock();
		expect(result).toBe(undefined);
	});

	it('mocks external module that has a __mock__', () => {
		const result = moduleToTest.externalWithMock();
		expect(result).toBe(undefined);
	});

	it('mocks external module that does not have a __mock__', () => {
		const result = moduleToTest.externalWithoutMock();
		expect(result).toBe(undefined);
	});

	it('mocks local module that has a __mock__', () => {
		const result = moduleToTest.localWithMock();
		expect(result).toBe(undefined);
	});

	it('mocks local module that does not have a __mock__', () => {
		const result = moduleToTest.localWithoutMock();
		expect(result).toBe(undefined);
	});
});
