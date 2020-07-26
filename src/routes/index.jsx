import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Search from '../pages/Search';
import ImportanceOfReading from '../pages/ImportanceOfReading';
import NotFound from '../pages/NotFound';

const Routes = () => {
  return (
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/search' exact component={Search} />
      <Route path='/importance-of-reading' exact component={ImportanceOfReading} />
      <Route component={NotFound} />
    </Switch>    
  )
}

export default Routes;
