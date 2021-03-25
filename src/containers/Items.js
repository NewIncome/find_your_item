import React from 'react';
import { Link } from 'react-router-dom';

const Items = () => (
  <section className="section" id="Items">
    <h2>Items List</h2>
    <Link to="/user">Go back to the User</Link>
    {/* <Link to={`/item/${prop.variable}`}>See an Item's info</Link> */}
  </section>
);

export default Items;
