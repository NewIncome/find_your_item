import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ImgSlider from '../components/ImgSlider';

const ListFilter = props => {
  const { items, favList, getCurItmID } = props;

  const favItemsList = favList.map(itmId => items.find(itm => itm.id === itmId));

  return (
    <div className="favorite-items">
      {favList.length > 0
        ? <ImgSlider items={favItemsList} getCurItmID={getCurItmID} />
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
  getCurItmID: PropTypes.func.isRequired,
};

export default ListFilter;
