import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import PopEdit from './PopEdit';
import PopUpFutureGames from './PopUpMyFutureGames';
import PopMyFriends from './PopMyFriends';
import firebase from '../../../config/Fire.js'
class MyProfile extends Component {
    constructor(){
        super()
        this.state = {
          popUpEdit: false,
          popUpFutureGames: false,
          PopMyFriends: false
        }
    }
    logout = () => {
      firebase.auth().signOut();
      alert('Logged out')
  }
    jumpPopUpEdit=()=>{
      this.setState({ popUpEdit: !this.state.popUpEdit}, function(){
        console.log(this.state.popUpEdit)
      })
    }
    jumpPopUpFutureGames=()=>{
      this.setState({ popUpFutureGames: !this.state.popUpFutureGames}, function(){
        console.log(this.state.popUpFutureGames)
      })
    }
    jumpPopUpMyFriends=()=>{
      this.setState({ PopMyFriends: !this.state.PopMyFriends}, function(){
        console.log(this.state.PopMyFriends)
      })
    }
    
    render(){
      return(
      <div>
      
      <div>{this.state.popUpEdit ? <PopEdit data={this.props.data} PopEditSearch={this.props.PopEditSearch}/> : null  }</div>
      <div>{this.state.popUpFutureGames ? <PopUpFutureGames  data={this.props.data}/> : null}</div>
      <div>{this.state.PopMyFriends ? <PopMyFriends  data={this.props.data}/> : null}</div>
        <div className="NavBarMyProfile">
          <ul className="sideBar"><h2 className="headerProfile">My Profile:</h2>
            <li className ="NavBarChildProfile" onClick={this.jumpPopUpEdit}><i class="fas fa-basketball-ball"></i>Edit Profile</li>
            <li className ="NavBarChildProfile" onClick={this.jumpPopUpFutureGames}><i class="fas fa-basketball-ball"></i>My Future Games</li>
            <li className ="NavBarChildProfile" onClick={this.jumpPopUpMyFriends}><i class="fas fa-basketball-ball"></i>My Friends</li>
          </ul>
        </div>
        <div>
          <button onClick = {this.logout}>Logout</button>
          </div>
       </div>
        )
    }   
  }        
  
  export default MyProfile;