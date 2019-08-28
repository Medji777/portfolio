import React, {useState,useContext} from 'react';
import Header from "./Header";
import {Context} from "../../Context/Context";

const HeaderContainer = () => {

    const [isOpen, setIsOpen] = useState(false);
    const {menuLink} = useContext(Context);

    const openMenu = () => {
        setIsOpen(!isOpen);
    };

    const onCloseClick = (e) => {
        if (e.currentTarget) {
            setIsOpen(false);
        }
    };

    const elemClass = (elem, activeElement) => isOpen ? `${elem} ${activeElement}` : elem;
    
    return <Header elemClass={elemClass} menuLink={menuLink} openMenu={openMenu} onCloseClick={onCloseClick}/>
};

export default HeaderContainer;