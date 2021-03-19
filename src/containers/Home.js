import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
// import UserInfo from './UserInfo';

const Home = () => {
  const [inputName, setInputName] = useState('');

  const onInput = event => setInputName(event.target.value);

  const onSubmit = event => {
    event.preventDefault();

    <Redirect to="/user" name={inputName} />
  };

  return (
    <section className="section" id="Home">
      <h2>Find Your Item</h2>
      <form action="/users">
        <input
          placeholder="Please input your User Name"
          value={inputName}
          onChange={onInput}
        />
        <button
          type="button"
          onClick={onSubmit}
        >
          Enter
        </button>
        <Link to="/user">Go To User</Link>
      </form>
    </section>
  );
};

export default Home;
