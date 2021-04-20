/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import GetItemsNFavlist from './GetItemsNFavlist';
import * as MyActions from '../actions';

const FavBttn = props => {
  const {
    currItmID, favList, fetchCall, user,
  } = props;
  const [isFav, setIsFav] = useState(false);

  const favAddLink = `https://findmyitem-api.herokuapp.com/users/${user.id}/favorites_lists`; // POST
  const favDelLink = listItmId => `https://findmyitem-api.herokuapp.com/users/${user.id}/favorites_lists/${listItmId}`; // DELETE

  const checkIfFav = () => (favList[0]
    ? favList.map(itm => itm.item_id).includes(currItmID)
    : false);

  useEffect(() => {
    setIsFav(checkIfFav());
    // console.log('At FavBttn, isFav & checkIfFav & favList');
    // console.log(isFav);
    // console.log(checkIfFav());
    // console.log(currItmID);
    // console.log(favList);
  }, [currItmID]);

  const like = () => {
  };

  const unlike = () => {
  };

  /* Mechanics
  1- if exists in FavList display 'to-unlike' Bttn
  2- else display 'to-like'
  3- on 'like' Click => Make FavList ADD apiCall
  4- when Done, update favList
                edit ISFAV
  5- on 'unlike' Click => MAke FavList DELETE apiCall
  6- when Done, edit ISFAV
  7- render all on ISFAV change
  */

  return (
    <>
      <GetItemsNFavlist />
      {isFav
        ? (
          <buttton
            className="to-unlike"
            type="button"
            onClick={unlike}
          >
            &#9829;
          </buttton>
        )
        : (
          <buttton
            className="to-like"
            type="button"
            onClick={like}
          >
            &#9825;
          </buttton>
        )}
    </>
  );
};

FavBttn.defaultProps = {
  currItmID: 0,
};

FavBttn.propTypes = {
  currItmID: PropTypes.number,
  favList: PropTypes.arrayOf(PropTypes.any).isRequired,
  fetchCall: PropTypes.objectOf(PropTypes.any).isRequired,
  user: PropTypes.objectOf(PropTypes.any).isRequired,
};

const mapStateToProps = ({
  favList, fetchCall, user,
}) => ({
  favList, fetchCall, user,
});

function mapActionsToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...MyActions }, dispatch),
  };
}

export default connect(mapStateToProps, mapActionsToProps)(FavBttn);
