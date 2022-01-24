import { firebaseApp } from 'firebaseconf/init'
import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth(firebaseApp);

export const authChanged = onChange => {
    onAuthStateChanged(auth, user => {
        if(user){
            onChange(user)
        }
        else{
            onChange(false)
        }
    });
} 