import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import Navbar from '../containers/Navbar';
import Loader from '../components/Loader';
import GetItemsNFavlist from '../components/GetItemsNFavlist';
import * as MyActions from '../actions';
import { toDateTime } from '../utils';

const UserInfo = props => {
  const {
    actions, items, fetchCall, user, favList,
  } = props;
  const [apiFlag, setApiFlag] = useState({ itm: false, fvl: false });
  const { history } = useHistory();

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
      <GetItemsNFavlist />
      <Navbar icon="☜" onClick={onClick} rightLnk={rightLnk} fvlReady={apiFlag.fvl} title="User Info" />
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
                <span className="user-detail">{toDateTime(user[key])}</span>
              </li>
            ))
              : 'Waiting or Not Found'
          }
        </ul>
        {fetchCall.loading || !items[0] || favList[0] === null
          ? (
            <div className="btm-link h" style={{ padding: '5px' }}><Loader style={{ marginTop: '0px', color: '#eee', mt: '-15px' }} op="op" /></div>
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
