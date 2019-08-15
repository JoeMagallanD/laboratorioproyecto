import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyBa-fWEKlmVlJwDBaLsJOQjoPDiWl7oy-o",
    authDomain: "new-app-c1e88.firebaseapp.com",
    databaseURL: "https://new-app-c1e88.firebaseio.com",
    projectId: "new-app-c1e88",
    storageBucket: "",
    messagingSenderId: "1039116419060",
    appId: "1:1039116419060:web:cd2c6cd5e5b048f6"
  };
  // Initialize Firebases
  firebase.initializeApp(firebaseConfig);

  export default firebase;