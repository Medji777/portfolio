import React,{useContext} from 'react';
import Wrapper from "../../Wrapper/Wrapper";
import SocialLink from "./Social/Social";
import Contact from "./Contact/Contact";
import {Context} from "../../../Context/Context";
import s from './Contacts.module.css';

const Contacts = ({routes}) => {

    const {social} = useContext(Context);

    return (
        <Wrapper classSection={s.contacts} routes={routes}>
            <div className={s.container}>
                <Contact/>
                <SocialLink social={social}/>
            </div>
        </Wrapper>
    )
};

export default Contacts;