import React from 'react';
import { JsonObject } from '../types';

type JsonDisplayProps = {
  readonly data: JsonObject;
};

export default function JsonDisplay({ data }: JsonDisplayProps) {
  const stringified = JSON.stringify(data, null, 4);
  const rows = stringified.split('\n');

  return (
    <div>
      <pre>
        <ul>
          {rows.map((row, index) => (
            <li key={`row-num-${index}`} style={{ textAlign: 'left' }}>
              {row}
            </li>
          ))}
        </ul>
      </pre>
    </div>
  );
}
