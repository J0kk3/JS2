// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtnEHu4-Ao9taXsRzANsz1LMfeUBBkl7c",
  authDomain: "chattfe21.firebaseapp.com",
  databaseURL: "https://chattfe21-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: "chattfe21",
  storageBucket: "chattfe21.appspot.com",
  messagingSenderId: "944712268623",
  appId: "1:944712268623:web:6dad76ef400c986a2d233a"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export {db}