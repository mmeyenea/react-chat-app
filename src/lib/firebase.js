import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "chatapp-d539a.firebaseapp.com",
  projectId: "chatapp-d539a",
  storageBucket: "chatapp-d539a.appspot.com",
  messagingSenderId: "404750592269",
  appId: "1:404750592269:web:1123bb6221e99e8dc06844"
};


const app = initializeApp(firebaseConfig); 
export const auth= getAuth()
export const db = getFirestore()
export const storage = getStorage()