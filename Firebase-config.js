import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, query, where, getDocs, updateDoc, doc } from "firebase/firestore";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBHgjks4a-peEgmV0jWV_D2mhrgq3QuRhM",
    authDomain: "jchat-f5084.firebaseapp.com",
    projectId: "jchat-f5084",
    storageBucket: "jchat-f5084.appspot.com",
    messagingSenderId: "194565288625",
    appId: "1:194565288625:android:50a120c056cb64022da890"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
