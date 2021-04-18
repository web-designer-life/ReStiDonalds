import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import { Header } from './Components/Header/Header';
import { useAuth } from './Components/Hooks/useAuth';
import './style.css';

const firebaseConfig = {
  apiKey: 'AIzaSyBsrh-PyudCE4m7tsmlhoRY_nHhXAwbyPY',
  authDomain: 'restidonalds.firebaseapp.com',
  projectId: 'restidonalds',
  storageBucket: 'restidonalds.appspot.com',
  messagingSenderId: '171199888811',
  appId: '1:171199888811:web:acbaf5915f594596e6a6ee'
};

firebase.initializeApp(firebaseConfig);

function App() {
  const auth = useAuth(firebase.auth);

  return (
    <Header {...auth}/>
  );
}

export default App;
