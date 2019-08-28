import React from "react";
import SkillsContainer from "./Skills/SkillsContainer";
import ProjectsContainer from "./Projects/ProjectsContainer";
import Contacts from "./Contacts/Contacts";
import MainContainer from "./Main/MainContainer";

const routes = [
    {
        exact: true,
        path: '/',
        render(routes){return () => <MainContainer routes={routes}/>}
    },
    {
        exact: true,
        path: '/skills',
        render(routes){return () => <SkillsContainer routes={routes}/>}
    },
    {
        exact: true,
        path: '/projects',
        render(routes){return () => <ProjectsContainer routes={routes}/>}
    },
    {
        exact: true,
        path: '/contacts',
        render(routes){return () => <Contacts routes={routes}/>}
    }
];

export default routes;