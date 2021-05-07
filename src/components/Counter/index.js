import React from 'react';

import './style.scss';

function Counter() {
  return (
    <form className="form">
      <input
        type="text"
        className="form-item"
        placeholder="Ajouter une tâche"
      />
    </form>
  );
}

export default Counter;
