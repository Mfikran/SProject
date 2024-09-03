// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_KJhr6gAxRnoXaR61WGFssw0MJiAY1ic",
  authDomain: "phone-database-5e0b5.firebaseapp.com",
  projectId: "phone-database-5e0b5",
  storageBucket: "phone-database-5e0b5.appspot.com",
  messagingSenderId: "1061218322192",
  appId: "1:1061218322192:web:59753d08b71ce0bf9b0795"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);