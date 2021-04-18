import React, { useContext } from 'react';
import './Header.css';
import logoImg from '../../Images/logo.svg';
import signImg from '../../Images/sign.svg';

export const Header = ({ authentication, login, logout }) => {
    return (
        <header className="header">
            <div className="header__logo">
                <img className="header__logo-image" src={logoImg} alt="Logo"/>
                <h1 className="header__title">ReStiDonald's</h1>
            </div>
            
            {authentication ? 
                <div className="header__user">
                    <figure className="header__figure">
                        <img className="header__user-image" src={authentication.photoURL} alt={authentication.displayName}/>
                        <figcaption>{authentication.displayName}</figcaption>
                    </figure>
                    <button className="header__logout" onClick={logout}>logout</button>
                </div> :
                <button className="header__sign" onClick={login}>
                    <figure className="header__figure">
                        <img className="header__sign-image" src={signImg} alt="Sign"/>
                        <figcaption>login</figcaption>
                    </figure>
                </button>
            }
        </header>
    )
};