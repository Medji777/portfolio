import React from 'react';
import s from "./ContactForm.module.css";

const ContactForm = () => {
        return (
            <form className={s.contact_form} onSubmit={(e)=> e.preventDefault()}>
                <div className={s.form_field}>
                    <input className={s.form_control} type="text" placeholder={'Name'}/>
                </div>
                <div className={s.form_field}>
                    <input className={s.form_control} type="text" placeholder={'E-mail'}/>
                </div>
                <div className={s.form_field}>
                    <textarea className={s.form_control} placeholder={'Your message'} cols={30} rows={10}/>
                </div>
                <button className={'wow'} type={'submit'}>Send Message</button>
            </form>
        )
};

export default ContactForm;