// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyBmH6xCKaCAaR6ExlmQgi7qBGPq3r_wFD8",
  authDomain: "to-do-f6bcc.firebaseapp.com",
  databaseURL: "https://to-do-f6bcc-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "to-do-f6bcc",
  storageBucket: "to-do-f6bcc.appspot.com",
  messagingSenderId: "51400065974",
  appId: "1:51400065974:web:1369db2d78e789c4a5b717"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);