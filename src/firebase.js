// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCEn9YEXdjXWZ_J0GJUVpAkXI6KsbN9a-8",
  authDomain: "portfolio-eb713.firebaseapp.com",
  projectId: "portfolio-eb713",
  storageBucket: "portfolio-eb713.appspot.com",
  messagingSenderId: "654912401354",
  appId: "1:654912401354:web:177e3a129eb76302132933",
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
