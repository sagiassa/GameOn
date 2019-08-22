import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
const moment = require('moment');
class NewGame extends Component {
    constructor() {
        super()
        this.state = {
            fields: {
                city: "",
                field: "",
                time: "",
                day: "",
                numbersOfPlayers: ""
            },
            entity: "posts"
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
        if (event.target.name === 'sumPlayers') {
            if (event.target.value > 30) {
                return alert("A Game Can Only Have Max Of 30 Player! ")
            }
            else {
                this.setState({ [event.target.name]: event.target.value })
            }
        }
        await this.setState({ [event.target.name]: event.target.value }, function () {
        })
    }
    postNewGame = () => {
        // let obj = {
        //     city: this.state.city,
        //     field: this.state.field,
        //     day: this.state.day,
        //     time: this.state.time,
        //     numbersOfPlayers: this.state.numbersOfPlayers
        // }
        console.log(this.state)
        this.props.postNewGame(this.state)
    }
    render() {
        // let cityNames = this.selectCity()
        // let fieldsNames = this.selectField()
        // let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
        return (
            <div>
                <div>Post Your Game:</div>
                <div>City:</div>
                <input type='text' className="in" list='CitiesNames' name='city' value={this.state.city} onChange={this.handleChangeNewGame} />
                <div><datalist id='CitiesNames'>
                    {/* {cityNames.map(x => <option value={x} />)} */}
                </datalist></div>

                <div>Field:</div>
                <input type='text' className="in" list='fieldsNames' name='field' value={this.state.field} onChange={this.handleChangeNewGame} />
                <div><datalist id='fieldsNames'>
                    {/* {fieldsNames.map(x => <option value={x} />)} */}
                </datalist></div>

                <div>Day:</div>
                <div><input id="calender" type="text" list="dates" name="sagias" onChange={this.handleChangeNewGame} />
                    <datalist id="dates">
                        {this.sevenDaysDates().map(m => <option value={m} key={m} />)}
                    </datalist></div>
                <div>Time:</div>
                <div>
                    <input type="time" id="appt" name="appt" min="09:00" max="22:00" />
                </div>
                <div>Number Of Players:</div>
                <div><input placeholder="Number Of Players" type="number" name='numberOfPlayers' value={this.state.numberOfPlayers} min='1' onChange={this.handleChangeNewGame}></input></div>
                <div>
                    <button onClick={this.postNewGame}> Create New Game! </button>
                </div>
            </div>
        )
    }
}

export default NewGame;