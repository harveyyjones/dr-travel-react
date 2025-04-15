import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBm7lQ8iyjBJmuyG7vp4fG0miEKvHXBdv0",
  authDomain: "dr-travel-97d6d.firebaseapp.com",
  projectId: "dr-travel-97d6d",
  storageBucket: "dr-travel-97d6d.firebasestorage.app",
  messagingSenderId: "652505268323",
  appId: "1:652505268323:web:4a2ea8c287e5ea5c86b856",
  measurementId: "G-TXHGV8FV02"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);