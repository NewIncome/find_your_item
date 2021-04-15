/* eslint-disable react/jsx-one-expression-per-line */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import Item from '../components/Item';
import Navbar from '../components/Navbar';
import { currItemDiv, getItemID } from '../utils';

const Items = props => {
  const { items } = props;
  const [curItmId, setCurItmId] = useState();

  useEffect(() => {
    setCurItmId(getItemID(currItemDiv('slick-active')));

    const slider = currItemDiv('slick-slider');
    slider.addEventListener('click', () => {
      setTimeout(() => {
        setCurItmId(getItemID(currItemDiv('slick-active')));
        console.log('clicked slider');
      }, 50);
    });
  }, []);

  useEffect(() => {
    console.log('Set ID: ', curItmId);
  }, [curItmId]);

  return (
    <>
      <Navbar backDir="/user" title="Items List" />
      <section className="section" id="Items">
        <Slider
          dots={false}
          infinite
          speed={500}
          slidesToShow={1}
          slidesToScroll={1}
        >
          {items.map(item => (
            <Link to={`/item/${item.id}`} key={`${item.id}-${item.name}`}>
              <Item item={item} pg="all" />
            </Link>
          ))}
        </Slider>
        <div className="itm-cnt">
          <span>{curItmId}</span> / <span>{items.length}</span>
        </div>
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
