import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import Item from './Item';
import { currItemDiv, getItemID, randNum } from '../utils';

const ImgSlider = props => {
  const { items } = props;
  const [curItmId, setCurItmId] = useState();

  useEffect(() => {
    setCurItmId(getItemID(currItemDiv('slick-active')));

    const slider = document.querySelectorAll('.slick-arrow');
    slider.forEach(domItm => {
      domItm.addEventListener('click', () => {
        setTimeout(() => {
          setCurItmId(getItemID(currItemDiv('slick-active')));
        }, 50);
      });
    });
  }, []);

  useEffect(() => {
  }, [curItmId]);

  return (
    <>
      <Slider
        dots={false}
        infinite
        speed={500}
        slidesToShow={1}
        slidesToScroll={1}
      >
        {items.map(item => {
          const price = randNum(1000, 50000).toLocaleString('en');

          return (
            <Link to={`/item/${item.id}`} key={`${item.id}-${item.name}`} params={{ price }}>
              <Item item={item} pg="all" price={price} />
            </Link>
          );
        })}
      </Slider>
      <div className="itm-cnt">
        {/* eslint-disable react/jsx-one-expression-per-line */}
        <span>{curItmId}</span> / <span>{items.length}</span>
      </div>
    </>
  );
};

ImgSlider.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default ImgSlider;
