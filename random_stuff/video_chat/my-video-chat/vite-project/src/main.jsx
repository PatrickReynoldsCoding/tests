import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import firebase from "firebase/app";
import "firebase/firestore";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDAKABnQo1PIx7OVme5Om_lIqK51tNscJI",
  authDomain: "video-chat-for-pair-up.firebaseapp.com",
  projectId: "video-chat-for-pair-up",
  storageBucket: "video-chat-for-pair-up.appspot.com",
  messagingSenderId: "2334473598",
  appId: "1:2334473598:web:96b2a8ec26545eb7f6072f",
  measurementId: "G-FPKBTLLWBB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const firestore = firebase.firestore();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
