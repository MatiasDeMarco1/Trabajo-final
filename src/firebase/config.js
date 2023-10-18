
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBsM2U4064OhuMQPJ4VgWv2lR4ldiOt994",
    authDomain: "addidas-21e2f.firebaseapp.com",
    projectId: "addidas-21e2f",
    storageBucket: "addidas-21e2f.appspot.com",
    messagingSenderId: "894206988092",
    appId: "1:894206988092:web:8a886cd9551ef4f7ea5839"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)