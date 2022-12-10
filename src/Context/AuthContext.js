import { createContext, useContext, useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import {Auth as auth} from "../js/firebase";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);
  const [markarray,setMarkarray] = useState([{lat:9.85130, lon:76.9400,key:"1"},{lat:9.85190, lon:76.9400,key:"2"}])
  function updateMakerArray(arr){
    setMarkarray(oldArray => [...oldArray, arr]);
    console.log(markarray)
  }
  function register(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  function updatedMakerarr(){
    return markarray;
  }

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  function logout(){
    auth.signOut();
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    login,
    register,
    markarray,
    updateMakerArray,
    updatedMakerarr,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}