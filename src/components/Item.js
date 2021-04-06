import React from 'react';
import PropTypes from 'prop-types';

const Item = props => {
  const { item } = props;

  return (
    <div className="Items-info">
      <h3 className="Items-name">{item.name}</h3>
      <div className="Items-image"></div>
      <p className="Items-description">{item.description}</p>
    </div>
  );
};

Item.propTypes = {
  item: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Item;
