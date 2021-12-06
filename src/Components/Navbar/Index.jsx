import React from 'react'
import  { BrowserRouter as Router, Route, Switch,Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Login from "./Login";
import Services from "./Services";
function NavBar() {
  return (
    <>
      <>
        <div>
          <Link to="/">Home</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/about-us">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/login">Login</Link>
        </div>
        <Switch>
        <Route exact path="/">
				  <Home/>
        </Route>
        <Route path="/about-us">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/services">
          <Services />
        </Route>
        </Switch>
      </>
    </>
  )
}

export default NavBar
