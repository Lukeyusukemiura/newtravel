// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBcJa6SL8JWbWEzJ9DIUhoW3BKvJ3Uy3xQ",
  authDomain: "newtravel-ea574.firebaseapp.com",
  projectId: "newtravel-ea574",
  storageBucket: "newtravel-ea574.appspot.com",
  messagingSenderId: "574930467928",
  appId: "1:574930467928:web:7f23dc57a3f07611d69e2d",
  measurementId: "G-C1E8BRPX1Q",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
