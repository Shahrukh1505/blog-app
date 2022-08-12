// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyASDctl1LjuszUgteCh92BHhKmELf7t9uM",
  authDomain: "blog-d87ac.firebaseapp.com",
  projectId: "blog-d87ac",
  storageBucket: "blog-d87ac.appspot.com",
  messagingSenderId: "2039507866",
  appId: "1:2039507866:web:e2d49f7f92a0b04be82823",
  measurementId: "G-RZ3SVE09MC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();