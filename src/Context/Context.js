import React from 'react';

const social = {
    github: 'https://github.com/medji777',
    vk: 'https://vk.com/medji777',
    facebook: 'https://facebook.com/'
};

const projects = [
    {
        id: 1,
        img: '#',
        src: '#',
        title: 'Social Network',
        description: 'Lorem ipsum dolor sit amet, \n' +
            'consectetur adipisicing elit. Aliquam aliquid aspernatur cupiditate distinctio, \n' +
            'eius eos esse incidunt inventore nostrum possimus! Alias animi dolorem eaque \n' +
            'earum error nemo sequi tenetur voluptatem!',
        filter: 'SPA'
    },
    {
        id: 2,
        img: '#',
        src: '#',
        title: 'Todolist',
        description: 'Lorem ipsum dolor sit amet, \n' +
            'consectetur adipisicing elit. Aliquam aliquid aspernatur cupiditate distinctio, \n' +
            'eius eos esse incidunt inventore nostrum possimus! Alias animi dolorem eaque \n' +
            'earum error nemo sequi tenetur voluptatem!',
        filter: 'SPA'
    },
    {
        id: 3,
        img: '#',
        src: '#',
        title: 'Html',
        description: 'Lorem ipsum dolor sit amet, \n' +
            'consectetur adipisicing elit. Aliquam aliquid aspernatur cupiditate distinctio, \n' +
            'eius eos esse incidunt inventore nostrum possimus! Alias animi dolorem eaque \n' +
            'earum error nemo sequi tenetur voluptatem!',
        filter: 'JS'
    }
];

const progress = [
    {title: 'HTML | CSS3', progress: 85},
    {title: 'JavaScript - ES5/6/7/8/9', progress: 96},
    {title: 'React | Redux', progress: 88},
    {title: 'TypeScript', progress: 86},
    {title: 'Webpack | Gulp', progress: 78},
    {title: 'NPM | GIT', progress: 89}
];

const AppContext = ({children}) => {
    return (
        <Context.Provider value={{
            social,
            projects,
            progress
        }}>
            {children}
        </Context.Provider>
    )
};

export const Context = React.createContext(null);
export default AppContext;