import { firebaseApp } from 'firebaseconf/init'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth(firebaseApp);

export const register = ({email, password}) => {

    return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        var user = userCredential.user;
        return user;
    }) 
}