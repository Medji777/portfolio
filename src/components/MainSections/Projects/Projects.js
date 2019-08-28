import React from 'react';
import Wrapper from "../../Wrapper/Wrapper";
import Project from "./Project/Project";
import FilterProjects from "./FilterProjects/FilterProjects";
import s from './Projects.module.css';

const Projects = ({routes,filter,filterValue,changeFilter,projects}) => {
    return (
        <Wrapper classSection={`${s.projects} ${s.main}`} routes={routes}>
            <div className={s.container}>
                <h3>My Projects</h3>
                <FilterProjects filterValue={filterValue} changeFilter={changeFilter}/>
                <div className={s.projects_cont}>
                    {filter(projects).map(p => <Project key={p.id} img={p.img} src={p.src} title={p.title}
                                                        description={p.description}/>)}
                </div>
            </div>
        </Wrapper>
    )
};

export default Projects;