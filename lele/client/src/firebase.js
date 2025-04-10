// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8kmXG9c_3inTaMvIgUwPVcHa92FNF324",
  authDomain: "lele-df605.firebaseapp.com",
  projectId: "lele-df605",
  storageBucket: "lele-df605.firebasestorage.app",
  messagingSenderId: "491417345289",
  appId: "1:491417345289:web:4fd7030c112a4a653bc7d8",
  measurementId: "G-TCKJJLF1PJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
