import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/user" component={User} />
      <Route path="/items" component={Items} />
      <Route path="/item/:id" component={Item} />
      <Route path="/user/fav_list" component={FavList} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
