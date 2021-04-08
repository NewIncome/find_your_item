import React from 'react';
import { connect } from 'react-redux';
import { useParams, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Navbar from '../components/Navbar';
import Item from '../components/Item';

const ItemInfo = props => {
  const { items } = props;
  const { id } = useParams();
  console.log('PARAMS ID');
  console.log(id);
  console.log(typeof id);
  console.log(items);
  const item = items.find(itm => itm.id === Number(id)) || null;
  console.log(item);

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
  items: PropTypes.objectOf(PropTypes.any).isRequired,
};

const mapStateToProps = items => items;

export default connect(mapStateToProps)(ItemInfo);
