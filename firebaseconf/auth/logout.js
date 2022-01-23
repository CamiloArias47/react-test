import { firebaseApp } from 'firebaseconf/init'
import { getAuth, signOut } from "firebase/auth";

const auth = getAuth(firebaseApp);

export const logout = () => {
    const auth = getAuth();
    return signOut(auth)
 }