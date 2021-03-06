import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import Item from './Item';
import { currItemDiv, getItemID, randNum } from '../utils';

const ImgSlider = props => {
  const { items, getCurItmID } = props;
  const [curItmIndx, setCurItmIndx] = useState();

  useEffect(() => {
    setCurItmIndx(getItemID(currItemDiv('slick-active')));

    const slides = document.querySelectorAll('.slick-track');
    slides.forEach(domItm => {
      domItm.addEventListener('transitionend', () => setCurItmIndx(getItemID(currItemDiv('slick-active'))));
    });
  }, []);

  useEffect(() => {
    if (curItmIndx) getCurItmID(items[curItmIndx - 1].id);
  }, [curItmIndx]);

  // SNIPPET TO SEE A LIST OF available EVENT-LISTENER-EVENTS
  // ALSO TELLS YOU THE TARGET ELEMENT FOR/OF THE EVENT !!!!!
  // Object.keys(window).forEach(key => {
  //   if (/^on/.test(key) {
  //     window.addEventListener(key.slice(2), event => {
  //       console.log(event);
  //     });
  //   }
  // });

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
        <span>{curItmIndx}</span> / <span>{items.length}</span>
      </div>
    </>
  );
};

ImgSlider.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
  getCurItmID: PropTypes.func.isRequired,
};

export default ImgSlider;
