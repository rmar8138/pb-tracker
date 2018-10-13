import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyDiWIF66La8xa0H1cFaSTRF97vztIB2CK0",
  authDomain: "pb-tracker-c1614.firebaseapp.com",
  databaseURL: "https://pb-tracker-c1614.firebaseio.com",
  projectId: "pb-tracker-c1614",
  storageBucket: "pb-tracker-c1614.appspot.com",
  messagingSenderId: "222247096025"
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };
