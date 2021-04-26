import styled from 'styled-components';

export const ButtonCheckout = styled.button`
    display: block;
    margin: 0 auto;
    width: 250px;
    min-height: 65px;
    background-color: #299B01;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 21px;
    line-height: 25px;
    color: white;
    border-color: transparent;
    cursor: pointer;
    transition-property: color, background-color, border-color;
    transition-duration: .3s;
    &:hover {
        color: #299B01;
        background-color: white;
        border-color: #299B01;
    }
    &:disabled {
        color: #bbbbbb;
        background-color: #cccccc;
        border-color: #aaaaaa;
    }
    @media (max-width: 875px) {
        width: 100%;
    }
    @media (max-height: 370px) {  
        min-height: 40px;
    }
`;
