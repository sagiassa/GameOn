import React , {Component} from 'react'
import axios from 'axios'

class UserGames extends Component{
   constructor(props) {
       super(props)
       this.state = {
           posts : [],
           data : []
       }
   }
   componentWillMount = async () => {
    let posts = await  this.props.renderMyData()
    await this.setState({posts})
    this.renderMyUsers()
}
renderMyUsers = async () => {
    const data = await axios.get('http://localhost:3030/users')
    this.setState( {data : data.data[0]} )
  }
   render(){
       let id = localStorage.getItem("user")
       console.log(id)
       console.log(this.state.data)
       return(
           <div>
               
           {this.state.posts.map(p => p.city)}
           </div>
       )
   }
}
export default UserGames;