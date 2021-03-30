// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyAa5niUgEnUq9zQFH3i_Xg04AoVnPJkHis",
  authDomain: "clone-6e341.firebaseapp.com",
  projectId: "clone-6e341",
  storageBucket: "clone-6e341.appspot.com",
  messagingSenderId: "662219050380",
  appId: "1:662219050380:web:ec2defc612b4381afb5aa9",
  measurementId: "G-Z5BW088YJB"
};
  const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };