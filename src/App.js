import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import './App.css';
import axios from 'axios'
import firebase from './config/Fire.js'
import UserHome from './components/user/UserHome'
import VisitorHome from './components/visitor/VisitorHome'
// import {inject} from 'mobx-react'
import { observer} from 'mobx-react'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// injectTapEventPlugin();


@observer
class App extends Component{
  constructor(){
    super()
    this.state = {
      user: {},
      posts: []
    }
  }
  componentDidMount(){
    this.authListener()
    // this.rendeMyData()
  }
  renderMyData = async () => {
    console.log("hey")
    const data = await axios.get('http://localhost:3030/posts')
    return data.data[0]

  } 
  renderMyUsers = async () => {
    const data = await axios.get('http://localhost:3030/users')
    return data.data[0]
  }
  postNewGame=async(newGame)=>{
    console.log(newGame)
    await axios.post('http://localhost:3030/posts', newGame)
    this.rendeMyData()
  }
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
      // console.log(user)
      if(user){
        this.setState({user})
        this.props.store.handleInput(user.uid)
      }
      else {
        this.setState({user: null})
      }
    })
  }

  AddToDB = async (obj) => {
    console.log("hey")
    await axios.post('http://localhost:3030/insert', obj)
    console.log("it worked") 
  }

  getFromDB = async () => {
    let result = await axios.get('http://localhost:3030/users')
  }
  updateUser = async (obj) => {
    await axios.put('http://localhost:3030/updates', obj)
  }
  render(){
    this.getFromDB()
    console.log(this.props.store)
    return (
      <MuiThemeProvider>
      <Router>
        <div>
        <div>{this.state.user ? (<UserHome  updateUser={this.updateUser} AddToDB={this.AddToDB} renderMyData = {this.renderMyData}/> )
                                 : (<VisitorHome AddToDB={this.AddToDB} renderMyData = {this.renderMyData}/>)}</div>
        {/* <div>{this.state.user ? (<NavbarUser />) : (<NavbarVisitor />)}</div> */}
        {/* <div><Route path='/signup' exact render = {() => (this.state.user ? (<Home />) : (<Signup />))} /></div>
        <div className="App"><Route path='/user/home' exact render = {({match}) => <Registration AddUserToDB={this.AddUserToDB}/> } /> */}
      {/* </div> */}
      </div>
      </Router>
      </MuiThemeProvider>
    )
  }
}

export default App;
