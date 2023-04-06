import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBkWndXsPjKTLM8IfgHAhXg-YKd8mhDABQ",
  authDomain: "native-8f5c0.firebaseapp.com",
  projectId: "native-8f5c0",
  storageBucket: "native-8f5c0.appspot.com",
  messagingSenderId: "844492661435",
  appId: "1:844492661435:web:a1adbafbcd0bb43c3ebf9e",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
