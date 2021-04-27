import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import FavBttn from '../components/FavBttn';

const Navbar = props => {
  const {
    backDir,
    icon,
    title,
    error,
    onClick,
    rbc,
    fvlReady,
    itmId,
    emptyFvl,
  } = props;
  const location = useLocation();

  const addRightBttnFunc = () => {
    switch (location.pathname) {
      case '/items':
        return (<FavBttn currItmID={itmId} />);
      case '/fav_list':
        return (emptyFvl
          ? <div className="lk no-fvl">&#9676;</div>
          : <FavBttn currItmID={itmId} />);
      case '/user':
        return (fvlReady
          ? <Link to="/fav_list" className="like a">Fav&apos;s List</Link>
          : <div className="like a">Fav&apos;s List</div>);
      default:
        return (<button className="edit" onClick={rbc} type="button">✎</button>);
    }
  };

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
      {addRightBttnFunc()}
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
  rbc: () => {},
  fvlReady: false,
  itmId: 0,
  emptyFvl: false,
};

Navbar.propTypes = {
  backDir: PropTypes.string,
  icon: PropTypes.string,
  title: PropTypes.string,
  error: PropTypes.string,
  onClick: PropTypes.func,
  rbc: PropTypes.func,
  fvlReady: PropTypes.bool,
  itmId: PropTypes.number,
  emptyFvl: PropTypes.bool,
};

export default Navbar;
