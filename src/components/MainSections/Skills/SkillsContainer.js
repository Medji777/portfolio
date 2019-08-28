import React, {useEffect, useState, useContext} from 'react';
import Skills from "./Skills";
import Loader from "../../../common/Loader/Loader";
import {Context} from "../../../Context/Context";

const SkillsContainer = (props) => {

    const [skills, setSkills] = useState([]);
    const [isFetching, setIsFetching] = useState(false);
    const {progress} = useContext(Context);

    useEffect(() => {
        setIsFetching(true);
        const abortController = new AbortController();
        let componentUnmounted = false;
        let delay = null;
        (async () => {
            let res = await fetch('/data/skills.json', {signal: abortController.signal});
            res = await res.json();
            if (componentUnmounted) return Promise.resolve(true);
            setSkills(res);
            delay = setTimeout(() => {
                setIsFetching(false);
            },1000)
        })();
        return () => {
            componentUnmounted = true;
            abortController.abort();
            clearTimeout(delay)
        }
    }, []);

    return <Skills skills={skills} progress={progress} isFetching={isFetching} Loading={Loader} {...props}/>

};

export default SkillsContainer;