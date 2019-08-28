import React from 'react';
import loading from './../../assets/svg/prev_black.svg';
import s from './Loader.module.css';

const Loader = ({wrap,loader}) => {
    return (
        <div className={s.loader_wrap} style={wrap}>
            <img style={loader} src={loading} alt=""/>
        </div>
    )
};

export default Loader;