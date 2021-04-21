/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import GetItemsNFavlist from './GetItemsNFavlist';
import * as MyActions from '../actions';

const FavBttn = props => {
  const {
    currItmID, favList, fetchCall, actions, user, orange,
  } = props;
  const [isFav, setIsFav] = useState(false);

  const favAddDelLink = `https://findmyitem-api.herokuapp.com/users/${user.id}/favorites_lists`;

  const checkIfFav = () => (favList[0]
    ? favList.map(itm => itm.item_id).includes(currItmID)
    : false);

  const like = () => {
    // make API call
    actions.fetchAPIcall(favAddDelLink, 'POST', { item_id: currItmID });
    // wait until API call is done
    // when done, I get the new list-element back ; response 201
    // edit ISFAV... & FAVLIST should be updated (Check!)
  };

  const unlike = () => {
    actions.fetchAPIcall(favAddDelLink, 'DELETE', { item_id: currItmID });
    // wait until API call is done
    // when done, I get nothing ; response 204
    // edit ISFAV... & FAVLIST should be updated (Check!)
  };

  useEffect(() => actions.fetchAPIreset(), []);

  useEffect(() => {
    if (fetchCall.wholeResp) {
      if (fetchCall.wholeResp.status === '201') {
        console.log('Liked an Item');
        console.log(fetchCall);
        actions.fetchAPIreset();
        setIsFav(!isFav);
      } else if (fetchCall.wholeResp.status === '204') {
        console.log('Unliked an Item');
        console.log(fetchCall);
        actions.fetchAPIreset();
        setIsFav(!isFav);
      }
    }
  });

  useEffect(() => setIsFav(checkIfFav()), [currItmID]);

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
      {orange
        ? (
          <button
            className="btm-link h"
            style={{ padding: '30px' }}
            type="button"
            onClick={isFav ? unlike : like}
          >
            {isFav ? 'Remove from Favorites' : 'Add to Favorites'}
          </button>
        )
        : (
          <>
            {isFav
              ? (
                <button
                  className="to-unlike"
                  type="button"
                  onClick={unlike}
                >
                  &#9829;
                </button>
              )
              : (
                <button
                  className="to-like"
                  type="button"
                  onClick={like}
                >
                  &#9825;
                </button>
              )}
          </>
        )}
    </>
  );
};

FavBttn.defaultProps = {
  currItmID: 0,
  orange: false,
};

FavBttn.propTypes = {
  currItmID: PropTypes.number,
  favList: PropTypes.arrayOf(PropTypes.any).isRequired,
  fetchCall: PropTypes.objectOf(PropTypes.any).isRequired,
  user: PropTypes.objectOf(PropTypes.any).isRequired,
  actions: PropTypes.objectOf(PropTypes.any).isRequired,
  orange: PropTypes.bool,
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
