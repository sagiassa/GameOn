import React, { Component } from 'react';
// import { Redirect } from 'react-router-dom'
import {  Redirect } from 'react-router'
import { Container } from 'semantic-ui-react'
import { Button, Form, Icon, Message } from 'semantic-ui-react'
class PopEdit extends Component {
    constructor() {
        super()
        this.state = {
            posts: [],
            age: "11-15",
            level: "bad",
            city: "",
            flag : false
        }
    }
    componentWillMount = async () => {
        let id = localStorage.getItem("user")
        this.setState({ uid: id })
        let posts = await this.props.renderMyData() //this function takes all the posts from db
        await this.setState({ posts })
    }
    cityNames = () => {
        let cities = this.state.posts.map(c => c.city)
        cities = [... new Set(cities)]
        console.log(cities)
        return cities
    }
    handelChange = async (event) => {
        await this.setState({ [event.target.name]: event.target.value })

    }
    editUserFilters =async () => {
        let obj = {
            age : this.state.age,
            level : this.state.level,
            u_id : this.state.uid,
        }
        console.log(obj)
        this.props.updateUser(obj)
        await this.setState({ flag : true })
        console.log(this.state.flag)
        this.renderRedirect()
    }
    PopEditSearch = () => {
        let obj = {
            age: this.state.age,
            level: this.state.level,
            city: this.state.city
        }
        this.props.PopEditSearch(obj) 
    }
    renderRedirect = () => {
        if (this.state.flag) {
          return <Redirect to='/UserGames' />
        }
      }
    render() {
        let cityNames = this.cityNames()
        return (
            <div class="pop">
            <div class="ui attached message">
            <   div class="content">
                <div class="headerP">Welcome to your Profile Edit!</div>
                <p class="headerp1">Hello, Fill out The Form below to update your Account:</p>
            </div>
                <div>
                <div className="inputP">Age:</div>
            <select className="ui fluid selection dropdown" className="popEditInput" name="age" value={this.state.age} onChange={this.handelChange}>
                        <option value="11-15"> 11 - 15 </option>
                        <option value="15-17"> 15 - 17 </option>
                        <option value="17-20"> 17 - 20 </option>
                        <option value="20-25"> 20 - 25 </option>
                        <option value="25-40"> 25 - 40 </option>
                        <option value="40+"> 40 + </option>
                    </select>
                </div>
                <div>
                  <div className="inputP">Level:</div>
            <select className="popEditInput" name="level" value={this.state.level} onChange={this.handelChange}>
                        <option> bad </option>
                        <option> not that bad </option>
                        <option> good </option>
                        <option> very good </option>
                        <option> pro </option>
                    </select>
                </div>
                <div>
                <div className="inputP">City:</div>
            <input className="popEditInput" type='text' list='CitiesNames' name='city' value={this.state.city} onChange={this.handelChange} />
                    <datalist id='CitiesNames'>
                        {cityNames.map(x => <option value={x} />)}
                    </datalist>
                </div>
                <div>
                    {/* <button onClick={this.editUserFilters}>Edit</button> */}<br></br>
                    <Button class="buti" basic color='red' onClick={this.editUserFilters}> Edit </Button> 
                </div>
                
                {this.state.flag ? this.renderRedirect() : null}
                </div>
              
            </div>
            )
        }
    }
    
    export default PopEdit;
    // <div className="pop">
    //     <div>
    //         Age:
    // <select className="popEditInput" name="age" value={this.state.age} onChange={this.handelChange}>
    //             <option value="11-15"> 11 - 15 </option>
    //             <option value="15-17"> 15 - 17 </option>
    //             <option value="17-20"> 17 - 20 </option>
    //             <option value="20-25"> 20 - 25 </option>
    //             <option value="25-40"> 25 - 40 </option>
    //             <option value="40+"> 40 + </option>
    //         </select>
    //     </div>
    //     <div>
    //         Level:
    // <select className="popEditInput" name="level" value={this.state.level} onChange={this.handelChange}>
    //             <option> bad </option>
    //             <option> not that bad </option>
    //             <option> good </option>
    //             <option> very good </option>
    //             <option> pro </option>
    //         </select>
    //     </div>
    //     <div>
    //         City:
    // <input className="popEditInput" type='text' list='CitiesNames' name='city' value={this.state.city} onChange={this.handelChange} />
    //         <datalist id='CitiesNames'>
    //             {cityNames.map(x => <option value={x} />)}
    //         </datalist>
    //     </div>
    //     <div>
    //         <button style={{margin: 200}} onClick={this.editUserFilters}>Edit</button>
    //     </div>
    //     {this.state.flag ? this.renderRedirect() : null}
    // </div>