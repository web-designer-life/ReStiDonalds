import React, { useContext } from 'react';
import styled from 'styled-components';
import { ContextItem } from '../Functions/context';

const ToppingWrap = styled.div`
    max-width: 500px;
    margin: 0 auto;
    column-count: 2;
    column-gap: 15px;
`;

const ToppingLabel = styled.label`
    cursor: pointer;
    display: block;
`;

const ToppingCheckbox = styled.input`
    cursor: pointer;
    margin: 0 5px 0 0;
`;

export function Toppings() {
    const { toppings: { toppings, checkToppings } } = useContext(ContextItem);

    return (
        <>
            <h3>Добавки</h3>
            <ToppingWrap>
                {toppings.map((item, index) => (
                    <ToppingLabel key={index}>
                        <ToppingCheckbox 
                            type="checkbox" 
                            checked={item.checked} 
                            onChange={() => checkToppings(index)}
                        />
                        {item.name}
                    </ToppingLabel>
                ))}
            </ToppingWrap>
        </>
    )
}
