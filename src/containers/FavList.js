import React from 'react';
import { Link } from 'react-router-dom';

const FavList = () => (
  <section className="section" id="FavList">
    <h2>This User&apos;s Favorite List</h2>
    <Link to="/user">Go back to the User</Link>
  </section>
);

export default FavList;
