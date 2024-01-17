import { useState } from 'react';
import { nanoid } from 'nanoid';
import css from './Form.module.css';

export default function PhonebookForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  let nameId = nanoid();
  let numberId = nanoid();

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ name, number });

    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <ul className={css.formList}>
        <li className={css.list}>
          <label className={css.label} htmlFor={nameId}>
            Name
            <input
              className={css.input}
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              id={nameId}
            />
          </label>
        </li>
        <li className={css.list}>
          <label className={css.label} htmlFor={numberId}>
            Number
            <input
              className={css.input}
              type="tel"
              name="number"
              value={number}
              onChange={handleChange}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              id={numberId}
            />
          </label>
        </li>
      </ul>
      <button className={css.contactBtn} type="submit">
        Add contact
      </button>
    </form>
  );
}
