import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import MyProfile from './myProfile/MyProfile'
import UserGames from './UserGames'
import fire from '../../config/Fire'
import PostNewGame from './PostNewGame';
import UserFilters from './UserFilters';
import 'semantic-ui-css/semantic.min.css'
import { Menu, Segment } from 'semantic-ui-react'

class NavbarUser extends Component{
   state = { activeItem: 'Games' }
   handleItemClick = (e, { name }) => this.setState({ activeItem: name })
   logout = () => {
       fire.auth().signOut();
       localStorage.removeItem("user")
   }
   render() {
       const { activeItem } = this.state
       return (
           <Router>
               <div className="navbarUserContainer">
               <Segment inverted className="customSegment">
       <Menu inverted>
         <Menu.Item
           name='Games'
           active={activeItem === 'Games'}
           onClick={this.handleItemClick}
           href="/UserGames"
         />
         <Menu.Item
           name='My Filters'
           active={activeItem === 'MyFilters'}
           onClick={this.handleItemClick}
           href="/UserFilters"
         />
         <Menu.Item
           name='Post a new game'
           active={activeItem === 'NewGame'}
           onClick={this.handleItemClick}
           href="/PostNewGame"
         />
         <Menu.Item
           name='My Profile'
           active={activeItem === 'NewGame'}
           onClick={this.handleItemClick}
           href="/MyProfile"
         />
         <Menu.Item
           name='Log out'
           active={activeItem === 'logout'}
           onClick={this.logout}
           href="/VisitorGames"
         />
       </Menu>
     </Segment>
                <Route path="/UserGames" exact render={() => <UserGames addToDB={this.props.addToDB} renderMyData = {this.props.renderMyData}/>} />
                <Route path="/UserFilters" exact render={() => <UserFilters  renderMyData = {this.props.renderMyData} addToDB={this.props.addToDB}/>} />
                <Route path="/MyProfile" exact render={() => <MyProfile addToDB={this.props.addToDB} getMyFriendsFromDB={this.props.getMyFriendsFromDB} renderMyUsers={this.props.renderMyUsers} renderMyData={this.props.renderMyData} updateUser={this.props.updateUser}/>} />
                <Route path="/PostNewGame" exact render={() => <PostNewGame  addToDB={this.props.addToDB} />} />
               </div>
           </Router>
       );
   }
  }
export default NavbarUser;

{/* <Route path="/UserGames" exact render={() => <UserGames store = {this.props.store} renderMyData = {this.props.renderMyData}/>} /> */}
                   {/* <Route path="/UserFilters" exact render={() => <UserFilters store = {this.props.store} renderMyData = {this.props.renderMyData} addToDB={this.props.addToDB}/>} />
                   <Route path="/MyProfile" exact render={() => <MyProfile renderMyData={this.props.renderMyData} updateUser={this.props.updateUser}/>} />
                   <Route path="/PostNewGame" exact render={() => <PostNewGame store = {this.props.store} addToDB={this.props.addToDB} />} /> */}
// class NavbarUser extends Component{
//     logout = () => {
//         fire.auth().signOut();
//         localStorage.removeItem("user")

//     }
//     render() {
//         return (
//             <Router>
//                 <div>
//                     <div class="navbar">
//                         <Link to='/UserGames' ><div class="navbarList">Games</div></Link>
//                         <Link to='/UserFilters' ><div class="navbarList">My Filters</div></Link>                        
//                         <Link to='/PostNewGame' ><div class="navbarList">Post a new game</div></Link>
//                         <Link to='/MyProfile'><div class="navbarList">My Profile</div></Link>
//                         <Link to='/VisitorGames' onClick={this.logout}><div class="navbarList">Log out</div></Link>
//                     </div>
//                 </div>
//             </Router>
//         );
//     }
//   }
// export default NavbarUser;
// // import React, { Component } from 'react';
// // import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
// // import Login from './Login'
// // // import Home from '../Home'
// // import VisitorGames from './VisitorGames.js'
// // import Signup from './Registration/Signup'
// // // import MyVisitor from './components/MyVisitor'
// // import 'semantic-ui-css/semantic.min.css'
// // import { Menu, Segment } from 'semantic-ui-react'
// // ​
// // ​
// // class NavbarVisitor extends Component{
// //     state = { activeItem: 'Games' }
// // ​
// //     handleItemClick = (e, { name }) => this.setState({ activeItem: name })
// // ​
// //   render() {
// //     const { activeItem } = this.state
// //       return (
// //           <Router>
// //               <div>
// //               <Segment inverted className="customSegment">
// //                 <Menu inverted>
// //                  <Menu.Item
// //                  name='Games'
// //                  active={activeItem === 'Games'}
// //                  onClick={this.handleItemClick}
// //                  href="/VisitorGames"
// //                  />
// //                   <Menu.Item
// //             name='Login'
// //             active={activeItem === 'Login'}
// //             onClick={this.handleItemClick}
// //             href="/Login"
// //           />
// //           <Menu.Item
// //             name='Register'
// //             active={activeItem === 'Register'}
// //             onClick={this.handleItemClick}
// //             href="/Signup"
// //           />
// //           </Menu>
        
// //         </Segment>
// //                   {/* <div class="Vnavbar">
// //                       <Link to='/VisitorGames'><div class="navbarList">Games</div></Link>
// //                       <Link to='/Login'><div class="navbarList">Login</div></Link>
// //                       <Link to='/Signup'><div class="navbarList">Register</div></Link>
// //                   </div> */}
// //                   <Route path="/VisitorGames" exact render={() => <VisitorGames renderMyData = {this.props.renderMyData}/>} />
// //                   <Route path="/Login" exact render={() => <Login />} />
// //                   <Route path="/Signup" exact component={() => <Signup AddToDB={this.props.AddToDB}/>} />
// //               </div>
// //           </Router>)}}
          
// // export default NavbarVisitor;