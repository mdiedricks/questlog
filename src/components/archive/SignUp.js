import React, { Component } from "react";
import { Link } from 'react-router-dom'
import fireConfig from '../config/fbConfig'

class SignUp extends Component {
  state = {
    email: "",
    password: "",

  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  signup = e => {
    e.preventDefault();
    fireConfig.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
      console.log(u);
    }).catch(err => {
      console.log(err)
    })
  }

  render() {
    return (
      <div className="container row">
        <div className="col l3 m2 s1"></div>
        <div className="col l6 m8 s10">
          <form onSubmit={this.handleSubmit} className="white">
            <h5 className="grey-text text-darken-3">Sign Up</h5>
            <div className="input-field">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" onChange={this.handleChange} />
            </div>
            <div className="input-field">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" onChange={this.handleChange} />
            </div>

            <div className="input-field">
              <Link to='/signup'><button onClick={this.signup} className="btn-flat lighten-1 z-depth-0">Sign Up</button></Link>
              <Link to='/signin'><button className="btn flat  z-depth-0">Login</button></Link>
            </div>
          </form>
        </div>
        <div className="col l3 m2 s1"></div>
      </div>
    );
  }
}

export default SignUp;
