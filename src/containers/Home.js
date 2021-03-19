import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <section className="section" id="Home">
    <h2>Find Your Item</h2>
    <form>
      <input placeholder="Please input your User Name" />
      <button type="submit">Enter</button>
      <Link to="/user">Go To User</Link>
    </form>
  </section>
);

export default Home;
