/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import Navbar from '../components/Navbar';
import Loading from '../components/Loading';
// import {
//   addUsername,
//   newUserCall,
//   logUserCall,
//   setUserInfo,
// } from '../actions';
import * as MyActions from '../actions';

const Home = props => {
  // const {
  //   username,
  //   addUsername,
  //   userCall,
  //   newUserCall,
  //   logUserCall,
  //   setUserInfo,
  // } = props;

  const {
    actions,
    user,
    fetchCall,
    username,
  } = props;
  const [aPIcall, setAPIcall] = useState(() => '');
  const history = useHistory();
  const loginUrl = 'https://findmyitem-api.herokuapp.com/login';
  // const signupUrl = 'https://findmyitem-api.herokuapp.com/users';

  const onInput = event => actions.addUsername(event.target.value);

  const onNewSubmit = event => {
    event.preventDefault();
    // newUserCall(username);
    // setAPIcall(userCall);
  };

  const onLogSubmit = async event => {
    event.preventDefault();
    // logUserCall(username);
    // setAPIcall(userCall);
    actions.fetchAPIcall(loginUrl, 'post', { name: username });
  };

  useEffect(() => {
    if (fetchCall.apiData) actions.setUserInfo(fetchCall.apiData);
  });

  useEffect(() => {
    if (username === user.name) {
      actions.fetchAPIreset();
      history.push('/user');
    }
  }, [user]);

  // useEffect(() => {
  //   if (aPIcall !== '') {
  //     let v;
  //     userCall.then(resp => {
  //       v = resp;

  //       setUserInfo(v.data);

  //       setAPIcall('');
  //       history.push('/user');
  //     });
  //   }
  // }, [aPIcall]);

  return (
    <>
      <Navbar icon="♾" />
      <section className="section" id="Home">
        <h2>Find Your Item</h2>
        {fetchCall.loading
          ? <Loading />
          : (
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
          )}
      </section>
    </>
  );
};

Home.propTypes = {
//   username: PropTypes.string.isRequired,
//   addUsername: PropTypes.func.isRequired,
//   userCall: PropTypes.objectOf(PropTypes.any).isRequired,
//   newUserCall: PropTypes.func.isRequired,
//   logUserCall: PropTypes.func.isRequired,
//   setUserInfo: PropTypes.func.isRequired,
// };
  actions: PropTypes.objectOf(PropTypes.any).isRequired,
  user: PropTypes.objectOf(PropTypes.any).isRequired,
  fetchCall: PropTypes.objectOf(PropTypes.any).isRequired,
  username: PropTypes.string.isRequired,
};

const mapStateToProps = ({ username, user, fetchCall }) => ({ username, user, fetchCall });

// const mapDispatchToProps = dispatch => ({
//   addUsername: username => dispatch(addUsername(username)),
//   newUserCall: (username, userCall) => dispatch(newUserCall(username, userCall)),
//   logUserCall: (username, userCall) => dispatch(logUserCall(username, userCall)),
//   setUserInfo: user => dispatch(setUserInfo(user)),
// });

function mapActionsToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...MyActions }, dispatch),
  };
}

export default connect(mapStateToProps, mapActionsToProps)(Home);
