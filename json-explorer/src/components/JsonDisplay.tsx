import React from 'react';
import { JsonObject } from '../types';

type JsonDisplayProps = {
  readonly data: JsonObject;
};

export default function JsonDisplay({ data }: JsonDisplayProps) {
  return <div>{JSON.stringify(data)}</div>;
}
