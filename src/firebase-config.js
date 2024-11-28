// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAcIcR_C1qH9JLuOSM0-Qy4clbrjDqnWgw",
  authDomain: "digital-world-logbook-dev.firebaseapp.com",
  projectId: "digital-world-logbook-dev",
  storageBucket: "digital-world-logbook-dev.appspot.com",
  messagingSenderId: "610788060881",
  appId: "1:610788060881:web:00c891f19c2ee69b889ff0",
  measurementId: "G-BVM20TJDPH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};