import React, { Component } from 'react'
import fire from '../../config/Fire'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
class Login extends Component {
   constructor(props) {
       super(props);
       this.state = {
           email: '',
           password: ''
       };
   }
   handleChange = (e) => {
       this.setState({ [e.target.name]: e.target.value });
   }
   login = (e) => {
       e.preventDefault();
       fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
       }).catch((error) => {
           console.log(error);
       });
   }
   render() {
       return (
               <div className="col-md-6">
                   <form>
                       <div class="form-group">
                           <input value={this.state.email} onChange={this.handleChange} type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" />
                       </div>
                       <div class="form-group">
                           <input value={this.state.password} onChange={this.handleChange} type="password" name="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                       </div>
                       <button type="submit" onClick={this.login} class="btn btn-primary">Login</button>
                       <Link to='/Signup' style={{ marginLeft: '25px' }} className="btn btn-success">Signup</Link>
                   </form>
               </div>
       );
   }
}
export default Login;