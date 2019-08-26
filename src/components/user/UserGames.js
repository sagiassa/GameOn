import React , {Component} from 'react'
import axios from 'axios'

class UserGames extends Component{
   constructor(props) {
       super(props)
       this.state = {
           posts : [],
           filters : [],
           uid : ''
       }
   }
   componentWillMount = async () => {
    let id = localStorage.getItem("user")
    this.setState( { uid : id } )
    let posts = await this.props.renderMyData() //this function takes all the posts from db
    await this.setState({posts})
    this.renderMyUserFilters()
}
renderMyUserFilters = async () => {
    const data = await axios.get('http://localhost:3030/user_filters')
    let filters = data.data[0].filter(u => u.u_id === this.state.uid)
    await this.setState( {filters : filters[0]} )
    console.log(this.state.filters)

  }
   render(){
       let age = this.state.filters.age
       let sport = this.state.filters.sport
       let level = this.state.filters.level
       
       return(
           <div>
            {this.state.posts.map(p => p.age === age && p.sport === sport && p.level === level ?
            <div id = "posts">
                <div id="eachpost">
                <span> {p.sport} </span>
                <span> {p.level} </span> 
                <span> {p.day} </span> 
                <span> {p.age} </span> 
                <span> {p.TIME} </span> 
                <span> {p.city} </span>
                <span> {p.court_name} </span>
                <span> {p.numOfPlayers} </span> </div>
            </div> : null )}
           </div>
       )
   }
}
export default UserGames;