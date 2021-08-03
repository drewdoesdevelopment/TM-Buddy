import React from 'react';
import Navigation from './components/Navigation';
import ExcelInput from './components/ExcelInput';
import LoginForm from './components/LoginForm';

import './App.scss';

function App() {
  return (
    <div>
      <Navigation title='Dashboard' />
      <LoginForm />
      <ExcelInput />
    </div>
  );
}

export default App;
