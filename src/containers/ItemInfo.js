import React from 'react';
import Navbar from './Navbar';
import Item from '../components/Item'
// import PropTypes from 'prop-types';

const ItemInfo = () => (
  <>
    <Navbar backDir="/items" />
    <div className="Item-info">
      <Item />
    </div>
  </>
);

export default ItemInfo;
