import React from 'react';
import PropTypes from 'prop-types';

const Item = props => {
  const { item, pg } = props;

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
                <p className="d-r-u">$3,600</p>
                <p className="d-r-d">Price</p>
              </div>
            </div>
          </div>
        )
        : (
          <div className="Items-info">
            <h3 className="Items-name">{item.name}</h3>
            <img
              className="Items-image"
              src={item.image}
              alt={item.name}
            />
            <p className="Items-description">{item.description}</p>
            {item.id
              ? (
                <div>
                  <p>{item.id}</p>
                  <div>
                    <p>{item.created_at}</p>
                    <p>{item.updated_at}</p>
                  </div>
                </div>
              )
              : ''}
          </div>
        )}
    </>
  );
};

Item.defaultProps = {
  pg: '',
};

Item.propTypes = {
  item: PropTypes.objectOf(PropTypes.any).isRequired,
  pg: PropTypes.string,
};

export default Item;
