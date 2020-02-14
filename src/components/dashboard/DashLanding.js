import React, { Component } from "react";
import firebase from 'firebase';
import 'firebase/firestore';

class DashLanding extends Component {

  handleUserChange = (e) => {
    (this.setState({...this.state, user: e.id}))
  }

  componentDidMount(){
    // CHECK IF USER IS CURRENTLY LOGGED IN

    const currUser = firebase.auth().currentUser;
    if (currUser != null) {
    //   this.setState({...this.state, user: currUser.uid});
    //   console.log('User ID:', this.state.user )
    } else {
      console.log('Nobody is logged in yet');
    }
  }

  render() {

    return (
    <div className="container">
      <div className="row">
        <h2>Welcome to Questlog</h2>
        <p>Track your players easily now, without pesky spreadsheets.</p>
        <div className="divider"></div>
        <p>Login now to start creating!</p>
        
      </div>
    </div>
    );
  }
}

export default DashLanding;
