import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
var firebaseConfig = {
  apiKey: "AIzaSyDpbVtXWyhf8P9lF9mw4WUAr-JxoW5TU8k",
  authDomain: "wolemessage.firebaseapp.com",
  databaseURL: "https://wolemessage.firebaseio.com",
  projectId: "wolemessage",
  storageBucket: "wolemessage.appspot.com",
  messagingSenderId: "802028080748",
  appId: "1:802028080748:web:cf5765480444e48e471249"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth;
export const db = firebase.database();
