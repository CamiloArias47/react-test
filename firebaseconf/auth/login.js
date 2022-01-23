import { firebaseApp } from 'firebaseconf/init'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth(firebaseApp);

export const login = ({email,password}) =>{
    return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        return userCredential.user;
    })
}
