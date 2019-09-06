import React from "react";
import SkillsContainer from "./Skills/SkillsContainer";
import ProjectsContainer from "./Projects/ProjectsContainer";
import Contacts from "./Contacts/Contacts";
import MainContainer from "./Main/MainContainer";

const routes = [
    {
        id: 1,
        exact: true,
        exactNav: true,
        path: '/',
        title: 'Main',
        render(routes){return () => <MainContainer routes={routes}/>}
    },
    {
        id: 2,
        exact: true,
        exactNav: false,
        path: '/skills',
        title: 'Skills',
        render(routes){return () => <SkillsContainer routes={routes}/>}
    },
    {
        id: 3,
        exact: true,
        exactNav: false,
        path: '/projects',
        title: 'Projects',
        render(routes){return () => <ProjectsContainer routes={routes}/>}
    },
    {
        id: 4,
        exact: true,
        exactNav: false,
        path: '/contacts',
        title: 'Contacts',
        render(routes){return () => <Contacts routes={routes}/>}
    }
];

export default routes;