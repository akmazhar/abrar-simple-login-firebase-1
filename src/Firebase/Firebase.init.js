// Import the functions you need from the SDKs you need .n
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use .n
// https://firebase.google.com/docs/web/setup#available-libraries .n

// Your web app's Firebase configuration (Do not ever share, show or git push your firebaseConfig ) .n
const firebaseConfig = {
  apiKey: "AIzaSyA-8gWwzZtN3oFmQBnykWD6Y1jCFEgTFTM",
  authDomain: "simple-firebase-acbe7.firebaseapp.com",
  projectId: "simple-firebase-acbe7",
  storageBucket: "simple-firebase-acbe7.appspot.com",
  messagingSenderId: "73688075450",
  appId: "1:73688075450:web:aceeac0aab8ae019204683"
};

// Initialize Firebase .n
const app = initializeApp(firebaseConfig);
export default app;