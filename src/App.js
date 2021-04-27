import React from 'react';
import { GlobalStyle } from './Components/Style/GlobalStyle';
import { NavBar } from './Components/NavBar/NavBar';
import { Menu } from './Components/Menu/Menu';
import { ModalItem } from './Components/Modal/ModalItem';
import { Order } from './Components/Order/Order';
import { useOpenItem } from './Components/Hooks/useOpenItem';
import { useOrders } from './Components/Hooks/useOrders';
import { useTitle } from './Components/Hooks/useTitle';
import { OrderConfirm } from './Components/Order/OrderConfirm';
import { useOrderConfirm } from './Components/Hooks/useOrderConfirm';
import { OrderMessage } from './Components/Order/OrderMessage';
import { auth, provider } from './firebase';
import { useDispatch } from 'react-redux';
import { login, logout } from './features/userSlice';
import './App.css';

function App() {
  const dispatch = useDispatch();
  
  const handleLogin = () => {
    auth.signInWithPopup(provider)
      .then((result) => {
        dispatch(login({
          userName: result.user.displayName,
          userEmail: result.user.email,
          userAvatar: result.user.photoURL
        }))
      })
    }

  const handleLogout = () => {
    auth.signOut()
      .then(() => {
        dispatch(logout())
      })
      .catch((err) => console.error())
  }

  const openItem = useOpenItem();
  const orders = useOrders();
  const orderConfirm = useOrderConfirm();

  useTitle(openItem.openItem);
  
  return (
    <>
      <GlobalStyle />
      <OrderMessage />
      <NavBar 
        login={handleLogin}
        logout={handleLogout}
      />
      <Order  
        {...orders}
        {...openItem}
        {...orderConfirm}
        login={handleLogin}
      />
      <Menu {...openItem}/>
      {
        openItem.openItem && 
        <ModalItem  
          {...openItem} 
          {...orders}
        />
      }
      {
        orderConfirm.openOrderConfirm && 
        <OrderConfirm 
          {...orders} 
          //{...auth} 
          {...orderConfirm}
        />
      }
    </>
  );
}

export default App;
