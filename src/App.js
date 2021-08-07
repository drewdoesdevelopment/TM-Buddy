import React from 'react';
import './App.scss';
import Navigation from './components/Navigation';
import ExcelInput from './components/ExcelInput';
import LoginForm from './components/LoginForm';
import Performance from './components/Performance';
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      {/* <Navigation title='Home' /> */}
      <div>
        <Switch>
          <Route path='/' exact component={Home}></Route>
          <Route path='/dashboard' component={ExcelInput}></Route>
          <Route path='/performance' component={Performance}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
