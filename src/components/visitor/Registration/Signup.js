import React, { Component } from 'react'
import fire from '../../../config/Fire'
class Signup extends Component {
  constructor() {
    super()
    this.state = {
      firstName: '',
      lastName: '',
      gender: 'M',
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
      entity: "users"
    }
    console.log(obj)
    this.props.AddUserToDB(obj)
  }
  signup = async (e) => {
    this.setState({ signedUp: true })
    e.preventDefault();
    try {
      await fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
        this.setState({ uid: u.user.uid })
      })
      
    } catch (error) {
      console.error(error);
      alert('cant sign up')
      this.setState({ signedUp: false })
    }

  }
  render() {
    return (
      <div>
        <form class="signup-form">
          <div>
            <input value={this.state.firstName} onChange={this.handleChange}
              type="text" name="firstName" class="form-control"
              id="exampleInputFirstName" placeholder="First name" />
          </div>
          <div>
            <input value={this.state.lastName} onChange={this.handleChange}
              type="text" name="lastName" class="form-control"
              id="exampleInputLastName" placeholder="Last name" />
          </div>
          <div>
            <select name="gender" value={this.state.gender} onChange={this.handleChange}>
              <option value="M"> M </option>
              <option value='F'> F </option>
            </select>
          </div>
          <div>
            <input value={this.state.phoneNumber} onChange={this.handleChange}
              type="phoneNumber" name="phoneNumber" class="form-control"
              id="exampleInputPhoneNumber" placeholder="Phone number" />
          </div>
          <div>
            <input value={this.state.email} onChange={this.handleChange}
              type="email" name="email" class="form-control"
              id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
          </div>
          <div>
            <input value={this.state.userName} onChange={this.handleChange}
              type="username" name="userName" class="form-control"
              id="exampleInputUsername" placeholder="Username" />
          </div>
          <div>
            <input value={this.state.password} onChange={this.handleChange}
              type="password" name="password" class="form-control"
              id="exampleInputPassword1" placeholder="Password" />
          </div>
        </form>
        <div>
          <button onClick={this.dosomthings} className="btn btn-success">Signup</button>
        </div>
        {/* {this.state.flag ?  <Redirect to="/Home"/> : <Signup/>} */}
      </div>
    )
  }
}
export default Signup