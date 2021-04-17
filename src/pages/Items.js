import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Navbar from '../components/Navbar';
import ImgSlider from '../components/ImgSlider';

const Items = props => {
  const { items } = props;

  return (
    <>
      <Navbar backDir="/user" title="Item List" />
      <section className="section" id="Items">
        <ImgSlider items={items} />
      </section>
    </>
  );
};

Items.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
};

const mapStateToProps = items => items;

export default connect(mapStateToProps)(Items);
