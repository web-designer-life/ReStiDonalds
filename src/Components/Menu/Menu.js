import React from 'react';
import styled from 'styled-components';
import { ListItem } from './ListItem';
import { Banner } from './Banner';
import { Preloader } from './Preloader';
import dbMenu from '../DBMenu';

const MenuStyled = styled.main`
    height: 100vh;
    margin: 80px 0 0 420px;
    @media (max-width: 875px) {
        margin: 80px 0 0 280px;
    }
    @media (max-width: 550px) {
        margin: 0;
    }
`;

const SectionMenu = styled.section`
    padding: 15px;
`;

export const Menu = ({ setOpenItem }) => (
    <MenuStyled>
        <Banner/>
        {
            dbMenu ? 
            <>
                <SectionMenu>
                    <h2>Бургеры</h2>
                    <ListItem 
                        itemList={dbMenu.burger}
                        setOpenItem={setOpenItem}
                    />
                </SectionMenu>

                <SectionMenu>
                    <h2>Закуски / Напитки</h2>
                    <ListItem 
                        itemList={dbMenu.other}
                        setOpenItem={setOpenItem}
                    />
                </SectionMenu>
            </> :
            <Preloader />
        }
    </MenuStyled>
);
