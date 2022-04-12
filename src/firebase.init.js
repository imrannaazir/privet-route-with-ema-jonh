// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB0Au1s6aSBEKcTvB-Q45VRBy-ehvaYCHQ",
    authDomain: "ema-jonh-simple-a60fd.firebaseapp.com",
    projectId: "ema-jonh-simple-a60fd",
    storageBucket: "ema-jonh-simple-a60fd.appspot.com",
    messagingSenderId: "477712818138",
    appId: "1:477712818138:web:6e401298222fb250a2eae3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth