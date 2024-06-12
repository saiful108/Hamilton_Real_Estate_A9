import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";

export const AuthContext=createContext();
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true)
    // create user
    const createUser=(email,password)=>{
        setLoading(true)
return createUserWithEmailAndPassword(auth, email, password)
    }
// sign user
const login=(email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
}

// logout
const logOut=()=>{
    setLoading(true)
    return signOut(auth)
}

// observer 

useEffect(()=>{
  const unSubscribe=onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser);
        console.log({currentUser});
        setLoading(true)
    })
    return ()=>{
        unSubscribe();
    }
},[])

 const authInfo={createUser,user,login,logOut}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;