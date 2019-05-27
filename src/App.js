import React from 'react';
import './App.css';
import Login from './login/Login';
import Signup from './signup/Signup'
import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Route path='/sign-up' component={Signup}></Route>
          <Route path='/login' component={Login}></Route>
        </header>
      </div>
    </Router>
  );
}

export default App;
