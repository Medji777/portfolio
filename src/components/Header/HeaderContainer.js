import React, {useState} from 'react';
import Header from "./Header";
import routes from "../MainSections/routes";

const HeaderContainer = () => {

    const [isOpen, setIsOpen] = useState(false);

    const openMenu = () => {
        setIsOpen(!isOpen);
    };

    const onCloseClick = (e) => {
        if (e.currentTarget) {
            setIsOpen(false);
        }
    };

    const elemClass = (elem, activeElement) => isOpen ? `${elem} ${activeElement}` : elem;
    
    return <Header elemClass={elemClass} menuLink={routes} openMenu={openMenu} onCloseClick={onCloseClick}/>
};

export default HeaderContainer;