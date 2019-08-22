import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import MyProfile from './myProfile/MyProfile'
import UserGames from './UserGames'
import PostNewGame from './PostNewGame';



// import MyProfile from './MyProfile'
// import Logout from './Logout'
// import Home from '../Home'
class NavbarUser extends Component{
    render() {
        return (
            <Router>
                <div>
                    <div class="navbar">
                        <Link to='/UserGames' ><div class="navbarList">Games</div></Link>
                        <Link to='/PostNewGame' ><div class="navbarList">Post a new game</div></Link>
                        <Link to='/MyProfile'><div class="navbarList">My Profile</div></Link>
                    </div>
                    <Route path="/UserGames" exact render={() => <UserGames store = {this.props.store} />} />
                    <Route path="/MyProfile" exact render={() => <MyProfile />} />
                    <Route path="/PostNewGame" exact render={() => <PostNewGame />} />
                </div>
            </Router>
        );
    }
  }
export default NavbarUser;