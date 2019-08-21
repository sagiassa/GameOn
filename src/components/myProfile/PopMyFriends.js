import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
​
​
class PopMyFriends extends Component {
    constructor(){
        super()
        this.state = {
  
        }
    }
 
    render(){
    
      return(
      <div className="pop">
        <div>Field: <input type="text" placeholder="what's you field, dude ?"></input></div>
        <div className="PopMyFriends"></div>
       </div>
        )
    }   
  }        
  
  export default PopMyFriends;