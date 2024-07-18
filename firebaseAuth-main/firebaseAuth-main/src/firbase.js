// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLBXsAkbnE3xe4NGaUCPpxT2wCgZrR_q8",
  authDomain: "fir-auth-16250.firebaseapp.com",
  databaseURL: "https://fir-auth-16250-default-rtdb.firebaseio.com",
  projectId: "fir-auth-16250",
  storageBucket: "fir-auth-16250.appspot.com",
  messagingSenderId: "849014248532",
  appId: "1:849014248532:web:f31a9a95afdf01000a09c1",
  databaseURL:"https://fir-auth-16250-default-rtdb.firebaseio.com",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);