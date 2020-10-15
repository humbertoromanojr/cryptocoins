import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../screens/Home';
import About from '../screens/About';
import Bitcoins from '../screens/Bitcoins';
import News from '../screens/News';
import Contact from '../screens/Contact';
import DirectTreasure from '../screens/DirectTreasure';

const Routes: React.FC = () => (
    <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/bitcoins" component={Bitcoins} />
        <Route path="/news" component={News} />
        <Route path="/contact" component={Contact} />
        <Route path="/direct-treasure" from component={DirectTreasure} />
    </Switch>
);

export default Routes;
