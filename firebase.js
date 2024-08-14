// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzpuw9dzqYbVk4z9BYhs_jl5yeBLugyAc",
  authDomain: "hspantryapp-82c06.firebaseapp.com",
  projectId: "hspantryapp-82c06",
  storageBucket: "hspantryapp-82c06.appspot.com",
  messagingSenderId: "454238387628",
  appId: "1:454238387628:web:93281e0365854e200f8e09"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app)
export {app, firestore}