import React, {Component} from 'react';
import axios from 'axios'
import { Message } from 'semantic-ui-react'
class PopUpFutureGames extends Component {
    constructor(){
        super()
        this.state = {
          u_id : '',
          mygames : [],
          posts : []
        }
    }
    componentWillMount = () => {
      let id = localStorage.getItem("user")
      this.setState( { u_id : id } )
      this.getFromMyGames()
      this.getPosts()
    }
    getPosts = async () => {
      let posts = await this.props.renderMyData()
      console.log(posts)
      this.setState({ posts })
  }
  getFromMyGames = async () => {
    let result = await axios.get('http://localhost:3030/mygames')
    result = await result.data[0].map(u => u.u_id == this.state.u_id ? u.post_id : null)
    this.setState({ mygames : result })
  }
  leaveGame = async  (e) => {
    let obj = { u_id : this.state.u_id, post_id : e.target.value }
    await axios.delete('http://localhost:3030/delgames', { data: { obj: obj } })
    this.getFromMyGames()
  }
    render(){
      return(
        <div>
          {this.state.mygames.map(x => 
                this.state.posts.map(p=> p.post_id === x ? 
                  <div id = "containerPost">
                <Message id="post" color='teal' size='mini'>
                <div className="g1"> <span> City : {p.city}  </span>
                <span style={{margin:30}}>Date & time : {p.day} - {p.TIME}</span></div>
                <div className="g1"> <span>level of players : {p.level}</span>
                 <span style={{magin:40}}> Ages : {p.age}</span> </div> 
                <div className="g1"> <span>Court name : {p.court_name}</span>
                <span style={{magin:40}}> Max Players : {p.numOfPlayers}</span></div>
                <button value={p.post_id} onClick={this.leaveGame}>Leave</button>
                </Message>
                </div> 
                : null ))}
        </div>
        )
    }   
  }        
  
  export default PopUpFutureGames;