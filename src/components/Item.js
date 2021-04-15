import React from 'react';
import PropTypes from 'prop-types';
import { toDateTime, randNum } from '../utils';

const Item = props => {
  const { item, pg, price } = props;

  return (
    <>
      {pg
        ? (
          <div className="Items-info">
            <img
              className="Items-image"
              src={item.image}
              alt={item.name}
            />
            <div className="info-details">
              <div className="dtl-left  dtls">
                <h3 className="itm-name">{item.name}</h3>
                <p className="stars">&#9733;&#9733;&#9733;&#9733;&#9734;</p>
              </div>
              <div className="dtl-right dtls">
                {/* eslint-disable react/jsx-one-expression-per-line */}
                <p className="d-r-u">${randNum(1000, 50000).toLocaleString('en')}</p>
                <p className="d-r-d">Price</p>
              </div>
            </div>
          </div>
        )
        : (
          <div className="Items-info">
            <div className="image-frame">
              <img
                className="Items-image"
                src={item.image}
                alt={item.name}
              />
              <div className="img-info">
                <div className="dtl-left  dtls">
                  <p className="stars">&#9733;&#9733;&#9733;&#9733;&#9734;</p>
                  <p className="itm-name">{toDateTime(item.created_at)}</p>
                </div>
                <div className="dtl-right dtls">
                  <p className="d-r-u">${price || 1000}</p>
                  <p className="d-r-d">Price</p>
                </div>
              </div>
            </div>
            <div className="image-desc">
              <p className="desc-title">About this item</p>
              <p className="desc-description">{item.description}</p>
            </div>
          </div>
        )}
    </>
  );
};

Item.defaultProps = {
  pg: '',
  price: '',
};

Item.propTypes = {
  item: PropTypes.objectOf(PropTypes.any).isRequired,
  pg: PropTypes.string,
  price: PropTypes.string,
};

export default Item;
