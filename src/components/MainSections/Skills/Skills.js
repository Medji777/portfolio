import React from 'react';
import Wrapper from "../../Wrapper/Wrapper";
import Skill from "./Skill/Skill";
import ProgressContainer from "./Progress/ProgressContainer";
import Loader from "../../../common/Loader/Loader";
import s from './Skills.module.css';

const Skills = ({skills,progress,isFetching,Loading,...props}) => {
    return (
        <Wrapper classSection={s.skills} {...props}>
            <div className={s.container}>
                <h3 className={s.title_skills}>Skills</h3>
                {isFetching ? <Loader wrap={{minHeight:'302px'}} loader={{width:'7em'}}/> :
                <div className={s.container__skill}>
                    {skills.map(s => <Skill key={s.id} src={s.src} title={s.title} description={s.description}/>)}
                </div>}
                <h3 className={s.title_progress}>Progress</h3>
                <div className={s.container__progress}>
                    {progress.map((p,i) => <ProgressContainer key={i} title={p.title} progress={p.progress} />)}
                </div>
            </div>
        </Wrapper>
    )
};

export default Skills;