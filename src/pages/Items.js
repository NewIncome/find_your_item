/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import Item from '../components/Item';
import Navbar from '../components/Navbar';
import { curItemName, currItemDiv } from '../utils';

const Items = props => {
  const { items } = props;
  const [currItm, setCurrItm] = useState();

  useEffect(() => {
    const currentItmDiv = currItemDiv('slick');
    console.log(currentItmDiv);
  }, []);

  useEffect(() => {
  }, [currItm]);

  return (
    <>
      <Navbar backDir="/user" title="" />
      <section className="section" id="Items">
        <h2>Items List</h2>
        <Slider
          dots={false}
          infinite
          speed={500}
          slidesToShow={1}
          slidesToScroll={1}
        >
          {items.map(item => (
            <Link to={`/item/${item.id}`} key={`${item.id}-${item.name}`}>
              <Item item={item} />
            </Link>
          ))}
        </Slider>
      </section>
    </>
  );
};

// active properties:
// aria-hidden="false", data-index="positionNum"
// class="slick-active slick-current"

Items.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
};

const mapStateToProps = items => items;

export default connect(mapStateToProps)(Items);
