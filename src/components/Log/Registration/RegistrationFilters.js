// import React, { Component } from 'react'
// import { Redirect } from 'react-router-dom'
// import FreeTime from '../../FreeTime'
// // import AddUser from './AddUser'
// // const Sequelize = require('sequelize')
// // const sequelize = new Sequelize('mysql://root:@localhost:/sql_project')
// const moment = require('moment')

// class userFilters extends Component {
//     constructor() {
//         super()
//         this.state = {
//             gender: 'M',
//             sport: 'basketball',
//             level: '',
//             flag: false,
//             day: '',
//             time: '',

//         }
//     }
//     changeFlag = () => {
//         this.setState({ flag: true })
//     }
//     sevenDaysDates = () => {
//         let days = []
//         let i = 0
//         while (i < 7) {
//             days.push(moment().add(i, "days").format("DD/MM/YYYY"))
//             i++
//         }
//         return days;
//     }
//     Selections = async (e) => {
//         let name = e.target.name
//         console.log(name)
//         await this.setState({ [name]: e.target.value })
//         console.log(this.state)
//     }
//     AddUser = () => {
//         let obj = {
//             fields: {
//                 gender : this.state.gender,
//                 sport: this.state.sport,
//                 age: this.state.age,
//                 level : this.state.level
//             },
//             entity: "userfilter"
//         }
//        this.props.AddUserToDB(obj)
        
//     }
//     render() {

//         return (
//             <div id="registration">
//                 <div>
//                     <select name="gender" value={this.state.gender} onChange={this.Selections}>
//                         <option value="M"> M </option>
//                         <option value='F'> F </option>
//                     </select>
//                 </div>
//                 <div>
//                     <select name="age" value={this.state.age} onChange={this.Selections}>
//                         <option value="11-15"> 11 - 15 </option>
//                         <option value="15-17"> 15 - 17 </option>
//                         <option value="17-20"> 17 - 20 </option>
//                         <option value="20-25"> 20 - 25 </option>
//                         <option value="25-40"> 25 - 40 </option>
//                         <option value="40+"> 40 + </option>
//                     </select>
//                 </div>
//                 <div>
//                     <select>
//                         <option>basketball</option>
//                     </select>
//                 </div>
//                 <div>
//                     <select name="level" value={this.state.level} onChange={this.Selections}>
//                         <option> bad </option>
//                         <option> not that bad </option>
//                         <option> good </option>
//                         <option> very good </option>
//                         <option> pro </option>
//                     </select>
//                 </div>

//                 <div>
//                     <button onClick={this.AddUser} >Let's go and Play!</button>
//                 </div>
//                 <div>
//                     <button onClick={this.changeFlag}> Add your free time </button>
//                 </div>

//                 <div> {this.state.flag ?
//                     <div>
//                         <input id="calender" type="text" list="dates" name="sagias" />
//                         <datalist id="dates">
//                             {this.sevenDaysDates().map(m => <option value={m} key={m} />)}
//                         </datalist>
//                     </div> : null}

//                 </div>

//             </div>
//         )
//     }
// }
// export default userFilters;