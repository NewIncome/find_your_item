import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import Error from '../components/Error';
import Navbar from '../components/Navbar';
import Loader from '../components/Loader';
import * as MyActions from '../actions';

const Home = props => {
  const {
    actions,
    user,
    fetchCall,
    username,
  } = props;
  const history = useHistory();
  history.push('/');
  const loginUrl = 'https://findmyitem-api.herokuapp.com/login';
  const signupUrl = 'https://findmyitem-api.herokuapp.com/users';

  const onInput = event => actions.addUsername(event.target.value);

  const onNewSubmit = event => {
    event.preventDefault();
    actions.fetchAPIcall(signupUrl, 'post', { name: username });
  };

  const onLogSubmit = async event => {
    event.preventDefault();
    actions.fetchAPIcall(loginUrl, 'post', { name: username });
    console.log('after button CLICK');
    console.log(fetchCall);
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
  //   if (fetchCall.error) history.push('/error');
  // });

  return (
    <>
      <Navbar icon="♾" />
      <section className="section" id="Home">
        <h2>Find Your Item</h2>
        {fetchCall.loading
          ? <Loader />
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
        {fetchCall.error ? <Error /> : ''}
      </section>
    </>
  );
};

Home.propTypes = {
  actions: PropTypes.objectOf(PropTypes.any).isRequired,
  user: PropTypes.objectOf(PropTypes.any).isRequired,
  fetchCall: PropTypes.objectOf(PropTypes.any).isRequired,
  username: PropTypes.string.isRequired,
};

const mapStateToProps = ({ username, user, fetchCall }) => ({ username, user, fetchCall });

function mapActionsToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...MyActions }, dispatch),
  };
}

export default connect(mapStateToProps, mapActionsToProps)(Home);
