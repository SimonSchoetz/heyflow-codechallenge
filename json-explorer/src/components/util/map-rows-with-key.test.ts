import { AccessKeyMap } from './create-access-key-map';
import { mapRowsWithKeyMaps } from './map-rows-with-keys';

describe('mapRowsWithKeyMaps', () => {
  it('should be defined', () => {
    expect(mapRowsWithKeyMaps).toBeDefined();
  });
  it('should join rows with key maps', () => {
    const testRows: string[] = ["test: 'test'"];
    const testMaps: AccessKeyMap[] = [
      { key: 'test', value: 'test', accessKey: 'test' },
    ];
    expect(mapRowsWithKeyMaps(testRows, testMaps)).toEqual([
      [testRows[0], testMaps[0]],
    ]);
  });
  it('should join rows with keys where applicable, otherwise leave it null', () => {
    const testRows: string[] = ['{', "test: 'test'"];
    const testMaps: AccessKeyMap[] = [
      { key: 'test', value: 'test', accessKey: 'test' },
    ];
    expect(mapRowsWithKeyMaps(testRows, testMaps)).toEqual([
      ['{', null],
      ["test: 'test'", testMaps[0]],
    ]);
  });
});
