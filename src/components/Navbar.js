import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Navbar = props => {
  const {
    backDir,
    icon,
    error,
    onClick,
  } = props;

  return (
    <nav className="Navbar">
      <div className="logo">
        {/* eslint-disable no-nested-ternary */
        error
          ? (
            <button
              className="errorBackButton"
              onClick={onClick}
              type="button"
            >
              ⊲
            </button>
          )
          : backDir
            ? <Link to={backDir}>{icon || '⊲'}</Link>
            : (
              <a href="/">
                {icon || '⊲'}
                {icon === '☜'
                  ? <span className="logout">LOGOUT</span> : ''}
              </a>
            )
        }
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
  error: '',
  onClick: () => {},
};

Navbar.propTypes = {
  backDir: PropTypes.string,
  icon: PropTypes.string,
  error: PropTypes.string,
  onClick: PropTypes.func,
};

export default Navbar;
