import React , {Component} from 'react'
import fire from '../../config/Fire'
import { userInfo } from 'os';
import NavbarUser from './NavbarUser';
import { Redirect } from 'react-router-dom'
class UserHome extends Component{
  constructor(props) {
      super(props)
  }
  componentDidMount(){
      return <Redirect to = '/UserGames' />
  }
  render(){
      return(
          <div>
          <div><NavbarUser store = {this.props.store}/></div>
          </div>
      )
  }
}
export default UserHome;