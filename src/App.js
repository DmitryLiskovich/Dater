import React from 'react';
import './App.css';
import Login from './login/Login';
import Signup from './signup/Signup';
import About from './about/About';
import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
          <Route path='/sign-up' component={Signup}/>
          <Route path='/login' component={Login}/>
          <Route path='/about' component={About}/>
      </div>
    </Router>
  );
}

export default App;
