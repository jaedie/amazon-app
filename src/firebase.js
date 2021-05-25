import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCW1l-etZl537IL7TFVFanL6hWe32JxUE0",
  authDomain: "amzn-app-86035.firebaseapp.com",
  projectId: "amzn-app-86035",
  storageBucket: "amzn-app-86035.appspot.com",
  messagingSenderId: "547872670149",
  appId: "1:547872670149:web:c0a3761f54bb9ea0ff8bac",
  measurementId: "G-WX2V7YFMTG",
});

const auth = firebase.auth();

export { auth };
