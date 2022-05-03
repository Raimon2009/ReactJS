import React, { useState } from "react";
import appFb from "../services/firebaseConfig";
import { getAuth, onAuthStateChanged, signOut, signInWithEmailAndPassword } from 'firebase/auth';



let AuthContext = React.createContext(null);

export function AuthProvider({ children }) {
    const [user, setUser] = useState();

    const signin = async (newUser, callback) => {
        const auth = getAuth(appFb);
        await signInWithEmailAndPassword(auth, newUser.email, newUser.password);
        await onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
        });
        callback();
    };

    let signout = async (callback) => {
        const auth = getAuth(appFb);
        await signOut(auth);
        setUser(null);
        callback();
    };

    const value = { user, signin, signout };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;

}

export const useAuth = () => {
    return React.useContext(AuthContext);
}

