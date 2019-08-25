import React , {Component} from 'react'
// import fire from '../../config/Fire'
// import { userInfo } from 'os';
import NavbarVisitor from './NavbarVisitor';
class VisitorHome extends Component{
  constructor(props) {
      super(props)
  }
  render(){
      return(
          <div>
          <div><NavbarVisitor renderMyData = {this.props.renderMyData} AddToDB={this.props.AddToDB}/></div>
          </div>
      )
  }
}
export default VisitorHome;