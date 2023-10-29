import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyBpxHxPrp0QJOUm4ijkKFXXS2zz5gSxB8Y",
  authDomain: "webauth-bc4e5.firebaseapp.com",
  projectId: "webauth-bc4e5",
  storageBucket: "webauth-bc4e5.appspot.com",
  messagingSenderId: "274971357952",
  appId: "1:274971357952:web:7fd0920505e0bf4d0cf9e5"
};


initializeApp(firebaseConfig);
export const auth = getAuth()
export const google = new GoogleAuthProvider()