import React from 'react';
import PropTypes from 'prop-types';

import Todo from './Todo';
import './style.scss';

function List({ tasks }) {
  // eslint-disable-next-line arrow-body-style
  const todoList = tasks.map((task) => {
    // pour chaque élément JSX d'une list/tableau on doit placer
    // une prop key qui devra avoir une valeur unique
    // attention: ne pas utiliser l'index courant fourni par map
    return (
      <Todo
        key={task.id}
        label={task.label}
        done={task.done}
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
