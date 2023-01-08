import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  updateProfile,
  signInWithPopup,
  signInWithEmailAndPassword,
} from "firebase/auth";
import Loader from "../../Shared/Loader/Loader";
import app from "../../Firebase/FirebseAuth.config";
const googleProvider = new GoogleAuthProvider();

export const AuthContext = createContext();
export const CategoryContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [category, setCategory] = useState("");
  // user state
  const [user, setUser] = useState(null);
  // loading state
  const [loading, setLoading] = useState(true);

  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // create user with email and password
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // user profile update
  const userProfileUpdate = (name, ) => {
    updateProfile(auth.currentUser, {
      displayName: name,
     
    });
   
  };
  // log in with email password
  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  // Log out
  const userLogOut = () => {
    localStorage.clear();
    return signOut(auth);
  };
  // auth on state change ...  who is the login now log out now for checking
  useEffect(() => {
    const unSubscribes = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);

      setLoading(false);
    });
    return () => {
      unSubscribes();
    };
  }, []);

  // auth info
  const authInfo = {
    loading,
    user,
    createUser,
    userProfileUpdate,
    userLogOut,
    googleLogin,
    setLoading,
    login,
  };
  return (
    <div>
      {loading && <Loader />}
      <AuthContext.Provider value={authInfo}>
        <CategoryContext.Provider value={{ category, setCategory }}>
          {children}
        </CategoryContext.Provider>
      </AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
