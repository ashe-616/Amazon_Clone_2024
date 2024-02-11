import firebase from "firebase/compat/app";
// authentication
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwXtQrTABvAd3cidpInXbViaTv8arCmYA",
  authDomain: "clone-ab96a.firebaseapp.com",
  projectId: "clone-ab96a",
  storageBucket: "clone-ab96a.appspot.com",
  messagingSenderId: "280947945063",
  appId: "1:280947945063:web:c1ea38412127b26fd72ec2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();
