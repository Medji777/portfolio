import React from 'react';
import HeaderContainer from "./components/Header/HeaderContainer";
import MainSections from "./components/MainSections/MainSections";
import './assets/fonts/fontsConfig';
import AppContext from "./Context/Context";

const App = () => {
    return (
        <AppContext>
            <HeaderContainer/>
            <MainSections/>
        </AppContext>
    )
};

export default App;
