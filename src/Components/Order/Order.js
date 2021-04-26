import React, { useContext } from 'react';
import styled from 'styled-components';
import { ButtonCheckout } from '../Style/ButtonCheckout';
import { OrderListItem } from './OrderListItem';
import { totalPriceItems, formatCurrency } from '../Functions/secondaryFunction';
import { Context } from '../Functions/context';

const OrderStyled = styled.section`
    position: fixed;
    display: flex;
    flex-direction: column;
    top: 80px;
    left: 0;
    background-color: white;
    width: 420px;
    height: calc(100% - 80px);
    box-shadow: 3px 4px 5px rgba(0, 0, 0, 0.25);
    padding: 20px;
    @media (max-width: 875px) {
        width: 280px;
    }
    @media (max-width: 550px) {
        width: 100%;
        position: static;
        margin: 80px 0 0 0;
    }
`;

export const OrderTitle = styled.h2`
    text-transform: uppercase;
    text-align: center;
    margin: 0 0 15px 0;
    @media (max-height: 450px) {  
        margin: 0;
    }
`;

const OrderContent = styled.div`
    flex-grow: 1;
    overflow: auto;
`;

const OrderList = styled.ul``;

export const TotalPrice = styled.span`
    text-align: right;
    min-width: 65px;
    margin: 0 0 0 20px;
`;

export const Total = styled.div`
    display: flex;
    margin: 10px 35px 10px 35px;
    & span:first-child {
        flex-grow: 1;
    }
`;

const TotalCount = styled.span`
    margin: 0 0 0 15px;
`;

const EmptyList = styled.p`
    text-align: center;
`;

export const Order = () => {
    const {
        auth: { authentication, logIn },
        orders: { orders, setOrders },
        orderConfirm: { setOpenOrderConfirm },
    } = useContext(Context);

    const deleteItem = (index) => {
        const newOrders = orders.filter((item, i) => index !== i);

        setOrders(newOrders);
    };

    const total = orders.reduce((result, order) => totalPriceItems(order) + result, 0);

    const totalCounter = orders.reduce((result, order) => order.count + result, 0);

    return (
        <OrderStyled>
            <OrderTitle>Ваш заказ</OrderTitle>
            <OrderContent>
                {orders.length ? 
                <OrderList>
                    {orders.map((order, index) => <OrderListItem 
                        key={index}
                        order={order}
                        deleteItem={deleteItem}
                        index={index}
                    />)}
                </OrderList> : 
                <EmptyList>Список заказов пуст</EmptyList>}
            </OrderContent>
            {orders.length ?
                <>
                    <Total>
                        <span>Итого</span>
                        <TotalCount>{totalCounter}</TotalCount>
                        <TotalPrice>{formatCurrency(total)}</TotalPrice>
                    </Total>
                    <ButtonCheckout onClick={() => {
                        if (authentication) {
                            setOpenOrderConfirm(true);
                        } else {
                            logIn();
                        }
                    }}>Оформить</ButtonCheckout>
                </> : 
                null
            }
        </OrderStyled>
    )
};
