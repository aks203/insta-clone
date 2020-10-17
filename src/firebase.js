import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBIXaR7sGmzHF2pwFAaM8GsPy6YENBvo6c",
    authDomain: "insta-clone-20fa7.firebaseapp.com",
    databaseURL: "https://insta-clone-20fa7.firebaseio.com",
    projectId: "insta-clone-20fa7",
    storageBucket: "insta-clone-20fa7.appspot.com",
    messagingSenderId: "621544957150",
    appId: "1:621544957150:web:5f90a49d5ceff025cfce4f",
    measurementId: "G-00RNG68DZW"
});

const db = firebaseApp.fireStore()
const auth = firebase.auth()
const storage = firebase.storage()

export {db, auth, storage}

