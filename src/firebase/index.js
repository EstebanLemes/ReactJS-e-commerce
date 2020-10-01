import * as firebase from 'firebase/app';
import 'firebase/firestore';

const app = firebase.initializeApp({
    apiKey: "AIzaSyClIBC3fhgD9SD1T9cT2sMvym8SKMRW2eo",
    authDomain: "e-commerce-coder-esteban.firebaseapp.com",
    databaseURL: "https://e-commerce-coder-esteban.firebaseio.com",
    projectId: "e-commerce-coder-esteban",
    storageBucket: "e-commerce-coder-esteban.appspot.com",
    messagingSenderId: "1070483649227",
    appId: "1:1070483649227:web:11ee6e5525e07c02c3214e",
    measurementId: "G-ZD5XDT8PW7"
});

export function getFirebase(){
    return app;
}

export function getFirestore(){
    return firebase.firestore(app);
}