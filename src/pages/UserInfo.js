/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import Navbar from '../components/Navbar';
import Loader from '../components/Loader';
import * as MyActions from '../actions';

const UserInfo = props => {
  const {
    actions, items, fetchCall, user, favList,
  } = props;
  const [apiFlag, setApiFlag] = useState({ itm: false, fvl: false });
  const { history } = useHistory();

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

  const onClick = () => {
    actions.setUserInfo({});
    actions.setFavList([null]);
  };

  const rightLnk = () => {
    history.push('/favlist');
  };

  return (
    <>
      <Navbar icon="☜" onClick={onClick} rightLnk={rightLnk} fvlReady={apiFlag.fvl} />
      <section className="userInfo-section" id="User">
        <h2 className="user-h h">
          {user.name.toUpperCase().concat("'s ")}
          info
        </h2>
        <ul className="user-ul p">
          {
            user ? Object.keys(user).map(key => (
              <li key={key} className="user-li">
                {key.toUpperCase()}
                :
                <span className="user-detail">{user[key]}</span>
              </li>
            ))
              : 'Waiting or Not Found'
          }
        </ul>
        {fetchCall.loading || !items[0] || favList[0] === null
          ? (
            <>
              <Loader />
              <div className="btm-link h">Item&apos;s List</div>
            </>
          )
          : (
            <Link to="/items" className="btm-link h">Item&apos;s List</Link>
          )}
      </section>
    </>
  );
};

UserInfo.propTypes = {
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

export default connect(mapStateToProps, mapActionsToProps)(UserInfo);
