import React from 'react';
import {Route, Switch, withRouter} from "react-router-dom";
import routes from './routes';
import NotFound from "./NotFound/NotFound";
import { animated, useTransition } from 'react-spring';

const MainSections = ({location}) => {

    const transitions = useTransition(location, location => location.key, {
        from: {opacity: 0},
        enter: {opacity: 1},
        leave: {opacity: 1}
    });

    return transitions.map(({ item, props: transition, key }) => (
        <animated.div className={'layout'} key={key} style={{...transition}}>
            <Switch location={item}>
                {routes.map((r, i) => <Route key={i} exact={r.exact} path={r.path} render={r.render(routes)}/>)}
                <Route render={() => <NotFound/>}/>
            </Switch>
        </animated.div>
    ))
};

export default withRouter(MainSections);