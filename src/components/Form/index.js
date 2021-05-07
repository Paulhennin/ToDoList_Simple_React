import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

function Form({ onFormSubmit, inputValue, onChangeInputValue }) {
  const handleOnSubmit = (event) => {
    event.preventDefault();
    onFormSubmit();
  };

  const handleOnChange = (event) => {
    onChangeInputValue(event.target.value);
  };

  return (
    <form className="form" onSubmit={handleOnSubmit}>
      <input
        type="text"
        className="form-item"
        placeholder="Ajouter une tâche"
        value={inputValue}
        onChange={handleOnChange}
      />
    </form>
  );
}

Form.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
  onChangeInputValue: PropTypes.func.isRequired,

};

export default Form;
