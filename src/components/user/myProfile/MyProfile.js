import React, {Component} from 'react';
// import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import PopEdit from './PopEdit';
import PopUpFutureGames from './PopUpMyFutureGames';
import PopMyFriends from './PopMyFriends';
import { Menu } from 'semantic-ui-react'

class MyProfile extends Component {
  state = { activeItem: 'home' }
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    constructor(){
        super()
        this.state = {
          popUpEdit: false,
          popUpFutureGames: false,
          PopMyFriends: false
        }
    }

    jumpPopUpEdit=()=>{
      this.setState({ popUpEdit: !this.state.popUpEdit, popUpFutureGames: false, PopMyFriends:false }, function(){
        console.log(this.state.popUpEdit)
      })
    }
    jumpPopUpFutureGames=()=>{
      this.setState({ popUpFutureGames: !this.state.popUpFutureGames, popUpEdit: false, PopMyFriends: false}, function(){
        console.log(this.state.popUpFutureGames)
      })
    }
    jumpPopUpMyFriends=()=>{
      this.setState({ PopMyFriends: !this.state.PopMyFriends, popUpEdit:false, popUpFutureGames: false}, function(){
        console.log(this.state.PopMyFriends)
      })
    }
    
    render(){
      const { activeItem } = this.state
      return(
      <div> 
              <div className="popContainer">
      <div>{this.state.popUpEdit ? <PopEdit updateUser={this.props.updateUser} renderMyData={this.props.renderMyData} PopEditSearch={this.props.PopEditSearch}/> : null  }</div>
      <div>{this.state.popUpFutureGames ? <PopUpFutureGames renderMyData={this.props.renderMyData}/> : null}</div>
      <div>{this.state.PopMyFriends ? <PopMyFriends addToDB={this.props.addToDB} getMyFriendsFromDB={this.props.getMyFriendsFromDB} renderMyUsers={this.props.renderMyUsers} /> : null}</div>
      </div>
        <div class="verticalNavbarContainer">
        <Menu inverted pointing vertical fluid secondary>
        <Menu.Item
          name='Edit Profile'
          active={activeItem === 'EditProfile'}
          onClick={this.handleItemClick}
          onClick={this.jumpPopUpEdit}
          />
        <Menu.Item
          name='My Future Games'
          active={activeItem === 'MyFutureGames'}
          onClick={this.handleItemClick}
          onClick={this.jumpPopUpFutureGames}
          />
        <Menu.Item
          name='My Friends'
          active={activeItem === 'MyFriends'}
          onClick={this.handleItemClick}
          onClick={this.jumpPopUpMyFriends}
          />
      </Menu>
      </div>
      {/* <div className="popContainer">
      <div>{this.state.popUpEdit ? <PopEdit updateUser={this.props.updateUser} renderMyData={this.props.renderMyData} PopEditSearch={this.props.PopEditSearch}/> : null  }</div>
      <div>{this.state.popUpFutureGames ? <PopUpFutureGames renderMyData={this.props.renderMyData}/> : null}</div>
      <div>{this.state.PopMyFriends ? <PopMyFriends addToDB={this.props.addToDB} getMyFriendsFromDB={this.props.getMyFriendsFromDB} renderMyUsers={this.props.renderMyUsers} /> : null}</div>
      </div> */}
    </div>
        )
      }   
    }        
  
  export default MyProfile;
  
  {/* <div>{this.state.popUpEdit ? <PopEdit updateUser={this.props.updateUser} renderMyData={this.props.renderMyData} PopEditSearch={this.props.PopEditSearch}/> : null  }</div>
  <div>{this.state.popUpFutureGames ? <PopUpFutureGames  data={this.props.data}/> : null}</div>
  <div>{this.state.PopMyFriends ? <PopMyFriends  data={this.props.data}/> : null}</div> */}
  // return(
  // <div>
  
  //   <div className="NavBarMyProfile">
  //     <ul className="sideBar"><h2 className="headerProfile">My Profile:</h2>
  //       <li className ="NavBarChildProfile" onClick={this.jumpPopUpEdit}><i class="fas fa-basketball-ball"></i>Edit Profile</li>
  //       <li className ="NavBarChildProfile" onClick={this.jumpPopUpFutureGames}><i class="fas fa-basketball-ball"></i>My Future Games</li>
  //       <li className ="NavBarChildProfile" onClick={this.jumpPopUpMyFriends}><i class="fas fa-basketball-ball"></i>My Friends</li>
        
  //     </ul>
  //   </div>
  //   <div>
  //     </div>
  //     </div>