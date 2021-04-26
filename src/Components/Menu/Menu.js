import React, { useContext } from 'react';
import styled from 'styled-components';
import { ListItem } from './ListItem';
import { Banner } from './Banner';
import { Preloader } from './Preloader';
import { Context } from '../Functions/context';
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

export const Menu = () => {
    //const { dbMenu } = useContext(Context);
    
    return (
        <MenuStyled>
            <Banner/>
            {dbMenu ? 
                <>
                    <SectionMenu>
                        <h2>Бургеры</h2>
                        <ListItem 
                            itemList={dbMenu.burger}
                        />
                    </SectionMenu>

                    <SectionMenu>
                        <h2>Закуски / Напитки</h2>
                        <ListItem 
                            itemList={dbMenu.other}
                        />
                    </SectionMenu>
                </> :
                <Preloader />
            }
        </MenuStyled>  
    )
};
