// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCCP2pMFTj2ve-JfXy4a6kX3KeWCtuxBlc",
  authDomain: "wharton-family-dentistry.firebaseapp.com",
  projectId: "wharton-family-dentistry",
  storageBucket: "wharton-family-dentistry.appspot.com",
  messagingSenderId: "47167064955",
  appId: "1:47167064955:web:a4231f40f3b5ee9f3c8bde",
  measurementId: "G-D1RXYXJBPK",
};

initializeApp(firebaseConfig);

// init services
const db = getFirestore();

// ref to specific collection
const colRef = collection(db, "users");

// get collection data
getDocs(colRef)
  .then((snapshot) => {
    let users = [];
    snapshot.docs.forEach((doc) => {
      users.push({ ...doc.data(), id: doc.id });
    });
    console.log(users);
  })
  .catch((err) => {
    console.log(err.message);
  });
