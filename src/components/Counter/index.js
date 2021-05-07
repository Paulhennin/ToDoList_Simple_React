import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

function Counter({ count }) {
  return (
    <p className="counter">{count} tâches en cours</p>
  );
}

Counter.propTypes = {
  count: PropTypes.number.isRequired,
}

export default Counter;
