import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { addUsername } from '../actions';

const Home = props => {
  const { username, addUsername } = props;
  const history = useHistory();
  // const flag = 'ok';

  const onInput = event => addUsername(event.target.value);

  const onSubmit = event => {
    event.preventDefault();

    // if (username === '') {

    // } else if (username.length < 4) {

    // } else return

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
        <button
          type="submit"
          onClick={onSubmit}
        >
          Enter
        </button>
      </form>
    </section>
  );
};

Home.propTypes = {
  username: PropTypes.string.isRequired,
  addUsername: PropTypes.func.isRequired,
};

const mapStateToProps = username => username;

const mapDispatchToProps = dispatch => ({
  addUsername: username => dispatch(addUsername(username)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
