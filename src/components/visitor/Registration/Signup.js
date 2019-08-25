import React, { Component } from 'react'
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import fire from '../../../config/Fire'
import { Redirect } from 'react-router-dom'
import UserGames from '../../user/UserGames'
class Signup extends Component {
  constructor() {
    super()
    this.state = {
      firstName: '',
      lastName: '',
      gender: '',
      phoneNumber: '',
      email: '',
      userName: '',
      password: '',
      uid: '',
      signedUp: false
    }
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state.phoneNumber)
    console.log(this.state.gender)
  }
  dosomthings = async (e) => {
    let result = await this.signup(e)
    await this.addToDB()
    if (this.state.signedup) {
      alert('you have successfuly signed up!')
    }
  }

  addToDB = async () => {
    let obj = await {
      fields: {
        first_name: this.state.firstName,
        last_name: this.state.lastName,
        gender: this.state.gender,
        email: this.state.email,
        phone_number: this.state.phoneNumber,
        username: this.state.userName,
        password: this.state.password,
        uid: this.state.uid
      },
      entity: "users",
    }
    console.log(obj)
    this.props.AddToDB(obj)
  }
  signup = async (e) => {
    e.preventDefault();
    try {
      await fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
        this.setState({ uid: u.user.uid })
        this.setState({ signedUp: true })
        localStorage.setItem("user", u.user.uid)
      })

    } catch (error) {
      console.error(error);
      alert('cant sign up')
      this.setState({ signedUp: false })
    }

  }
  render() {
    const styles = { customWidth: { width: 150 } }
    return (
      <div>
        <form class="signup-form">
          <div>
            <TextField
              name="firstName"
              hintText="First Name"
              value={this.state.firstName} onChange={this.handleChange}
              floatingLabelText="First Name"
            />
          </div>
          <div>
            <TextField
              name="lastName"
              hintText="Last Name"
              value={this.state.lastName} onChange={this.handleChange}
              floatingLabelText="Last Name"
            />
          </div>
          <div>
            <SelectField
              floatingLabelText="Gender"
              name="gender"
              // value={this.state.gender}
              onChange={this.handleChange}
              style={styles.customWidth}
            >
              <MenuItem value={1} primaryText="M" />
              <MenuItem value={2} primaryText="F" />
            </SelectField>
          </div>

          <div>
            {/* <select name="gender" value={this.state.gender} onChange={this.handleChange}>
              <option value="M"> M </option>
              <option value='F'> F </option>
            </select> */}
          </div>
          <div>
            <TextField
              name="phoneNumber"
              hintText="example 0540097845"
              value={this.state.phoneNumber} onChange={this.handleChange}
              floatingLabelText="Phone Number"
            />
          </div>
          <div>
            <TextField
              name="email"
              type="email"
              hintText="name@address.com"
              value={this.state.email} onChange={this.handleChange}
              floatingLabelText="Email"
            />
          </div>
          <div>
            <TextField
              name="userName"
              hintText="best baller"
              value={this.state.userName} onChange={this.handleChange}
              floatingLabelText="Username"
            />
          </div>
          <div>
            <TextField
              name="password"
              type="password"
              hintText=""
              value={this.state.password} onChange={this.handleChange}
              floatingLabelText="Password"
            />
          </div>
        </form>
        <div>
          <button onClick={this.dosomthings} className="btn btn-success">Signup</button>
        </div>
        {/* {this.state.signedUp ?  <UserGames user={this.state}/> : <Signup/>} */}
      </div>
    )
  }
}
export default Signup