// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";

import {
  REACT_APP_API_KEY,
  REACT_APP_APP_ID,
  REACT_APP_AUTH_DOMAIN,
  REACT_APP_MESSAGING_SENDER_ID,
  REACT_APP_PROJECT_ID,
  REACT_APP_STORAGE_BUCKET,
} from "./Constant";

const firebaseConfig = {
  apiKey: REACT_APP_API_KEY,
  authDomain: REACT_APP_AUTH_DOMAIN,
  projectId: REACT_APP_PROJECT_ID,
  storageBucket: REACT_APP_STORAGE_BUCKET,
  messagingSenderId: REACT_APP_MESSAGING_SENDER_ID,
  appId: REACT_APP_APP_ID,
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
