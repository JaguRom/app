import firebase from "firebase/app";

import "firebase/firestore" 

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB96IkgOm9P2nDAhXT4En81p9Yh9-m5uso",
    authDomain: "appreact-6520a.firebaseapp.com",
    projectId: "appreact-6520a",
    storageBucket: "appreact-6520a.appspot.com",
    messagingSenderId: "630657248949",
    appId: "1:630657248949:web:9aac0b35a20bf54c2398fc"
  };
  /* console.log(Esto es firebase) */

  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);

  export const firestore = firebase.firestore(app);

  export default firebase;

  console.log (firestore);