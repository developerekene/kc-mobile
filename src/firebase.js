import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from 'firebase/firestore';

// --- AUTHENTICATION IMPORTS FOR REACT NATIVE ---
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';


const firebaseConfig = {
    apiKey: "AIzaSyCxSBa3szWJQq4XTljacDXNyV_fEcW5Ui4",
    authDomain: "d-roid-technologies.firebaseapp.com",
    projectId: "d-roid-technologies",
    storageBucket: "d-roid-technologies.firebasestorage.app",
    messagingSenderId: "1097060758359",
    appId: "1:1097060758359:web:c55593be543e1a68260412",
    measurementId: "G-P85PQM3KWH"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

export { storage, auth, db, app };