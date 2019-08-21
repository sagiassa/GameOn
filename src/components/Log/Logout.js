import React , {Component} from 'react'
import fire from '../../config/Fire'
class Logout extends Component{
   constructor() {
       super()
   }
   logout = () => {
       fire.auth().signOut();
       alert('Logged out')
   }
   render(){
       return(
           <div>
           <button onClick = {this.logout}>Logout</button>
           </div>
       )
   }
}
export default Logout