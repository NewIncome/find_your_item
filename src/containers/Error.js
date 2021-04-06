import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { fetchAPIreset } from '../actions';

const Error = props => {
  const { fetchCall, fetchAPIreset } = props;;

  const onClick = event => {
    event.preventDefault();
    fetchAPIreset();
    console.log('HISTORY');
    console.log(history);
    if (history !== undefined) history.back();
    else history.push('/');
  };

  return (
    <>
      <div className="error-message">
        <h3>Error Message</h3>
        {fetchCall.error || ''}
      </div>
    </>
  );
};

Error.propTypes = {
  fetchCall: PropTypes.objectOf(PropTypes.any).isRequired,
  fetchAPIreset: PropTypes.objectOf(PropTypes.any).isRequired,
};

const mapStateToProps = fetchCall => fetchCall;

const mapDispatchToProps = dispatch => ({
  fetchAPIreset: () => dispatch(fetchAPIreset()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Error);
