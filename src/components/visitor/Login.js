import React, { Component } from 'react'
import fire from '../../config/Fire'
import TextField from 'material-ui/TextField';
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }
    handleChange = async (e) => {
        await this.setState({ [e.target.name]: e.target.value });
        console.log(this.state)
    }
    login = (e) => {
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
            localStorage.setItem("user", u.user.uid)
        }).catch((error) => {
            console.log(error);
        });
    }
    render() {
        return (
            <div className="col-md-6">
                <form>
                    <div>
                        <TextField
                            name="email"
                            hintText="example@address.com"
                            type="email"
                            value={this.state.email} onChange={this.handleChange}
                            floatingLabelText="Email"
                        />
                    </div>
                    <div>
                        <TextField
                            name="password"
                            type="password"
                            value={this.state.password} onChange={this.handleChange}
                            floatingLabelText="Password"
                        />
                    </div>
                    <button type="submit" onClick={this.login} class="btn btn-primary">Login</button>
                    {/* <Link to='/Signup' style={{ marginLeft: '25px' }} className="btn btn-success">Signup</Link> */}
                </form>
            </div>
        );
    }
}
export default Login;