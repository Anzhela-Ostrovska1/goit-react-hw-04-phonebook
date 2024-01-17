import React from 'react';
import css from './Form.module.css';

const Filter = ({ value, onChange }) => (
  <label className={css.filterLabel}>
    Find contacts by name{' '}
    <input
      className={css.filterInput}
      type="text"
      value={value}
      onChange={onChange}
    />
  </label>
);

export default Filter;
