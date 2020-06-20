// firebase.js

import firebase from "firebase/app";
import "firebase/database";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDmWwuvLnKOdbyyMY71auoY-uhRkvQuK_E",
  authDomain: "excursions-userdata.firebaseapp.com",
  databaseURL: "https://excursions-userdata.firebaseio.com",
  projectId: "excursions-userdata",
  storageBucket: "excursions-userdata.appspot.com",
  messagingSenderId: "955447819901",
  appId: "1:955447819901:web:ef6954f4547765e046fb14",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
