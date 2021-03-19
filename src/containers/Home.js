import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import UserInfo from './UserInfo';

const Home = () => {
  const [inputName, setInputName] = useState('');

  const onInput = event => setInputName(event.target.value);

  const onSubmit = event => event.preventDefault();

  return (
    <section className="section" id="Home">
      <h2>Find Your Item</h2>
      <form action="/user">
        <input
          placeholder="Please input your User Name"
          value={inputName}
          onChange={onInput}
        />
        <button
          type="submit"
          onClick={onSubmit}
        >
          Enter
        </button>
        <Link to="/user">Go To User</Link>
      </form>
    </section>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
