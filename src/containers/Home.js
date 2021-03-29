/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  addUsername,
  newUserCall,
  logUserCall,
  setUserInfo,
} from '../actions';

const Home = props => {
  const {
    username,
    addUsername,
    userCall,
    newUserCall,
    logUserCall,
    user,
    setUserInfo,
  } = props;
  const history = useHistory();
  const [aPIcall, setAPIcall] = useState('');

  const onInput = event => addUsername(event.target.value);

  const onNewSubmit = event => {
    event.preventDefault();
    newUserCall(username);
    setAPIcall(userCall);
  };

  const onLogSubmit = async event => {
    event.preventDefault();
    logUserCall(username);
    setAPIcall(userCall);
  };

  useEffect(() => {
    if (aPIcall !== '') {

      let v = {};
      aPIcall.then(resp => {
        v = resp;

        setUserInfo(v.data);
      });
      if (v.data === user) {
        setAPIcall('');
        history.push('/user');
      }
    }
  }, [aPIcall]);

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

Home.defaultProps = {
  user: {},
};

Home.propTypes = {
  username: PropTypes.string.isRequired,
  addUsername: PropTypes.func.isRequired,
  userCall: PropTypes.func.isRequired,
  newUserCall: PropTypes.func.isRequired,
  logUserCall: PropTypes.func.isRequired,
  user: PropTypes.objectOf(PropTypes.any),
  setUserInfo: PropTypes.func.isRequired,
};

const mapStateToProps = ({ username, userCall, user }) => ({ username, userCall, user });

const mapDispatchToProps = dispatch => ({
  addUsername: username => dispatch(addUsername(username)),
  newUserCall: (username, userCall) => dispatch(newUserCall(username, userCall)),
  logUserCall: (username, userCall) => dispatch(logUserCall(username, userCall)),
  setUserInfo: user => dispatch(setUserInfo(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
