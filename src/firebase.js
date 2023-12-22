import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC4H8u0uoHmiJVuHY_H7Rsxv-XXE_2uq5Y",
  authDomain: "chat-app-8fe1e.firebaseapp.com",
  projectId: "chat-app-8fe1e",
  storageBucket: "chat-app-8fe1e.appspot.com",
  messagingSenderId: "342543107535",
  appId: "1:342543107535:web:fd91a2d446572f8a24feba"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
