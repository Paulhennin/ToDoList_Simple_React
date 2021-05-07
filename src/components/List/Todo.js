import React from 'react';
import PropTypes from 'prop-types';

function Todo({ label, done, onClickTodo, id, }) {
  const classnames = done ? 'list-item list-item--done' : 'list-item';
  const handleOnChange = () => {
    console.log('click checkbox');
    onClickTodo(id);
  };
  return (
    <li>
      <label className={classnames}>
        <input
          type="checkbox"
          checked={done}
          onChange={handleOnChange}
        />
        {label}
      </label>
    </li>
  );
}

Todo.propTypes = {
  label: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
  onClickTodo: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,

};

export default Todo;
