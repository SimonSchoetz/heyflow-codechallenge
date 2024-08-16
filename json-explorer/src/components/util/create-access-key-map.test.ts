import { JsonObject } from '../../types';
import { AccessKeyMap, createAccessKeyMap } from './create-access-key-map';

describe('createAccessKeyMap', () => {
  it('should be defined', () => {
    expect(createAccessKeyMap).toBeDefined();
  });
  it('should create an array with AccessKeyMap elements', () => {
    const testData = { date: '2021-10-27T07:49:14.896Z' };
    const expected: AccessKeyMap[] = [
      { key: 'date', value: '2021-10-27T07:49:14.896Z', accessKey: 'date' },
    ];

    expect(createAccessKeyMap(testData)).toEqual(expected);
  });

  it('should be able to handle nested objects', () => {
    const testData = {
      date: '2021-10-27T07:49:14.896Z',
      userData: {
        id: '4c212130',
        nestedData: {
          other: '4c212130',
        },
      },
    };
    const expected: AccessKeyMap[] = [
      { key: 'date', value: '2021-10-27T07:49:14.896Z', accessKey: 'date' },
      { key: 'id', value: '4c212130', accessKey: 'userData.id' },
      {
        key: 'other',
        value: '4c212130',
        accessKey: 'userData.nestedData.other',
      },
    ];

    expect(createAccessKeyMap(testData)).toEqual(expected);
  });
  it('should be able to handle nested arrays', () => {
    const testData = {
      date: '2021-10-27T07:49:14.896Z',
      userData: {
        id: '4c212130',
        nestedData: [
          {
            other: '4c212130',
          },
          {
            number: 123456,
          },
        ],
      },
    } as JsonObject;

    const expected: AccessKeyMap[] = [
      { key: 'date', value: '2021-10-27T07:49:14.896Z', accessKey: 'date' },
      { key: 'id', value: '4c212130', accessKey: 'userData.id' },
      {
        key: 'other',
        value: '4c212130',
        accessKey: 'userData.nestedData[0].other',
      },
      {
        key: 'number',
        value: 123456,
        accessKey: 'userData.nestedData[1].number',
      },
    ];

    expect(createAccessKeyMap(testData)).toEqual(expected);
  });
});
