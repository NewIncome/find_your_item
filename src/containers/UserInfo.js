import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const UserInfo = props => {
  const { username, user } = props;

  console.log('User in UserINFO');
  console.log(user);

  return (
    <section className="section" id="User">
      <h2>
        {username}
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
  username: PropTypes.string.isRequired,
  user: PropTypes.objectOf(PropTypes.any).isRequired,
};

const mapStateToProps = ({ username, user }) => ({ username, user });

export default connect(mapStateToProps)(UserInfo);
