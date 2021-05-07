import React from 'react';
import PropTypes from 'prop-types';

function Todo({ label, done }) {
  const classnames = done ? 'list-item list-item--done' : 'list-item';

  return (
    <li>
      <label className={classnames}>
        <input type="checkbox" checked={done} />
        {label}
      </label>
    </li>
  );
}

Todo.propTypes = {
  label: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
};

export default Todo;
