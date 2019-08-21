import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Logout from '../Log/Logout'
import Home from '../Home'
// import ''
class NavbarUser extends Component{
   render() {
       return (
           <Router>
               <div>
                   <div class="navbar">
                       <Link to='/Logout'><div class="navbarList">Logout</div></Link>
                       <Link to='/Home'><div class="navbarList">Home</div></Link>
                   </div>
                   <Route path="/Home" exact render={() => <Home />} />
                   <Route path="/Logout" exact render={() => <Logout />} />
               </div>
           </Router>
       );
   }
}
export default NavbarUser;