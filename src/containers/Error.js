import React from 'react';
import PropTypes from 'prop-types';

const Error = props => {
  const { errMessage } = props;

  return (
    <div className="error-message">
      Error Message -
      {errMessage || ''}
    </div>
  );
};

Error.propTypes = {
  errMessage: PropTypes.string.isRequired,
};

export default Error;
