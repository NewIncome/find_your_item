import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import {
  Button, Colors, Inline, Pagination, PaginationItem,
  PaginationPrevious, PaginationNext, PaginationEllipsis,
} from 'react-foundation';
import Slider from 'react-slick';
import Error from '../components/Error';
import Loader from '../components/Loader';
import * as MyActions from '../actions';

const Home = props => {
  const {
    actions,
    user,
    fetchCall,
    username,
  } = props;
  const [loginFlag, setLoginFlag] = useState(true);
  const history = useHistory();
  const loginUrl = 'https://findmyitem-api.herokuapp.com/login';
  const signupUrl = 'https://findmyitem-api.herokuapp.com/users';

  const onInput = event => actions.addUsername(event.target.value);

  const onNewSubmit = event => {
    event.preventDefault();
    actions.fetchAPIcall(signupUrl, 'post', { name: username });
  };

  const onLogSubmit = event => {
    event.preventDefault();
    actions.fetchAPIcall(loginUrl, 'post', { name: username });
  };

  const onClick = () => setLoginFlag(false);

  useEffect(() => {
    if (fetchCall.apiData) actions.setUserInfo(fetchCall.apiData);
  });

  useEffect(() => {
    if (username === user.name) {
      actions.fetchAPIreset();
      history.push('/user');
    }
  }, [user]);

  return (
    <>
      <section className="home-section" id="Home">
        <h2 className="home-h h">Find Your Item</h2>
        {fetchCall.loading
          ? <Loader />
          : (
            <>
              {/* eslint-disable react/jsx-one-expression-per-line */}
              <p className="t-text p">Hi there! {loginFlag ? 'Login' : 'Signup'} to start looking at items</p>
              <form className="home-form">
                <input
                  className="home-input"
                  placeholder="Please input your User Name"
                  value={username}
                  onChange={onInput}
                />
                {fetchCall.error ? <Error /> : ''}
                {loginFlag
                  ? (
                    <button className="home-btn" type="submit" onClick={onLogSubmit}>
                      <b>Login User</b>
                    </button>
                  )
                  : (
                    <button className="home-btn" type="submit" onClick={onNewSubmit}>
                      <b>Signup User</b>
                    </button>
                  )}
              </form>
              {loginFlag
                ? (
                  <button
                    className="signup"
                    type="button"
                    onClick={onClick}
                  >
                    Not signed up?
                  </button>
                ) : ''}
            </>
          )}
        <br />
        <Button color={Colors.SUCCESS}>Submit</Button>
        {/* eslint-disable jsx-a11y/anchor-is-valid */}
        <div className="pagination-basics-example">
          <Pagination aria-label="Pagination">
            <PaginationPrevious isDisabled>Previous <Inline showForSr>page</Inline>
            </PaginationPrevious>
            <PaginationItem isCurrent>
              <Inline showForSr>You&apos;re on page</Inline> 1
            </PaginationItem>
            <PaginationItem><a aria-label="Page 2">2</a></PaginationItem>
            <PaginationItem><a aria-label="Page 3">3</a></PaginationItem>
            <PaginationItem><a aria-label="Page 4">4</a></PaginationItem>
            <PaginationEllipsis />
            <PaginationItem><a aria-label="Page 12">12</a></PaginationItem>
            <PaginationItem><a aria-label="Page 13">13</a></PaginationItem>
            <PaginationNext><a aria-label="Next page">Next <Inline showForSr>page</Inline></a></PaginationNext>
          </Pagination>
        </div>
        <Slider
          dots
          infinite={false}
          speed={500}
          slidesToShow={3}
          slidesToScroll={1}
          pauseOnFocus
        >
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
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
