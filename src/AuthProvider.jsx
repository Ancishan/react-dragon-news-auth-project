import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "./firebase.config";


// 1st kaj
export const AuthContext = createContext(null);



            // 3rd kaj children bosano
const AuthProvider = ({children}) => {

// 5 kaj hole.. ei kahenr user k AuthInfo er vitore bosate heb
const [user, setUser] = useState(null);
const [loading, setLoading] = useState(true);

// 6 no firebase theke create user krr jnno & return korbe fire base er createUserWithEmailAndPassword k then auth keo call krtte hbe ..createUser k AuthInfo te boste hbe
const createUser = (email, password) =>{
    setLoading(true);
return createUserWithEmailAndPassword(auth, email, password)
}

// firebase theke login user krr jnno & return korbe fire base er signInWithEmailAndPassword k then auth keo call krtte hbe ..createUser k AuthInfo te boste hbe ..er por jete hbe login page e
const signIn = (email, password) =>{
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
}

// jodi logOut kortte jai tar jnno pore logout k authinfo te dte hbe..jodi user login thake tahole take logout dekhanr jnno ei process..going to navbar
const logOut = () =>{
    setLoading(true);
    return signOut(auth)
}

// setUser k use krr jnno no1 useEffect .registration er agher kaj kore ese then AuthInfo te bosate hbe
useEffect(() =>{
   const unSubscribe = onAuthStateChanged(auth, currentUser =>{
        console.log('user in the auth state changed', currentUser);
        setUser(currentUser);
        setLoading(false)
    });
    return () => {
        unSubscribe()
    }
},[])



// 4 th kaj 1 ta variable nbo jeno sob jaiaga theke access kora jai and pore  value ={Authinfo} k AuthContext ke bosate hbe
const AuthInfo = {
    user,
    loading,
    createUser ,
    signIn, //7 no .eita hcce AuthContext er mddhhe ache..eita jehuto login er part ,tai register theke call dbe authContext die..er por go register.jsx
    logOut
    
   
}



    return (
        // second kaj
       <AuthContext.Provider value={AuthInfo}>
            {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;