import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4wdPZ3PlStR-Cqt9oJIECdnjCYUIF_94",
  authDomain: "login-form-6516a.firebaseapp.com",
  projectId: "login-form-6516a",
  storageBucket: "login-form-6516a.appspot.com",
  messagingSenderId: "157965882483",
  appId: "1:157965882483:web:d19dd1ad39241d8f508606"
};

const app = initializeApp(firebaseConfig);
export const database = getAuth(app)