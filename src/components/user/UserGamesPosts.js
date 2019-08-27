import React , {Component} from 'react'
import { Message } from 'semantic-ui-react'
class UserGamesPosts extends Component{
    constructor(props) {
        super(props)
        this.state = {
            posts : [],
            filters : [],
            uid : '',
            flag: false
        }
    }
    componentWillMount =() => {
        let id = localStorage.getItem("user")
        this.setState( { uid : id } )
    }
    joinGame = async (e) => {
        this.setState({flag : true})
        let obj = await {
            fields : {
                u_id : this.state.uid,
                post_id : e.target.value
            },
            entity : "mygames"
        }
        this.props.addToDB(obj)
    }

    render(){
        // console.log(this.props.post)
        let p = this.props.post
        return(
            <div id = "containerPost">
                <Message id="post" color='teal' size='mini'>

                <div className="g1"> <span> City : {p.city}  </span><span style={{margin:30}}>Date & time : {p.day} - {p.TIME}</span></div>
                <div className="g1"> <span>level of players : {p.level}</span> <span style={{magin:40}}> Ages : {p.age}</span> </div> 
                <div className="g1"> <span>Court name : {p.court_name}</span><span style={{magin:40}}> Max Players : {p.numOfPlayers}</span> </div>
                <span><button value={p.post_id} onClick={this.joinGame}>Join</button></span>
                {this.state.flag? <h3>you joined successfully </h3> : null}
            </Message>
            </div>
            
        )
    }
}
export default UserGamesPosts;