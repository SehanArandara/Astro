// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9tLYj1bQIm0uDPSvO_nlW_dYeVjTX-xg",
  authDomain: "astro-47b55.firebaseapp.com",
  projectId: "astro-47b55",
  storageBucket: "astro-47b55.appspot.com",
  messagingSenderId: "189993598198",
  appId: "1:189993598198:web:b461cb18fb4da407d640d7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;