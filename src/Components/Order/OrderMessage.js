import React from "react";
import styled from "styled-components";

const Message = styled.div`
    background-color: white;
    color: black;
    position: fixed;
    top: 30px;
    right: 30px;
    z-index: 22;
    padding: 20px 30px;
    border-radius: 10px;
    display: none;
`;

export const OrderMessage = () => {
    return (
        <Message id="message">
            Спасибо за заказ!
        </Message>
    )
};
