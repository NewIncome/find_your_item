import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import Navbar from '../components/Navbar';
import Loader from '../components/Loader';
import * as MyActions from '../actions';

const UserInfo = props => {
  const {
    actions, items, fetchCall, user,
  } = props;
  const url = 'https://findmyitem-api.herokuapp.com/items';

  useEffect(() => {
    if (!items[0]) actions.fetchAPIcall(url, 'get', {});
  }, []);

  useEffect(() => actions.fetchAPIreset(), [items]);

  useEffect(() => {
    if (fetchCall.apiData) {
      actions.setItems(fetchCall.apiData);
    }
  });

  return (
    <>
      <Navbar icon="☜" />
      <section className="section" id="User">
        <h2>
          {user.name}
          , Info
        </h2>
        <ul>
          {
            user ? Object.keys(user).map(key => (
              <li key={key}>
                {key}
                :
                <span>{user[key]}</span>
              </li>
            ))
              : 'Waiting or Not Found'
          }
        </ul>
        {fetchCall.loading || !items[0]
          ? <Loader />
          : (
            <>
              <Link to="/items">See the Items</Link>
              <Link to="/fav_list">See my Favorites List</Link>
            </>
          )}
      </section>
    </>
  );
};

UserInfo.propTypes = {
  user: PropTypes.objectOf(PropTypes.any).isRequired,
  actions: PropTypes.objectOf(PropTypes.any).isRequired,
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
  fetchCall: PropTypes.objectOf(PropTypes.any).isRequired,
};

const mapStateToProps = ({ user, items, fetchCall }) => ({ user, items, fetchCall });

function mapActionsToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...MyActions }, dispatch),
  };
}

export default connect(mapStateToProps, mapActionsToProps)(UserInfo);
