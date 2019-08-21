import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from './Home'

class SuccessfulySignedUp extends Component{
    constructor(){
        super()
    }
    render(){
        console.log("we r in success")
        return(
            <Router>
            <div>

                <div>you have successfuly signed up!</div>
                <Link to='/Home'><div>Ok</div></Link>
                <Route path="/Home" exact render={() => <Home />} />

            </div>
            </Router>
        )
    }
}

export default SuccessfulySignedUp