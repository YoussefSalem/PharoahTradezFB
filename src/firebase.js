import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB5DDAOIFZEHJMJi8RSgxKEC3PImXnjiBM",
  authDomain: "pharoahtradez-69420.firebaseapp.com",
  projectId: "pharoahtradez-69420",
  storageBucket: "pharoahtradez-69420.appspot.com",
  messagingSenderId: "817051866405",
  appId: "1:817051866405:web:aff214d68f5b18c70eb6cc",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
