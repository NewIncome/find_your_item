import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Navbar from '../components/Navbar';
import Loader from '../components/Loader';
import ListFilter from '../containers/ListFilter';

const FavList = props => {
  const {
    items, fetchCall, favList,
  } = props;

  return (
    <>
      <Navbar backDir="/user" title="Favorites List" />
      <section className="section" id="FavList">
        {fetchCall.loading
          ? <Loader />
          : <ListFilter items={items} favList={favList[0] ? favList.map(itm => itm.id) : []} />}
      </section>
    </>
  );
};

FavList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
  favList: PropTypes.arrayOf(PropTypes.any).isRequired,
  fetchCall: PropTypes.objectOf(PropTypes.any).isRequired,
};

const mapStateToProps = ({
  favList, items, fetchCall,
}) => ({
  favList, items, fetchCall,
});

export default connect(mapStateToProps)(FavList);
