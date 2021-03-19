import React from 'react';
import { Link } from 'react-router-dom';

const User = () => (
  <section className="User">
    <h2>User Info</h2>
    <Link to="/items">See the Items</Link>
    <Link to="/fav_list">See my Favorites List</Link>
  </section>
);

export default User;
