import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Login from './Login'
// import Home from '../Home'
import Signup from '../Log/Registration/Signup'
import VisitorGames from './VisitorGames.js'
import Signup from './Registration/Signup'
import MyVisitor from './components/MyVisitor'
class NavbarVisitor extends Component{
  render() {
      return (
          <Router>
              <div>
                  <div class="navbar">
                      <Link to='/Login'><div class="navbarList">Login</div></Link>
                      <Link to='/VisitorGames'><div class="navbarList">Games</div></Link>
                      <Link to='/Signup'><div class="navbarList">Signup</div></Link>
                  </div>
                  <Route path="/VisitorGames" exact render={() => <VisitorGames />} />
                  <Route path="/Login" exact render={() => <Login />} />
                  <Route path="/Signup" exact component={() => <Signup />} />
              </div>
          </Router>)}}
          
export default NavbarVisitor;