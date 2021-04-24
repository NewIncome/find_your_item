import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Navbar from '../containers/Navbar';
import ListFilter from '../containers/ListFilter';

const FavList = props => {
  const {
    items, favList,
  } = props;
  const [curItemID, setCurItemID] = useState();

  useEffect(() => {}, [favList, curItemID]);

  const getCurItmID = itm => setCurItemID(itm);

  return (
    <>
      <Navbar
        backDir="/user"
        title="Favorites
        List"
        itmId={curItemID}
        emptyFvl={!favList[0]}
      />
      <section className="section" id="FavList">
        <ListFilter
          items={items}
          favList={favList[0] ? favList.map(favLi => favLi.item_id) : []}
          getCurItmID={getCurItmID}
        />
      </section>
    </>
  );
};

FavList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
  favList: PropTypes.arrayOf(PropTypes.any).isRequired,
};

const mapStateToProps = ({
  favList, items,
}) => ({
  favList, items,
});

export default connect(mapStateToProps)(FavList);
