import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBa-gFgZNcTHlZc2IEozr1pC1-Fjs-1vsU",
  authDomain: "proyecto-cad.firebaseapp.com",
  databaseURL: "https://proyecto-cad.firebaseio.com",
  projectId: "proyecto-cad",
  storageBucket: "proyecto-cad.appspot.com",
  messagingSenderId: "750587560279",
  appId: "1:750587560279:web:affce52bc1803152a8fe12",
  measurementId: "G-0V59RMMDQJ"
};

export default !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
