import { AccessKeyMap } from '../components/util';
import { getObjectValueByKeyChain } from './getObjectValueByKeyChain';

describe('getObjectValueByKeyChain', () => {
  const testData = {
    dateString: '2021-10-27T07:49:14.896Z',
    boolean: false,
    null: null,
    number: 123,
    object: { key1: 'value1' },
    array: [1, 2, 3],
  };

  it('should be defined', () => {
    expect(getObjectValueByKeyChain).toBeDefined();
  });

  it('should always return a string', () => {
    for (const key of Object.keys(testData)) {
      const result = getObjectValueByKeyChain(testData, key);
      expect(typeof result).toBe('string');
    }
  });

  it('should return "undefined" for undefined or objects other than null', () => {
    expect(getObjectValueByKeyChain(testData, 'dateString')).not.toEqual(
      'undefined'
    );
    expect(getObjectValueByKeyChain(testData, 'boolean')).not.toEqual(
      'undefined'
    );
    expect(getObjectValueByKeyChain(testData, 'null')).not.toEqual('undefined');
    expect(getObjectValueByKeyChain(testData, 'number')).not.toEqual(
      'undefined'
    );
    expect(getObjectValueByKeyChain(testData, 'object')).toEqual('undefined');
    expect(getObjectValueByKeyChain(testData, 'array')).toEqual('undefined');
    expect(getObjectValueByKeyChain(testData, 'notExistingKey')).toEqual(
      'undefined'
    );
  });
});
