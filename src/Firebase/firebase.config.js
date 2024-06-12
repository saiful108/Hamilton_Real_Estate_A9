import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfPUUapUpIcuM2Ag9cM-wuRgC-X9Eeyqc",
  authDomain: "hamilton-real-estate-a9.firebaseapp.com",
  projectId: "hamilton-real-estate-a9",
  storageBucket: "hamilton-real-estate-a9.appspot.com",
  messagingSenderId: "180005781109",
  appId: "1:180005781109:web:dfa9a7140591d4f44e423c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
