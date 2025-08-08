import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { AuthContext } from "./AuthContext";
import { auth } from "../firebase.init";
import { useEffect, useState } from "react";

function AuthProvider({children}) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const provider = new GoogleAuthProvider();


    function createUser(email, password) {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    function loginUser(email, password) {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    function setNameImg(name, imgUrl) {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: imgUrl
        });
    }

    function logOut() {
        setLoading(true);
        return signOut(auth);
    }

    function signInWithGoogle() {
        return signInWithPopup(auth, provider);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser);
            setLoading(false);
            setUser(currentUser)
        });

        return (() => {
            unSubscribe();
        })
    })

    const necessaryFunc = {
        createUser, loginUser, setNameImg, user, logOut, loading, signInWithGoogle
    }
    return(
        <AuthContext value = {necessaryFunc}>
            { children }
        </AuthContext>
    )
}

export default AuthProvider;