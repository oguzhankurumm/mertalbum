import firebase from '@react-native-firebase/app'
import firestore from '@react-native-firebase/firestore'
import messaging from '@react-native-firebase/messaging';

const firebaseConfig = {
    apiKey: "AIzaSyCjGbY4s8v8qc5plr7NjTpiPr13H4S4_Mk",
    authDomain: "mertalbumcom.firebaseapp.com",
    projectId: "mertalbumcom",
    storageBucket: "mertalbumcom.appspot.com",
    messagingSenderId: "526420833088",
    appId: "1:526420833088:web:ae96ac0f4f9bc7953e40a5",
    measurementId: "G-C98QT86WJ8"
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export { firebase, firestore, messaging }