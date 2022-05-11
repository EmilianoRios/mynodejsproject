// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLH4evlPABb2NUkeTcghZWw62CGYR8nR4",
  authDomain: "mynodejsproject-95870.firebaseapp.com",
  projectId: "mynodejsproject-95870",
  storageBucket: "mynodejsproject-95870.appspot.com",
  messagingSenderId: "250595783645",
  appId: "1:250595783645:web:c083f704bdcc36d68dfc34",
  measurementId: "G-X8L4P02S95"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);