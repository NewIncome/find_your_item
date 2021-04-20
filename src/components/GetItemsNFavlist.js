import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import * as MyActions from '../actions';

const GetItemsNFavlist = props => {
  const {
    actions, items, fetchCall, favList, user,
  } = props;
  const [apiFlag, setApiFlag] = useState({ itm: false, fvl: false });

  const itemsUrl = 'https://findmyitem-api.herokuapp.com/items';
  const favListUrl = `https://findmyitem-api.herokuapp.com/users/${user.id}/favorites_lists`;

  useEffect(() => {
    if (!items[0]) actions.fetchAPIcall(itemsUrl, 'get', {});
  }, []);

  useEffect(() => {
    if (!fetchCall.apiData && items[0]) {
      actions.fetchAPIcall(favListUrl, 'get', {});
      setApiFlag({ itm: true, fvl: false });
    }
  }, [items]);

  useEffect(() => {
    if (fetchCall.apiData && !items[0] && !favList[0]) {
      actions.setItems(fetchCall.apiData);
      actions.fetchAPIreset();
    }
    if (apiFlag.itm && fetchCall.apiData && !favList[0]) actions.setFavList(fetchCall.apiData);
  });

  useEffect(() => {
    if (favList[0]) {
      actions.fetchAPIreset();
      setApiFlag({ itm: true, fvl: true });
    }
  }, [favList]);

  return (<> </>);
};

GetItemsNFavlist.propTypes = {
  user: PropTypes.objectOf(PropTypes.any).isRequired,
  actions: PropTypes.objectOf(PropTypes.any).isRequired,
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
  favList: PropTypes.arrayOf(PropTypes.any).isRequired,
  fetchCall: PropTypes.objectOf(PropTypes.any).isRequired,
};

const mapStateToProps = ({
  user, items, fetchCall, favList,
}) => ({
  user, items, fetchCall, favList,
});

function mapActionsToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...MyActions }, dispatch),
  };
}

export default connect(mapStateToProps, mapActionsToProps)(GetItemsNFavlist);
