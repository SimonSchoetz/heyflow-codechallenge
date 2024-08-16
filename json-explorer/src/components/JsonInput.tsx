import React, { Dispatch, SetStateAction } from 'react';

type JsonInputProps = {
  setKey: Dispatch<SetStateAction<string>>;
  currentKey: string;
};

export default function JsonInput({ setKey, currentKey }: JsonInputProps) {
  return (
    <label>
      <span>Property</span>
      <input
        style={{
          border: '1px solid gainsboro',
          fontSize: '1rem',
        }}
        placeholder='Property'
        value={currentKey}
        onChange={(e) => setKey(e.target.value)}
      />
    </label>
  );
}
