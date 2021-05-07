import React from 'react';

function Todo(label, done) {
  const classnames = done ? 'list-item list-item--done' : 'list-item';

  return (
    <li>
      <label className={classnames}>
        <input type="checkbox" checked />
        {label}
      </label>
    </li>
  );
}

export default Todo;
