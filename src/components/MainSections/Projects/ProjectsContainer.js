import React, {useContext, useState} from 'react';
import {Context} from "../../../Context/Context";
import Projects from "./Projects";

export const filterPrj = {
    ALL: 'ALL',
    JS: 'JS',
    SPA: 'SPA'
};

const ProjectsContainer = (props) => {

    const [filterValue, setFilterValue] = useState(filterPrj.ALL);

    const {projects} = useContext(Context);

    const filter = (projects) => {
        let ALL = filterValue === filterPrj.ALL;
        return projects.filter(p => ALL || (p.filter === filterValue));
    };

    const changeFilter = (f) => {
        setFilterValue(f)
    };

    return (
        <Projects filter={filter} filterValue={filterValue} changeFilter={changeFilter} projects={projects} {...props}/>
    )
};

export default ProjectsContainer;