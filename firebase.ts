import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
   apiKey: "AIzaSyC2FsaLVcZxqoRFvBEj0F61dPSyIBqvjbc",
  authDomain: "shoppers-app-40762.firebaseapp.com",
  projectId: "shoppers-app-40762",
  storageBucket: "shoppers-app-40762.firebasestorage.app",
  messagingSenderId: "223241576916",
  appId: "1:223241576916:web:7a94afb832518f543c3641",
  measurementId: "G-JLXWK6YRP9"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
