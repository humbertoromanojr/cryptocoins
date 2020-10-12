import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../screens/Home';

const Routes: React.FC = () => {
    <Switch>
        <Route path="/" excat component={Home} />
  </Switch>;
};

export default Routes;
