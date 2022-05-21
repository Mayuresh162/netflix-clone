import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBhqZAgVarLxvODSv6acLL2R5gIpRVW9tg",
    authDomain: "netflix-clone-69580.firebaseapp.com",
    projectId: "netflix-clone-69580",
    storageBucket: "netflix-clone-69580.appspot.com",
    messagingSenderId: "1028937463103",
    appId: "1:1028937463103:web:82b044100450e029b78f8a"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth }
export default db;