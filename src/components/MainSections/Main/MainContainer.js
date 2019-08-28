import React, {useContext,useState,useEffect} from 'react';
import Main from "./Main";
import config from './ConfigParticle';
import Mouse3DHoc from "../../Mouse3dHOC/Mouse3dHoc";
import {Context} from "../../../Context/Context";

const MainContainer = (props) => {

    const {social} = useContext(Context);
    const [widthScreen,setWidthScreen] = useState(null);

    useEffect(()=>{
        setWidthScreen(window.screen.width);
        window.addEventListener('resize',screenResize);
       return () => {
           window.removeEventListener('resize',screenResize);
       }
    },[]);

    const screenResize = (e) => {
        setWidthScreen(e.currentTarget.innerWidth);
    };

    const screenConfig = (screen,config) => {
        if(screen !== null && screen <= 1024){
            return {...config,
                cameraControls: {...config.cameraControls, enabled: false},
                particles: {...config.particles, count: 50}
            }
        }
        return config
    };

    return (
        <Main config={screenConfig(widthScreen,config)} social={social} {...props}/>
    )

};

export default Mouse3DHoc(MainContainer);