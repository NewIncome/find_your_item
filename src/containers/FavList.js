import React from 'react';
import Navbar from '../components/Navbar';

const FavList = () => (
  <>
    <Navbar backDir="/user" />
    <section className="section" id="FavList">
      <h2>This User&apos;s Favorite List</h2>
      {/* List of Items */}
    </section>
  </>
);

export default FavList;
