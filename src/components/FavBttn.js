/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import * as MyActions from '../actions';

const FavBttn = props => {
  const {
    currItmID, favList, fetchCall, actions, user, orange, rRender,
  } = props;
  const [isFav, setIsFav] = useState(false);
  const [clicked, setClicked] = useState(false);

  const favAddDelLink = `https://findmyitem-api.herokuapp.com/users/${user.id}/favorites_lists/`;

  const checkIfFav = () => (favList[0]
    ? favList.map(itm => itm.item_id).includes(currItmID)
    : false);

  const getFavListId = () => favList.find(i => i.item_id === currItmID).id;

  const isAPIclear = obj => !obj.loading && !obj.apiData && !obj.error && !obj.wholeResp;

  const like = () => {
    if (isAPIclear(fetchCall)) {
      actions.fetchAPIcall(favAddDelLink, 'post', { item_id: currItmID });
      setClicked(true);
    } else actions.fetchAPIreset();
  };

  const unlike = () => {
    if (isAPIclear(fetchCall)) {
      actions.fetchAPIcall(favAddDelLink.concat(`${getFavListId()}`),
        'delete',
        { data: { favorites_list: { item_id: currItmID } } });
      setClicked(true);
    } else actions.fetchAPIreset();
  };

  useEffect(() => actions.fetchAPIreset(), []);

  useEffect(() => {
    if (fetchCall.wholeResp) {
      if (fetchCall.wholeResp.status === 201 || fetchCall.wholeResp.status === 204) {
        actions.fetchAPIreset();
      }
      if (fetchCall.wholeResp.status === 200 && clicked) {
        actions.setFavList(fetchCall.wholeResp.data);
        actions.fetchAPIreset();
        setClicked(false);
      }
    }
    if (clicked && isAPIclear(fetchCall)) {
      actions.fetchAPIcall(favAddDelLink, 'get');
    }
  }, [fetchCall]);

  useEffect(() => setIsFav(checkIfFav()), [currItmID, favList, fetchCall]);

  return (
    <>
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
                  className="to-unlike lk"
                  type="button"
                  onClick={unlike}
                >
                  &#9829;
                </button>
              )
              : (
                <button
                  className="to-like lk"
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
  rRender: () => {},
};

FavBttn.propTypes = {
  currItmID: PropTypes.number,
  favList: PropTypes.arrayOf(PropTypes.any).isRequired,
  fetchCall: PropTypes.objectOf(PropTypes.any).isRequired,
  user: PropTypes.objectOf(PropTypes.any).isRequired,
  actions: PropTypes.objectOf(PropTypes.any).isRequired,
  orange: PropTypes.bool,
  rRender: PropTypes.func,
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
