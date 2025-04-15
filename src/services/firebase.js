/**
 * firebase.js - Firebase Configuration and Services
 * Similar to Firebase initialization in Flutter
 * 
 * Key Concepts:
 * 1. Firebase Configuration - Similar to FirebaseOptions in Flutter
 * 2. Authentication Service - Similar to FirebaseAuth in Flutter
 * 3. Firestore Database - Similar to FirebaseFirestore in Flutter
 * 4. Analytics - Similar to FirebaseAnalytics in Flutter
 */

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

/**
 * Firebase Configuration
 * Similar to FirebaseOptions in Flutter
 * Contains all necessary configuration for Firebase services
 */
const firebaseConfig = {
  apiKey: "AIzaSyBwMwNzCebVkHX36kOejHcSjoIvn7ozgLQ",
  authDomain: "dr-travel-e4e1b.firebaseapp.com",
  projectId: "dr-travel-e4e1b",
  storageBucket: "dr-travel-e4e1b.firebasestorage.app",
  messagingSenderId: "440643999059",
  appId: "1:440643999059:web:d42ee925f226d00635fda6",
  measurementId: "G-L7TV345EE7"
};

// Initialize Firebase app
// Similar to Firebase.initializeApp() in Flutter
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
// Similar to FirebaseAuth.instance in Flutter
export const auth = getAuth(app);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);

// Initialize Google Auth Provider
// Similar to GoogleAuthProvider() in Flutter
export const googleProvider = new GoogleAuthProvider();

/**
 * Auth Service - Wrapper for Firebase Auth methods
 * Similar to AuthService class in Flutter
 * 
 * Provides methods for:
 * 1. Email/Password Sign Up
 * 2. Email/Password Sign In
 * 3. Google Sign In
 * 4. Sign Out
 */
export const authService = {
  // Create new user with email and password
  // Similar to FirebaseAuth.instance.createUserWithEmailAndPassword() in Flutter
  signUp: (email, password) => createUserWithEmailAndPassword(auth, email, password),
  
  // Sign in with email and password
  // Similar to FirebaseAuth.instance.signInWithEmailAndPassword() in Flutter
  signIn: (email, password) => signInWithEmailAndPassword(auth, email, password),
  
  // Sign in with Google
  // Similar to FirebaseAuth.instance.signInWithPopup() in Flutter
  signInWithGoogle: () => signInWithPopup(auth, googleProvider),
  
  // Sign out
  // Similar to FirebaseAuth.instance.signOut() in Flutter
  signOut: () => signOut(auth)
}; 