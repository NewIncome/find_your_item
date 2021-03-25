import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { addUsername, newUserCall, logUserCall } from '../actions';

const Home = props => {
  const {
    username,
    addUsername,
    userCall,
    newUserCall,
    logUserCall,
  } = props;
  const history = useHistory();

  const onInput = event => addUsername(event.target.value);

  const onNewSubmit = event => {
    event.preventDefault();
    // if (username === '') {
    // } else if (username.length < 4) {
    // } else return
    newUserCall(username);
    history.push('/user');
  };

  const onLogSubmit = event => {
    event.preventDefault();
    logUserCall(username);
    console.log(userCall);

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
  // userCall: PropTypes.objectOf(PropTypes.any).isRequired,
  // userCall: PropTypes.shape({
  //   then: PropTypes.func.isRequired,
  //   catch: PropTypes.func.isRequired,
  // }).isRequired,
  userCall: PropTypes.func.isRequired,
  newUserCall: PropTypes.func.isRequired,
  logUserCall: PropTypes.func.isRequired,
};

const mapStateToProps = ({ username, userCall }) => ({ username, userCall });

const mapDispatchToProps = dispatch => ({
  addUsername: username => dispatch(addUsername(username)),
  newUserCall: (username, userCall) => dispatch(newUserCall(username, userCall)),
  logUserCall: (username, userCall) => dispatch(logUserCall(username, userCall)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
