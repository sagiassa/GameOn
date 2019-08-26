import React , {Component} from 'react'
// import fire from '../../config/Fire'
// import { userInfo } from 'os';
import NavbarUser from './NavbarUser';
import { Redirect } from 'react-router-dom'
class UserHome extends Component{
  constructor(props) {
      super(props)
  }
  componentDidMount(){
      return <Redirect to = '/UserGames' renderMyData = {this.props.renderMyData}/>
  }
  render(){
      return(
          <div>
          <div><NavbarUser updateUser={this.props.updateUser} addToDB={this.props.AddToDB} renderMyData = {this.props.renderMyData}/></div>
          </div>
      )
  }
}
export default UserHome;