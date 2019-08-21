import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import './App.css';
import firebase from './config/Fire.js'
import NavbarVisitor from './components/Navbar/NavbarVisitor'
import NavbarUser from './components/Navbar/NavbarUser'
import Registration from './components/Log/Registration/RegistrationFilters'
import axios from 'axios'
import Signup from './components/Log/Registration/Signup';
import Home from './components/Home'
import SuccessfulySignedUp from './components/successfulySignedUp';


class App extends Component{
  constructor(){
    super()
    this.state = {
      user: {}
    }
  }
  componentDidMount(){
    this.authListener()
  }
  authListener = () =>{
    firebase.auth().onAuthStateChanged((user) => {
      console.log(user)
      if(user){
        this.setState({user})
      }
      else {
        this.setState({user: null})
      }
    })
  }
  AddUserToDB = async (obj) => {
    await axios.post('http://localhost:3030/insert', obj)
    console.log("it worked") 
  } 
  render(){

    return (
      <Router>
        <div>
        
        <div>{this.state.user ? (<NavbarUser />) : (<NavbarVisitor />)}</div>
        <div><Route path='/signup' exact render = {() => (this.state.user ? (<Home />) : (<Signup />))} /></div>
        <div className="App"><Route path='/user/home' exact render = {({match}) => <Registration AddUserToDB={this.AddUserToDB}/> } />
      </div>
      </div>
      </Router>
    )
  }
}

export default App;
