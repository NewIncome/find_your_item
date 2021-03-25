import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { addUsername, newUser, logUser } from '../actions';

const Home = props => {
  const {
    username,
    addUsername,
    newUser,
    logUser,
  } = props;
  const history = useHistory();

  const onInput = event => addUsername(event.target.value);

  const onNewSubmit = event => {
    event.preventDefault();
    // if (username === '') {
    // } else if (username.length < 4) {
    // } else return
    newUser(username);
    history.push('/user');
  };

  const onLogSubmit = event => {
    event.preventDefault();
    logUser(username);
    history.push('/user');
  };

  return (
    <section className="section" id="Home">
      <h2>Find Your Item</h2>
      <form>
        <input
          placeholder="Please input your User Name"
          value={username}
          onChange={onInput}
        />
        <button type="submit" onClick={onNewSubmit}>
          <b>Signup User</b>
        </button>
        <button type="submit" onClick={onLogSubmit}>
          <b>Login User</b>
        </button>
      </form>
    </section>
  );
};

Home.propTypes = {
  username: PropTypes.string.isRequired,
  addUsername: PropTypes.func.isRequired,
  newUser: PropTypes.func.isRequired,
  logUser: PropTypes.func.isRequired,
};

const mapStateToProps = username => username;

const mapDispatchToProps = dispatch => ({
  addUsername: username => dispatch(addUsername(username)),
  newUser: (user, username) => dispatch(newUser(user, username)),
  logUser: (username, user) => dispatch(logUser(username, user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
