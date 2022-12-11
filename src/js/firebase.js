import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getDatabase} from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyD_fLmkeV2VFZIHvD8hHK6P18Qt5piPsmg",
  authDomain: "userlogin-253a0.firebaseapp.com",
  projectId: "userlogin-253a0",
  storageBucket: "userlogin-253a0.appspot.com",
  messagingSenderId: "1072461642374",
  appId: "1:1072461642374:web:4b1e59468b4e9b397e2f07",
  measurementId: "G-3LGB1ZPZN5"
};

const app = initializeApp(firebaseConfig)
const Auth = getAuth(app);
const db= getDatabase(app)
export {Auth,db};

