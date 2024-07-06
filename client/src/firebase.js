// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-765f0.firebaseapp.com",
  projectId: "mern-estate-765f0",
  storageBucket: "mern-estate-765f0.appspot.com",
  messagingSenderId: "467102731365",
  appId: "1:467102731365:web:095117650f4ac1cb508a8c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);