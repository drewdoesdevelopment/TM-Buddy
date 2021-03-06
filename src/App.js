import React from 'react';
import './App.scss';
import ExcelInput from './components/ExcelInput/ExcelInput';
import Performance from './components/Performance/Performance';
import Home from './components/Home/Home';
import Demo from './components/Demo/Demo';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path='/' exact component={Home}></Route>
          <Route path='/dashboard' component={ExcelInput}></Route>
          <Route path='/performance' component={Performance}></Route>
          <Route path='/demo' component={Demo}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
