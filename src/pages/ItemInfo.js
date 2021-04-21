import React from 'react';
import { connect } from 'react-redux';
import { useParams, Redirect, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import Navbar from '../containers/Navbar';
import Item from '../components/Item';
import FavBttn from '../components/FavBttn';

const ItemInfo = props => {
  const { items } = props;
  const { id } = useParams();
  const history = useHistory();

  const item = items.find(itm => itm.id === Number(id)) || null;

  const onClick = () => history.goBack();

  const rightBtnClick = () => {};

  return (
    <>
      <Navbar error="yup" onClick={onClick} title={item.name} rbc={rightBtnClick} />
      <div className="Item-info">
        {item ? <Item item={item} /> : <Redirect to="/error" />}
      </div>
      <FavBttn currItmID={item.id} orange />
    </>
  );
};

ItemInfo.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
};

const mapStateToProps = items => items;

export default connect(mapStateToProps)(ItemInfo);
