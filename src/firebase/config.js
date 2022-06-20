import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB5DDAOIFZEHJMJi8RSgxKEC3PImXnjiBM",
  authDomain: "pharoahtradez-69420.firebaseapp.com",
  databaseURL:
    "https://pharoahtradez-69420-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "pharoahtradez-69420",
  storageBucket: "pharoahtradez-69420.appspot.com",
  messagingSenderId: "817051866405",
  appId: "1:817051866405:web:aff214d68f5b18c70eb6cc",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, db, storage, provider };
export default firebase;
