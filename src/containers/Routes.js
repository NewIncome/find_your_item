import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home';
import User from './User';
import Items from './Items';
import FavList from './FavList';
import Item from '../components/Item';
import Navbar from '../components/Navbar';

const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/user" component={User} />
      <Route path="/items" component={Items} />
      <Route path="/item/:id" component={Item} />
      <Route path="/fav_list" component={FavList} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
