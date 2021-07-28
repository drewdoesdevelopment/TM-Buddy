import React from 'react';
import Navigation from './components/Navigation';
import ExcelInput from './components/ExcelInput';
import './App.scss';

function App() {
  return (
    <div>
      <Navigation title='Dashboard' />
      <ExcelInput />
    </div>
  );
}

export default App;
