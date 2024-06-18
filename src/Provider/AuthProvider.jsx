import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import auth from "../Firebase/firebase.config";



export const AuthContext=createContext(null)
const Authprovider = ({children}) => {
 const [user,setUser]=useState(null);
 const [success,setSuccess]=useState(null);
 const [errors,setErrors]=useState(null);
 const [loading,setLoading]=useState(true)


const createUser=(email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)

}

const signInUser=(email,password)=>{
    setLoading(true)
    return   signInWithEmailAndPassword(auth,email,password)
    
}

const signOutUser=()=>{
    setLoading(true)
  return  signOut(auth)
}


const handleUpdate=()=>{
    setLoading(true)
    return updateProfile()
}

// observering
useEffect(()=>{
   const unSubscribe= onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser)
        console.log({currentUser});
        setLoading(false)
    })
    return ()=>{
        unSubscribe()
    }
},[])



 const authinfo={
    user,createUser,signInUser, signOutUser,success,setSuccess,errors,setErrors,loading,handleUpdate
 }
    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;
Authprovider.propTypes={
    children: PropTypes.node
}