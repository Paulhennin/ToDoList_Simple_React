import React from 'react';
import PropTypes from 'prop-types';

import Todo from './Todo';
import './style.scss';

function List({ tasks }) {
  // eslint-disable-next-line arrow-body-style
  const todoList = tasks.map((task) => {
    return (
      <Todo
        key={task.id}
        {...task}
      />
    );
  });

  return (
    <ul className="list">
      {todoList}
    </ul>
  );
}

List.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
  })).isRequired,
};

export default List;
