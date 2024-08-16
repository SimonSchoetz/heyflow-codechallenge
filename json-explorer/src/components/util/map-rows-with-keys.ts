import { AccessKeyMap } from './create-access-key-map';

export type ListItemData = [string, AccessKeyMap | null];

export const mapRowsWithKeyMaps = (
  rows: string[],
  keyMaps: AccessKeyMap[]
): Array<ListItemData> => {
  let indexOffset = 0;

  return rows.map((row, index) => {
    if (['[', '{', '}', ']'].includes(row.trim()?.at(-1) || '')) {
      indexOffset++;
      return [row, null];
    }
    return [row, keyMaps[index - indexOffset]];
  });
};
