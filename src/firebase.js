import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAf5jC0m7QcqEX6-PMh69Nff08TlPp-Ai8",
  authDomain: "gm-associates-website.firebaseapp.com",
  projectId: "gm-associates-website",
  storageBucket: "gm-associates-website.firebasestorage.app",
  messagingSenderId: "10760112919",
  appId: "1:10760112919:web:599275a9e089d5b2694552",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
