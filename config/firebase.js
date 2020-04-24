import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAYYdaJzU6ztXQlJlNDw_gzUSLEOEid-SQ",
  authDomain: "app-react-native-9e522.firebaseapp.com",
  databaseURL: "https://app-react-native-9e522.firebaseio.com",
  projectId: "app-react-native-9e522",
  storageBucket: "app-react-native-9e522.appspot.com",
  messagingSenderId: "826415771287",
  appId: "1:826415771287:web:0a4c9fe42c2f08277203d2",
  measurementId: "G-8GPBBKE322"
};

export default !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
