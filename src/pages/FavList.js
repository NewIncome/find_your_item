import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import Navbar from '../components/Navbar';
import Loader from '../components/Loader';
import ListFilter from '../containers/ListFilter';
import * as MyActions from '../actions';

const FavList = props => {
  const {
    actions, favList, fetchCall, user, items,
  } = props;
  const url = `https://findmyitem-api.herokuapp.com/users/${user.id}/favorites_lists`;

  useEffect(() => {
    if (!favList[0]) actions.fetchAPIcall(url, 'get', {});
  }, []);

  useEffect(() => {
    if (fetchCall.apiData) {
      actions.setFavList(fetchCall.apiData);
    }
  });

  useEffect(() => {
    // get the current list of Items

    // actions.fetchAPIreset()
  }, [favList]);

  return (
    <>
      <Navbar backDir="/user" />
      <section className="section" id="FavList">
        <h2>This User&apos;s Favorite List</h2>
        {fetchCall.loading
          ? <Loader />
          : <ListFilter items={items} favList={favList} />}
      </section>
    </>
  );
};

FavList.propTypes = {
  actions: PropTypes.objectOf(PropTypes.any).isRequired,
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

function mapActionsToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...MyActions }, dispatch),
  };
}

export default connect(mapStateToProps, mapActionsToProps)(FavList);
