import firebase from 'firebase';

const firebaseConfig = {
    apiKey: 'AIzaSyBsrh-PyudCE4m7tsmlhoRY_nHhXAwbyPY',
    authDomain: 'restidonalds.firebaseapp.com',
    projectId: 'restidonalds',
    storageBucket: 'restidonalds.appspot.com',
    messagingSenderId: '171199888811',
    appId: '1:171199888811:web:acbaf5915f594596e6a6ee'
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };