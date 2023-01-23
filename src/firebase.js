import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD7vbi_-rCyK1SDeqgZydDjZvgpr_nmrAc",
    authDomain: "walmart-redux.firebaseapp.com",
    projectId: "walmart-redux",
    storageBucket: "walmart-redux.appspot.com",
    messagingSenderId: "899302500760",
    appId: "1:899302500760:web:cb6a8e5516df476c42e3ed"
  };
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth=getAuth();
export const storage = getStorage();
export const db = getFirestore();