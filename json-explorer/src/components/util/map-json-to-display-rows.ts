import { JsonObject } from '../../types';

export const mapJsonToDisplayRows = (data: JsonObject): string[] => {
  const stringified = JSON.stringify(data, null, 4);
  const relevantRows = stringified.split('\n').slice(1, -1);
  const offset = relevantRows[0].length - relevantRows[0].trim().length;

  const sanitizedRows = relevantRows.map((row) => sanitizeRow(row, offset));

  return sanitizedRows;
};

const sanitizeRow = (row: string, offset: number): string => {
  const rowWithOffset = row.slice(offset);
  const [keyPart, ...valuePart] = rowWithOffset.split(':');
  const cleanKey = keyPart.replace(/"/g, '');

  const cleanValue = valuePart.join(':').replace(/"/g, "'");
  return `${cleanKey}${cleanValue ? ':' : ''}${cleanValue}`;
};
