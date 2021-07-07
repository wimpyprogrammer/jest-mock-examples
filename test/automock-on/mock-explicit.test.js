import { format as coreWithMock } from 'util';
import { join as coreWithoutMock } from 'path';
import externalWithMock from 'lodash.identity';
import externalWithoutMock from 'lodash.tolower';
import localWithMock from '../../src/module-with-mock';
import localWithoutMock from '../../src/module-without-mock';
import moduleToTest from '../../src/module-to-test';

jest.mock('util');
jest.mock('path');
jest.mock('lodash.identity');
jest.mock('lodash.tolower');
jest.mock('../../src/module-with-mock');
jest.mock('../../src/module-without-mock');

coreWithMock.mockReturnValueOnce('explicit value');
coreWithoutMock.mockReturnValueOnce('explicit value');
externalWithMock.mockReturnValueOnce('explicit value');
externalWithoutMock.mockReturnValueOnce('explicit value');
localWithMock.mockReturnValueOnce('explicit value');
localWithoutMock.mockReturnValueOnce('explicit value');

describe('jest.mock() with explicit mockReturnValueOnce()', () => {
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
