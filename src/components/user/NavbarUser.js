import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import MyProfile from './myProfile/MyProfile'
import UserGames from './UserGames'
import fire from '../../config/Fire'
import PostNewGame from './PostNewGame';

class NavbarUser extends Component{
    logout = () => {
        fire.auth().signOut();
        localStorage.removeItem("user")

    }
    render() {
        return (
            <Router>
                <div>
                    <div class="navbar">
                        <Link to='/UserGames' ><div class="navbarList">Games</div></Link>
                        <Link to='/PostNewGame' ><div class="navbarList">Post a new game</div></Link>
                        <Link to='/MyProfile'><div class="navbarList">My Profile</div></Link>
                        <Link to='/VisitorGames' onClick={this.logout}><div class="navbarList">Log out</div></Link>
                    </div>
                    <Route path="/UserGames" exact render={() => <UserGames store = {this.props.store} renderMyData = {this.props.renderMyData}/>} />
                    <Route path="/MyProfile" exact render={() => <MyProfile />} />
                    <Route path="/PostNewGame" exact render={() => <PostNewGame store = {this.props.store} addToDB={this.props.addToDB} />} />
                </div>
            </Router>
        );
    }
  }
export default NavbarUser;