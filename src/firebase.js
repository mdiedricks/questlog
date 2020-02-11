import firebase from "firebase";

const Config = {
  apiKey: "REACT_APP_API_KEY",
  authDomain: "REACT_APP_AUTH_DOMAIN",
  databaseURL: "REACT_APP_DATABASE_URL",
  projectId: "REACT_APP_PROJECT_ID",
  REACT_APP_STORAGE_BUCKET: "questlog-2873d.appspot.com",
  REACT_APP_MESSAGING_SENDER_ID: "294622011601",
  REACT_APP_APP_ID: "1:294622011601:web:22927821c1155e135825f0",
  REACT_APP_MEASUREMENT_ID: "G-T7MPNCHDZN"
};
// Initialize Firebase
firebase.initializeApp(Config);

export default firebase;
