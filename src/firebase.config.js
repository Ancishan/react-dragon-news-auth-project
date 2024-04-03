// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhfJhD2Xrn3H-Wy04OqR419rkwMN2mBu0",
  authDomain: "react-dragon-news-auth-p-a43f5.firebaseapp.com",
  projectId: "react-dragon-news-auth-p-a43f5",
  storageBucket: "react-dragon-news-auth-p-a43f5.appspot.com",
  messagingSenderId: "302902943029",
  appId: "1:302902943029:web:5057b88acd52e14524007c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;