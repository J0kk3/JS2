// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig =
{
  apiKey: "AIzaSyAUEIWLFKU8KUrgtIYa3_1bULLw0CDU7e4",
  authDomain: "rockpaperscissorshighscore.firebaseapp.com",
  databaseURL: "https://rockpaperscissorshighscore-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "rockpaperscissorshighscore",
  storageBucket: "rockpaperscissorshighscore.appspot.com",
  messagingSenderId: "908510729526",
  appId: "1:908510729526:web:1df59e86b8d49d68c84f97"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export {db}