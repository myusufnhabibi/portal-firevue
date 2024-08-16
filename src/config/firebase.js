// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyArhc7vRWkzA-mLHGcyRDwFHixmXGtirhg",
  authDomain: "portal-berita-d2907.firebaseapp.com",
  projectId: "portal-berita-d2907",
  storageBucket: "portal-berita-d2907.appspot.com",
  messagingSenderId: "539656134997",
  appId: "1:539656134997:web:e3b1a067d937d057424fdc",
  measurementId: "G-WKK12B7Y4B",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
