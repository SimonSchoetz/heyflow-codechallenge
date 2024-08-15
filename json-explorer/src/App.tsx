import React from 'react';
import './App.css';
import JsonDisplay from './components/JsonDisplay';
import demoData from './test-data/demo-data.json';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Json Explorer</h1>
        <JsonDisplay data={demoData} />
      </header>
    </div>
  );
}

export default App;
