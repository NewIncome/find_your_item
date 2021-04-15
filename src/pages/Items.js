/* eslint-disable no-unused-vars, no-undef */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import Item from '../components/Item';
import Navbar from '../components/Navbar';
import { currItemDiv, getItemID, curItemName } from '../utils';

const Items = props => {
  const { items } = props;
  const [currItmName, setCurrItmName] = useState();

  useEffect(() => {
    setCurrItmName(curItemName(items, getItemID(currItemDiv('slick-active'))));
    const slider = currItemDiv('slick-slider');
    slider.addEventListener('click', () => {
      setTimeout(() => {
        setCurrItmName(curItemName(items, getItemID(currItemDiv('slick-active'))));
        console.log('clicked slider');
      }, 50);
    });
  }, []);

  useEffect(() => {
    console.log('Set Name: ', currItmName);
  }, [currItmName]);

  return (
    <>
      <Navbar backDir="/user" title={currItmName} />
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
