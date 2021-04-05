/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Loading from '../components/Loading';
import Item from '../components/Item';
import Navbar from '../components/Navbar';
import { getItemsCall, setItems } from '../actions';

const Items = props => {
  const {
    getItemsCall,
    itemsCall,
    setItems,
    items,
  } = props;

  useEffect(() => {
    if (items === '') {
      getItemsCall(itemsCall);
    }
  }, []);

  useEffect(() => {
    if (items === '' && itemsCall !== {}) {
      itemsCall.then(resp => {
        console.log('ITEMS api call RESPONSE');
        console.log(resp);
        // setItems(resp.data);
      });
    }
  });

  return (
    <>
      <Navbar backDir="/user" />
      <section className="section" id="Items">
        <h2>Items List</h2>
        <Link to="/user">Go back to the User</Link>
        {items === ''
          ? <Loading />
          : items.map(item => (
            <Link to={`/item/${item.id}`} key={item.name}>
              <Item itemInfo={item} />
            </Link>
          ))}
      </section>
    </>
  );
};

Items.propTypes = {
  itemsCall: PropTypes.objectOf(PropTypes.any).isRequired,
  getItemsCall: PropTypes.func.isRequired,
  items: PropTypes.string.isRequired,
  setItems: PropTypes.func.isRequired,
};

const mapStateToProps = ({ items, itemsCall }) => ({ items, itemsCall });

const mapDispatchToProps = dispatch => ({
  getItemsCall: itemsCall => dispatch(getItemsCall(itemsCall)),
  setItems: items => dispatch(setItems(items)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Items);
