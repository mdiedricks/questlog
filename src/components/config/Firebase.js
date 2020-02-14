import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {}

class Firebase{
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
    this.db = app.database();
  }

// Auth functions
  doCreateUserWithEmailAndPassword = (email, password) =>
  this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) =>
  this.auth.signInWithEmailAndPassword(email, password);
  
    doSignOut = () => this.auth.signOut();
    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
    doPasswordUpdate = password =>
  this.auth.currentUser.updatePassword(password);

//Functions to get game
    game = gid => this.db.ref(`games/${gid}`);
    games = () => this.db.ref('games');

}

export default Firebase;