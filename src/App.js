import React from 'react';
import { GlobalStyle } from './Components/Style/GlobalStyle';
import { NavBar } from './Components/NavBar/NavBar';
import { Menu } from './Components/Menu/Menu';
import { ModalItem } from './Components/Modal/ModalItem';
import { Order } from './Components/Order/Order';
import { useOpenItem } from './Components/Hooks/useOpenItem';
import { useOrders } from './Components/Hooks/useOrders';
import { useAuth } from './Components/Hooks/useAuth';
import { useTitle } from './Components/Hooks/useTitle';
import { useDB } from './Components/Hooks/useDB';
import { OrderConfirm } from './Components/Order/OrderConfirm';
import { useOrderConfirm } from './Components/Hooks/useOrderConfirm';
import { Context } from './Components/Functions/context';
import { OrderMessage } from './Components/Order/OrderMessage';
//import { auth, provider } from './firebase';
import './App.css';

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

function App() {
  const auth = firebase.auth();
  const openItem = useOpenItem();
  const orders = useOrders();
  const orderConfirm = useOrderConfirm();

  //const database = firebase.database();
  useTitle(openItem.openItem);
  //const dbMenu = useDB(database);
  
  return (
    <Context.Provider value={{
      auth,
      openItem,
      orders,
      orderConfirm,
      // database: database,
      // dbMenu: dbMenu,
    }}>
      <GlobalStyle />
      <NavBar />
      <Order />
      <Menu />
      {openItem.openItem && <ModalItem />}
      {orderConfirm.openOrderConfirm && <OrderConfirm />}
    </Context.Provider>
  );
}

export default App;
