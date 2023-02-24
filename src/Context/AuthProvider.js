import React, { createContext, useEffect, useState } from 'react';
import { app } from '../Firebase/Firebase.init';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail, updateProfile, onAuthStateChanged, deleteUser, signOut } from "firebase/auth";


export const AuthContext = createContext()

const auth = getAuth(app)

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    // register 
    const register = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // log in 
    const logIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    // reset password 
    const resetPassword = (email) => {
        setLoading(true)
        return sendPasswordResetEmail(auth, email);
    }

    //updateProfile
    const updateInfo = (profile) => {
        setLoading(true)
        return updateProfile(auth.currentUser, profile)
    }

    //current user
    useEffect(() => {

        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        })
        return unSubscribe()
    }, [])

    //delete a user
    const deleteUserAccount = () => {
        const user = auth.currentUser
        return deleteUser(user)
    }


    // log out 
    const logOut = () => {
        return signOut()
    }

    const authInfo = {
        user,
        register,
        logIn,
        resetPassword,
        updateInfo,
        loading,
        setLoading,
        deleteUserAccount,
        logOut

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;