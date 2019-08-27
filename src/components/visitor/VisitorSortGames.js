import React , {Component} from 'react'
import { Message } from 'semantic-ui-react'
class visitorSortGames extends Component {
        constructor(){
            super()
            // this.state={}
        }
    render(){
        const posts = this.props.posts
        console.log(posts)
        console.log("here")
        return (
            <div>
                {posts.map(p => <div id = "posts">
                    
                <Message id="post" color='teal' size='mini'>
            <div className="containerPost">
                <div className="g1"><div className="headerGame"> Sport:</div> {p.sport} </div>
                <div className="g1"><div className="headerGame"> Level:</div> {p.level} </div>
                <div className="g1"><div className="headerGame"> day:</div> {p.day} </div>
                <div className="g1"><div className="headerGame"> Age:</div> {p.age} </div>
                <div className="g1"><div className="headerGame">City:</div> {p.city} </div>
                <div className="g1"><div className="headerGame">Court:</div> {p.court_name} </div>
                <div className="g1"><div className="headerGame"> numbers:</div> {p.numOfPlayers} </div>
            </div>
        </Message>  </div>)}
        
            </div>
           
        )
    }
}
export default visitorSortGames;