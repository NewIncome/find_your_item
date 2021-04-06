import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Navbar = props => {
  const { backDir, icon } = props;

  return (
    <nav className="Navbar">
      <div className="logo">
        {backDir
          ? <Link to={backDir}>{icon || '⊲'}</Link>
          : (
            <a href="/">
              {icon || '⊲'}
              {icon === '☜'
                ? <span className="logout">LOGOUT</span> : ''}
            </a>
          )}
      </div>
      <span className="title">Navbar</span>
      <div className="search">♡☜</div>
    </nav>
    // ≡ ☌
  );
};

Navbar.defaultProps = {
  backDir: '',
  icon: '',
};

Navbar.propTypes = {
  backDir: PropTypes.string,
  icon: PropTypes.string,
};

export default Navbar;
