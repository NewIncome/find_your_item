import React from 'react';
import PropTypes from 'prop-types';

const Item = props => {
  const { item, link } = props;

  return (
    <div className="Items-info">
      <h3 className="Items-name">{item.name}</h3>
      <img
        className="Items-image"
        src={link}
        alt={item.name}
      />
      <p className="Items-description">{item.description}</p>
    </div>
  );
};

Item.propTypes = {
  item: PropTypes.objectOf(PropTypes.any).isRequired,
  link: PropTypes.string.isRequired,
};

export default Item;
