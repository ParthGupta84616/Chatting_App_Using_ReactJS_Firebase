import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';
import React, { createContext, useState, useContext, useEffect } from 'react';
export const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
  const [currentUser, setcurrentUser] = useState({});
    useEffect(() => {
      const unsub=onAuthStateChanged(auth,(user)=>{
        setcurrentUser(user);
        console.log(user);
      });
      return()=>{
        unsub();
      }
    }, []);
    
    
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  
};

