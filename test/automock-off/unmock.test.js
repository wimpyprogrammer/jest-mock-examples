import moduleToTest from '../../src/module-to-test';

jest.unmock('util');
jest.unmock('path');
jest.unmock('lodash.identity');
jest.unmock('lodash.tolower');
jest.unmock('../../src/module-with-mock');
jest.unmock('../../src/module-without-mock');
jest.unmock('../../src/module-to-test');

describe('jest.unmock() all modules', () => {
	it('mocks core module that has a __mock__', () => {
		const result = moduleToTest.coreWithMock();
		expect(result).toBe('actual value');
	});

	it('mocks core module that does not have a __mock__', () => {
		const result = moduleToTest.coreWithoutMock();
		expect(result).toBe('actual value');
	});

	it('mocks external module that has a __mock__', () => {
		const result = moduleToTest.externalWithMock();
		expect(result).toBe('actual value');
	});

	it('mocks external module that does not have a __mock__', () => {
		const result = moduleToTest.externalWithoutMock();
		expect(result).toBe('actual value');
	});

	it('mocks local module that has a __mock__', () => {
		const result = moduleToTest.localWithMock();
		expect(result).toBe('actual value');
	});

	it('mocks local module that does not have a __mock__', () => {
		const result = moduleToTest.localWithoutMock();
		expect(result).toBe('actual value');
	});
});
