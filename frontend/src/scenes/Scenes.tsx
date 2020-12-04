import React from 'react';
import { Route, Switch } from 'react-router-dom';

import NewPassenger from './NewPassenger';
import NotFound from './NotFound';
import Summary from './Summary';

const Scenes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={Summary} />
    <Route exact path="/new" component={NewPassenger} />
    <Route path="/" component={NotFound} />
  </Switch>
);

export default Scenes;
