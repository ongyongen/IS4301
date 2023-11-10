import { createContext, useContext, useEffect, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth'

import { auth } from '../../firebase';

const UserContext = createContext();
const provider = new GoogleAuthProvider();

// eslint-disable-next-line react/prop-types
export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const setCurrentUserDetail = (username) => {
    return updateProfile(auth.currentUser, { displayName: username })
  }

   const signIn = (email, password) =>  {
    return signInWithEmailAndPassword(auth, email, password)
   }


  const signInWithGmailPopup = () => {
    return signInWithPopup(auth, provider)
  }
  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <UserContext.Provider value={{
        user, createUser, 
        setCurrentUserDetail, 
        signIn, signInWithGmailPopup, 
      }}>
      {children}
    </UserContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(UserContext);
};

