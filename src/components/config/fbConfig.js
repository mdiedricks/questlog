import * as firebase from 'firebase/app';
import 'firebase/auth';

// Initialize Firebase
const fbApp = firebase.initializeApp({
  apiKey: 'AIzaSyBcqHXwmpA0zbZmGNWYyBsTU98_mt9M-c0',
  authDomain: 'questlog-2873d.firebaseapp.com',
  databaseURL: 'https://questlog-2873d.firebaseio.com',
  projectId: 'questlog-2873d',
  storageBucket: 'questlog-2873d.appspot.com',
  messagingSenderId: '294622011601',
  appId: '1:294622011601:web:22927821c1155e135825f0',
  measurementId: 'G-T7MPNCHDZN'
});

// const fireConfig = firebase.initializeApp(firebaseConfig)
export default fbApp;
