import React, { Component } from 'react';
import TextField from 'material-ui/TextField';

class PopMyFriends extends Component {
  constructor() {
    super()
    this.state = {
      uid : '',
      users: [],
      username: '',
      myfavorites: [],
      friendsInfo: [],
      flag: false,
      found: true
    }
  }
  componentWillMount = async () => {
    let id = localStorage.getItem("user")
    this.setState({ uid: id })
    const users = await this.props.renderMyUsers()
    await this.myFriends()
    await this.setState({ users })
    this.myFriendsData()
  }
  componentDidMount = () => {
  }
  myFriendsData = async () => {
    let data = []
    let friends = this.state.myfavorites
    for(let i of friends){
      let info = this.state.users.filter(x => x.username === i.friend_username ? ({firstname : x.first_name, lastname : x.last_name, phone: x.phone_number }) : null)
      data.push(info)
    }
    let friendsInfo =[]
    for(let i = 0 ; i<data.length ; i++){
       friendsInfo.push(data[i][0])
    }
    
    await this.setState({friendsInfo})
  }
  myFriends = async () => {
    let allFriends = await this.props.getMyFriendsFromDB()
    let myfriends = allFriends.filter(x => x.u_id === this.state.uid)
    this.setState({ myfavorites : myfriends })
  }
  addToMyFriends = async () => {
    let obj = await {
      fields: {
        u_id: this.state.uid,
        friend_username: this.state.username
      },
      entity: "myfriends"
    }
    this.props.addToDB(obj)
      }
    handleChange = async (e) => {
      await this.setState({ [e.target.name]: e.target.value })
    }
    findUser = async () => {
      const user = this.state.users.find(u => u.username === this.state.username)
      if (user) {
        await this.setState({ flag: true, found: true, username : user.username })
        this.addToMyFriends()
      }
      else {
        await this.setState({ flag: false, found: false })
      }
    }

    render(){
      console.log(this.state.friendsInfo)
      return (
        <div className="pop">
          <div>
            <TextField
              name="username"
              hintText="OmriCasspi123"
              value={this.state.username} onChange={this.handleChange}
              floatingLabelText="Friend's username"
            />
          </div>
          <button style={{ margin: 300 }} onClick={this.findUser}> Add friend </button>
          <div style={{ margin: 300 }}>{!this.state.found ? <h4>Sorry, username not found </h4> : null} </div>
          <div style={{ margin: 300 }}>{this.state.flag ? <h4>Wow username found</h4> : null} </div>
          <div> 
            {console.log(this.state.friendsInfo)}
            {this.state.friendsInfo.map(i =>{return(
               <div>
                <div>{i.first_name}</div>
                <div>{i.last_name}</div>
                <div>{i.phone_number}</div>
            </div>)}
              )}
          </div>
        </div>
      )
    }
  }

  export default PopMyFriends;