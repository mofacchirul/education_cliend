import React, { useEffect, useState } from 'react';

import {  createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from '../../FireBase/FIreBase';
import { AuthContext } from './Auth';
import SecureAxios from '../../Axios/SecureAxios/SecureAxios';



const Provider = ( {children} ) => {
    const [user, setUser] = useState(null);
    const [loding,setloding]=useState(true);
    const provider = new GoogleAuthProvider();
    const axios = SecureAxios()
 const singup= (email,password)=>{
    setloding(true)
    return createUserWithEmailAndPassword(auth,email,password)
 }

const login=(email,password)=>{
    setloding(true)
    return signInWithEmailAndPassword(auth,email,password)
}

const signOutUser = () => {
    setloding(true)
    return signOut(auth);
};


useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser)
        if(currentUser?.email){
            const user= {email: currentUser.email};
            axios.post('/jwt',{user:user})
            .then(()=>{
             
                setloding(false)
                
            })
        }
        else{
            axios.post('/logout',{},{withCredentials:true})
            .then(()=>{
                setloding(false)
            })
        }
    })
    return ()=>unsubscribe();
})



const updateUserProfile = (update) => {
    return updateProfile(auth.currentUser, update).then(() => {
        setUser((prevUser) => ({
            ...prevUser,
            displayName: update.displayName,
        }));
    });
};

// Google Sign In
const googleSignIn = () => {
    return signInWithPopup(auth, provider);
};







    const AuthInfo={
        singup,
        loding,
        user ,
        login,
        signOutUser,
        googleSignIn,
        updateUserProfile

    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    )
};

export default Provider;