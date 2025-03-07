import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAOb5T9J95Lhpn-1jwOkbGdjqOjQG_howQ",
  authDomain: "todo-89f50.firebaseapp.com",
  projectId: "todo-89f50",
  storageBucket: "todo-89f50.firebasestorage.app",
  messagingSenderId: "955544085650",
  appId: "1:955544085650:web:f172efa4f57af69956f24b",
  measurementId: "G-EGGLS2CV1E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

const googleSignIn = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    return result.user;
  } catch (error) {
    console.error("Google Sign-In Error", error);
    return null;
  }
}


export  { 
  db, 
  auth,
  googleSignIn, 
};

