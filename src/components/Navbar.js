import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Navbar = props => {
  const { backDir } = props;

  return (
    <nav className="Navbar">
      <div className="logo"><Link to={backDir || ''}>⊲</Link></div>
      <div className="title">Navbar</div>
      <div className="search">♡☜</div>
    </nav>
    // ≡ ☌
  );
};

Navbar.defaultProps = {
  backDir: '',
};

Navbar.propTypes = {
  backDir: PropTypes.string,
};

export default Navbar;
