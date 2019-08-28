import React from 'react';
import s from "../Projects.module.css";

const Project = ({img, src, title, description}) => {
    return (
        <div className={s.project}>
            <figure>
                <div className={s.img_cont}>
                    <img src={img} alt=""/>
                    <div className={s.img_prev}>
                        <a href={src}>Смотреть</a>
                    </div>
                </div>
                <figcaption>
                    <h5>{title}</h5>
                    <p>{description}</p>
                </figcaption>
            </figure>
        </div>
    )
};

export default Project;