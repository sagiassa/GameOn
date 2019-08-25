import React , {Component} from 'react'

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
                <div id="eachpost">
                <span> {p.sport} </span>
                <span> {p.level} </span> 
                <span> {p.day} </span> 
                <span> {p.city} </span>
                <span> {p.cort_name} </span>
                <span> {p.address} </span> 
                <span> {p.numOfPlayers} </span> </div>
            </div>)}
            </div>
            // <h1> the games will b here</h1>
        )
    }
}
export default visitorSortGames;