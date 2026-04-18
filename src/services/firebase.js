import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

const firabaseConfig = {
  apiKey: "AIzaSyBhsYhkhwlMQf8wyG1Kg0-Qj2YHIyR96wU",
  authDomain: "greenaura-44405.firebaseapp.com",
  projectId: "greenaura-44405",
  storageBucket: "greenaura-44405.firebasestorage.app",
  messagingSenderId: "728514165223",
  appId: "1:728514165223:web:aae3026b9fc7718f886542"
}

const app = initializeApp(firabaseConfig)

export const auth = getAuth(app)