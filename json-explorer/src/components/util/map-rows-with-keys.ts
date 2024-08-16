import { AccessKeyMap } from './create-access-key-map';

export const mapRowsWithKeyMaps = (
  rows: string[],
  keyMaps: AccessKeyMap[]
): Array<[string, AccessKeyMap | null]> => {
  let indexOffset = 0;

  return rows.map((row, index) => {
    if (['[', '{', '}', ']'].includes(row.trim()?.at(-1) || '')) {
      indexOffset++;
      return [row, null];
    }
    return [row, keyMaps[index - indexOffset]];
  });
};
