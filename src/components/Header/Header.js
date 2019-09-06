import React from 'react';
import {NavLink} from "react-router-dom";
import s from "./Header.module.css";

const Header = ({elemClass,openMenu,menuLink,onCloseClick}) => {
    return (
        <nav className={elemClass(s.nav, s.nav_active)}>
            <button onClick={openMenu} className={elemClass(s.menu_btn, s.menu_btn_active)}>
                <span className={elemClass(s.menu, s.active)}/>
            </button>
            <div className={elemClass(s.wrapper, s.wrapper_active)}>
                <ul className={elemClass(s.nav__list, s.nav__list_active)}>
                    {menuLink.map(link => <li key={link.id}>
                        <NavLink exact={link.exactNav} to={link.path} activeClassName={s.active__link}
                                 onClick={onCloseClick}>{link.title}</NavLink>
                    </li>)}
                </ul>
            </div>
        </nav>
    )
};

export default Header;