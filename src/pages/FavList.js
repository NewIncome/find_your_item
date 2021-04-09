import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Navbar from '../components/Navbar';
import Loader from '../components/Loader';
import ListFilter from '../containers/ListFilter';

const FavList = props => {
  const {
    items, fetchCall, user, favList,
  } = props;

  return (
    <>
      <Navbar backDir="/user" />
      <section className="section" id="FavList">
        <h2>
          {user.name.toUpperCase()}
          &apos;s Favorites List
        </h2>
        {fetchCall.loading
          ? <Loader />
          : <ListFilter items={items} favList={favList[0] ? favList.map(itm => itm.id) : []} />}
      </section>
    </>
  );
};

FavList.propTypes = {
  user: PropTypes.objectOf(PropTypes.any).isRequired,
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
  favList: PropTypes.arrayOf(PropTypes.any).isRequired,
  fetchCall: PropTypes.objectOf(PropTypes.any).isRequired,
};

const mapStateToProps = ({
  favList, user, items, fetchCall,
}) => ({
  favList, user, items, fetchCall,
});

export default connect(mapStateToProps)(FavList);
