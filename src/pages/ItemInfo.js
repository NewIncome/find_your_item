import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useParams, Redirect, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import Navbar from '../containers/Navbar';
import Item from '../components/Item';
import FavBttn from '../components/FavBttn';

const ItemInfo = props => {
  const { items, favList } = props;
  const { id } = useParams();
  const history = useHistory();
  const [reRender, setReRender] = useState(false);

  const item = items.find(itm => itm.id === Number(id)) || null;

  const onClick = () => history.goBack();

  const rightBtnClick = () => {};

  const torRender = () => setReRender(!reRender);

  useEffect(() => {}, [favList, reRender]);

  return (
    <>
      <Navbar
        error="yup"
        onClick={onClick}
        title={item.name}
        rbc={rightBtnClick}
        rRender={torRender}
      />
      <div className="Item-info">
        {item ? <Item item={item} /> : <Redirect to="/error" />}
      </div>
      <FavBttn
        currItmID={item.id}
        orange
        rRender={torRender}
      />
    </>
  );
};

ItemInfo.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
  favList: PropTypes.arrayOf(PropTypes.any).isRequired,
};

const mapStateToProps = ({ items, favList }) => ({ items, favList });

export default connect(mapStateToProps)(ItemInfo);
