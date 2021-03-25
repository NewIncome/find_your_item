import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home';
import UserInfo from './UserInfo';
import Items from './Items';
import FavList from './FavList';
import Item from '../components/Item';
import Navbar from '../components/Navbar';

const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route exact path="/" render={() => (<Home />)} />
      <Route path="/user" render={() => (<UserInfo />)} />
      <Route path="/items" render={() => (<Items />)} />
      <Route path="/item/:id" render={() => (<Item />)} />
      <Route path="/fav_list" render={() => (<FavList />)} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
