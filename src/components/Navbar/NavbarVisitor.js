import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Login from '../Log/Login'
import Home from '../Home'
// import '../componentsCss/Navbar.css'
import Signup from '../Log/Registration/Signup'
class NavbarVisitor extends Component{
   render() {
       return (
           <Router>
               <div>
                   <div class="navbar">
                       <Link to='/Login'><div class="navbarList">Login</div></Link>
                       <Link to='/Home'><div class="navbarList">Home</div></Link>
                   </div>
                   <Route path="/Home" exact render={() => <Home />} />
                   <Route path="/Login" exact render={() => <Login />} />
                   <Route path="/Signup" exact component={Signup} />
               </div>
           </Router>)}}
export default NavbarVisitor;