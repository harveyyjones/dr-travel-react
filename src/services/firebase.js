import { initializeApp } from 'firebase/app';
import { 
  getAuth, 
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyBwMwNzCebVkHX36kOejHcSjoIvn7ozgLQ",
  authDomain: "dr-travel-e4e1b.firebaseapp.com",
  projectId: "dr-travel-e4e1b",
  storageBucket: "dr-travel-e4e1b.firebasestorage.app",
  messagingSenderId: "440643999059",
  appId: "1:440643999059:web:d42ee925f226d00635fda6",
  measurementId: "G-L7TV345EE7"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);
export const googleProvider = new GoogleAuthProvider();

export const authService = {
  signUp: (email, password) => createUserWithEmailAndPassword(auth, email, password),
  signIn: (email, password) => signInWithEmailAndPassword(auth, email, password),
  signInWithGoogle: () => signInWithPopup(auth, googleProvider),
  signOut: () => signOut(auth)
}; 