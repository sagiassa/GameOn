import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Login from './Login'
// import Home from '../Home'
import VisitorGames from './VisitorGames.js'
import Signup from './Registration/Signup'
// import MyVisitor from './components/MyVisitor'
class NavbarVisitor extends Component{
  render() {
      return (
          <Router>
              <div>
                  <div class="Vnavbar">
                      <Link to='/VisitorGames'><div class="navbarList">Games</div></Link>
                      <Link to='/Login'><div class="navbarList">Login</div></Link>
                      <Link to='/Signup'><div class="navbarList">Register</div></Link>
                  </div>
                  <Route path="/" exact render={() => <VisitorGames renderMyData = {this.props.renderMyData}/>} />
                  <Route path="/Login" exact render={() => <Login />} />
                  <Route path="/Signup" exact component={() => <Signup AddToDB={this.props.AddToDB}/>} />
              </div>
          </Router>)}}
          
export default NavbarVisitor;