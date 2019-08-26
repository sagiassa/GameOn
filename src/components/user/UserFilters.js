import React, { Component } from 'react'
// const Sequelize = require('sequelize')
// const sequelize = new Sequelize('mysql://root:@localhost:/sql_project')

class userFilters extends Component {
        constructor() {
            super()
            this.state = {
                sport: 'basketball',
                level: 'bad',
                age : '11-15',
                uid : '',
                flag: false,
            }
        }
        componentWillMount = () => {
            let id = localStorage.getItem("user")
            this.setState( { uid : id } )
        }
        changeFlag = () => {
            this.setState({ flag: true })
        }
        
        Selections = async (e) => {
            await this.setState({ [e.target.name]: e.target.value })
            console.log(this.state)
        }
        AddToUserFilters = async () => {
            let obj = {
                fields: {
                    u_id : this.state.uid,
                    sport: this.state.sport,
                    age: this.state.age,
                    level : this.state.level
                },
                entity: "user_filters"
            }
           this.props.addToDB(obj)
        }
        render() {
            
            return (
                <div id="userFilters">
                    <div>
                        <select name="age" value={this.state.age} onChange={this.Selections}>
                            <option value="11-15"> 11 - 15 </option>
                            <option value="15-17"> 15 - 17 </option>
                            <option value="17-20"> 17 - 20 </option>
                            <option value="20-25"> 20 - 25 </option>
                            <option value="25-40"> 25 - 40 </option>
                            <option value="40+"> 40 + </option>
                        </select>
                    </div>
                    <div>
                        <select name="sport" value={this.state.sport} onChange={this.Selections}>
                            <option>basketball</option>
                            <option>soccer</option>
                            <option>vollyball</option>
                        </select>
                    </div>
                    <div>
                        <select name="level" value={this.state.level} onChange={this.Selections}>
                            <option> bad </option>
                            <option> not that bad </option>
                            <option> good </option>
                            <option> very good </option>
                            <option> pro </option>
                        </select>
                    </div>
                    <div>
                        <button onClick={this.AddToUserFilters} >Let's go and Play!</button>
                    </div>
                </div>
            )
        }
    }
    export default userFilters;