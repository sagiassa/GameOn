import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import './App.css';
import axios from 'axios'
import firebase from './config/Fire.js'
import UserHome from './components/user/UserHome'
import VisitorHome from './components/visitor/VisitorHome'
import {inject} from 'mobx-react'

// import NavbarVisitor from './components/visitor/NavbarVisitor'
// import NavbarUser from './components/user/NavbarUser'
// import Registration from './components/visitor/Registration/RegistrationFilters'
// import Signup from './components/Log/Registration/Signup';
// import Home from './components/Home'
// import SuccessfulySignedUp from './components/successfulySignedUp';

@inject('store')
class App extends Component{
  constructor(){
    super()
    this.state = {
      user: {},
      games: []
    }
  }
  componentDidMount(){
    this.authListener()
    // this.rendeMyData()
  }
  // rendeMyData=async()=>{
  //   const data = await axios.get('http://localhost:8080/games')
  //   this.setState({games: data.data}, function(){
  //   // console.log(this.state.games)
  //   })
  // } 
  // postNewGame=async(newGameEvent)=>{
  //   console.log(newGameEvent)
  //   await axios.post('http://localhost:8080/newgame', newGameEvent)
  //   this.rendeMyData()
  // }
  // MyVisitorSearch=async(searchObj)=>{
  //   console.log(searchObj)
  //   await axios.put(`http://localhost:8080/vistorsearch`, searchObj)
  //   this.rendeMyData()
  // } 
  // PopEditSearch=(obj)=>{
  //   console.log(obj)
  // }
  authListener = () =>{
    firebase.auth().onAuthStateChanged((user) => {
      console.log(user)
      if(user){
        this.setState({user})
        this.props.store.handleInput(user.uid)
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

  getFromDB = async () => {
    let result = await axios.get('http://localhost:3030/users')
    console.log(result)

  }
  render(){
    this.getFromDB()
    return (
      <Router>
        <div>
        <div>{this.state.user ? (<UserHome store = {this.props.store} />) : (<VisitorHome />)}</div>
        {/* <div>{this.state.user ? (<NavbarUser />) : (<NavbarVisitor />)}</div> */}
        {/* <div><Route path='/signup' exact render = {() => (this.state.user ? (<Home />) : (<Signup />))} /></div>
        <div className="App"><Route path='/user/home' exact render = {({match}) => <Registration AddUserToDB={this.AddUserToDB}/> } /> */}
      {/* </div> */}
      </div>
      </Router>
    )
  }
}

export default App;
