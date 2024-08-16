import React, { Dispatch, SetStateAction } from 'react';
import { JsonObject } from '../types';
import {
  createAccessKeyMap,
  mapJsonToDisplayRows,
  mapRowsWithKeyMaps,
  ListItemData,
} from './util';

type JsonDisplayProps = {
  data: JsonObject;
  setKey: Dispatch<SetStateAction<string>>;
};

export default function JsonDisplay({ data, setKey }: JsonDisplayProps) {
  const displayRows = mapJsonToDisplayRows(data);

  const keyMaps = createAccessKeyMap(data);

  const mappedRows = mapRowsWithKeyMaps(displayRows, keyMaps);

  return (
    <div>
      <pre>
        <ul>
          {mappedRows.map((row, index) => (
            <ListItem data={row} setKey={setKey} key={index} />
          ))}
        </ul>
      </pre>
    </div>
  );
}

type ListItemProps = {
  data: ListItemData;
  setKey: Dispatch<SetStateAction<string>>;
};

const ListItem = ({ data, setKey }: ListItemProps) => {
  const [rowString, keyMap] = data;

  if (!keyMap) {
    return <li>{rowString}</li>;
  }
  const { key, accessKey } = keyMap;

  const [offset, valuePart] = rowString.split(key);

  return (
    <li>
      {offset}
      <button type='button' onClick={() => setKey(accessKey)}>
        {keyMap.key}
      </button>
      {valuePart}
    </li>
  );
};
