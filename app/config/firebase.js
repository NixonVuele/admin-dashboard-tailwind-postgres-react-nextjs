import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
const firebaseConfig = {
  apiKey: "AIzaSyAMkVmJ6mRn9ueJip61KDGV1vXyB-Cng54",
  authDomain: "jali-coneja.firebaseapp.com",
  projectId: "jali-coneja",
  storageBucket: "jali-coneja.appspot.com",
  messagingSenderId: "315437103617",
  appId: "1:315437103617:web:3bded1b54dee50c9481e00",
  measurementId: "G-QLMF55E6KM"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);