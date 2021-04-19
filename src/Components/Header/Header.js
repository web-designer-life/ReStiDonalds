import React, { useContext } from 'react';
import './Header.css';
import logoImg from '../../Images/logo.svg';
import signImg from '../../Images/sign.svg';
import { auth, provider } from '../../firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUserName, selectUserEmail, selectUserAvatar } from '../../features/userSlice';

export const Header = () => {
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
        <header className="header">
            <div className="header__logo">
                <img className="header__logo-image" src={logoImg} alt="Logo"/>
                <h1 className="header__title">ReStiDonald's</h1>
            </div>
            {
                userName ? (
                    <div className="header__user">
                        <figure className="header__figure">
                            <img className="header__user-image" src={userAvatar} alt={userName}/>
                            <figcaption>{userName}</figcaption>
                        </figure>
                        <button className="header__logout" onClick={handleLogout}>logout</button>
                    </div>
                ) : (
                    <button className="header__sign" onClick={handleLogin}>
                        <figure className="header__figure">
                            <img className="header__sign-image" src={signImg} alt="Sign"/>
                            <figcaption>login</figcaption>
                        </figure>
                    </button>
                )
            }
        </header>
    )
};