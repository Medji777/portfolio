import React,{lazy,Suspense} from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router} from "react-router-dom";
import Loader from "./common/Loader/Loader";
import './index.css';

const App = lazy(() => import ("./App").then((v)=>v));

ReactDOM.render(<Router basename={process.env.PUBLIC_URL}>
    <Suspense fallback={<Loader wrap={{minHeight: '100vh',background: '#404040'}} loader={{width: '15em'}}/>}>
        <App/>
    </Suspense>
</Router>, document.getElementById('root'));

serviceWorker.unregister();
