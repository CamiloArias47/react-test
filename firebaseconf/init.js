import { initializeApp } from "firebase/app"

const firebaseConfig = {
    apiKey: "AIzaSyBNFwQRNGfuRWZMQQLHB6dwlKhGYYPnWY0",
    authDomain: "react-test-443e8.firebaseapp.com",
    projectId: "react-test-443e8",
    storageBucket: "react-test-443e8.appspot.com",
    messagingSenderId: "151540330453",
    appId: "1:151540330453:web:f379841b481b7702d7975c"
  }

export const firebaseApp = initializeApp(firebaseConfig);