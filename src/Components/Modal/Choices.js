import React from 'react';
import styled from 'styled-components';

const ChoiceWrap = styled.div`
    max-width: 500px;
    margin: 0 auto;
    column-count: 2;
    column-gap: 15px;
`;

const ChoiceRadio = styled.input`
    cursor: pointer;
    margin: 0 5px 0 0;
`;

const ChoiceLabel = styled.label`
    cursor: pointer;
    display: block;
`;

export function Choices({ choice, changeChoices, openItem }) {
    return (
        <>
            <h3>Выбирайте:</h3>
            <ChoiceWrap>
                {
                    openItem.choices.map((item, index) => (
                        <ChoiceLabel key={index}>
                            <ChoiceRadio 
                                type="radio" 
                                name="choices"
                                checked={choice === item} 
                                value={item} 
                                onChange={changeChoices}
                            />
                            {item}
                        </ChoiceLabel>
                    ))
                }
            </ChoiceWrap>
        </>
    )
}
