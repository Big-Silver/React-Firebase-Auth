import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCev_ayIdPIg9z1gR8eJkwY3qR5l6imNY4",
    authDomain: "react-tutorial-eab19.firebaseapp.com",
    databaseURL: "https://react-tutorial-eab19.firebaseio.com",
    projectId: "react-tutorial-eab19",
    storageBucket: "react-tutorial-eab19.appspot.com",
    messagingSenderId: "709908273363",
    appId: "1:709908273363:web:d5bfd0403ff3ef5a151c26",
    measurementId: "G-ZM75WG917F"
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
