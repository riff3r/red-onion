// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAiEvHU-Ku5cmrqIwSewxTf0Bz4di8BIfQ",
  authDomain: "red-onion-bafec.firebaseapp.com",
  projectId: "red-onion-bafec",
  storageBucket: "red-onion-bafec.appspot.com",
  messagingSenderId: "982949653930",
  appId: "1:982949653930:web:6039b85569e4a9b21fcfd3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
