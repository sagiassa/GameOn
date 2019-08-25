import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
const moment = require('moment');
class NewGame extends Component {
    constructor() {
        super()
        this.state = {
                city: "",
                court: "",
                time: "",
                day: "",
                numOfPlayers: ""
            }     
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

    handleChangeNewGame = async (event) => {
        console.log(this.state)
        if (event.target.name === 'sumPlayers' && event.target.value > 30 ) {
                return alert("A Game Can Only Have Max Of 30 Player! ")
            }
        await this.setState({ [event.target.name]: event.target.value }  ) 
            console.log(this.state)
    }
    postNewGame =async () => {
        let post = await {
            fields : {
                // sport : this.state.sport,
                // gender: this.state.gender,
                // age: this.state.age,
                // level: this.state.level,
                city: this.state.city,
                cort_name: this.state.court,
                time: this.state.time,
                day: this.state.day,
                numOfPlayers: this.state.numOfPlayers
            },
        entity : 'posts'
        }
        console.log(post)
        this.props.addToDB(post)
    }
    render() {
        // let cityNames = this.selectCity()
        // let fieldsNames = this.selectField()
       const players = [4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]
        return (
            <div className="postYourGame">
                <h1>Post Your Game</h1>
                <p> the sport, gender, age, level should be default from the user's personal data</p>
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
                
                <div>Time:</div>
                    <div>
                    <input type="time"  id="appt" name="time" min="09:00" max="22:00" onChange={this.handleChangeNewGame}/>
                    </div>
                
                <div>Number Of Players:</div>
                    <div><input list="players" name='numOfPlayers' value={this.state.numOfPlayers} min='4' max='30'onChange={this.handleChangeNewGame}/>
                    <datalist id="players">
                        {players.map(n => <option>{n}</option>)}
                    </datalist></div>
                
                
                    <button onClick={this.postNewGame}> Create New Game! </button>
                
            </div>
        )
    }
}

export default NewGame;