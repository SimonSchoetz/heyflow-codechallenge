import { mapJsonToDisplayRows } from './map-json-to-diplay-rows';

describe('mapJsonToDisplayRows', () => {
  it('should be defined', () => {
    expect(mapJsonToDisplayRows).toBeDefined();
  });
  it('return array of strings', () => {
    const testData = {
      date: '2021-10-27T07:49:14.896Z',
    };
    const result = mapJsonToDisplayRows(testData);
    expect(Array.isArray(result)).toBe(true);
    expect(result.every((item) => typeof item === 'string')).toBe(true);
  });
  it('should not outer curly wrapper', () => {
    const testData = {
      date: '2021-10-27T07:49:14.896Z',
    };
    const result = mapJsonToDisplayRows(testData);
    console.log('>>>>>>>>> | it | result:', result);
    expect(result.includes('{')).toBe(false);
    expect(result.includes('}')).toBe(false);
  });
  it('should offset unnecessary indentation', () => {
    const testData = {
      date: '2021-10-27T07:49:14.896Z',
      nest: {
        nestItem: null,
      },
    };
    const result = mapJsonToDisplayRows(testData);
    expect(result[0]).toEqual("date: '2021-10-27T07:49:14.896Z',");
    expect(result[2]).toEqual('    nestItem: null');
  });
  it('keys should not have keys in quotes', () => {
    const testData = {
      date: '2021-10-27T07:49:14.896Z',
      nest: {
        nestItem: null,
      },
    };
    const result = mapJsonToDisplayRows(testData);
    expect(result[0]).toEqual("date: '2021-10-27T07:49:14.896Z',");
    expect(result[2]).toEqual('    nestItem: null');
  });
  it('should not have single quotes for values', () => {
    const testData = {
      date: '2021-10-27T07:49:14.896Z',
      nest: {
        nestItem: null,
      },
    };
    const result = mapJsonToDisplayRows(testData);
    expect(result[0]).toEqual("date: '2021-10-27T07:49:14.896Z',");
    expect(result[2]).toEqual('    nestItem: null');
  });
});
