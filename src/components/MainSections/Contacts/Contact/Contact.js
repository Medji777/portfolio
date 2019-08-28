import React from 'react';
import s from "../Contacts.module.css";
import ContactForm from "./ContactForm/ContactForm";

const Contact = () => {
    return (
        <>
            <h3>Contacts</h3>
            <div className={s.contact}>
                <ContactForm/>
            </div>
        </>
    )
};

export default Contact;