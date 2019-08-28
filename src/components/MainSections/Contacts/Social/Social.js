import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import s from "./Social.module.css";

const SocialLink = ({social}) => {
    return (
        <>
            <h4>Social contacts with me</h4>
            <div className={s.contact}>
                <ul className={s.contact_list}>
                    {Object.keys(social).map(icon => <li key={icon}><a href={social[icon]} target='_blank'
                                                                       rel='noreferrer noopener'><FontAwesomeIcon
                        icon={['fab', `${icon}`]}/></a></li>)}
                </ul>
            </div>
        </>
    )
};

export default SocialLink;