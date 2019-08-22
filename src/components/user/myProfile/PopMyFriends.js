import React, {Component} from 'react';
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