import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Navbar from '../components/Navbar';
import ImgSlider from '../components/ImgSlider';

const Items = props => {
  const { items } = props;
  const [curItemID, setCurItemID] = useState();

  const getCurItmID = itm => setCurItemID(itm);

  useEffect(() => {}, [items, curItemID]);

  return (
    <>
      <Navbar backDir="/user" title="Item List" itmId={curItemID} />
      <section className="section" id="Items">
        <ImgSlider items={items} getCurItmID={getCurItmID} />
      </section>
    </>
  );
};

Items.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
};

const mapStateToProps = items => items;

export default connect(mapStateToProps)(Items);
