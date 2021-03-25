import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const UserInfo = props => {
  const { username } = props;

  return (
    <section className="section" id="User">
      <h2>
        {username}
        , Info
      </h2>
      <Link to="/items">See the Items</Link>
      <Link to="/fav_list">See my Favorites List</Link>
    </section>
  );
};

UserInfo.propTypes = { username: PropTypes.string.isRequired };

const mapStateToProps = username => username;

export default connect(mapStateToProps)(UserInfo);
