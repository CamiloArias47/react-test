import { firebaseApp } from 'firebaseconf/init'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const auth = getAuth(firebaseApp);

export const loginGoogle = ()=>{
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider)
}