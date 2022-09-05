import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
import "firebase/compat/storage"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD4Tt5yEjADA362nWvz4lqs6hITCilj1Wk",
    authDomain: "clone-bf628.firebaseapp.com",
    projectId: "clone-bf628",
    storageBucket: "clone-bf628.appspot.com",
    messagingSenderId: "515811033515",
    appId: "1:515811033515:web:562e60939d4e6463bb52ee",
    measurementId: "G-3Z97THMYEJ"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage =firebase.storage();

export { auth,provider,storage};
export default db;