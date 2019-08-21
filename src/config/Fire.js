import firebase from 'firebase'
const firebaseConfig = {
   apiKey: "AIzaSyDpN2Gq1rtT0foxYnpb5__VeR53_nJIRTs",
   authDomain: "play-your-game-4d9c2.firebaseapp.com",
   databaseURL: "https://play-your-game-4d9c2.firebaseio.com",
   projectId: "play-your-game-4d9c2",
   storageBucket: "",
   messagingSenderId: "62279777342",
   appId: "1:62279777342:web:1f828c3e21f92d56"
 };
 // Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
 export default fire