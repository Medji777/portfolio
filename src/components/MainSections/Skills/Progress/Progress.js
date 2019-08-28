import React from 'react';
import s from "../Skills.module.css";

const Progress = ({refer,progress,title}) => {
        return (
            <div className={s.progress_bar}>
                <span className={s.progress_title}>{title}</span>
                <div className={s.progress} ref={refer} data-progress={`${progress}%`}/>
            </div>
        )
};

export default Progress;