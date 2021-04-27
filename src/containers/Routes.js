import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import UserInfo from '../pages/UserInfo';
import Items from '../pages/Items';
import FavList from '../pages/FavList';
import ItemInfo from '../pages/ItemInfo';
import Error from '../components/Error';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" render={() => (<Home />)} />
      <Route path="/user" render={() => (<UserInfo />)} />
      <Route path="/items" render={() => (<Items />)} />
      <Route path="/item/:id" render={() => (<ItemInfo />)} />
      <Route path="/fav_list" render={() => (<FavList />)} />
      <Route component={Error} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
