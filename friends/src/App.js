import React from 'react'
import { Router, Route, Link, Switch } from 'react-router-dom'

// Component Import

//Styles Import
import './App.css';

function App() {
  const logout = () => {
    //1. do a request to our server to delete the token
    //2. remove our local token
    //3. redirect to login page
  }

  return (
    <Router>
      <div>
         <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link onClick={logout}>Logout</Link>
          </li>
          <li>
            <Link to="/protected">Friends</Link>
          </li>
        </ul>
      </div>
    </Router>
  );
}

export default App;
