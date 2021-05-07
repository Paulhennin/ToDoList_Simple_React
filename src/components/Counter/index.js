import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

function Counter({ count }) {
  let message = "Aucune tâche en cours";

  if (count === 1) {
    message = '1 tâche en cours';
  }
  else if (count > 1) {
    message = `${count} tâches en cours`;
  }

  return (
    <p className="counter">{message}</p>
  );
}

Counter.propTypes = {
  count: PropTypes.number.isRequired,
}

export default Counter;
