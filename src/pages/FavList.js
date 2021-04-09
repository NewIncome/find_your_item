import React from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import Navbar from '../components/Navbar';
import Loader from '../components/Loader';
import ListFilter from '../containers/ListFilter';
// import * as MyActions from '../actions';

const FavList = props => {
  const {
    items, fetchCall, user, favList,
  } = props;
  // const url = `https://findmyitem-api.herokuapp.com/users/${user.id}/favorites_lists`;

  console.log('PAGE: FAV LIST - INFO, items & favList & url');
  console.log(items);
  console.log(favList);

  // useEffect(() => {
  //   console.log(url);
  //   if (!favList[0]) actions.fetchAPIcall(url, 'get', {});
  // }, []);

  // useEffect(() => {
  //   if (fetchCall.apiData) {
  //     actions.setFavList(fetchCall.apiData);
  //     console.log('fetchCall after FAVLIST get CALL');
  //     console.log(fetchCall);
  //   }
  // });

  // useEffect(() => {
  //   console.log('PAGE: FAV LIST - INFO, FAVLIST & fetchcall');
  //   console.log(favList);
  //   console.log(fetchCall);
  //   if (!fetchCall.loading && favList[0]) {
  //     console.log('READY TO RESET fetchCall');
  //     actions.fetchAPIreset();
  //   }
  // }, [favList]);

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
        {/* : ''} */}
      </section>
    </>
  );
};

FavList.propTypes = {
  // actions: PropTypes.objectOf(PropTypes.any).isRequired,
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

// function mapActionsToProps(dispatch) {
//   return {
//     actions: bindActionCreators({ ...MyActions }, dispatch),
//   };
// }

export default connect(mapStateToProps)(FavList);
