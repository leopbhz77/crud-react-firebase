// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDJ0CDiHO0B0HlssoyULDb1pNOhW32fGrM",
    authDomain: "tutorial-react-leopbhz77.firebaseapp.com",
    projectId: "tutorial-react-leopbhz77",
    storageBucket: "tutorial-react-leopbhz77.appspot.com",
    messagingSenderId: "412342291388",
    appId: "1:412342291388:web:c4ec53c0e2be43bf4839b9",
    measurementId: "G-NSEJC66QBB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
// const analytics = getAnalytics(app);