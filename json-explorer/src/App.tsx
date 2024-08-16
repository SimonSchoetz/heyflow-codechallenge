import React, { useEffect, useState } from 'react';
import './App.css';
import JsonDisplay from './components/JsonDisplay';
import demoData from './test-data/demo-data.json';
import JsonInput from './components/JsonInput';
import { JsonObject } from './types';
import { getObjectValueByKeyChain } from './util';

function App() {
  const [accessKey, setAccessKey] = useState('');

  const data = demoData as JsonObject;

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Json Explorer</h1>
      </header>

      <div>
        <JsonInput currentKey={accessKey} setKey={setAccessKey} />
      </div>

      <p
        style={{
          fontFamily: 'monospace',
          color: 'grey',
        }}
      >
        {getObjectValueByKeyChain(data, accessKey)}
      </p>

      <div
        style={{
          margin: '2rem 0',
        }}
      >
        <p>Response</p>
        <div
          style={{
            border: '1px solid gainsboro',
            borderRadius: '1rem',
          }}
        >
          <JsonDisplay setKey={setAccessKey} data={demoData} />
        </div>
      </div>
    </div>
  );
}

export default App;
