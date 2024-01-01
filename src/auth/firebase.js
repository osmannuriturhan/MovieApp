// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6GXnuvcohkieUZr9-ZioKN-NLcRRu-8w",
  authDomain: "movieapp-b5a6d.firebaseapp.com",
  projectId: "movieapp-b5a6d",
  storageBucket: "movieapp-b5a6d.appspot.com",
  messagingSenderId: "66146330501",
  appId: "1:66146330501:web:f39cb0c5672008acef86ec",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
