import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const UserInfo = props => {
  const { user } = props;

  return (
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
      <Link to="/items">See the Items</Link>
      <Link to="/fav_list">See my Favorites List</Link>
    </section>
  );
};

UserInfo.propTypes = {
  user: PropTypes.objectOf(PropTypes.any).isRequired,
};

const mapStateToProps = user => user;

export default connect(mapStateToProps)(UserInfo);
