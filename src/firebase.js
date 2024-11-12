// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6SU7nVWSRm24XaXV_O13rsFHIaKc_-qg",
  authDomain: "zibra-d9e3e.firebaseapp.com",
  projectId: "zibra-d9e3e",
  storageBucket: "zibra-d9e3e.firebasestorage.app",
  messagingSenderId: "260407001326",
  appId: "1:260407001326:web:945bf016d13b4a6ee133ff",
  measurementId: "G-52D932SFGH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);