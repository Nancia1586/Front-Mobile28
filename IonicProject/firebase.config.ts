// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAZJCvedRqY8v4Zd_SF--RU8hERzl9oAVE",
    authDomain: "enchere-b829a.firebaseapp.com",
    projectId: "enchere-b829a",
    storageBucket: "enchere-b829a.appspot.com",
    messagingSenderId: "1065083183928",
    appId: "1:1065083183928:web:ce1e103e34629f492b17cd",
    measurementId: "G-2ZP3HCXRL0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);