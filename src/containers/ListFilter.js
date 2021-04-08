import React from 'react';
import PropTypes from 'prop-types';
// import Item from '../components/Item';

const ListFilter = props => {
  const { items, favList } = props;
  console.log(items, favList);
  // const favItemsList = items.filter(itm => favList.find);

  return (
    <div className="favorite-items">
      <h3 className="fav-title">Favorites List</h3>
      {/* {fetchCall.length > 0
        ? favItemsList.map(item => {
            <Item item={item} />
          })
        : <div className="announce">
            You haven't added any Items to your favorites list

            If you wish, please go ahead and<br />
            check out the list of Items and add some
            <button>goto Items</button>
          </div>} */}
    </div>
  );
};

ListFilter.propTypes = {
  items: PropTypes.objectOf(PropTypes.any).isRequired,
  favList: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default ListFilter;
