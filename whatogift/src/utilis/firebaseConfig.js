import firebase from "firebase";
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDiU4-Prz_d1Gc9r3Q01r3erwLJ4T4y5Kk",
    authDomain: "testproj-93a7c.firebaseapp.com",
    projectId: "testproj-93a7c",
    storageBucket: "testproj-93a7c.appspot.com",
    messagingSenderId: "7819622082502",
    appId: "1:7819622082502:web:8b719ac74016f920873fc7"
};

firebase.initializeApp(firebaseConfig);
export default firebase;