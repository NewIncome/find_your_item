import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Navbar = props => {
  const {
    backDir,
    icon,
    title,
    error,
    onClick,
    fvlReady,
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
            ? <Link to={backDir} className="a">{icon || '⊲'}</Link>
            : (
              <a href="/" onClick={onClick} className="a">
                {icon || '⊲'}
                {icon === '☜'
                  ? <span className="logout">LOGOUT</span> : ''}
              </a>
            )
        }
      </div>
      <span className="title h">{title || 'Navbar'}</span>
      {backDir === '/items'
        ? <button className="edit" onClick={onClick} type="button">✎</button>
        : fvlReady
          ? <Link to="/fav_list" className="like a">Fav&apos;s List</Link>
          : <div className="like a">Fav&apos;s List</div>}
    </nav>
    // ≡ ☌
  );
};

Navbar.defaultProps = {
  backDir: '',
  icon: '',
  title: '',
  error: '',
  onClick: () => {},
  fvlReady: false,
};

Navbar.propTypes = {
  backDir: PropTypes.string,
  icon: PropTypes.string,
  title: PropTypes.string,
  error: PropTypes.string,
  onClick: PropTypes.func,
  fvlReady: PropTypes.bool,
};

export default Navbar;
