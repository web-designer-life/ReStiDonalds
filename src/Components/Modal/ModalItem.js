import React, { useContext } from 'react';
import styled from 'styled-components';
import { ButtonCheckout } from '../Style/ButtonCheckout';
import { CountItem } from './CountItem';
import { useCount } from '../Hooks/useCount';
import { totalPriceItems, formatCurrency } from '../Functions/secondaryFunction';
import { Toppings } from '../Modal/Toppings';
import { Choices } from '../Modal/Choices';
import { useToppings } from '../Hooks/useToppings';
import { useChoices } from '../Hooks/useChoices';
import { Context, ContextItem } from '../Functions/context';

export const Overlay = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    z-index: 21;
`;

const Modal = styled.div`
    background-color: white;
    width: 600px;
    min-height: 600px;
`;

const Banner = styled.div`
    background-image: url(${({img}) => img});
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 200px;
`;

const Content = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: calc(100% - 200px);
    padding: 20px 53px 43px 37px;
`;

const HeaderContent = styled.div`
    display: flex;
    justify-content: space-between;
    font-family: Pacifico;
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    line-height: 53px;
`;

const TotalPriceItem = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const ModalItem = () => {
    const {
        openItem: { openItem, setOpenItem },
        orders: { orders, setOrders },
    } = useContext(Context);

    const counter = useCount(openItem.count);
    const toppings = useToppings(openItem);
    const choices = useChoices(openItem);
    const isEdit = openItem.index > -1;

    const closeModal = (evt) => {
        if (evt.target.id === 'overlay') {
            setOpenItem(null);
        }
    };

    const order = {
        ...openItem,
        count: counter.count,
        topping: toppings.toppings,
        choice: choices.choice,
    };

    const editOrder = () => {
        const newOrders = [...orders];
        newOrders[openItem.index] = order;
        setOrders(newOrders);
        setOpenItem(null);
    }

    const addToOrder = () => {
        setOrders([...orders, order]);
        setOpenItem(null);
    };

    return (
        <ContextItem.Provider value={{
            counter,
            toppings,
            choices,
            openItem: openItem,
        }}>
            <Overlay id="overlay" onClick={closeModal}>
                <Modal>
                    <Banner img={openItem.img}/>
                    <Content>
                        <HeaderContent>
                            <div>{openItem.name}</div>
                            <div>{formatCurrency(openItem.price)}</div>
                        </HeaderContent>
                        <CountItem />
                        {openItem.toppings && <Toppings />}
                        {openItem.choices && <Choices />}
                        <TotalPriceItem>
                            <span>Цена:</span>
                            <span>{formatCurrency(totalPriceItems(order))}</span>
                        </TotalPriceItem>
                        <ButtonCheckout 
                            onClick={isEdit ? editOrder : addToOrder}
                            disabled={order.choices && !order.choice}
                            >{isEdit ? 'Редактировать' : 'Добавить'}</ButtonCheckout>
                    </Content>
                </Modal>
            </Overlay>
        </ContextItem.Provider>
    )
};
