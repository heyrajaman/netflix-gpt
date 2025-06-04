// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAy6LHhUxKiPy18TkBNOHv2LCA-APTJybw",
  authDomain: "netflixgpt-b8e0c.firebaseapp.com",
  projectId: "netflixgpt-b8e0c",
  storageBucket: "netflixgpt-b8e0c.firebasestorage.app",
  messagingSenderId: "333730923001",
  appId: "1:333730923001:web:1b38299014e0dc55d03d28",
  measurementId: "G-QMXHRCYD8T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();