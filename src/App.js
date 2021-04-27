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
import './App.css';

function App() {
  const openItem = useOpenItem();
  const orders = useOrders();
  const orderConfirm = useOrderConfirm();

  useTitle(openItem.openItem);
  
  return (
    <>
      <GlobalStyle />
      <OrderMessage />
      <NavBar />
      <Order  
        {...orders}
        {...openItem}
        //{...auth}
        {...orderConfirm}
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
