import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/analytics';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyC-GRaweG7dCAfbC41lDBBLVlIAtjDkfyQ",
    authDomain: "marioplan-9ff69.firebaseapp.com",
    databaseURL: "https://marioplan-9ff69.firebaseio.com",
    projectId: "marioplan-9ff69",
    storageBucket: "marioplan-9ff69.appspot.com",
    messagingSenderId: "637767691847",
    appId: "1:637767691847:web:e6c28262bd599a3d180b62",
    measurementId: "G-CERN59JMQ0"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
firebase.firestore();

export default firebase;