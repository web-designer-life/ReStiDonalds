import React, { useRef }  from 'react';
import styled from 'styled-components';
import { totalPriceItems, formatCurrency } from '../Functions/secondaryFunction';
import trashImage from '../../Images/trash.svg';

const OrderItemStyled = styled.li`
    display: flex;
    margin: 0 0 15px 0;
    flex-wrap: wrap;
    cursor: pointer;
`;

const ItemName = styled.span`
    flex-grow: 1;
    @media (max-width: 875px) {
        width: 100%;
    }
    @media (max-width: 550px) {
        width: auto;
    }
`;

const ItemPrice = styled.span`
    text-align: right;
    min-width: 65px;
    margin: 0 10px 0 20px;
`;

const TrashButton = styled.button`
    width: 24px;
    height: 24px;
    border-color: transparent;
    background-color: transparent;
    background-image: url(${trashImage});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    cursor: pointer;
`;

const Toppings = styled.div`
    color: #9a9a9a;
    font-size: 14px;
    width: 100%;
`;

export const OrderListItem = ({ 
    order, 
    index, 
    deleteItem, 
    setOpenItem 
}) => {
    const toppings = order.topping
        .filter((item) => item.checked)
        .map((item) => item.name)
        .join(', ');

    const refDeleteButton = useRef(null);

    return (
        <OrderItemStyled onClick={(evt) => evt.target !== refDeleteButton.current && setOpenItem({...order, index})}>
            <ItemName>{order.name} {order.choice}</ItemName>
            <span>{order.count}</span>
            <ItemPrice>{formatCurrency(totalPriceItems(order))}</ItemPrice>
            <TrashButton 
                ref={refDeleteButton} 
                onClick={() => deleteItem(index)}
            />
            {toppings && <Toppings>Допы: {toppings}</Toppings>}
        </OrderItemStyled>
    )
};
