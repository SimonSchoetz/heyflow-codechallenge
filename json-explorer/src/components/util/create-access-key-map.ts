import { JsonArray, JsonObject, JsonValue } from '../../types';

export type AccessKeyMap = { key: string; value: any; accessKey: string };

const isDataObject = (obj: any): boolean => {
  return typeof obj === 'object' && obj !== null && !Array.isArray(obj);
};

export const createAccessKeyMap = (
  obj: JsonObject | JsonValue,
  parentKey: string = ''
): AccessKeyMap[] => {
  let accessKeyMap: AccessKeyMap[] = [];

  const handleNestedObject = (dataObj: JsonObject): void => {
    for (const key in dataObj) {
      const value = dataObj[key];
      const accessKey = `${parentKey}.${key}`;

      if (isDataObject(value) || Array.isArray(value)) {
        const nestedMaps = createAccessKeyMap(value, accessKey);

        accessKeyMap = accessKeyMap.concat(nestedMaps);
      } else {
        accessKeyMap.push({ key, value, accessKey });
      }
    }
  };

  const handleNestedArray = (dataObj: JsonArray): void => {
    dataObj.forEach((value, index) => {
      const accessKey = `${parentKey}[${index}]`;

      if (isDataObject(value) || Array.isArray(value)) {
        const nestedMaps = createAccessKeyMap(value, accessKey);

        accessKeyMap = accessKeyMap.concat(nestedMaps);
      } else {
        accessKeyMap.push({ key: parentKey, value, accessKey });
      }
    });
  };

  if (!parentKey) {
    const dataObject = obj as JsonObject;
    for (const key in dataObject) {
      const value = dataObject[key];

      if (isDataObject(value) || Array.isArray(value)) {
        const nestedMaps = createAccessKeyMap(value, key);

        accessKeyMap = accessKeyMap.concat(nestedMaps);
      } else {
        accessKeyMap.push({ key, value, accessKey: key });
      }
    }
  } else {
    if (isDataObject(obj)) {
      handleNestedObject(obj as JsonObject);
    }

    if (Array.isArray(obj)) {
      handleNestedArray(obj as JsonArray);
    }
  }

  return accessKeyMap;
};
