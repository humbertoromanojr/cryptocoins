import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import AppProvider from './contextApi';

import Header from './components/Header';
import Routes from './routes';

import GlobalStyle from './styles/global';

const App: React.FC = () => {

return (

    <Router>
        <Header />
            <AppProvider>
                <Routes />
            </AppProvider>
        <GlobalStyle />
    </Router>

    )
}

export default App;
