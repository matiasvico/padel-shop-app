import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyCpyC0lz3GfXUpoILKM4qgeitxfEd4qjeo",
    authDomain: "padel-shop-58338.firebaseapp.com",
    projectId: "padel-shop-58338",
    storageBucket: "padel-shop-58338.firebasestorage.app",
    messagingSenderId: "859598395675",
    appId: "1:859598395675:web:d3097d6ed45eeddbc21bbe"
};

const app = initializeApp(firebaseConfig);


const auth = getAuth(app);
const db = getFirestore(app);


export { app, auth, db };