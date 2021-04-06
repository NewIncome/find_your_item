/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import faker from 'faker';
import PropTypes from 'prop-types';
import Loading from '../components/Loading';
import Item from '../components/Item';
import Navbar from '../components/Navbar';
import * as MyActions from '../actions';

const Items = props => {
  const { actions, items, fetchCall } = props;
  const url = 'https://findmyitem-api.herokuapp.com/items';

  function generateImageLink(thing) {
    return faker.image.unsplash.objects(640, 480, thing);
  }

  useEffect(() => {
    if (!items[0]) actions.fetchAPIcall(url, 'get', {});
  }, []);

  useEffect(() => actions.fetchAPIreset(), [items]);

  useEffect(() => {
    if (fetchCall.apiData) {
      actions.setItems(fetchCall.apiData);
    }
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
              <Item
                item={item}
                link={generateImageLink(item.name)}
              />
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
};

const mapStateToProps = ({ items, itemsCall, fetchCall }) => ({ items, itemsCall, fetchCall });

function mapActionsToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...MyActions }, dispatch),
  };
}

export default connect(mapStateToProps, mapActionsToProps)(Items);
