import moduleToTest from '../../src/module-to-test';

jest.mock('util', () => ({
	format: () => 'mock factory value'
}));
jest.mock('path', () => ({
	join: () => 'mock factory value'
}));
jest.mock('lodash.identity', () => ({
	__esModule: true,
	default: () => 'mock factory value',
}));
jest.mock('lodash.tolower', () => ({
	__esModule: true,
	default: () => 'mock factory value',
}));
jest.mock('../../src/module-with-mock', () => ({
	__esModule: true,
	default: () => 'mock factory value',
}));
jest.mock('../../src/module-without-mock', () => ({
	__esModule: true,
	default: () => 'mock factory value',
}));

describe('jest.mock() with module factory parameter', () => {
	it('mocks core module that has a __mock__', () => {
		const result = moduleToTest.coreWithMock();
		expect(result).toBe('mock factory value');
	});

	it('mocks core module that does not have a __mock__', () => {
		const result = moduleToTest.coreWithoutMock();
		expect(result).toBe('mock factory value');
	});

	it('mocks external module that has a __mock__', () => {
		const result = moduleToTest.externalWithMock();
		expect(result).toBe('mock factory value');
	});

	it('mocks external module that does not have a __mock__', () => {
		const result = moduleToTest.externalWithoutMock();
		expect(result).toBe('mock factory value');
	});

	it('mocks local module that has a __mock__', () => {
		const result = moduleToTest.localWithMock();
		expect(result).toBe('mock factory value');
	});

	it('mocks local module that does not have a __mock__', () => {
		const result = moduleToTest.localWithoutMock();
		expect(result).toBe('mock factory value');
	});
});
