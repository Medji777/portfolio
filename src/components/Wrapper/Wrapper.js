import React from 'react';
import {NavLink, withRouter} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import s from './Wrapper.module.css';

const Wrapper = ({routes,match,children,classSection}) => {
    let indexPath = routes.findIndex(link => link.path === match.path);

    const trueIcon = (icon) => {
        let link;
        switch (icon) {
            case 'left':
                link = 'arrow-alt-circle-left';
                break;
            case 'right':
                link = 'arrow-alt-circle-right';
                break;
            default: break;
        }
       return ['far',`${link}`]
    };

    return (
        <section className={`${s.section} ${classSection}`}>
            {indexPath > 0 && <NavLink to={routes[indexPath - 1].path} className={s.prev}><FontAwesomeIcon icon={trueIcon('left')}/></NavLink>}
            {children}
            {indexPath < (routes.length - 1) && <NavLink to={routes[indexPath + 1].path} className={s.next}><FontAwesomeIcon icon={trueIcon('right')}/></NavLink>}
        </section>
    );

};

export default withRouter(Wrapper);