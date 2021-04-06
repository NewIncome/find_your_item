import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home';
import UserInfo from './UserInfo';
import Items from './Items';
import FavList from './FavList';
import ItemInfo from './ItemInfo';
import Error from './Error';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" render={() => (<Home />)} />
      <Route path="/user" render={() => (<UserInfo />)} />
      <Route path="/items" render={() => (<Items />)} />
      <Route path="/item/:id" render={() => (<ItemInfo />)} />
      <Route path="/fav_list" render={() => (<FavList />)} />
      <Route path="/error" render={() => (<Error />)} />
      <Route component={Error} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
