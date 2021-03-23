import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

// Component Import
import Login from './components/Login'
import Friends from './components/Friends'

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
        <Link to="/login">Login</Link>
        <Link onClick={logout}>Logout</Link>
        <Link to="/Friends">Friends</Link>
      </div>
      <Switch>
        <Route exact path='/friends' component={Friends} />
        <Route path='/login' component={Login} />
        <Route component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
