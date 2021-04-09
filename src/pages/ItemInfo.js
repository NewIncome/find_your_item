import React from 'react';
import { connect } from 'react-redux';
import { useParams, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Navbar from '../components/Navbar';
import Item from '../components/Item';

const ItemInfo = props => {
  const { items } = props;
  const { id } = useParams();
  const item = items.find(itm => itm.id === Number(id)) || null;

  return (
    <>
      <Navbar backDir="/items" />
      <div className="Item-info">
        {item ? <Item item={item} /> : <Redirect to="/error" />}
      </div>
    </>
  );
};

ItemInfo.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
};

const mapStateToProps = items => items;

export default connect(mapStateToProps)(ItemInfo);
