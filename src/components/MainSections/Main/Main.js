import React from 'react';
import Wrapper from "../../Wrapper/Wrapper";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import ParticleField from "react-particles-webgl";
import s from './Main.module.css';

const Main = ({social, routes, onStart3d, onStop3d, config}) => {
    return (
        <>
            <div className={s.bg}>
                <ParticleField config={config}/>
            </div>
            <Wrapper classSection={`${s.about} ${s.main}`} routes={routes}>
                <div className={s.container}>
                    <div className={s.title}>
                        <h3>Hello!</h3>
                        <h2>My name is <span>Vladimir Dergachev</span></h2>
                        <h1>I Front-end developer</h1>
                        <div className={s.icon}>
                            {Object.keys(social).map(icon => <a href={social[icon]} key={icon} target='_blank'
                                                                rel='noreferrer noopener'><FontAwesomeIcon
                                icon={['fab', `${icon}`]}/></a>)}
                        </div>
                    </div>
                    <div className={s.img__cont} onMouseMove={onStart3d} onMouseLeave={onStop3d}>
                        <img className={s.img__avtr} src={'#'} alt={''}/>
                        <div className={s.img__r}/>
                    </div>
                </div>
            </Wrapper>
        </>
    )
};

export default Main;