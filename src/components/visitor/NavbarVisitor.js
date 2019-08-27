import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Login from './Login'
import VisitorGames from './VisitorGames.js'
import Signup from './Registration/Signup'
import 'semantic-ui-css/semantic.min.css'
import { Menu, Segment } from 'semantic-ui-react'
class NavbarVisitor extends Component {
    state = { activeItem: 'Games' }
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    render() {
        const { activeItem } = this.state
        return (
            <Router>
                <div>
                    <Segment inverted className="customSegment">
                        <Menu inverted>
                            <Menu.Item
                                name='Games'
                                active={activeItem === 'Games'}
                                onClick={this.handleItemClick}
                                href="/VisitorGames"
                            />
                            <Menu.Item
                                name='Login'
                                active={activeItem === 'Login'}
                                onClick={this.handleItemClick}
                                href="/Login"
                            />
                            <Menu.Item
                                name='Register'
                                active={activeItem === 'Register'}
                                onClick={this.handleItemClick}
                                href="/Signup"
                            />
                        </Menu>
                    </Segment>
                    <Route path="/VisitorGames" exact render={() => <VisitorGames renderMyData={this.props.renderMyData} />} />
                    <Route path="/Login" exact render={() => <Login />} />
                    <Route path="/Signup" exact component={() => <Signup AddToDB={this.props.AddToDB} />} />
                </div>
            </Router>)
    }
}
export default NavbarVisitor;



// class NavbarVisitor extends Component{
//   render() {
//       return (
//           <Router>
//               <div>
//                   <div class="Vnavbar">
//                       <Link to='/VisitorGames'><div class="navbarList">Games</div></Link>
//                       <Link to='/Login'><div class="navbarList">Login</div></Link>
//                       <Link to='/Signup'><div class="navbarList">Register</div></Link>
//                   </div>
//                   <Route path="/VisitorGames" exact render={() => <VisitorGames renderMyData = {this.props.renderMyData}/>} />
//                   <Route path="/Login" exact render={() => <Login />} />
//                   <Route path="/Signup" exact component={() => <Signup AddToDB={this.props.AddToDB}/>} />
//               </div>
//           </Router>)}}

// export default NavbarVisitor;