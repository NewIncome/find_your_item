import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Item from '../components/Item';

const ListFilter = props => {
  const { items, favList } = props;

  const favItemsList = items.filter(itm => favList.includes(itm.id));

  return (
    <div className="favorite-items">
      {favList.length > 0
        ? favItemsList.map(item => (
          <Item item={item} key={item.name.concat(item.id)} />
        ))
        : (
          <div className="announce">
            You haven&apos;t added any Items to your favorites list
            <br />
            If you wish, please go ahead and check out
            <br />
            the list of Items and add some
            <Link to="/items">goto Items</Link>
          </div>
        )}
    </div>
  );
};

ListFilter.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
  favList: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default ListFilter;
