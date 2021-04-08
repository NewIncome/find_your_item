/* eslint-disable no-unused-vars */
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import faker from 'faker';
import PropTypes from 'prop-types';
import Item from '../components/Item';
import Navbar from '../components/Navbar';

const Items = props => {
  const { items } = props;

  function generateImageLink(thing) {
    return faker.image.unsplash.objects(640, 480, thing);
  }

  return (
    <>
      <Navbar backDir="/user" />
      <section className="section" id="Items">
        <h2>Items List</h2>
        <Link to="/user">Go back to the User</Link>
        {items.map(item => (
          <Link to={`/item/${item.id}`} key={`${item.id}-${item.name}`}>
            <Item
              item={{ name: item.name, description: item.description }}
              link={generateImageLink(item.name)}
            />
          </Link>
        ))}
      </section>
    </>
  );
};

Items.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
};

const mapStateToProps = items => items;

export default connect(mapStateToProps)(Items);
