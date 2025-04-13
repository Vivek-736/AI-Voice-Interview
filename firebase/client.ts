import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDz58J2Up2yNGGPdCsn6gxCXFVJcF5aQzc",
  authDomain: "dialoghire.firebaseapp.com",
  projectId: "dialoghire",
  storageBucket: "dialoghire.firebasestorage.app",
  messagingSenderId: "501049541599",
  appId: "1:501049541599:web:b3ea517ff5dc1d534ffa6a",
  measurementId: "G-7JF69TFY0V"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);
