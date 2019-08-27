import React, { Component } from 'react';
import TimePicker from 'material-ui/TimePicker';
import TextField from 'material-ui/TextField';
import axios from 'axios'
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
const moment = require('moment');
class NewGame extends Component {
    constructor() {
        super()
        this.state = {
            data: [],
            sport: '',
            age: '',
            level: '',
            gender: '',
            city: "",
            court: "",
            time: "Time",
            day: "",
            numOfPlayers: ""
        }
    }
    componentWillMount() {
        this.renderMyUsers()
    }
    renderMyUsers = async () => {
        const data = await axios.get('http://localhost:3030/users')
        let id = localStorage.getItem("user")
        let gender = data.data[0].map(x => x.uid === id ? x.gender : null)[0]
        let filter = await axios.get('http://localhost:3030/user_filters')
        let sport = filter.data[0].map(x => x.sport)
        let age = filter.data[0].map(x => x.age)
        let level = filter.data[0].map(x => x.level)
        await this.setState({ data: data.data[0], gender: gender[0], sport: sport[0], age: age[0], level: level[0] })
    }
    sevenDaysDates = () => {
        let days = []
        let i = 0
        while (i < 7) {
            days.push(moment().add(i, "days").format("DD/MM/YYYY"))
            i++
        }
        return days;
    }
    // selectCity = () => {
    //     let obj = {}
    //     for (let d of data) {
    //         if (!obj[d.city]) {
    //             obj[d.city] = d.city
    //         }
    //     }

    //     let cityNames = []
    //     for (let key of Object.keys(obj)) {
    //         cityNames.push(key)
    //     }
    //     return cityNames
    // }

    // selectField = () => {
    //     let obj = {}
    //     for (let d of data) {
    //         if (!obj[d.fieldname]) {
    //             obj[d.fieldname] = d.fieldname
    //         }
    //     }
    //     let fieldsNames = []
    //     for (let key of Object.keys(obj)) {
    //         fieldsNames.push(key)
    //     }
    //     return fieldsNames
    // }

    handleChangeNewGame = async (e, date) => {
        // console.log(e.target.name)
        // console.log(time)
        if (date) {
            let time = moment(date).format('HH:mm')
            await this.setState({ time })
        }
        else if (e.target.name === 'sumPlayers') {
            if (e.target.value > 30) {
                return alert("A Game Can Only Have Max Of 30 Player! ")
            }
        }
        else {
            await this.setState({ [e.target.name]: e.target.value })
            console.log(this.state)
        }
    }
    postNewGame = async () => {
        let post = await {
            fields: {
                sport : this.state.sport,
                gender: this.state.gender,
                age: this.state.age,
                level: this.state.level,
                city: this.state.city,
                court_name: this.state.court,
                time: this.state.time,
                day: this.state.day,
                numOfPlayers: this.state.numOfPlayers
            },
            entity: 'posts'
        }
        this.props.addToDB(post)
    }
    render() {
        // console.log(this.state)

        console.log(this.state)

        // let cityNames = this.selectCity()
        // let fieldsNames = this.selectField()
        const players = [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
        return (
            <div className="postYourGame">
                <h1>Post Your Game</h1>
                <div>
                    <TextField
                        style = {{width: 85}}
                        name="gender"
                        value={`gender : ${this.state.gender}`} />
                    <TextField
                        style = {{width: 85 }}
                        name="age"
                        value={`age :${this.state.age}`} />
                    <TextField
                        style = {{width: 200}}
                        name="level"
                        value={`level :${this.state.level}`} />
                    <TextField
                        style = {{width: 150}}
                        name="sport"
                        value={`sport :${this.state.sport}`} />
                </div>
                <div>City:</div>
                <input type='text' className="in" list='CitiesNames' name='city' value={this.state.city} onChange={this.handleChangeNewGame} />
                <div><datalist id='CitiesNames'>
                    {/* {cityNames.map(x => <option value={x} />)} */}
                </datalist></div>

                <div>Court:</div>
                <input type='text' className="in" list='courtNames' name='court' value={this.state.field} onChange={this.handleChangeNewGame} />
                <div><datalist id='courtNames'>
                    {/* {fieldsNames.map(x => <option value={x} />)} */}
                </datalist></div>

                <div>Day:</div>
                <div><input id="calender" type="text" list="dates" name="day" onChange={this.handleChangeNewGame} />
                    <datalist id="dates">
                        {this.sevenDaysDates().map(m => <option value={m} key={m} />)}
                    </datalist></div>


                <div>
                    <TimePicker
                        hintText={this.state.time}
                        name="time"
                        value={this.state.time}
                        onChange={this.handleChangeNewGame}
                    />
                    {/* <input type="time" id="appt" name="time" min="09:00" max="22:00"
                 onChange={this.handleChangeNewGame} /> */}
                </div>

                <div>Number Of Players:</div>
                <div><input list="players" name='numOfPlayers' value={this.state.numOfPlayers} min='4' max='30' onChange={this.handleChangeNewGame} />
                    <datalist id="players">
                        {players.map(n => <option>{n}</option>)}
                    </datalist></div>


                <button onClick={this.postNewGame}> Create New Game! </button>

            </div>
        )
    }
}

export default NewGame;