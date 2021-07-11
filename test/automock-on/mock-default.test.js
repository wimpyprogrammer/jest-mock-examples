import moduleToTest from '../../src/module-to-test';

// Required because automocking is enabled
jest.unmock('../../src/module-to-test');

jest.mock('util');
jest.mock('path');
jest.mock('lodash.identity');
jest.mock('lodash.tolower');
jest.mock('../../src/module-with-mock');
jest.mock('../../src/module-without-mock');

describe('jest.mock() without any parameters', () => {
	it('mocks core module that has a __mock__', () => {
		const result = moduleToTest.coreWithMock();
		expect(result).toBe('__mock__ value');
	});

	it('mocks core module that does not have a __mock__', () => {
		const result = moduleToTest.coreWithoutMock();
		expect(result).toBe(undefined);
	});

	it('mocks external module that has a __mock__', () => {
		const result = moduleToTest.externalWithMock();
		expect(result).toBe('__mock__ value');
	});

	it('mocks external module that does not have a __mock__', () => {
		const result = moduleToTest.externalWithoutMock();
		expect(result).toBe(undefined);
	});

	it('mocks local module that has a __mock__', () => {
		const result = moduleToTest.localWithMock();
		expect(result).toBe('__mock__ value');
	});

	it('mocks local module that does not have a __mock__', () => {
		const result = moduleToTest.localWithoutMock();
		expect(result).toBe(undefined);
	});
});
