// lib/firebase.ts
import { initializeApp, getApps, FirebaseApp } from "firebase/app";
import { getFirestore, Firestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBzVCOxfopRi1b2lQWSv30P-0z7maUkxP8",
  authDomain: "iwfgaleri.firebaseapp.com",
  projectId: "iwfgaleri",
  storageBucket: "iwfgaleri.firebasestorage.app",
  messagingSenderId: "971866770236",
  appId: "1:971866770236:web:12129514b0294cdceaac39",
  measurementId: "G-JZEWPSVSPY"
};

let app: FirebaseApp;
let db: Firestore;

if (!getApps().length) {
  app = initializeApp(firebaseConfig);
  db = getFirestore(app);
} else {
  app = getApps()[0];
  db = getFirestore();
}

export { app, db };
