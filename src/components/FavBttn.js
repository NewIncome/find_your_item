import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import * as MyActions from '../actions';

const FavBttn = props => {
  const { isFav, items, favList } = props;

  const like = () => {}

  return (
    <>
    {isFav
      ? <buttton
        className=""
        type="button"
        onClick={unlike}
      >
        &#9829;
      </buttton>
      : <buttton
          className=""
          type="button"
          onClick={like}
        >
          &#9825;
        </buttton>
    }
    </>
  );
};

const mapStateToProps = ({ items, favList, fetchCall }) => ({ username, user, fetchCall });

function mapActionsToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...MyActions }, dispatch),
  };
}

export default connect(mapStateToProps, mapActionsToProps)(FavBttn);
