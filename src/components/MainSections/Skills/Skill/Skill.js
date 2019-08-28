import React from 'react';
import s from "../Skills.module.css";

const Skill = ({src, title, description}) => {

    return (
        <div className={s.skill}>
            <figure>
                <div className={s.img__t}>
                    <div className={s.skill__bg}>
                        <img src={src} className={s.skill__img} alt=''/>
                    </div>
                    <span className={s.skill__title}>{title}</span>
                </div>
                <figcaption>
                    <div className={s.skill__desc}>
                        {description}
                    </div>
                </figcaption>
            </figure>
        </div>
    )

};

export default Skill;