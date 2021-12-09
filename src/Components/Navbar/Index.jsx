import React from 'react'
import  {Route, Switch,Link} from "react-router-dom";
import Home from './Home';
import Login from './login';
import Private from './privateroute'
import Dashboard from './dasgbord'
function NavBar() {
  return (
    <>
      <>
        <div>
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/dashboard">Dashboard</Link>
        </div>
        <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/login">
          <Login/>
        </Route>
        <Private exact={true} path="/dashboard">
          <Dashboard />
        </Private>
      </Switch>
      </>
    </>
  )
}

export default NavBar
