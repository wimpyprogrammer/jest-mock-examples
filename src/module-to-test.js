import { format as coreWithMock } from 'util';
import { join as coreWithoutMock } from 'path';
import externalWithMock from 'lodash.identity';
import externalWithoutMock from 'lodash.tolower';
import localWithMock from './module-with-mock';
import localWithoutMock from './module-without-mock';

export default {
	/**
	 * A core Node module with a shadow in the __mocks__ directory.
	 */
	coreWithMock: () => coreWithMock('actual value'),

	/**
	 * A core Node module, with no shadow in the __mocks__ directory.
	 */
	coreWithoutMock: () => coreWithoutMock('actual value'),

	/**
	 * A third-party module with a shadow in the __mocks__ directory.
	 */
	externalWithMock: () => externalWithMock('actual value'),

	/**
	 * A third-party module, with no shadow in the __mocks__ directory.
	 */
	externalWithoutMock: () => externalWithoutMock('actual value'),

	/**
	 * A local module with a shadow in the __mocks__ directory.
	 */
	localWithMock: () => localWithMock('actual value'),

	/**
	 * A local module, with no shadow in the __mocks__ directory.
	 */
	localWithoutMock: () => localWithoutMock('actual value'),
};
