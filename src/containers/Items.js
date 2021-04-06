/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import Loading from '../components/Loading';
import Item from '../components/Item';
import Navbar from '../components/Navbar';
import * as MyActions from '../actions';

const Items = props => {
  const { actions, items, fetchCall } = props;
  const url = 'https://findmyitem-api.herokuapp.com/items';

  useEffect(() => {
    if (!items[0]) {
      // getItemsCall(itemsCall);
      actions.fetchAPIcall(url, 'get', {});
      console.log('FETCH CALL state-object');
      console.log(fetchCall);
      setTimeout(() => {
        console.log('AFTER 2s TIMEOUT, fetchCall');
        console.log(fetchCall);
      }, 2000);
    }
  }, []);

  useEffect(() => actions.fetchAPIreset(), [items]);

  useEffect(() => {
    if (fetchCall.apiData) {
      actions.setItems(fetchCall.apiData);
      // setTimeout(() => {
      //   actions.fetchAPIreset();
      // }, 500);
    }
    // if (items === '' && itemsCall !== {}) {
    //   itemsCall.then(resp => resp.json())
    //     .then(resp => {
    //       console.log('ITEMS api call RESPONSE');
    //       console.log(resp);
    //       setItems(resp);
    //     });
    // }
  });

  return (
    <>
      <Navbar backDir="/user" />
      <section className="section" id="Items">
        <h2>Items List</h2>
        <Link to="/user">Go back to the User</Link>
        {fetchCall.loading || !items[0]
          ? <Loading />
          : items.map(item => (
            <Link to={`/item/${item.id}`} key={`${item.id}-${item.name}`}>
              <Item itemInfo={item} />
            </Link>
          ))}
      </section>
    </>
  );
};

Items.propTypes = {
  actions: PropTypes.objectOf(PropTypes.any).isRequired,
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
  fetchCall: PropTypes.objectOf(PropTypes.any).isRequired,
  // itemsCall: PropTypes.objectOf(PropTypes.any).isRequired,
  // getItemsCall: PropTypes.func.isRequired,
  // setItems: PropTypes.func.isRequired,
  // fetchCall: PropTypes.string.isRequired,
  // fetchAPIcall: PropTypes.func.isRequired,
};

const mapStateToProps = ({ items, itemsCall, fetchCall }) => ({ items, itemsCall, fetchCall });

function mapActionsToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...MyActions }, dispatch),
  };
}

export default connect(mapStateToProps, mapActionsToProps)(Items);
