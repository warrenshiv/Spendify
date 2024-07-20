// Import the functions you need from the SDKs you need
// Firebase Imports
import { getApp, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// Components Imports
import { firebaseConfig } from "@/config/firebase";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Initialize Firebase
let firebaseApp;

try {
  firebaseApp = getApp();
} catch (e) {
  firebaseApp = initializeApp(firebaseConfig);
}

// const analytics = getAnalytics(firebaseApp);
export const auth = getAuth(firebaseApp);
