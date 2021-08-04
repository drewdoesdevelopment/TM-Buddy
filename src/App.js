import React from 'react';
import './App.scss';
import Navigation from './components/Navigation';
import ExcelInput from './components/ExcelInput';
import LoginForm from './components/LoginForm';
import Performance from './components/Performance';

function App() {
  return (
    <div>
      <Navigation title='Dashboard' />
      {/* <LoginForm /> */}
      {/* <ExcelInput /> */}
      <Performance />
    </div>
  );
}

export default App;
