import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const UserInfo = props => {
  const { username, user } = props;

  return (
    <section className="section" id="User">
      <h2>
        {username}
        , Info
      </h2>
      <ul>
        {
          user ? user.data.map(info => (
            <li key={info}>
              {info}
              :
              <span>{info.val}</span>
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
