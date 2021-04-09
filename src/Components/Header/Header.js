import React, { useContext } from 'react';
import './Header.css';
import logoImg from '../../Images/logo.svg';
import signImg from '../../Images/sign.svg';

export const Header = () => {
    return (
        <header className="header">
            <div className="header__logo">
                <img className="header__logo-image" src={logoImg} alt="Logo"/>
                <h1 className="header__title">MRDonald’s</h1>
            </div>
            {/* <div className="header__user">
                <figure>
                    <img className="header__user-image" alt="User"/>
                    <figcaption></figcaption>
                </figure>
                <span title="Logout">X</span>
            </div> */}
            <button className="header__sign">
                <figure>
                    <img className="header__sign-image" src={signImg} alt="Sign"/>
                    <figcaption>войти</figcaption>
                </figure>
            </button>
        </header>
    )
};