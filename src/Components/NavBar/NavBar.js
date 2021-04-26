import React from 'react';
import styled from 'styled-components';
import logoImg from '../../Images/logo.svg';
import loginImg from '../../Images/sign.svg';

import { auth, provider } from '../../firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUserName, selectUserEmail, selectUserAvatar } from '../../features/userSlice';

const NavBarStyled = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 20;
    min-height: 80px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;
    background-color: #299B01;
    color: white;
`;

const Logo = styled.div`
    display: flex;
    align-items: center;
`;

const H1 = styled.h1`
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    margin: 0 0 0 15px;
    @media (max-width: 650px) {
        font-size: 20px;
    }
`;

const ImgLogo = styled.img`
    width: 50px;
`;

const Login = styled.button`
    background-color: transparent;
    border-color: transparent;
    color: white;
    font-size: 16px;
`;

const ImgLogin = styled.img`
    width: 32px;
`;

const ImgUser = styled.img`
    width: 32px;
    border-radius: 50px;
`;

const User = styled.div`
    display: flex;
    align-items: center;
    text-align: center;
`;

const Logout = styled.span`
    font-size: 20px;
    font-weight: 700;
    cursor: pointer;
    margin: 0 15px 0 0;
    @media (max-width: 650px) {
        margin: 0;
    }
`;

const Figure = styled.figure`
    margin: 0 30px;
    @media (max-width: 650px) {
        margin: 0 10px;
    }
`;

export const NavBar = () => {
    const dispatch = useDispatch();

    const userName = useSelector(selectUserName);
    const userAvatar = useSelector(selectUserAvatar);

    const handleLogin = () => {
        auth.signInWithPopup(provider)
            .then((result) => {
                dispatch(login({
                    userName: result.user.displayName,
                    userEmail: result.user.email,
                    userAvatar: result.user.photoURL
                }))
            })
    }

    const handleLogout = () => {
        auth.signOut()
            .then(() => {
                dispatch(logout())
            })
            .catch((err) => console.error())
    }
    
    return (
        <NavBarStyled>
            <Logo>
                <ImgLogo src={logoImg} alt="Logo Image"/>
                <H1>ReStiDonald’s</H1>
            </Logo>
            {
                userName ? (
                    <User>
                        <Figure>
                            <ImgUser src={userAvatar} alt={userName}/>
                            <figcaption>{userName}</figcaption>
                        </Figure>
                        <Logout title="Logout" onClick={logout}>X</Logout>
                    </User>
                ) : (
                    <Login onClick={login}>
                        <Figure>
                            <ImgLogin src={loginImg} alt="Login Image"/>
                            <figcaption>войти</figcaption>
                        </Figure>
                    </Login>
                )
            }
        </NavBarStyled>
    )
};
