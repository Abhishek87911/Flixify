// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2YKFX56Am_hrMNJ5kRgN-Ex8iNjmHPFw",
  authDomain: "flixify-49887.firebaseapp.com",
  projectId: "flixify-49887",
  storageBucket: "flixify-49887.appspot.com",
  messagingSenderId: "144089832888",
  appId: "1:144089832888:web:8ae6a082f2eedae254434d",
  measurementId: "G-NKGQ97VF3S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();