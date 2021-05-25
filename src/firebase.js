import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCDp8H3MwyvArGmLEs5szelb24fa9rnzpc",
  authDomain: "clone-d8a5c.firebaseapp.com",
  projectId: "clone-d8a5c",
  storageBucket: "clone-d8a5c.appspot.com",
  messagingSenderId: "402918534211",
  appId: "1:402918534211:web:0324b28b190214e95ff8f6",
  measurementId: "G-8D0VQB8PKS",
});

const auth = firebase.auth();

export { auth };
