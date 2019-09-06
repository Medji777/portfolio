import React from 'react';
import Mouse3DHoc from "../../Mouse3dHOC/Mouse3dHoc";
import s from './NotFound.module.css';

const NotFound = ({onStart3d,onStop3d}) => {
    return (
        <section className={`${s.notfound} ${s.main}`}>
            <div className={s.container}>
                <div className={s.wrapper} onMouseMove={onStart3d} onMouseLeave={onStop3d}>
                    <h2>404 Not Found</h2>
                    <span>404 Not Found</span>
                </div>
            </div>
        </section>
    )
};

export default Mouse3DHoc(NotFound);