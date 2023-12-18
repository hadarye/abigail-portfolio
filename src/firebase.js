// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCG9dOCLM4f1DNZwWfBcQ0_VFUkalCnsz4",
  authDomain: "abigail-portfolio.firebaseapp.com",
  projectId: "abigail-portfolio",
  storageBucket: "abigail-portfolio.appspot.com",
  messagingSenderId: "339610871562",
  appId: "1:339610871562:web:1f58f96328c8344a9a7cf3",
  measurementId: "G-96YRLVNDL8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);